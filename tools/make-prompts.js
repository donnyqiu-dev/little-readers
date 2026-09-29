/* Generates PROMPTS.md (image prompts for ChatGPT / Gemini) from js/data.js.
   Run: node tools/make-prompts.js */
global.window = global;
require('../js/data.js');
const fs = require('fs');
const path = require('path');

const STYLE = 'Soft, warm children\'s picture-book illustration for toddlers (age 3). Hand-painted gouache/watercolor texture, ' +
  'thick friendly rounded outlines, bright but gentle colors, simple uncluttered background, big expressive faces, ' +
  'one clear main action in the middle of the picture. Landscape 3:2. ' +
  'ABSOLUTELY NO text, letters, numbers, speech bubbles or signs anywhere in the image. ' +
  'Original characters only — do not imitate Clifford, Bluey, Peppa Pig or any existing cartoon character.';

const CHARACTERS = [
  ['Pip', 'a BIG, friendly young dog, about as tall as a small pony next to Nat; golden-orange fur with a cream muzzle and cream chest, one brown patch around his left eye, long floppy brown ears, round shiny dark eyes, big happy smile, a blue collar with a round yellow tag. Playful and a bit clumsy.'],
  ['Nat', 'a 5-year-old Southeast Asian girl with light brown skin, black hair in two short pigtails with yellow hair ties, round cheerful face; wears a green T-shirt with a small white star, blue shorts and red sneakers.'],
  ['Kit', 'a small grey tabby cat with white paws, a white tip on her tail and bright green eyes. Calm and a little bit shy.']
];

let md = '# Prompt gambar untuk Little Readers\n\n' +
  '_File ini dibuat otomatis oleh `node tools/make-prompts.js` dari `js/data.js`. Jangan edit manual; ubah datanya lalu jalankan ulang._\n\n' +
  '## Cara pakai (ChatGPT atau Gemini)\n\n' +
  '1. Buka **satu percakapan baru** untuk satu buku, supaya karakternya konsisten dalam satu buku.\n' +
  '2. Kirim dulu **Prompt 0: Lembar karakter**. Simpan hasilnya sebagai `images/characters.png` (hanya referensi, tidak dipakai di aplikasi). Untuk buku berikutnya, **unggah gambar ini** di awal percakapan baru dan tulis: _"Use these exact characters for all pictures in this chat."_\n' +
  '3. Kirim prompt halaman satu per satu. Kalau hasilnya kurang cocok, minta ulang: _"Same scene, but keep Pip exactly like the character sheet."_\n' +
  '4. Simpan setiap gambar dengan **nama file persis** seperti tertulis (misalnya `images/b01/p1.png`). Format `.png`, `.jpg` atau `.webp` semuanya bisa.\n' +
  '5. Masukkan file ke folder `images/<kode-buku>/` di repo (GitHub → Add file → Upload files). Aplikasi otomatis memakai gambar itu. Selama gambar belum ada, aplikasi menampilkan emoji sementara.\n\n' +
  '**Tips ukuran:** idealnya 1536×1024 piksel (3:2). Kalau file lebih dari ±500 KB, perkecil dulu (misalnya dengan squoosh.app) supaya aplikasi cepat dibuka di HP.\n\n' +
  '---\n\n## Gaya (sudah termasuk di setiap prompt)\n\n> ' + STYLE + '\n\n## Karakter\n\n' +
  CHARACTERS.map(function (c) { return '- **' + c[0] + '**: ' + c[1]; }).join('\n') + '\n\n' +
  '---\n\n## Prompt 0: Lembar karakter → `images/characters.png`\n\n```\n' +
  'Create a character reference sheet on a plain cream background showing three characters side by side, full body, front view, with a second small side view of each: ' +
  CHARACTERS.map(function (c) { return c[0] + ' — ' + c[1]; }).join(' ') + ' Show their relative sizes clearly (Pip is much bigger than Nat; Kit is small). ' + STYLE + '\n```\n\n';

function charsIn(text) {
  return CHARACTERS.filter(function (c) { return new RegExp('\\b' + c[0] + '\\b').test(text); })
    .map(function (c) { return c[0] + ' is ' + c[1]; }).join(' ');
}

LR.BOOKS.forEach(function (b) {
  md += '---\n\n## ' + b.id + ' · ' + b.title + '\n\n';
  const shots = [['cover', 'Book cover (no title text): ' + b.cover]].concat(b.pages.map(function (p, i) { return ['p' + (i + 1), p.p, p.t]; }));
  shots.forEach(function (s) {
    const scene = s[1];
    const who = charsIn(scene + ' ' + (s[2] || '') + ' ' + b.cover);
    md += '### `images/' + b.id + '/' + s[0] + '.png`' + (s[2] ? ' — teks: “' + s[2] + '”' : ' — sampul') + '\n\n```\n' +
      'Scene: ' + scene + '\n' + (who ? 'Characters: ' + who + '\n' : '') + 'Style: ' + STYLE + '\n```\n\n';
  });
});

fs.writeFileSync(path.join(__dirname, '..', 'PROMPTS.md'), md);
const n = LR.BOOKS.reduce(function (s, b) { return s + b.pages.length + 1; }, 0);
console.log('PROMPTS.md written: 1 character sheet + ' + n + ' pictures (' + LR.BOOKS.length + ' books).');
