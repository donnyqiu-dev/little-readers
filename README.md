# Little Readers 🐶📖

Aplikasi web untuk **anak ±3 tahun yang baru mulai belajar membaca bahasa Inggris** dengan metode **phonics**. Dirancang untuk **dibaca bersama orang tua**, 5–10 menit sehari. Tanpa akun dan tanpa server: **semua data tersimpan di perangkat** (localStorage + IndexedDB).

## Cara menjalankan

```bash
python3 -m http.server 8000     # lalu buka http://localhost:8000
```

Bisa juga dipublikasikan lewat **GitHub Pages** (Settings → Pages → Deploy from a branch → pilih branch → `/ (root)`). Setelah dibuka, aplikasi bisa di-*install* ke layar utama HP/tablet. Browser yang disarankan: Chrome atau Edge.

## Isi

### 🔤 Huruf (19 huruf, 4 set)
Urutan huruf mengikuti urutan phonics yang umum dipakai Letters and Sounds / Alphablocks, sehingga anak cepat bisa membaca kata:

| Set | Huruf | Contoh kata yang bisa dibaca |
|---|---|---|
| 1 | s a t p i n | sat, pin, tap, nap |
| 2 | m d g o | dog, mop, dig, pot |
| 3 | c k e u r | cat, cup, red, sun |
| 4 | h b f l | hat, bus, fan, log |

Setiap huruf punya 3–4 langkah singkat:
1. **Kenali**: huruf besar, bunyi, gambar kata kunci, gerakan tangan, dan tombol **video Alphablocks resmi** (YouTube).
2. **Cari gambar**: mana yang bunyinya dimulai dengan huruf itu? (3 putaran)
3. **Tulis dengan jari**: menelusuri huruf di layar. Coretan harus mengikuti bentuk huruf.
4. **Susun kata** (mulai huruf ke-3): dengar kata, susun hurufnya, lalu bunyi dirangkai (*blending*).

### 📚 Buku (10 buku, 59 halaman)
Cerita orisinal dengan karakter **Pip** (anjing besar yang ramah), **Nat**, dan **Kit** si kucing. Semua kata *decodable*, artinya bisa dibaca hanya dengan huruf yang sudah dipelajari. Hal ini dicek otomatis oleh `node tools/check-books.js`. Buku terbuka setelah set hurufnya selesai.
- Ketuk kata: tiap huruf disorot dan bunyinya diputar, lalu kata utuh diucapkan (rekaman manusia dari Wiktionary jika ada internet).
- Kata ⭐ (*tricky words* dan nama) dibaca utuh.
- 🔊 membacakan satu halaman sambil menyorot kata. Pindah halaman bisa dengan tombol atau geser layar.

### ⭐ Hadiah
Setiap huruf atau buku yang selesai memberi **stiker** untuk album. Tidak ada streak atau skor yang menekan.

### 👪 Orang tua (dikunci soal hitungan sederhana)
- **Rekam bunyi huruf.** Suara komputer tidak bisa mengucapkan bunyi huruf tunggal dengan benar (misalnya "t" dibaca "tee"), jadi orang tua merekam **bunyi** tiap huruf sekali. Rekaman disimpan di perangkat. Tanpa rekaman, aplikasi tidak memakai suara komputer untuk bunyi huruf (supaya anak tidak belajar bunyi yang salah); yang diucapkan hanya kata utuh.
- Progres anak, pengaturan (kecepatan suara, baca otomatis, buka semua buku), ganti video per huruf, backup/restore.

## Gambar ilustrasi
Gambar dibuat sendiri dengan ChatGPT/Gemini memakai prompt di **[PROMPTS.md](PROMPTS.md)** (1 lembar karakter + 69 gambar). Simpan dengan nama file yang tertera ke folder `images/`. Lihat [images/README.md](images/README.md). Sebelum gambar ada, aplikasi memakai emoji.

## Mengubah atau menambah cerita
Semua isi ada di `js/data.js`. Setelah mengubah:

```bash
node tools/check-books.js    # pastikan semua kata bisa dibaca dengan huruf yang sudah diajarkan
node tools/make-prompts.js   # perbarui PROMPTS.md
```

## Hak cipta
Cerita, karakter, dan kode di repo ini orisinal. Aplikasi ini tidak memakai teks, gambar, atau karakter Clifford. Video diputar dari channel YouTube resmi **Alphablocks** (milik Alphablocks Ltd / Blue Zoo) lewat embed, dan tidak disalin ke repo ini.
