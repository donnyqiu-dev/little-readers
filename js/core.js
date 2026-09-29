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
    /* A letter sound: the parent's recording, or (fallback) the key word said slowly. */
    letter: function (l) {
      stop();
      const my = token;
      const L = LR.LETTERS.find(function (x) { return x.l === l; });
      return recordings.get('letter-' + l).then(function (url) {
        if (my !== token) return;
        if (url) return playUrl(url);
        return speak(L ? L.key : l, { rate: 0.7 });
      });
    },
    hasLetter: function (l) { return recordings.get('letter-' + l).then(function (u) { return !!u; }); },
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
          return recordings.get('letter-' + ch).then(function (url) {
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
  Object.assign(LR, { store: store, recordings: recordings, audio: audio, sfx: sfx, esc: esc, $: $, $all: $all, toast: toast, shuffle: shuffle, confetti: confetti, picture: picture, loadPictures: loadPictures, wait: wait });
})();
