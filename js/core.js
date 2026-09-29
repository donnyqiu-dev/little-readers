/* Core: local storage, parent recordings (IndexedDB), audio, small UI helpers. */
(function () {
  const KEY = 'little-readers.v1';

  /* ---------- Progress (localStorage) ---------- */
  function emptyDb() { return { activeId: null, profiles: {}, settings: { rate: 0.8, autoRead: false, unlockAll: false, sound: true }, videos: {} }; }
  let db;
  try { db = Object.assign(emptyDb(), JSON.parse(localStorage.getItem(KEY) || '{}')); } catch (e) { db = emptyDb(); }
  db.settings = Object.assign(emptyDb().settings, db.settings);

  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(db)); } catch (e) { toast('⚠️ Tidak bisa menyimpan di browser ini.'); }
  }

  const store = {
    get db() { return db; },
    save: save,
    child: function () { return db.activeId ? db.profiles[db.activeId] : null; },
    children: function () { return Object.values(db.profiles).sort(function (a, b) { return a.created - b.created; }); },
    addChild: function (name, avatar) {
      const id = Date.now().toString(36);
      db.profiles[id] = { id: id, name: name, avatar: avatar, created: Date.now(), letters: {}, books: {}, stickers: [], sessions: {} };
      db.activeId = id;
      save();
      return db.profiles[id];
    },
    use: function (id) { db.activeId = id; save(); },
    reset: function () { db = emptyDb(); save(); },
    importJson: function (text) {
      const d = JSON.parse(text);
      if (!d || !d.profiles) throw new Error('File bukan cadangan Little Readers');
      db = Object.assign(emptyDb(), d);
      save();
    }
  };

  /* ---------- Parent recordings (IndexedDB, audio blobs) ---------- */
  let idbP = null;
  function idb() {
    if (idbP) return idbP;
    idbP = new Promise(function (resolve, reject) {
      if (!window.indexedDB) return reject(new Error('no indexedDB'));
      const req = indexedDB.open('little-readers-audio', 1);
      req.onupgradeneeded = function () { req.result.createObjectStore('sounds'); };
      req.onsuccess = function () { resolve(req.result); };
      req.onerror = function () { reject(req.error); };
    });
    return idbP;
  }
  const soundCache = {}; // letter -> object URL
  const recordings = {
    get: function (key) {
      if (soundCache[key] !== undefined) return Promise.resolve(soundCache[key]);
      return idb().then(function (d) {
        return new Promise(function (resolve) {
          const r = d.transaction('sounds').objectStore('sounds').get(key);
          r.onsuccess = function () { soundCache[key] = r.result ? URL.createObjectURL(r.result) : null; resolve(soundCache[key]); };
          r.onerror = function () { resolve(null); };
        });
      }).catch(function () { return null; });
    },
    put: function (key, blob) {
      return idb().then(function (d) {
        return new Promise(function (resolve, reject) {
          const tx = d.transaction('sounds', 'readwrite');
          tx.objectStore('sounds').put(blob, key);
          tx.oncomplete = function () { soundCache[key] = URL.createObjectURL(blob); resolve(); };
          tx.onerror = function () { reject(tx.error); };
        });
      });
    },
    remove: function (key) {
      return idb().then(function (d) {
        return new Promise(function (resolve) {
          const tx = d.transaction('sounds', 'readwrite');
          tx.objectStore('sounds').delete(key);
          tx.oncomplete = function () { soundCache[key] = null; resolve(); };
        });
      });
    },
    keys: function () {
      return idb().then(function (d) {
        return new Promise(function (resolve) {
          const r = d.transaction('sounds').objectStore('sounds').getAllKeys();
          r.onsuccess = function () { resolve(r.result || []); };
          r.onerror = function () { resolve([]); };
        });
      }).catch(function () { return []; });
    }
  };

  /* ---------- Built-in letter sounds (sounds/<letter>.wav in the repo) ---------- */
  const builtinCache = {};
  function builtinUrl(l) {
    if (builtinCache[l] !== undefined) return builtinCache[l];
    const url = 'sounds/' + l + '.wav';
    builtinCache[l] = fetch(url, { method: 'HEAD', cache: 'no-cache' })
      .then(function (r) { return r.ok ? url : null; })
      .catch(function () { return null; });
    return builtinCache[l];
  }
  /* Own recording on this device wins; otherwise the shared built-in sound. */
  function letterUrl(l) {
    return recordings.get('letter-' + l).then(function (own) { return own || builtinUrl(l); });
  }
  function letterSource(l) {
    return recordings.get('letter-' + l).then(function (own) {
      if (own) return 'own';
      return builtinUrl(l).then(function (b) { return b ? 'builtin' : null; });
    });
  }

  /* ---------- Clean up a recording: mono WAV, silence trimmed, volume normalised ---------- */
  function toCleanWav(blob) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return Promise.resolve(blob);
    const ctx = new AC();
    return blob.arrayBuffer()
      .then(function (buf) { return new Promise(function (res, rej) { ctx.decodeAudioData(buf, res, rej); }); })
      .then(function (audio) {
        const rate = audio.sampleRate;
        const data = audio.getChannelData(0);
        let peak = 0;
        for (let i = 0; i < data.length; i++) peak = Math.max(peak, Math.abs(data[i]));
        if (peak < 0.01) throw new Error('silent');
        const th = peak * 0.08;
        let a = 0, b = data.length - 1;
        while (a < b && Math.abs(data[a]) < th) a++;
        while (b > a && Math.abs(data[b]) < th) b--;
        const pad = Math.floor(rate * 0.06);
        a = Math.max(0, a - pad); b = Math.min(data.length - 1, b + pad);
        // resample to 22.05 kHz to keep files small
        const outRate = 22050, step = rate / outRate;
        const n = Math.floor((b - a) / step);
        const pcm = new Int16Array(n);
        const gain = 0.9 / peak;
        const fade = Math.floor(outRate * 0.01);
        for (let i = 0; i < n; i++) {
          let v = data[a + Math.floor(i * step)] * gain;
          if (i < fade) v *= i / fade; else if (i > n - fade) v *= (n - i) / fade;
          pcm[i] = Math.max(-1, Math.min(1, v)) * 32767;
        }
        ctx.close && ctx.close();
        return wavBlob(pcm, outRate);
      })
      .catch(function (e) { ctx.close && ctx.close(); if (e && e.message === 'silent') throw e; return blob; });
  }
  function wavBlob(pcm, rate) {
    const buf = new ArrayBuffer(44 + pcm.length * 2);
    const v = new DataView(buf);
    function str(o, s) { for (let i = 0; i < s.length; i++) v.setUint8(o + i, s.charCodeAt(i)); }
    str(0, 'RIFF'); v.setUint32(4, 36 + pcm.length * 2, true); str(8, 'WAVE'); str(12, 'fmt ');
    v.setUint32(16, 16, true); v.setUint16(20, 1, true); v.setUint16(22, 1, true); v.setUint32(24, rate, true);
    v.setUint32(28, rate * 2, true); v.setUint16(32, 2, true); v.setUint16(34, 16, true); str(36, 'data'); v.setUint32(40, pcm.length * 2, true);
    new Int16Array(buf, 44).set(pcm);
    return new Blob([buf], { type: 'audio/wav' });
  }

  /* ---------- Tiny ZIP writer (no compression) for exporting recordings ---------- */
  const CRC = (function () { const t = new Uint32Array(256); for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; } return t; })();
  function crc32(u8) { let c = 0xFFFFFFFF; for (let i = 0; i < u8.length; i++) c = CRC[(c ^ u8[i]) & 0xFF] ^ (c >>> 8); return (c ^ 0xFFFFFFFF) >>> 0; }
  function zip(files) { // files: [{name, data: Uint8Array}]
    const parts = [], central = [];
    let offset = 0;
    files.forEach(function (f) {
      const name = new TextEncoder().encode(f.name), crc = crc32(f.data), size = f.data.length;
      const h = new DataView(new ArrayBuffer(30));
      h.setUint32(0, 0x04034b50, true); h.setUint16(4, 20, true); h.setUint32(14, crc, true); h.setUint32(18, size, true); h.setUint32(22, size, true); h.setUint16(26, name.length, true);
      parts.push(new Uint8Array(h.buffer), name, f.data);
      const c = new DataView(new ArrayBuffer(46));
      c.setUint32(0, 0x02014b50, true); c.setUint16(4, 20, true); c.setUint16(6, 20, true); c.setUint32(16, crc, true); c.setUint32(20, size, true); c.setUint32(24, size, true); c.setUint16(28, name.length, true); c.setUint32(42, offset, true);
      central.push(new Uint8Array(c.buffer), name);
      offset += 30 + name.length + size;
    });
    const cdSize = central.reduce(function (s, p) { return s + p.length; }, 0);
    const e = new DataView(new ArrayBuffer(22));
    e.setUint32(0, 0x06054b50, true); e.setUint16(8, files.length, true); e.setUint16(10, files.length, true); e.setUint32(12, cdSize, true); e.setUint32(16, offset, true);
    return new Blob(parts.concat(central, [new Uint8Array(e.buffer)]), { type: 'application/zip' });
  }

  /* ---------- Audio ---------- */
  let voices = [];
  function voiceScore(v) {
    if (!/^en/i.test(v.lang)) return -1;
    let s = 0;
    if (/natural|neural|online/i.test(v.name)) s += 60;
    if (/enhanced|premium|siri/i.test(v.name)) s += 50;
    if (/^Google (US|UK) English/i.test(v.name)) s += 40;
    if (/Samantha|Ava|Allison|Susan|Zoe|Karen|Serena|Moira|Tessa/i.test(v.name)) s += 30;
    if (/espeak|compact|Zira|David|Mark|Fred|Albert/i.test(v.name)) s -= 40;
    return s;
  }
  function loadVoices() {
    if (!('speechSynthesis' in window)) return;
    voices = speechSynthesis.getVoices().filter(function (v) { return /^en/i.test(v.lang); })
      .sort(function (a, b) { return voiceScore(b) - voiceScore(a); });
  }
  if ('speechSynthesis' in window) { loadVoices(); speechSynthesis.addEventListener('voiceschanged', loadVoices); }

  let playing = null; // current <audio>
  let token = 0;
  function stop() {
    token++;
    if (playing) { try { playing.pause(); } catch (e) { /* ignore */ } playing = null; }
    if ('speechSynthesis' in window) speechSynthesis.cancel();
  }

  function speak(text, opts) {
    opts = opts || {};
    return new Promise(function (resolve) {
      if (!('speechSynthesis' in window)) return resolve();
      const u = new SpeechSynthesisUtterance(text);
      const v = voices[0];
      if (v) { u.voice = v; u.lang = v.lang; } else u.lang = 'en-US';
      u.rate = (opts.rate || db.settings.rate) * (v && /^Google/i.test(v.name) ? 0.92 : 1);
      u.pitch = 1.05;
      if (opts.onboundary) u.onboundary = opts.onboundary;
      u.onend = function () { resolve(); };
      u.onerror = function () { resolve(); };
      speechSynthesis.speak(u);
    });
  }

  function playUrl(url, rate) {
    return new Promise(function (resolve) {
      const a = new Audio(url);
      playing = a;
      if (rate) { a.playbackRate = rate; a.preservesPitch = true; }
      a.onended = function () { resolve(true); };
      a.onerror = function () { resolve(false); };
      a.play().catch(function () { resolve(false); });
    });
  }

  /* Real human recordings of whole words from the free dictionary API (Wiktionary audio). */
  const WKEY = 'little-readers.wordaudio';
  let wcache = {};
  try { wcache = JSON.parse(localStorage.getItem(WKEY) || '{}'); } catch (e) { wcache = {}; }
  function wordUrl(w) {
    w = w.toLowerCase();
    if (wcache[w] !== undefined) return Promise.resolve(wcache[w] || null);
    return fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + encodeURIComponent(w))
      .then(function (r) { if (r.status === 404) return []; if (!r.ok) throw new Error(); return r.json(); })
      .then(function (data) {
        const urls = [];
        (Array.isArray(data) ? data : []).forEach(function (e) { (e.phonetics || []).forEach(function (p) { if (p.audio) urls.push(p.audio); }); });
        const u = urls.find(function (x) { return /-us\.mp3$/.test(x); }) || urls.find(function (x) { return /-(uk|au)\.mp3$/.test(x); }) || urls[0] || '';
        wcache[w] = u;
        try { localStorage.setItem(WKEY, JSON.stringify(wcache)); } catch (e) { /* optional */ }
        return u || null;
      }).catch(function () { return null; });
  }

  const audio = {
    stop: stop,
    speak: function (text, opts) { stop(); return speak(text, opts); },
    /* A letter sound: own recording, else the built-in one, else (fallback) the key word said slowly. */
    letter: function (l) {
      stop();
      const my = token;
      const L = LR.LETTERS.find(function (x) { return x.l === l; });
      return letterUrl(l).then(function (url) {
        if (my !== token) return;
        if (url) return playUrl(url);
        return speak(L ? L.key : l, { rate: 0.7 });
      });
    },
    hasLetter: function (l) { return letterUrl(l).then(function (u) { return !!u; }); },
    /* A whole word: human recording if available, else TTS. */
    word: function (w) {
      stop();
      const my = token;
      const race = new Promise(function (r) { setTimeout(function () { r(null); }, 1200); });
      return Promise.race([wordUrl(w), race]).then(function (url) {
        if (my !== token) return;
        if (url) return playUrl(url, 0.85).then(function (ok) { if (!ok && my === token) return speak(w, { rate: 0.7 }); });
        return speak(w, { rate: 0.7 });
      });
    },
    /* Sound out a word letter by letter, then say it whole (blending). */
    blend: function (w, onLetter) {
      stop();
      const my = token;
      const letters = w.split('');
      let chain = Promise.resolve();
      letters.forEach(function (ch, i) {
        chain = chain.then(function () {
          if (my !== token) return;
          onLetter && onLetter(i);
          return letterUrl(ch).then(function (url) {
            if (my !== token) return;
            // Without a recording stay silent: TTS would say the letter NAME ("ess"), not its sound.
            return url ? playUrl(url) : wait(550);
          }).then(function () { return wait(250); });
        });
      });
      return chain.then(function () {
        if (my !== token) return;
        onLetter && onLetter(-1);
        return audio.wordNoStop(w);
      });
    },
    wordNoStop: function (w) {
      const race = new Promise(function (r) { setTimeout(function () { r(null); }, 1200); });
      return Promise.race([wordUrl(w), race]).then(function (url) {
        return url ? playUrl(url, 0.85) : speak(w, { rate: 0.7 });
      });
    },
    preload: function (words) { words.forEach(function (w, i) { setTimeout(function () { wordUrl(w); }, i * 120); }); }
  };

  function wait(ms) { return new Promise(function (r) { setTimeout(r, ms); }); }

  /* ---------- Sound effects ---------- */
  let actx = null;
  function beep(freqs, dur, type) {
    if (!db.settings.sound) return;
    try {
      actx = actx || new (window.AudioContext || window.webkitAudioContext)();
      const t0 = actx.currentTime;
      freqs.forEach(function (f, i) {
        const o = actx.createOscillator(), g = actx.createGain();
        o.type = type || 'sine'; o.frequency.value = f;
        const st = t0 + i * dur;
        g.gain.setValueAtTime(0.0001, st);
        g.gain.exponentialRampToValueAtTime(0.25, st + 0.02);
        g.gain.exponentialRampToValueAtTime(0.0001, st + dur);
        o.connect(g); g.connect(actx.destination); o.start(st); o.stop(st + dur + 0.02);
      });
    } catch (e) { /* no audio */ }
  }
  const sfx = {
    yes: function () { beep([660, 880, 1100], 0.1); },
    no: function () { beep([300, 250], 0.15, 'triangle'); },
    pop: function () { beep([520], 0.07); },
    win: function () { beep([523, 659, 784, 1047, 1319], 0.12); }
  };

  /* ---------- UI helpers ---------- */
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', '\'': '&#39;' }[c]; }); }
  function $(s, r) { return (r || document).querySelector(s); }
  function $all(s, r) { return Array.from((r || document).querySelectorAll(s)); }
  function toast(msg, ms) {
    const el = document.createElement('div');
    el.className = 'toast'; el.innerHTML = msg;
    document.body.appendChild(el);
    setTimeout(function () { el.classList.add('out'); }, ms || 2500);
    setTimeout(function () { el.remove(); }, (ms || 2500) + 400);
  }
  function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); const t = a[i]; a[i] = a[j]; a[j] = t; } return a; }

  function confetti() {
    const c = $('#confetti'); const ctx = c.getContext('2d');
    c.width = innerWidth; c.height = innerHeight;
    const shapes = ['⭐', '🎉', '💛', '🌟', '🐾'];
    const parts = Array.from({ length: 40 }, function () {
      return { x: Math.random() * c.width, y: -30 - Math.random() * 200, vy: 2 + Math.random() * 3, s: 22 + Math.random() * 18, e: shapes[Math.floor(Math.random() * shapes.length)], r: Math.random() * 6 };
    });
    let f = 0;
    (function tick() {
      ctx.clearRect(0, 0, c.width, c.height);
      parts.forEach(function (p) { p.y += p.vy; p.r += 0.03; ctx.font = p.s + 'px serif'; ctx.fillText(p.e, p.x + Math.sin(p.r) * 20, p.y); });
      if (f++ < 200) requestAnimationFrame(tick); else ctx.clearRect(0, 0, c.width, c.height);
    })();
  }

  /* Illustration with fallback: tries images/<book>/<name>.png|jpg|jpeg|webp, else shows emoji. */
  function picture(book, name, fallback) {
    const base = 'images/' + book + '/' + name;
    return '<div class="pic" data-base="' + base + '"><div class="pic-fb">' + fallback + '</div></div>';
  }
  function loadPictures(root) {
    $all('.pic', root).forEach(function (el) {
      const exts = ['png', 'jpg', 'jpeg', 'webp'];
      let i = 0;
      const img = new Image();
      img.alt = '';
      img.onload = function () { el.innerHTML = ''; el.appendChild(img); el.classList.add('has-img'); };
      img.onerror = function () { if (++i < exts.length) img.src = el.dataset.base + '.' + exts[i]; };
      img.src = el.dataset.base + '.' + exts[0];
    });
  }

  window.LR = window.LR || {};
  Object.assign(LR, { letterSource: letterSource, toCleanWav: toCleanWav, zip: zip, store: store, recordings: recordings, audio: audio, sfx: sfx, esc: esc, $: $, $all: $all, toast: toast, shuffle: shuffle, confetti: confetti, picture: picture, loadPictures: loadPictures, wait: wait });
})();
