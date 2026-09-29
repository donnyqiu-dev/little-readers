/* Screens: profiles, home (letter path + books), letter lesson, book reader, stickers, parent area. */
(function () {
  const S = LR.store, A = LR.audio, esc = LR.esc, $ = LR.$, $all = LR.$all;
  const AVATARS = ['🐶', '🐱', '🐰', '🐻', '🐼', '🦁', '🐸', '🐥'];
  const STICKERS = ['🦄', '🐳', '🦋', '🌈', '🍓', '🚀', '🦕', '🐢', '🌻', '🍩', '🐝', '⭐', '🎈', '🐬', '🦊', '🍉', '🚂', '🐧', '🌙', '🧁', '🦒', '🐙', '🍭', '🦜', '🌷', '🚒', '🐞', '🎠', '🦀', '🍒'];
  let leave = null;

  function onLeave(fn) { leave = fn; }
  function go(hash) { location.hash = hash; }

  function route() {
    if (leave) { try { leave(); } catch (e) { /* ignore */ } leave = null; }
    A.stop();
    const h = location.hash.replace(/^#/, '') || '/';
    const app = $('#app');
    if (!S.child() && h.indexOf('/parent') !== 0) return profiles();
    let m;
    if (h === '/') home();
    else if ((m = h.match(/^\/letter\/([a-z])$/))) letter(m[1]);
    else if ((m = h.match(/^\/book\/(b\d+)$/))) book(m[1]);
    else if (h === '/stickers') stickers();
    else if (h === '/parent') parent();
    else home();
    window.scrollTo(0, 0);
    app.focus({ preventScroll: true });
  }

  /* ---------- helpers ---------- */
  function learned(c) { return LR.LETTERS.filter(function (x) { return c.letters[x.l]; }).map(function (x) { return x.l; }); }
  function bookOpen(c, b) {
    if (S.db.settings.unlockAll) return true;
    return LR.LETTERS.filter(function (x) { return x.group <= b.group; }).every(function (x) { return c.letters[x.l]; });
  }
  function nextLetter(c) { return LR.LETTERS.find(function (x) { return !c.letters[x.l]; }); }
  function markSession(c) {
    const d = new Date(); const k = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
    c.sessions[k] = (c.sessions[k] || 0) + 1;
  }
  function giveSticker(c) {
    const left = STICKERS.filter(function (s) { return c.stickers.indexOf(s) < 0; });
    const s = left.length ? left[Math.floor(Math.random() * left.length)] : STICKERS[Math.floor(Math.random() * STICKERS.length)];
    c.stickers.push(s);
    return s;
  }
  function celebrate(sticker, onDone, again) {
    LR.sfx.win();
    LR.confetti();
    const w = document.createElement('div');
    w.className = 'celebrate';
    w.innerHTML = '<div class="cel-card"><div class="cel-sticker">' + sticker + '</div><h2>Great job!</h2><p>Hebat! Stiker baru untuk albummu.</p>' +
      '<div class="row">' + (again ? '<button class="big-btn soft" id="cel-again">🔁</button>' : '') + '<button class="big-btn" id="cel-ok">🏠</button></div></div>';
    document.body.appendChild(w);
    A.speak('Great job!');
    $('#cel-ok', w).onclick = function () { w.remove(); onDone(); };
    const ag = $('#cel-again', w);
    if (ag) ag.onclick = function () { w.remove(); again(); };
  }
  function topBar(back) {
    const c = S.child();
    return '<header class="bar">' + (back ? '<a class="round" href="' + back + '" aria-label="Back">⬅️</a>' : '<span class="logo">📚 Little Readers</span>') +
      '<span class="spacer"></span>' +
      (c ? '<a class="round" href="#/stickers" aria-label="Stickers">⭐<b>' + c.stickers.length + '</b></a><button class="round" id="who" aria-label="Change child">' + c.avatar + '</button>' : '') +
      '</header>';
  }
  function wireTop() {
    const who = $('#who');
    if (who) who.onclick = function () { S.db.activeId = null; S.save(); go('#/'); route(); };
  }

  /* ---------- Profiles ---------- */
  function profiles() {
    const kids = S.children();
    let av = AVATARS[0];
    $('#app').innerHTML = '<div class="welcome"><div class="hero">🐶📖</div><h1>Little Readers</h1>' +
      (kids.length ? '<div class="kids">' + kids.map(function (k) { return '<button class="kid" data-id="' + k.id + '"><span>' + k.avatar + '</span>' + esc(k.name) + '</button>'; }).join('') + '</div>' : '') +
      '<div class="card add"><h3>' + (kids.length ? '➕ Tambah anak' : '👋 Siapa nama anak?') + '</h3>' +
      '<input id="name" maxlength="16" placeholder="Nama anak" autocomplete="off">' +
      '<div class="avs">' + AVATARS.map(function (a, i) { return '<button class="av' + (i ? '' : ' on') + '" data-a="' + a + '">' + a + '</button>'; }).join('') + '</div>' +
      '<button class="big-btn wide" id="start">Mulai ▶</button></div>' +
      '<p class="note">Dibaca bersama orang tua · ±5–10 menit sehari · Data hanya tersimpan di perangkat ini.</p>' +
      '<a class="parent-link" href="#/parent">👪 Orang tua</a></div>';
    $all('.kid').forEach(function (b) { b.onclick = function () { S.use(b.dataset.id); go('#/'); route(); }; });
    $all('.av').forEach(function (b) { b.onclick = function () { $all('.av').forEach(function (x) { x.classList.remove('on'); }); b.classList.add('on'); av = b.dataset.a; }; });
    $('#start').onclick = function () {
      const n = $('#name').value.trim();
      if (!n) { LR.toast('Tulis nama anak dulu ya'); return; }
      S.addChild(n, av);
      go('#/'); route();
    };
  }

  /* ---------- Home ---------- */
  function home() {
    const c = S.child();
    const next = nextLetter(c);
    $('#app').innerHTML = topBar() +
      '<section class="home">' +
      '<div class="hello"><span class="pip">🐶</span><div><h2>Hi, ' + esc(c.name) + '!</h2><p>' + (next ? 'Let\'s learn <b class="big-letter-inline">' + next.l + '</b> today!' : 'You know all the letters! Let\'s read books!') + '</p></div></div>' +
      '<h3 class="sec">🔤 Letters</h3>' +
      '<div class="path">' + LR.LETTERS.map(function (x) {
        const done = !!c.letters[x.l];
        const isNext = next && next.l === x.l;
        return '<a class="dot' + (done ? ' done' : '') + (isNext ? ' next' : '') + '" style="--g:' + LR.GROUPS[x.group].color + '" href="#/letter/' + x.l + '">' +
          '<span class="dl">' + x.l + '</span>' + (done ? '<span class="dstar">⭐</span>' : '') + '</a>';
      }).join('') + '</div>' +
      '<h3 class="sec">📚 Books</h3>' +
      '<div class="shelf">' + LR.BOOKS.map(function (b) {
        const open = bookOpen(c, b);
        const reads = c.books[b.id] || 0;
        const need = LR.LETTERS.filter(function (x) { return x.group <= b.group && !c.letters[x.l]; }).map(function (x) { return x.l; });
        return '<a class="bk' + (open ? '' : ' locked') + '" href="' + (open ? '#/book/' + b.id : '#/') + '" data-need="' + need.join(' ') + '">' +
          LR.picture(b.id, 'cover', b.emoji) +
          '<b>' + esc(b.title) + '</b>' + (open ? (reads ? '<small>⭐ ×' + reads + '</small>' : '<small class="new">NEW</small>') : '<small>🔒 ' + need.slice(0, 4).join(' ') + (need.length > 4 ? '…' : '') + '</small>') + '</a>';
      }).join('') + '</div>' +
      '</section>' +
      '<a class="parent-link" href="#/parent">👪 Orang tua</a>';
    wireTop();
    LR.loadPictures($('#app'));
    $all('.bk.locked').forEach(function (a) {
      a.onclick = function (e) { e.preventDefault(); LR.sfx.no(); LR.toast('🔒 Pelajari dulu huruf: <b>' + a.dataset.need + '</b>'); };
    });
  }

  /* ---------- Letter lesson ---------- */
  function letter(l) {
    const c = S.child();
    const L = LR.LETTERS.find(function (x) { return x.l === l; });
    if (!L) return home();
    const known = learned(c).concat([l]);
    const words = LR.WORDS.filter(function (w) { return w[0].indexOf(l) >= 0 && w[0].split('').every(function (ch) { return known.indexOf(ch) >= 0; }); });
    const steps = ['meet', 'find', 'trace'].concat(words.length ? ['build'] : []);
    let step = 0;
    A.preload(L.find.map(function (f) { return f[0]; }).concat(words.map(function (w) { return w[0]; })));

    function frame(inner) {
      $('#app').innerHTML = topBar('#/') +
        '<div class="steps">' + steps.map(function (s, i) { return '<i class="' + (i < step ? 'done' : i === step ? 'now' : '') + '"></i>'; }).join('') + '</div>' +
        '<section class="lesson">' + inner + '</section>';
      wireTop();
    }
    function next() {
      step++;
      if (step < steps.length) return show();
      c.letters[l] = Date.now();
      markSession(c);
      const s = giveSticker(c);
      S.save();
      celebrate(s, function () { go('#/'); route(); });
    }
    function show() { ({ meet: meet, find: find, trace: trace, build: build })[steps[step]](); }

    /* 1. Meet the letter */
    function meet() {
      const vid = S.db.videos[l] != null ? S.db.videos[l] : L.video;
      frame('<div class="meet">' +
        '<button class="giant-letter" id="say" style="--g:' + LR.GROUPS[L.group].color + '">' + l + '<small>' + l.toUpperCase() + '</small></button>' +
        '<div class="key"><span>' + L.emoji + '</span><b>' + L.key + '</b></div>' +
        '<p class="hint">👆 Ketuk hurufnya untuk mendengar bunyinya.<br>🙌 ' + esc(L.action) + '</p>' +
        '<div id="rec-hint"></div>' +
        '<div class="row">' + (vid ? '<button class="big-btn soft" id="vid">📺 Alphablocks</button>' : '') + '<button class="big-btn" id="ok">➡️</button></div></div>');
      $('#say').onclick = function () { LR.sfx.pop(); this.classList.remove('boing'); void this.offsetWidth; this.classList.add('boing'); A.letter(l); };
      $('.key').onclick = function () { A.word(L.key); };
      $('#ok').onclick = next;
      const v = $('#vid');
      if (v) v.onclick = function () { video(vid); };
      A.hasLetter(l).then(function (has) {
        if (!has && $('#rec-hint')) $('#rec-hint').innerHTML = '<p class="rec-hint">🎙️ Bunyi /' + l + '/ belum direkam. Orang tua bisa merekamnya di menu 👪 Orang tua supaya anak mendengar bunyi huruf yang tepat.</p>';
      });
      setTimeout(function () { A.letter(l); }, 400);
    }

    /* 2. Find the picture that starts with the sound */
    function find() {
      const others = LR.LETTERS.filter(function (x) { return x.l !== l && !(/[ck]/.test(l) && /[ck]/.test(x.l)); });
      // the key word was just shown in "meet", so use the other pictures here
      const targets = LR.shuffle(L.find.filter(function (f) { return f[0] !== L.key; })).slice(0, 3);
      // Without a parent recording the fallback would say the key word, which gives the answer away.
      const cue = function () { A.hasLetter(l).then(function (has) { if (has) A.letter(l); }); };
      let round = 0;
      function ask() {
        if (round >= targets.length) return next();
        const t = targets[round];
        const wrong = LR.shuffle(others).slice(0, 2).map(function (x) { return LR.shuffle(x.find)[0]; });
        const opts = LR.shuffle([t].concat(wrong));
        frame('<div class="find"><button class="small-letter" id="say">' + l + '</button>' +
          '<p class="hint">Mana yang bunyinya dimulai dengan <b>' + l + '</b>?</p>' +
          '<div class="pics">' + opts.map(function (o) { return '<button class="pick" data-w="' + o[0] + '"><span>' + o[1] + '</span></button>'; }).join('') + '</div>' +
          '<div class="dots3">' + targets.map(function (_, i) { return '<i class="' + (i < round ? 'done' : '') + '"></i>'; }).join('') + '</div></div>');
        $('#say').onclick = cue;
        $all('.pick').forEach(function (b) {
          b.onclick = function () {
            const ok = b.dataset.w === t[0];
            A.word(b.dataset.w);
            if (ok) {
              b.classList.add('right'); LR.sfx.yes();
              $all('.pick').forEach(function (x) { x.disabled = true; });
              b.insertAdjacentHTML('beforeend', '<em>' + b.dataset.w + '</em>');
              setTimeout(function () { round++; ask(); }, 1600);
            } else {
              b.classList.add('wrong'); LR.sfx.no();
              setTimeout(function () { b.classList.remove('wrong'); }, 500);
            }
          };
        });
        setTimeout(cue, 300);
      }
      ask();
    }

    /* 3. Trace the letter with a finger */
    function trace() {
      frame('<div class="trace"><p class="hint">✍️ Tulis huruf <b>' + l + '</b> dengan jari mengikuti garis.</p>' +
        '<div class="trace-box"><canvas id="guide"></canvas><canvas id="ink"></canvas></div>' +
        '<div class="row"><button class="big-btn soft" id="clear">🧽</button><button class="big-btn" id="done" disabled>✅</button></div></div>');
      const box = $('.trace-box');
      const size = Math.min(box.clientWidth, 360);
      const guide = $('#guide'), ink = $('#ink');
      [guide, ink].forEach(function (cv) { cv.width = size; cv.height = size; });
      const g = guide.getContext('2d');
      const font = 'bold ' + Math.floor(size * 0.85) + 'px Andika, "Comic Sans MS", sans-serif';
      const pts = [];
      function drawGuide() {
        g.clearRect(0, 0, size, size);
        g.fillStyle = '#e9e1fb'; g.textAlign = 'center'; g.textBaseline = 'middle';
        g.font = font;
        g.fillText(l, size / 2, size / 2 + size * 0.02);
        // sample points inside the letter shape, used to measure how much was traced
        const data = g.getImageData(0, 0, size, size).data;
        pts.length = 0;
        for (let y = 0; y < size; y += 8) for (let x = 0; x < size; x += 8) if (data[(y * size + x) * 4 + 3] > 0) pts.push([x, y]);
        // a wider "near the letter" area: ink here counts as on target (little fingers are not precise)
        const mc = document.createElement('canvas'); mc.width = size; mc.height = size;
        const m = mc.getContext('2d');
        m.textAlign = 'center'; m.textBaseline = 'middle'; m.font = font; m.lineWidth = size * 0.14; m.lineJoin = 'round';
        m.fillText(l, size / 2, size / 2 + size * 0.02);
        m.strokeText(l, size / 2, size / 2 + size * 0.02);
        near = m.getImageData(0, 0, size, size).data;
      }
      let near = null;
      drawGuide();
      if (document.fonts && document.fonts.load) document.fonts.load(font).then(drawGuide).catch(function () {});
      const k = ink.getContext('2d');
      k.lineWidth = size * 0.09; k.lineCap = 'round'; k.lineJoin = 'round'; k.strokeStyle = LR.GROUPS[L.group].color;
      let drawing = false, last = null;
      function pos(e) { const r = ink.getBoundingClientRect(); return [(e.clientX - r.left) * size / r.width, (e.clientY - r.top) * size / r.height]; }
      ink.onpointerdown = function (e) { drawing = true; last = pos(e); ink.setPointerCapture(e.pointerId); k.beginPath(); k.arc(last[0], last[1], k.lineWidth / 2, 0, 7); k.fillStyle = k.strokeStyle; k.fill(); };
      ink.onpointermove = function (e) { if (!drawing) return; const p = pos(e); k.beginPath(); k.moveTo(last[0], last[1]); k.lineTo(p[0], p[1]); k.stroke(); last = p; check(); };
      ink.onpointerup = ink.onpointercancel = function () { drawing = false; check(); };
      /* cover = how much of the letter is traced; on = how much of the ink is near the letter */
      function score() {
        const d = k.getImageData(0, 0, size, size).data;
        const hit = pts.filter(function (p) { return d[(p[1] * size + p[0]) * 4 + 3] > 0; }).length;
        let ink = 0, onTarget = 0;
        for (let y = 0; y < size; y += 6) for (let x = 0; x < size; x += 6) {
          const i = (y * size + x) * 4 + 3;
          if (d[i] > 0) { ink++; if (near && near[i] > 0) onTarget++; }
        }
        return { cover: pts.length ? hit / pts.length : 0, on: ink ? onTarget / ink : 1 };
      }
      let cheered = false, nagged = false;
      function check() {
        const s = score();
        const good = s.cover >= 0.35 && s.on >= 0.55;
        $('#done').disabled = !good;
        if (s.cover >= 0.35 && s.on < 0.55 && !nagged) { nagged = true; LR.toast('✍️ Ikuti garis hurufnya ya. Tekan 🧽 untuk mengulang.'); }
        if (good && s.cover >= 0.7 && !cheered) { cheered = true; LR.sfx.yes(); A.letter(l); }
      }
      $('#clear').onclick = function () { k.clearRect(0, 0, size, size); cheered = false; nagged = false; check(); };
      $('#done').onclick = function () { LR.sfx.yes(); next(); };
    }

    /* 4. Build a word: tap letters in order, then blend */
    function build() {
      const list = LR.shuffle(words).slice(0, 2);
      let wi = 0;
      function one() {
        if (wi >= list.length) return next();
        const w = list[wi][0], pic = list[wi][1];
        let filled = 0;
        const tiles = LR.shuffle(w.split('').map(function (ch, i) { return { ch: ch, i: i }; }));
        frame('<div class="build"><div class="build-pic" id="pic">' + pic + '</div>' +
          '<div class="slots">' + w.split('').map(function () { return '<span class="slot"></span>'; }).join('') + '</div>' +
          '<div class="tiles">' + tiles.map(function (t) { return '<button class="tile" data-ch="' + t.ch + '">' + t.ch + '</button>'; }).join('') + '</div>' +
          '<p class="hint">Dengarkan, lalu susun hurufnya.</p></div>');
        $('#pic').onclick = function () { A.word(w); };
        setTimeout(function () { A.word(w); }, 300);
        $all('.tile').forEach(function (b) {
          b.onclick = function () {
            A.letter(b.dataset.ch);
            if (b.dataset.ch !== w[filled]) { b.classList.add('wrong'); LR.sfx.no(); setTimeout(function () { b.classList.remove('wrong'); }, 450); return; }
            b.disabled = true; b.classList.add('used');
            $all('.slot')[filled].textContent = b.dataset.ch;
            $all('.slot')[filled].classList.add('filled');
            filled++;
            if (filled === w.length) {
              setTimeout(function () {
                const slots = $all('.slot');
                A.blend(w, function (i) {
                  slots.forEach(function (s, j) { s.classList.toggle('lit', i === j || i === -1); });
                }).then(function () { LR.sfx.yes(); setTimeout(function () { wi++; one(); }, 900); });
              }, 500);
            }
          };
        });
      }
      one();
    }

    show();
  }

  function video(id) {
    const w = document.createElement('div');
    w.className = 'celebrate';
    w.innerHTML = '<div class="video-card"><div class="vframe"><iframe src="https://www.youtube-nocookie.com/embed/' + esc(id) + '?rel=0&modestbranding=1&playsinline=1&cc_load_policy=0" allow="autoplay; encrypted-media; fullscreen" allowfullscreen></iframe></div>' +
      '<p class="note">Video resmi Alphablocks (YouTube). Tonton bersama anak, boleh berhenti kapan saja.</p><button class="big-btn" id="vclose">✖️</button></div>';
    document.body.appendChild(w);
    $('#vclose', w).onclick = function () { w.remove(); };
  }

  /* ---------- Book reader ---------- */
  function book(id) {
    const c = S.child();
    const b = LR.BOOKS.find(function (x) { return x.id === id; });
    if (!b || !bookOpen(c, b)) return home();
    let pg = -1; // -1 = cover
    const knownLetters = learned(c);
    A.preload(Array.from(new Set(b.pages.map(function (p) { return p.t; }).join(' ').toLowerCase().match(/[a-z]+/g))));

    function wordHtml(raw) {
      const w = raw.toLowerCase().replace(/'s$/, '');
      const tricky = LR.TRICKY.indexOf(w) >= 0 || LR.NAMES.indexOf(w) >= 0;
      return '<button class="w' + (tricky ? ' tricky' : '') + '" data-w="' + esc(w) + '">' +
        '<span class="wl">' + esc(raw) + '</span>' +
        (tricky ? '' : '<span class="sb">' + w.split('').map(function () { return '<i></i>'; }).join('') + '</span>') + '</button>';
    }
    function textHtml(t) {
      return t.split(/(\s+)/).map(function (part) {
        if (!part.trim()) return ' ';
        const m = part.match(/^([A-Za-z']+)([^A-Za-z']*)$/);
        return m ? wordHtml(m[1]) + '<span class="punct">' + esc(m[2]) + '</span>' : esc(part);
      }).join('');
    }
    function render() {
      const cover = pg < 0;
      const p = cover ? null : b.pages[pg];
      $('#app').innerHTML = topBar('#/') +
        '<section class="reader">' +
        '<div class="page">' + LR.picture(b.id, cover ? 'cover' : 'p' + (pg + 1), cover ? b.emoji : p.fb) +
        '<div class="text' + (cover ? ' title' : '') + '">' + (cover ? esc(b.title) : textHtml(p.t)) + '</div></div>' +
        '<div class="nav"><button class="round big" id="prev"' + (cover ? ' disabled' : '') + '>◀️</button>' +
        '<button class="round big" id="read">🔊</button>' +
        '<span class="pageno">' + (cover ? '📖' : (pg + 1) + ' / ' + b.pages.length) + '</span>' +
        '<button class="round big" id="nextp">▶️</button></div>' +
        '<p class="note">👆 Ketuk kata untuk mendengar bunyi hurufnya. Kata ⭐ dibaca langsung (tricky word).</p></section>';
      wireTop();
      LR.loadPictures($('.page'));
      $('#prev').onclick = function () { pg--; render(); };
      $('#nextp').onclick = function () { if (pg < b.pages.length - 1) { pg++; render(); } else finish(); };
      $('#read').onclick = readPage;
      $all('.w').forEach(function (btn) {
        btn.onclick = function () {
          const w = btn.dataset.w;
          if (btn.classList.contains('tricky')) { A.word(w); return; }
          const dots = $all('.sb i', btn);
          A.blend(w, function (i) { dots.forEach(function (d, j) { d.classList.toggle('lit', i === j); }); btn.classList.toggle('lit', i === -1); })
            .then(function () { btn.classList.remove('lit'); });
        };
      });
      swipe($('.page'));
      if (S.db.settings.autoRead) setTimeout(readPage, 500);
    }
    function readPage() {
      const text = pg < 0 ? b.title : b.pages[pg].t;
      const words = $all('.text .w');
      let starts = [], pos = 0;
      text.split(/\s+/).forEach(function (t) { starts.push(pos); pos += t.length + 1; });
      A.speak(text, {
        onboundary: function (e) {
          let idx = 0;
          starts.forEach(function (s, i) { if (s <= e.charIndex) idx = i; });
          words.forEach(function (w, i) { w.classList.toggle('reading', i === idx); });
        }
      }).then(function () { words.forEach(function (w) { w.classList.remove('reading'); }); });
    }
    function swipe(el) {
      let x0 = null;
      el.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
      el.addEventListener('touchend', function (e) {
        if (x0 == null) return;
        const dx = e.changedTouches[0].clientX - x0; x0 = null;
        if (dx < -60) $('#nextp').click(); else if (dx > 60 && !$('#prev').disabled) $('#prev').click();
      });
    }
    function finish() {
      c.books[b.id] = (c.books[b.id] || 0) + 1;
      markSession(c);
      const s = giveSticker(c);
      S.save();
      celebrate(s, function () { go('#/'); route(); }, function () { pg = -1; render(); });
    }
    render();
  }

  /* ---------- Stickers ---------- */
  function stickers() {
    const c = S.child();
    $('#app').innerHTML = topBar('#/') + '<section class="album"><h2>⭐ My stickers</h2>' +
      '<div class="stk">' + STICKERS.map(function (s) {
        const n = c.stickers.filter(function (x) { return x === s; }).length;
        return '<div class="st' + (n ? ' has' : '') + '">' + (n ? s + (n > 1 ? '<b>×' + n + '</b>' : '') : '❔') + '</div>';
      }).join('') + '</div><p class="note">Selesaikan satu huruf atau satu buku untuk mendapat stiker.</p></section>';
    wireTop();
    $all('.st.has').forEach(function (el) { el.onclick = function () { LR.sfx.pop(); el.classList.remove('boing'); void el.offsetWidth; el.classList.add('boing'); }; });
  }

  /* ---------- Parent area ---------- */
  let parentOk = false;
  function parent() {
    if (!parentOk) {
      const a = 3 + Math.floor(Math.random() * 6), b = 4 + Math.floor(Math.random() * 6);
      $('#app').innerHTML = topBar('#/') + '<section class="gate card"><h2>👪 Untuk orang tua</h2><p>Berapa <b>' + a + ' + ' + b + '</b>?</p>' +
        '<input id="ans" inputmode="numeric" autocomplete="off"><button class="big-btn" id="gok">OK</button></section>';
      wireTop();
      const go2 = function () { if (Number($('#ans').value) === a + b) { parentOk = true; parent(); } else { LR.sfx.no(); $('#ans').value = ''; } };
      $('#gok').onclick = go2;
      $('#ans').onkeydown = function (e) { if (e.key === 'Enter') go2(); };
      $('#ans').focus();
      return;
    }
    const c = S.child();
    const st = S.db.settings;
    $('#app').innerHTML = topBar(c ? '#/' : null) + '<section class="parent">' +
      '<h2>👪 Orang tua</h2>' +
      (c ? '<div class="card"><h3>📈 Progres ' + esc(c.name) + '</h3>' + progress(c) + '</div>' : '') +
      '<div class="card"><h3>🎙️ Rekam bunyi huruf</h3>' +
      '<p class="small">Rekam <b>bunyi</b> hurufnya, bukan namanya, dan buat sependek mungkin. Contoh: <b>s</b> = “sss” (bukan “es”), <b>t</b> = “t” pendek (bukan “te” / “tuh”), <b>a</b> = “a” seperti di <i>ant</i>. Tekan 🎙️, ucapkan, tekan ⏹️. Rekaman hanya tersimpan di perangkat ini.</p>' +
      '<div class="recs">' + LR.LETTERS.map(function (x) {
        return '<div class="rec" data-l="' + x.l + '"><b class="rl">' + x.l + '</b><span class="rk">' + x.emoji + ' ' + x.key + '</span>' +
          '<button class="round sm" data-act="rec">🎙️</button><button class="round sm" data-act="play" disabled>▶️</button><button class="round sm" data-act="del" disabled>🗑️</button></div>';
      }).join('') + '</div></div>' +
      '<div class="card"><h3>⚙️ Pengaturan</h3>' +
      '<label>Kecepatan suara <select id="rate"><option value="0.65">Pelan</option><option value="0.8">Normal</option><option value="0.95">Cepat</option></select></label>' +
      '<label class="chk"><input type="checkbox" id="auto"' + (st.autoRead ? ' checked' : '') + '> Bacakan otomatis setiap halaman buku</label>' +
      '<label class="chk"><input type="checkbox" id="snd"' + (st.sound ? ' checked' : '') + '> Efek suara</label>' +
      '<label class="chk"><input type="checkbox" id="unl"' + (st.unlockAll ? ' checked' : '') + '> Buka semua buku (tanpa menunggu huruf selesai)</label></div>' +
      '<div class="card"><h3>📺 Video Alphablocks</h3><p class="small">Video resmi dari channel YouTube Alphablocks. Boleh diganti dengan link YouTube lain, atau dikosongkan untuk menyembunyikan tombol video.</p>' +
      '<details><summary>Atur video per huruf</summary><div class="vids">' + LR.LETTERS.map(function (x) {
        const v = S.db.videos[x.l] != null ? S.db.videos[x.l] : x.video;
        return '<label><b>' + x.l + '</b><input data-vl="' + x.l + '" value="' + esc(v ? 'https://youtu.be/' + v : '') + '" placeholder="(tanpa video)"></label>';
      }).join('') + '</div></details></div>' +
      '<div class="card"><h3>💾 Data</h3><p class="small">Progres & stiker tersimpan di browser ini. Rekaman suara tidak ikut di file cadangan.</p>' +
      '<div class="row wrap"><button class="big-btn soft sm" id="exp">⬇️ Backup</button><label class="big-btn soft sm">⬆️ Restore<input type="file" id="imp" accept=".json" hidden></label>' +
      (c ? '<button class="big-btn soft sm danger" id="delkid">Hapus profil ' + esc(c.name) + '</button>' : '') + '</div></div>' +
      '<p class="note">Buku & karakter (Pip, Nat, Kit) adalah cerita orisinal. Video milik Alphablocks / Blue Zoo.</p></section>';
    wireTop();
    $('#rate').value = String(st.rate);
    $('#rate').onchange = function () { st.rate = Number(this.value); S.save(); A.speak('Pip sits.'); };
    $('#auto').onchange = function () { st.autoRead = this.checked; S.save(); };
    $('#snd').onchange = function () { st.sound = this.checked; S.save(); };
    $('#unl').onchange = function () { st.unlockAll = this.checked; S.save(); };
    $all('[data-vl]').forEach(function (inp) {
      inp.onchange = function () {
        const v = inp.value.trim();
        const m = v.match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([A-Za-z0-9_-]{11})/) || v.match(/^([A-Za-z0-9_-]{11})$/);
        if (v && !m) { LR.toast('Link YouTube tidak dikenali'); return; }
        S.db.videos[inp.dataset.vl] = m ? m[1] : '';
        S.save(); LR.toast('✅ Disimpan');
      };
    });
    wireRecorder();
    $('#exp').onclick = function () {
      const a = document.createElement('a');
      a.href = URL.createObjectURL(new Blob([JSON.stringify(S.db, null, 2)], { type: 'application/json' }));
      a.download = 'little-readers-backup.json'; a.click();
    };
    $('#imp').onchange = function () {
      const f = this.files[0]; if (!f) return;
      f.text().then(function (t) { try { S.importJson(t); LR.toast('✅ Dipulihkan'); parent(); } catch (e) { LR.toast('⚠️ ' + e.message); } });
    };
    const dk = $('#delkid');
    if (dk) dk.onclick = function () {
      if (!confirm('Hapus profil ' + c.name + ' beserta progresnya?')) return;
      delete S.db.profiles[c.id]; S.db.activeId = null; S.save(); go('#/'); route();
    };
  }

  function progress(c) {
    const days = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date(Date.now() - i * 86400000);
      const k = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
      days.push('<i class="' + (c.sessions[k] ? 'on' : '') + '" title="' + k + '">' + 'MSSRKJS'[d.getDay()] + '</i>');
    }
    const lettersDone = LR.LETTERS.filter(function (x) { return c.letters[x.l]; }).length;
    const booksRead = Object.keys(c.books).length;
    return '<p>Huruf: <b>' + lettersDone + ' / ' + LR.LETTERS.length + '</b> · Buku: <b>' + booksRead + ' / ' + LR.BOOKS.length + '</b> · Stiker: <b>' + c.stickers.length + '</b></p>' +
      '<div class="week">' + days.join('') + '</div><p class="small">Hari aktif minggu ini (M S S R K J S = Minggu–Sabtu).</p>' +
      '<p class="small">Tips: cukup 5–10 menit sehari. Ulangi buku yang sama berkali-kali itu bagus, karena anak jadi lancar dan percaya diri.</p>';
  }

  function wireRecorder() {
    let rec = null, chunks = [], stream = null, timer = null;
    function refresh(row) {
      LR.recordings.get('letter-' + row.dataset.l).then(function (u) {
        row.querySelector('[data-act="play"]').disabled = !u;
        row.querySelector('[data-act="del"]').disabled = !u;
        row.classList.toggle('ok', !!u);
      });
    }
    $all('.rec').forEach(function (row) {
      refresh(row);
      row.addEventListener('click', function (e) {
        const b = e.target.closest('[data-act]'); if (!b) return;
        const l = row.dataset.l;
        if (b.dataset.act === 'play') A.letter(l);
        else if (b.dataset.act === 'del') LR.recordings.remove('letter-' + l).then(function () { refresh(row); });
        else if (b.dataset.act === 'rec') {
          if (rec && rec.state === 'recording') { rec.stop(); return; }
          if (!navigator.mediaDevices || !window.MediaRecorder) { LR.toast('Browser ini tidak bisa merekam suara.'); return; }
          navigator.mediaDevices.getUserMedia({ audio: true }).then(function (s) {
            stream = s; chunks = [];
            rec = new MediaRecorder(s);
            rec.ondataavailable = function (ev) { if (ev.data.size) chunks.push(ev.data); };
            rec.onstop = function () {
              clearTimeout(timer);
              stream.getTracks().forEach(function (t) { t.stop(); });
              b.textContent = '🎙️'; row.classList.remove('recording');
              const blob = new Blob(chunks, { type: rec.mimeType || 'audio/webm' });
              LR.recordings.put('letter-' + l, blob).then(function () { refresh(row); A.letter(l); });
            };
            rec.start();
            b.textContent = '⏹️'; row.classList.add('recording');
            timer = setTimeout(function () { if (rec.state === 'recording') rec.stop(); }, 3000);
          }).catch(function () { LR.toast('🎙️ Izinkan mikrofon di browser dulu.'); });
        }
      });
    });
  }

  window.addEventListener('hashchange', route);
  window.addEventListener('DOMContentLoaded', route);
  if ('serviceWorker' in navigator && location.protocol.indexOf('http') === 0) navigator.serviceWorker.register('sw.js').catch(function () {});
  LR.route = route;
})();
