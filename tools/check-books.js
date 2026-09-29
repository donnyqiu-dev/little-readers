/* Checks that every word in every book can be sounded out with the letters taught up to the
   book's group (or is a listed tricky word / name). Run: node tools/check-books.js */
global.window = global;
require('../js/data.js');

let problems = 0;
LR.BOOKS.forEach(function (b) {
  const allowed = new Set(LR.LETTERS.filter(function (x) { return x.group <= b.group; }).map(function (x) { return x.l; }));
  b.pages.forEach(function (pg, i) {
    (pg.t.toLowerCase().match(/[a-z']+/g) || []).forEach(function (w) {
      const bare = w.replace(/'s$/, '').replace(/'/g, '');
      if (LR.TRICKY.indexOf(bare) >= 0 || LR.NAMES.indexOf(bare) >= 0) return;
      const bad = bare.split('').filter(function (ch) { return !allowed.has(ch); });
      if (bad.length) {
        problems++;
        console.log(b.id + ' "' + b.title + '" page ' + (i + 1) + ': "' + w + '" uses untaught letter(s) ' + bad.join(','));
      }
    });
  });
});

LR.WORDS.forEach(function (w) {
  if (!w[0].split('').every(function (ch) { return LR.LETTERS.some(function (x) { return x.l === ch; }); })) {
    problems++;
    console.log('Word builder "' + w[0] + '" uses a letter that is not taught');
  }
});

const pages = LR.BOOKS.reduce(function (s, b) { return s + b.pages.length; }, 0);
console.log(problems ? problems + ' problem(s) found.' : 'All ' + LR.BOOKS.length + ' books (' + pages + ' pages) are decodable.');
process.exit(problems ? 1 : 0);
