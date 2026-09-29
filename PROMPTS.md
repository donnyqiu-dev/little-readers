# Prompt gambar untuk Little Readers

_File ini dibuat otomatis oleh `node tools/make-prompts.js` dari `js/data.js`. Jangan edit manual; ubah datanya lalu jalankan ulang._

## Cara pakai (ChatGPT atau Gemini)

1. Buka **satu percakapan baru** untuk satu buku, supaya karakternya konsisten dalam satu buku.
2. Kirim dulu **Prompt 0: Lembar karakter**. Simpan hasilnya sebagai `images/characters.png` (hanya referensi, tidak dipakai di aplikasi). Untuk buku berikutnya, **unggah gambar ini** di awal percakapan baru dan tulis: _"Use these exact characters for all pictures in this chat."_
3. Kirim prompt halaman satu per satu. Kalau hasilnya kurang cocok, minta ulang: _"Same scene, but keep Pip exactly like the character sheet."_
4. Simpan setiap gambar dengan **nama file persis** seperti tertulis (misalnya `images/b01/p1.png`). Format `.png`, `.jpg` atau `.webp` semuanya bisa.
5. Masukkan file ke folder `images/<kode-buku>/` di repo (GitHub → Add file → Upload files). Aplikasi otomatis memakai gambar itu. Selama gambar belum ada, aplikasi menampilkan emoji sementara.

**Tips ukuran:** idealnya 1536×1024 piksel (3:2). Kalau file lebih dari ±500 KB, perkecil dulu (misalnya dengan squoosh.app) supaya aplikasi cepat dibuka di HP.

---

## Gaya (sudah termasuk di setiap prompt)

> Soft, warm children's picture-book illustration for toddlers (age 3). Hand-painted gouache/watercolor texture, thick friendly rounded outlines, bright but gentle colors, simple uncluttered background, big expressive faces, one clear main action in the middle of the picture. Landscape 3:2. ABSOLUTELY NO text, letters, numbers, speech bubbles or signs anywhere in the image. Original characters only — do not imitate Clifford, Bluey, Peppa Pig or any existing cartoon character.

## Karakter

- **Pip**: a BIG, friendly young dog, about as tall as a small pony next to Nat; golden-orange fur with a cream muzzle and cream chest, one brown patch around his left eye, long floppy brown ears, round shiny dark eyes, big happy smile, a blue collar with a round yellow tag. Playful and a bit clumsy.
- **Nat**: a 5-year-old Southeast Asian girl with light brown skin, black hair in two short pigtails with yellow hair ties, round cheerful face; wears a green T-shirt with a small white star, blue shorts and red sneakers.
- **Kit**: a small grey tabby cat with white paws, a white tip on her tail and bright green eyes. Calm and a little bit shy.

---

## Prompt 0: Lembar karakter → `images/characters.png`

```
Create a character reference sheet on a plain cream background showing three characters side by side, full body, front view, with a second small side view of each: Pip — a BIG, friendly young dog, about as tall as a small pony next to Nat; golden-orange fur with a cream muzzle and cream chest, one brown patch around his left eye, long floppy brown ears, round shiny dark eyes, big happy smile, a blue collar with a round yellow tag. Playful and a bit clumsy. Nat — a 5-year-old Southeast Asian girl with light brown skin, black hair in two short pigtails with yellow hair ties, round cheerful face; wears a green T-shirt with a small white star, blue shorts and red sneakers. Kit — a small grey tabby cat with white paws, a white tip on her tail and bright green eyes. Calm and a little bit shy. Show their relative sizes clearly (Pip is much bigger than Nat; Kit is small). Soft, warm children's picture-book illustration for toddlers (age 3). Hand-painted gouache/watercolor texture, thick friendly rounded outlines, bright but gentle colors, simple uncluttered background, big expressive faces, one clear main action in the middle of the picture. Landscape 3:2. ABSOLUTELY NO text, letters, numbers, speech bubbles or signs anywhere in the image. Original characters only — do not imitate Clifford, Bluey, Peppa Pig or any existing cartoon character.
```

---

## b01 · Pip

### `images/b01/cover.png` — sampul

```
Scene: Book cover (no title text): Pip the big friendly pup sitting and smiling at the reader, cover of a picture book
Characters: Pip is a BIG, friendly young dog, about as tall as a small pony next to Nat; golden-orange fur with a cream muzzle and cream chest, one brown patch around his left eye, long floppy brown ears, round shiny dark eyes, big happy smile, a blue collar with a round yellow tag. Playful and a bit clumsy.
Style: Soft, warm children's picture-book illustration for toddlers (age 3). Hand-painted gouache/watercolor texture, thick friendly rounded outlines, bright but gentle colors, simple uncluttered background, big expressive faces, one clear main action in the middle of the picture. Landscape 3:2. ABSOLUTELY NO text, letters, numbers, speech bubbles or signs anywhere in the image. Original characters only — do not imitate Clifford, Bluey, Peppa Pig or any existing cartoon character.
```

### `images/b01/p1.png` — teks: “Pip.”

```
Scene: Pip the big pup standing in a sunny garden, wagging his tail, looking at the reader.
Characters: Pip is a BIG, friendly young dog, about as tall as a small pony next to Nat; golden-orange fur with a cream muzzle and cream chest, one brown patch around his left eye, long floppy brown ears, round shiny dark eyes, big happy smile, a blue collar with a round yellow tag. Playful and a bit clumsy.
Style: Soft, warm children's picture-book illustration for toddlers (age 3). Hand-painted gouache/watercolor texture, thick friendly rounded outlines, bright but gentle colors, simple uncluttered background, big expressive faces, one clear main action in the middle of the picture. Landscape 3:2. ABSOLUTELY NO text, letters, numbers, speech bubbles or signs anywhere in the image. Original characters only — do not imitate Clifford, Bluey, Peppa Pig or any existing cartoon character.
```

### `images/b01/p2.png` — teks: “Pip sits.”

```
Scene: Pip sitting down neatly on the grass like a good dog.
Characters: Pip is a BIG, friendly young dog, about as tall as a small pony next to Nat; golden-orange fur with a cream muzzle and cream chest, one brown patch around his left eye, long floppy brown ears, round shiny dark eyes, big happy smile, a blue collar with a round yellow tag. Playful and a bit clumsy.
Style: Soft, warm children's picture-book illustration for toddlers (age 3). Hand-painted gouache/watercolor texture, thick friendly rounded outlines, bright but gentle colors, simple uncluttered background, big expressive faces, one clear main action in the middle of the picture. Landscape 3:2. ABSOLUTELY NO text, letters, numbers, speech bubbles or signs anywhere in the image. Original characters only — do not imitate Clifford, Bluey, Peppa Pig or any existing cartoon character.
```

### `images/b01/p3.png` — teks: “Nat sits.”

```
Scene: Nat the little girl sitting on the grass next to Pip, smiling.
Characters: Pip is a BIG, friendly young dog, about as tall as a small pony next to Nat; golden-orange fur with a cream muzzle and cream chest, one brown patch around his left eye, long floppy brown ears, round shiny dark eyes, big happy smile, a blue collar with a round yellow tag. Playful and a bit clumsy. Nat is a 5-year-old Southeast Asian girl with light brown skin, black hair in two short pigtails with yellow hair ties, round cheerful face; wears a green T-shirt with a small white star, blue shorts and red sneakers.
Style: Soft, warm children's picture-book illustration for toddlers (age 3). Hand-painted gouache/watercolor texture, thick friendly rounded outlines, bright but gentle colors, simple uncluttered background, big expressive faces, one clear main action in the middle of the picture. Landscape 3:2. ABSOLUTELY NO text, letters, numbers, speech bubbles or signs anywhere in the image. Original characters only — do not imitate Clifford, Bluey, Peppa Pig or any existing cartoon character.
```

### `images/b01/p4.png` — teks: “Pip naps.”

```
Scene: Pip lying down asleep on the grass, eyes closed, peaceful smile.
Characters: Pip is a BIG, friendly young dog, about as tall as a small pony next to Nat; golden-orange fur with a cream muzzle and cream chest, one brown patch around his left eye, long floppy brown ears, round shiny dark eyes, big happy smile, a blue collar with a round yellow tag. Playful and a bit clumsy.
Style: Soft, warm children's picture-book illustration for toddlers (age 3). Hand-painted gouache/watercolor texture, thick friendly rounded outlines, bright but gentle colors, simple uncluttered background, big expressive faces, one clear main action in the middle of the picture. Landscape 3:2. ABSOLUTELY NO text, letters, numbers, speech bubbles or signs anywhere in the image. Original characters only — do not imitate Clifford, Bluey, Peppa Pig or any existing cartoon character.
```

### `images/b01/p5.png` — teks: “Nat naps.”

```
Scene: Nat asleep, leaning against sleeping Pip like a big pillow.
Characters: Pip is a BIG, friendly young dog, about as tall as a small pony next to Nat; golden-orange fur with a cream muzzle and cream chest, one brown patch around his left eye, long floppy brown ears, round shiny dark eyes, big happy smile, a blue collar with a round yellow tag. Playful and a bit clumsy. Nat is a 5-year-old Southeast Asian girl with light brown skin, black hair in two short pigtails with yellow hair ties, round cheerful face; wears a green T-shirt with a small white star, blue shorts and red sneakers.
Style: Soft, warm children's picture-book illustration for toddlers (age 3). Hand-painted gouache/watercolor texture, thick friendly rounded outlines, bright but gentle colors, simple uncluttered background, big expressive faces, one clear main action in the middle of the picture. Landscape 3:2. ABSOLUTELY NO text, letters, numbers, speech bubbles or signs anywhere in the image. Original characters only — do not imitate Clifford, Bluey, Peppa Pig or any existing cartoon character.
```

### `images/b01/p6.png` — teks: “Tap, tap, tap!”

```
Scene: Nat awake, gently tapping Pip's big nose with one finger; Pip opens one eye.
Characters: Pip is a BIG, friendly young dog, about as tall as a small pony next to Nat; golden-orange fur with a cream muzzle and cream chest, one brown patch around his left eye, long floppy brown ears, round shiny dark eyes, big happy smile, a blue collar with a round yellow tag. Playful and a bit clumsy. Nat is a 5-year-old Southeast Asian girl with light brown skin, black hair in two short pigtails with yellow hair ties, round cheerful face; wears a green T-shirt with a small white star, blue shorts and red sneakers.
Style: Soft, warm children's picture-book illustration for toddlers (age 3). Hand-painted gouache/watercolor texture, thick friendly rounded outlines, bright but gentle colors, simple uncluttered background, big expressive faces, one clear main action in the middle of the picture. Landscape 3:2. ABSOLUTELY NO text, letters, numbers, speech bubbles or signs anywhere in the image. Original characters only — do not imitate Clifford, Bluey, Peppa Pig or any existing cartoon character.
```

---

## b02 · Tap, Tap

### `images/b02/cover.png` — sampul

```
Scene: Book cover (no title text): Nat holding a shiny tin can and a wooden spoon, Pip watching curiously
Characters: Pip is a BIG, friendly young dog, about as tall as a small pony next to Nat; golden-orange fur with a cream muzzle and cream chest, one brown patch around his left eye, long floppy brown ears, round shiny dark eyes, big happy smile, a blue collar with a round yellow tag. Playful and a bit clumsy. Nat is a 5-year-old Southeast Asian girl with light brown skin, black hair in two short pigtails with yellow hair ties, round cheerful face; wears a green T-shirt with a small white star, blue shorts and red sneakers.
Style: Soft, warm children's picture-book illustration for toddlers (age 3). Hand-painted gouache/watercolor texture, thick friendly rounded outlines, bright but gentle colors, simple uncluttered background, big expressive faces, one clear main action in the middle of the picture. Landscape 3:2. ABSOLUTELY NO text, letters, numbers, speech bubbles or signs anywhere in the image. Original characters only — do not imitate Clifford, Bluey, Peppa Pig or any existing cartoon character.
```

### `images/b02/p1.png` — teks: “Nat taps a tin.”

```
Scene: Nat tapping an empty shiny tin can with a wooden spoon like a drum.
Characters: Pip is a BIG, friendly young dog, about as tall as a small pony next to Nat; golden-orange fur with a cream muzzle and cream chest, one brown patch around his left eye, long floppy brown ears, round shiny dark eyes, big happy smile, a blue collar with a round yellow tag. Playful and a bit clumsy. Nat is a 5-year-old Southeast Asian girl with light brown skin, black hair in two short pigtails with yellow hair ties, round cheerful face; wears a green T-shirt with a small white star, blue shorts and red sneakers.
Style: Soft, warm children's picture-book illustration for toddlers (age 3). Hand-painted gouache/watercolor texture, thick friendly rounded outlines, bright but gentle colors, simple uncluttered background, big expressive faces, one clear main action in the middle of the picture. Landscape 3:2. ABSOLUTELY NO text, letters, numbers, speech bubbles or signs anywhere in the image. Original characters only — do not imitate Clifford, Bluey, Peppa Pig or any existing cartoon character.
```

### `images/b02/p2.png` — teks: “Tap, tap!”

```
Scene: Close-up of the wooden spoon tapping the tin, small motion lines showing the sound.
Characters: Pip is a BIG, friendly young dog, about as tall as a small pony next to Nat; golden-orange fur with a cream muzzle and cream chest, one brown patch around his left eye, long floppy brown ears, round shiny dark eyes, big happy smile, a blue collar with a round yellow tag. Playful and a bit clumsy. Nat is a 5-year-old Southeast Asian girl with light brown skin, black hair in two short pigtails with yellow hair ties, round cheerful face; wears a green T-shirt with a small white star, blue shorts and red sneakers.
Style: Soft, warm children's picture-book illustration for toddlers (age 3). Hand-painted gouache/watercolor texture, thick friendly rounded outlines, bright but gentle colors, simple uncluttered background, big expressive faces, one clear main action in the middle of the picture. Landscape 3:2. ABSOLUTELY NO text, letters, numbers, speech bubbles or signs anywhere in the image. Original characters only — do not imitate Clifford, Bluey, Peppa Pig or any existing cartoon character.
```

### `images/b02/p3.png` — teks: “Pip sits.”

```
Scene: Pip sitting and tilting his head, listening to the tapping.
Characters: Pip is a BIG, friendly young dog, about as tall as a small pony next to Nat; golden-orange fur with a cream muzzle and cream chest, one brown patch around his left eye, long floppy brown ears, round shiny dark eyes, big happy smile, a blue collar with a round yellow tag. Playful and a bit clumsy. Nat is a 5-year-old Southeast Asian girl with light brown skin, black hair in two short pigtails with yellow hair ties, round cheerful face; wears a green T-shirt with a small white star, blue shorts and red sneakers.
Style: Soft, warm children's picture-book illustration for toddlers (age 3). Hand-painted gouache/watercolor texture, thick friendly rounded outlines, bright but gentle colors, simple uncluttered background, big expressive faces, one clear main action in the middle of the picture. Landscape 3:2. ABSOLUTELY NO text, letters, numbers, speech bubbles or signs anywhere in the image. Original characters only — do not imitate Clifford, Bluey, Peppa Pig or any existing cartoon character.
```

### `images/b02/p4.png` — teks: “Pip pants.”

```
Scene: Pip panting happily with his tongue out, very excited.
Characters: Pip is a BIG, friendly young dog, about as tall as a small pony next to Nat; golden-orange fur with a cream muzzle and cream chest, one brown patch around his left eye, long floppy brown ears, round shiny dark eyes, big happy smile, a blue collar with a round yellow tag. Playful and a bit clumsy. Nat is a 5-year-old Southeast Asian girl with light brown skin, black hair in two short pigtails with yellow hair ties, round cheerful face; wears a green T-shirt with a small white star, blue shorts and red sneakers.
Style: Soft, warm children's picture-book illustration for toddlers (age 3). Hand-painted gouache/watercolor texture, thick friendly rounded outlines, bright but gentle colors, simple uncluttered background, big expressive faces, one clear main action in the middle of the picture. Landscape 3:2. ABSOLUTELY NO text, letters, numbers, speech bubbles or signs anywhere in the image. Original characters only — do not imitate Clifford, Bluey, Peppa Pig or any existing cartoon character.
```

### `images/b02/p5.png` — teks: “Pip tips the tin.”

```
Scene: Pip nudging the tin with his nose so it tips over and rolls.
Characters: Pip is a BIG, friendly young dog, about as tall as a small pony next to Nat; golden-orange fur with a cream muzzle and cream chest, one brown patch around his left eye, long floppy brown ears, round shiny dark eyes, big happy smile, a blue collar with a round yellow tag. Playful and a bit clumsy. Nat is a 5-year-old Southeast Asian girl with light brown skin, black hair in two short pigtails with yellow hair ties, round cheerful face; wears a green T-shirt with a small white star, blue shorts and red sneakers.
Style: Soft, warm children's picture-book illustration for toddlers (age 3). Hand-painted gouache/watercolor texture, thick friendly rounded outlines, bright but gentle colors, simple uncluttered background, big expressive faces, one clear main action in the middle of the picture. Landscape 3:2. ABSOLUTELY NO text, letters, numbers, speech bubbles or signs anywhere in the image. Original characters only — do not imitate Clifford, Bluey, Peppa Pig or any existing cartoon character.
```

### `images/b02/p6.png` — teks: “Pip, sit!”

```
Scene: Nat laughing and holding up one finger, asking Pip to sit; Pip sitting proudly.
Characters: Pip is a BIG, friendly young dog, about as tall as a small pony next to Nat; golden-orange fur with a cream muzzle and cream chest, one brown patch around his left eye, long floppy brown ears, round shiny dark eyes, big happy smile, a blue collar with a round yellow tag. Playful and a bit clumsy. Nat is a 5-year-old Southeast Asian girl with light brown skin, black hair in two short pigtails with yellow hair ties, round cheerful face; wears a green T-shirt with a small white star, blue shorts and red sneakers.
Style: Soft, warm children's picture-book illustration for toddlers (age 3). Hand-painted gouache/watercolor texture, thick friendly rounded outlines, bright but gentle colors, simple uncluttered background, big expressive faces, one clear main action in the middle of the picture. Landscape 3:2. ABSOLUTELY NO text, letters, numbers, speech bubbles or signs anywhere in the image. Original characters only — do not imitate Clifford, Bluey, Peppa Pig or any existing cartoon character.
```

---

## b03 · Pip Spins

### `images/b03/cover.png` — sampul

```
Scene: Book cover (no title text): Pip spinning in a circle chasing his own tail, motion lines around him
Characters: Pip is a BIG, friendly young dog, about as tall as a small pony next to Nat; golden-orange fur with a cream muzzle and cream chest, one brown patch around his left eye, long floppy brown ears, round shiny dark eyes, big happy smile, a blue collar with a round yellow tag. Playful and a bit clumsy.
Style: Soft, warm children's picture-book illustration for toddlers (age 3). Hand-painted gouache/watercolor texture, thick friendly rounded outlines, bright but gentle colors, simple uncluttered background, big expressive faces, one clear main action in the middle of the picture. Landscape 3:2. ABSOLUTELY NO text, letters, numbers, speech bubbles or signs anywhere in the image. Original characters only — do not imitate Clifford, Bluey, Peppa Pig or any existing cartoon character.
```

### `images/b03/p1.png` — teks: “Pip spins.”

```
Scene: Pip spinning in a circle chasing his tail, swirly motion lines.
Characters: Pip is a BIG, friendly young dog, about as tall as a small pony next to Nat; golden-orange fur with a cream muzzle and cream chest, one brown patch around his left eye, long floppy brown ears, round shiny dark eyes, big happy smile, a blue collar with a round yellow tag. Playful and a bit clumsy.
Style: Soft, warm children's picture-book illustration for toddlers (age 3). Hand-painted gouache/watercolor texture, thick friendly rounded outlines, bright but gentle colors, simple uncluttered background, big expressive faces, one clear main action in the middle of the picture. Landscape 3:2. ABSOLUTELY NO text, letters, numbers, speech bubbles or signs anywhere in the image. Original characters only — do not imitate Clifford, Bluey, Peppa Pig or any existing cartoon character.
```

### `images/b03/p2.png` — teks: “Spin, Pip, spin!”

```
Scene: Nat clapping and cheering while Pip spins faster.
Characters: Pip is a BIG, friendly young dog, about as tall as a small pony next to Nat; golden-orange fur with a cream muzzle and cream chest, one brown patch around his left eye, long floppy brown ears, round shiny dark eyes, big happy smile, a blue collar with a round yellow tag. Playful and a bit clumsy. Nat is a 5-year-old Southeast Asian girl with light brown skin, black hair in two short pigtails with yellow hair ties, round cheerful face; wears a green T-shirt with a small white star, blue shorts and red sneakers.
Style: Soft, warm children's picture-book illustration for toddlers (age 3). Hand-painted gouache/watercolor texture, thick friendly rounded outlines, bright but gentle colors, simple uncluttered background, big expressive faces, one clear main action in the middle of the picture. Landscape 3:2. ABSOLUTELY NO text, letters, numbers, speech bubbles or signs anywhere in the image. Original characters only — do not imitate Clifford, Bluey, Peppa Pig or any existing cartoon character.
```

### `images/b03/p3.png` — teks: “Pip tips!”

```
Scene: Pip dizzy and tipping over onto his side, funny dizzy eyes.
Characters: Pip is a BIG, friendly young dog, about as tall as a small pony next to Nat; golden-orange fur with a cream muzzle and cream chest, one brown patch around his left eye, long floppy brown ears, round shiny dark eyes, big happy smile, a blue collar with a round yellow tag. Playful and a bit clumsy.
Style: Soft, warm children's picture-book illustration for toddlers (age 3). Hand-painted gouache/watercolor texture, thick friendly rounded outlines, bright but gentle colors, simple uncluttered background, big expressive faces, one clear main action in the middle of the picture. Landscape 3:2. ABSOLUTELY NO text, letters, numbers, speech bubbles or signs anywhere in the image. Original characters only — do not imitate Clifford, Bluey, Peppa Pig or any existing cartoon character.
```

### `images/b03/p4.png` — teks: “Nat pats Pip.”

```
Scene: Nat kneeling and gently patting dizzy Pip on the head.
Characters: Pip is a BIG, friendly young dog, about as tall as a small pony next to Nat; golden-orange fur with a cream muzzle and cream chest, one brown patch around his left eye, long floppy brown ears, round shiny dark eyes, big happy smile, a blue collar with a round yellow tag. Playful and a bit clumsy. Nat is a 5-year-old Southeast Asian girl with light brown skin, black hair in two short pigtails with yellow hair ties, round cheerful face; wears a green T-shirt with a small white star, blue shorts and red sneakers.
Style: Soft, warm children's picture-book illustration for toddlers (age 3). Hand-painted gouache/watercolor texture, thick friendly rounded outlines, bright but gentle colors, simple uncluttered background, big expressive faces, one clear main action in the middle of the picture. Landscape 3:2. ABSOLUTELY NO text, letters, numbers, speech bubbles or signs anywhere in the image. Original characters only — do not imitate Clifford, Bluey, Peppa Pig or any existing cartoon character.
```

### `images/b03/p5.png` — teks: “Pip naps.”

```
Scene: Pip napping peacefully with his head on Nat's lap.
Characters: Pip is a BIG, friendly young dog, about as tall as a small pony next to Nat; golden-orange fur with a cream muzzle and cream chest, one brown patch around his left eye, long floppy brown ears, round shiny dark eyes, big happy smile, a blue collar with a round yellow tag. Playful and a bit clumsy. Nat is a 5-year-old Southeast Asian girl with light brown skin, black hair in two short pigtails with yellow hair ties, round cheerful face; wears a green T-shirt with a small white star, blue shorts and red sneakers.
Style: Soft, warm children's picture-book illustration for toddlers (age 3). Hand-painted gouache/watercolor texture, thick friendly rounded outlines, bright but gentle colors, simple uncluttered background, big expressive faces, one clear main action in the middle of the picture. Landscape 3:2. ABSOLUTELY NO text, letters, numbers, speech bubbles or signs anywhere in the image. Original characters only — do not imitate Clifford, Bluey, Peppa Pig or any existing cartoon character.
```

---

## b04 · Dig, Pip, Dig!

### `images/b04/cover.png` — sampul

```
Scene: Book cover (no title text): Pip digging in a sandbox, sand flying behind him
Characters: Pip is a BIG, friendly young dog, about as tall as a small pony next to Nat; golden-orange fur with a cream muzzle and cream chest, one brown patch around his left eye, long floppy brown ears, round shiny dark eyes, big happy smile, a blue collar with a round yellow tag. Playful and a bit clumsy.
Style: Soft, warm children's picture-book illustration for toddlers (age 3). Hand-painted gouache/watercolor texture, thick friendly rounded outlines, bright but gentle colors, simple uncluttered background, big expressive faces, one clear main action in the middle of the picture. Landscape 3:2. ABSOLUTELY NO text, letters, numbers, speech bubbles or signs anywhere in the image. Original characters only — do not imitate Clifford, Bluey, Peppa Pig or any existing cartoon character.
```

### `images/b04/p1.png` — teks: “Pip digs.”

```
Scene: Pip digging in a sandbox with his front paws.
Characters: Pip is a BIG, friendly young dog, about as tall as a small pony next to Nat; golden-orange fur with a cream muzzle and cream chest, one brown patch around his left eye, long floppy brown ears, round shiny dark eyes, big happy smile, a blue collar with a round yellow tag. Playful and a bit clumsy.
Style: Soft, warm children's picture-book illustration for toddlers (age 3). Hand-painted gouache/watercolor texture, thick friendly rounded outlines, bright but gentle colors, simple uncluttered background, big expressive faces, one clear main action in the middle of the picture. Landscape 3:2. ABSOLUTELY NO text, letters, numbers, speech bubbles or signs anywhere in the image. Original characters only — do not imitate Clifford, Bluey, Peppa Pig or any existing cartoon character.
```

### `images/b04/p2.png` — teks: “Dig, Pip, dig!”

```
Scene: Sand flying everywhere as Pip digs fast; Nat watching and laughing.
Characters: Pip is a BIG, friendly young dog, about as tall as a small pony next to Nat; golden-orange fur with a cream muzzle and cream chest, one brown patch around his left eye, long floppy brown ears, round shiny dark eyes, big happy smile, a blue collar with a round yellow tag. Playful and a bit clumsy. Nat is a 5-year-old Southeast Asian girl with light brown skin, black hair in two short pigtails with yellow hair ties, round cheerful face; wears a green T-shirt with a small white star, blue shorts and red sneakers.
Style: Soft, warm children's picture-book illustration for toddlers (age 3). Hand-painted gouache/watercolor texture, thick friendly rounded outlines, bright but gentle colors, simple uncluttered background, big expressive faces, one clear main action in the middle of the picture. Landscape 3:2. ABSOLUTELY NO text, letters, numbers, speech bubbles or signs anywhere in the image. Original characters only — do not imitate Clifford, Bluey, Peppa Pig or any existing cartoon character.
```

### `images/b04/p3.png` — teks: “Pip digs in the sand.”

```
Scene: Pip with his head deep in a hole in the sand, tail up.
Characters: Pip is a BIG, friendly young dog, about as tall as a small pony next to Nat; golden-orange fur with a cream muzzle and cream chest, one brown patch around his left eye, long floppy brown ears, round shiny dark eyes, big happy smile, a blue collar with a round yellow tag. Playful and a bit clumsy.
Style: Soft, warm children's picture-book illustration for toddlers (age 3). Hand-painted gouache/watercolor texture, thick friendly rounded outlines, bright but gentle colors, simple uncluttered background, big expressive faces, one clear main action in the middle of the picture. Landscape 3:2. ABSOLUTELY NO text, letters, numbers, speech bubbles or signs anywhere in the image. Original characters only — do not imitate Clifford, Bluey, Peppa Pig or any existing cartoon character.
```

### `images/b04/p4.png` — teks: “Pip got a pot!”

```
Scene: Pip proudly holding a small old clay pot in his mouth.
Characters: Pip is a BIG, friendly young dog, about as tall as a small pony next to Nat; golden-orange fur with a cream muzzle and cream chest, one brown patch around his left eye, long floppy brown ears, round shiny dark eyes, big happy smile, a blue collar with a round yellow tag. Playful and a bit clumsy.
Style: Soft, warm children's picture-book illustration for toddlers (age 3). Hand-painted gouache/watercolor texture, thick friendly rounded outlines, bright but gentle colors, simple uncluttered background, big expressive faces, one clear main action in the middle of the picture. Landscape 3:2. ABSOLUTELY NO text, letters, numbers, speech bubbles or signs anywhere in the image. Original characters only — do not imitate Clifford, Bluey, Peppa Pig or any existing cartoon character.
```

### `images/b04/p5.png` — teks: “Nat pats Pip.”

```
Scene: Nat hugging and patting Pip, holding the little pot.
Characters: Pip is a BIG, friendly young dog, about as tall as a small pony next to Nat; golden-orange fur with a cream muzzle and cream chest, one brown patch around his left eye, long floppy brown ears, round shiny dark eyes, big happy smile, a blue collar with a round yellow tag. Playful and a bit clumsy. Nat is a 5-year-old Southeast Asian girl with light brown skin, black hair in two short pigtails with yellow hair ties, round cheerful face; wears a green T-shirt with a small white star, blue shorts and red sneakers.
Style: Soft, warm children's picture-book illustration for toddlers (age 3). Hand-painted gouache/watercolor texture, thick friendly rounded outlines, bright but gentle colors, simple uncluttered background, big expressive faces, one clear main action in the middle of the picture. Landscape 3:2. ABSOLUTELY NO text, letters, numbers, speech bubbles or signs anywhere in the image. Original characters only — do not imitate Clifford, Bluey, Peppa Pig or any existing cartoon character.
```

### `images/b04/p6.png` — teks: “Top dog, Pip!”

```
Scene: Pip sitting proudly with the pot on his head like a crown.
Characters: Pip is a BIG, friendly young dog, about as tall as a small pony next to Nat; golden-orange fur with a cream muzzle and cream chest, one brown patch around his left eye, long floppy brown ears, round shiny dark eyes, big happy smile, a blue collar with a round yellow tag. Playful and a bit clumsy.
Style: Soft, warm children's picture-book illustration for toddlers (age 3). Hand-painted gouache/watercolor texture, thick friendly rounded outlines, bright but gentle colors, simple uncluttered background, big expressive faces, one clear main action in the middle of the picture. Landscape 3:2. ABSOLUTELY NO text, letters, numbers, speech bubbles or signs anywhere in the image. Original characters only — do not imitate Clifford, Bluey, Peppa Pig or any existing cartoon character.
```

---

## b05 · Stop, Pip!

### `images/b05/cover.png` — sampul

```
Scene: Book cover (no title text): Pip running toward a small brown puppy, Nat holding up her hand
Characters: Pip is a BIG, friendly young dog, about as tall as a small pony next to Nat; golden-orange fur with a cream muzzle and cream chest, one brown patch around his left eye, long floppy brown ears, round shiny dark eyes, big happy smile, a blue collar with a round yellow tag. Playful and a bit clumsy. Nat is a 5-year-old Southeast Asian girl with light brown skin, black hair in two short pigtails with yellow hair ties, round cheerful face; wears a green T-shirt with a small white star, blue shorts and red sneakers.
Style: Soft, warm children's picture-book illustration for toddlers (age 3). Hand-painted gouache/watercolor texture, thick friendly rounded outlines, bright but gentle colors, simple uncluttered background, big expressive faces, one clear main action in the middle of the picture. Landscape 3:2. ABSOLUTELY NO text, letters, numbers, speech bubbles or signs anywhere in the image. Original characters only — do not imitate Clifford, Bluey, Peppa Pig or any existing cartoon character.
```

### `images/b05/p1.png` — teks: “Pip is on a mat.”

```
Scene: Pip lying on a doormat in front of a house.
Characters: Pip is a BIG, friendly young dog, about as tall as a small pony next to Nat; golden-orange fur with a cream muzzle and cream chest, one brown patch around his left eye, long floppy brown ears, round shiny dark eyes, big happy smile, a blue collar with a round yellow tag. Playful and a bit clumsy. Nat is a 5-year-old Southeast Asian girl with light brown skin, black hair in two short pigtails with yellow hair ties, round cheerful face; wears a green T-shirt with a small white star, blue shorts and red sneakers.
Style: Soft, warm children's picture-book illustration for toddlers (age 3). Hand-painted gouache/watercolor texture, thick friendly rounded outlines, bright but gentle colors, simple uncluttered background, big expressive faces, one clear main action in the middle of the picture. Landscape 3:2. ABSOLUTELY NO text, letters, numbers, speech bubbles or signs anywhere in the image. Original characters only — do not imitate Clifford, Bluey, Peppa Pig or any existing cartoon character.
```

### `images/b05/p2.png` — teks: “Pip spots a dog.”

```
Scene: Pip lifting his head and seeing a small brown puppy across the grass.
Characters: Pip is a BIG, friendly young dog, about as tall as a small pony next to Nat; golden-orange fur with a cream muzzle and cream chest, one brown patch around his left eye, long floppy brown ears, round shiny dark eyes, big happy smile, a blue collar with a round yellow tag. Playful and a bit clumsy. Nat is a 5-year-old Southeast Asian girl with light brown skin, black hair in two short pigtails with yellow hair ties, round cheerful face; wears a green T-shirt with a small white star, blue shorts and red sneakers.
Style: Soft, warm children's picture-book illustration for toddlers (age 3). Hand-painted gouache/watercolor texture, thick friendly rounded outlines, bright but gentle colors, simple uncluttered background, big expressive faces, one clear main action in the middle of the picture. Landscape 3:2. ABSOLUTELY NO text, letters, numbers, speech bubbles or signs anywhere in the image. Original characters only — do not imitate Clifford, Bluey, Peppa Pig or any existing cartoon character.
```

### `images/b05/p3.png` — teks: “Stop, Pip, stop!”

```
Scene: Pip running toward the puppy; Nat running after him, hand raised.
Characters: Pip is a BIG, friendly young dog, about as tall as a small pony next to Nat; golden-orange fur with a cream muzzle and cream chest, one brown patch around his left eye, long floppy brown ears, round shiny dark eyes, big happy smile, a blue collar with a round yellow tag. Playful and a bit clumsy. Nat is a 5-year-old Southeast Asian girl with light brown skin, black hair in two short pigtails with yellow hair ties, round cheerful face; wears a green T-shirt with a small white star, blue shorts and red sneakers.
Style: Soft, warm children's picture-book illustration for toddlers (age 3). Hand-painted gouache/watercolor texture, thick friendly rounded outlines, bright but gentle colors, simple uncluttered background, big expressive faces, one clear main action in the middle of the picture. Landscape 3:2. ABSOLUTELY NO text, letters, numbers, speech bubbles or signs anywhere in the image. Original characters only — do not imitate Clifford, Bluey, Peppa Pig or any existing cartoon character.
```

### `images/b05/p4.png` — teks: “Pip and the dog sit.”

```
Scene: Pip and the small puppy sitting side by side, sniffing noses kindly.
Characters: Pip is a BIG, friendly young dog, about as tall as a small pony next to Nat; golden-orange fur with a cream muzzle and cream chest, one brown patch around his left eye, long floppy brown ears, round shiny dark eyes, big happy smile, a blue collar with a round yellow tag. Playful and a bit clumsy. Nat is a 5-year-old Southeast Asian girl with light brown skin, black hair in two short pigtails with yellow hair ties, round cheerful face; wears a green T-shirt with a small white star, blue shorts and red sneakers.
Style: Soft, warm children's picture-book illustration for toddlers (age 3). Hand-painted gouache/watercolor texture, thick friendly rounded outlines, bright but gentle colors, simple uncluttered background, big expressive faces, one clear main action in the middle of the picture. Landscape 3:2. ABSOLUTELY NO text, letters, numbers, speech bubbles or signs anywhere in the image. Original characters only — do not imitate Clifford, Bluey, Peppa Pig or any existing cartoon character.
```

### `images/b05/p5.png` — teks: “Pip and the dog nap on the mat.”

```
Scene: Big Pip and the tiny puppy asleep together on the doormat.
Characters: Pip is a BIG, friendly young dog, about as tall as a small pony next to Nat; golden-orange fur with a cream muzzle and cream chest, one brown patch around his left eye, long floppy brown ears, round shiny dark eyes, big happy smile, a blue collar with a round yellow tag. Playful and a bit clumsy. Nat is a 5-year-old Southeast Asian girl with light brown skin, black hair in two short pigtails with yellow hair ties, round cheerful face; wears a green T-shirt with a small white star, blue shorts and red sneakers.
Style: Soft, warm children's picture-book illustration for toddlers (age 3). Hand-painted gouache/watercolor texture, thick friendly rounded outlines, bright but gentle colors, simple uncluttered background, big expressive faces, one clear main action in the middle of the picture. Landscape 3:2. ABSOLUTELY NO text, letters, numbers, speech bubbles or signs anywhere in the image. Original characters only — do not imitate Clifford, Bluey, Peppa Pig or any existing cartoon character.
```

### `images/b05/p6.png` — teks: “Nat pats Pip and the dog.”

```
Scene: Nat gently patting both sleeping dogs.
Characters: Pip is a BIG, friendly young dog, about as tall as a small pony next to Nat; golden-orange fur with a cream muzzle and cream chest, one brown patch around his left eye, long floppy brown ears, round shiny dark eyes, big happy smile, a blue collar with a round yellow tag. Playful and a bit clumsy. Nat is a 5-year-old Southeast Asian girl with light brown skin, black hair in two short pigtails with yellow hair ties, round cheerful face; wears a green T-shirt with a small white star, blue shorts and red sneakers.
Style: Soft, warm children's picture-book illustration for toddlers (age 3). Hand-painted gouache/watercolor texture, thick friendly rounded outlines, bright but gentle colors, simple uncluttered background, big expressive faces, one clear main action in the middle of the picture. Landscape 3:2. ABSOLUTELY NO text, letters, numbers, speech bubbles or signs anywhere in the image. Original characters only — do not imitate Clifford, Bluey, Peppa Pig or any existing cartoon character.
```

---

## b06 · The Red Cup

### `images/b06/cover.png` — sampul

```
Scene: Book cover (no title text): Nat holding a bright red cup, Pip looking up at it
Characters: Pip is a BIG, friendly young dog, about as tall as a small pony next to Nat; golden-orange fur with a cream muzzle and cream chest, one brown patch around his left eye, long floppy brown ears, round shiny dark eyes, big happy smile, a blue collar with a round yellow tag. Playful and a bit clumsy. Nat is a 5-year-old Southeast Asian girl with light brown skin, black hair in two short pigtails with yellow hair ties, round cheerful face; wears a green T-shirt with a small white star, blue shorts and red sneakers.
Style: Soft, warm children's picture-book illustration for toddlers (age 3). Hand-painted gouache/watercolor texture, thick friendly rounded outlines, bright but gentle colors, simple uncluttered background, big expressive faces, one clear main action in the middle of the picture. Landscape 3:2. ABSOLUTELY NO text, letters, numbers, speech bubbles or signs anywhere in the image. Original characters only — do not imitate Clifford, Bluey, Peppa Pig or any existing cartoon character.
```

### `images/b06/p1.png` — teks: “Nat got a red cup.”

```
Scene: Nat holding up a bright red plastic cup, happy.
Characters: Pip is a BIG, friendly young dog, about as tall as a small pony next to Nat; golden-orange fur with a cream muzzle and cream chest, one brown patch around his left eye, long floppy brown ears, round shiny dark eyes, big happy smile, a blue collar with a round yellow tag. Playful and a bit clumsy. Nat is a 5-year-old Southeast Asian girl with light brown skin, black hair in two short pigtails with yellow hair ties, round cheerful face; wears a green T-shirt with a small white star, blue shorts and red sneakers.
Style: Soft, warm children's picture-book illustration for toddlers (age 3). Hand-painted gouache/watercolor texture, thick friendly rounded outlines, bright but gentle colors, simple uncluttered background, big expressive faces, one clear main action in the middle of the picture. Landscape 3:2. ABSOLUTELY NO text, letters, numbers, speech bubbles or signs anywhere in the image. Original characters only — do not imitate Clifford, Bluey, Peppa Pig or any existing cartoon character.
```

### `images/b06/p2.png` — teks: “Pip runs to the cup.”

```
Scene: Pip running toward the red cup, ears flapping.
Characters: Pip is a BIG, friendly young dog, about as tall as a small pony next to Nat; golden-orange fur with a cream muzzle and cream chest, one brown patch around his left eye, long floppy brown ears, round shiny dark eyes, big happy smile, a blue collar with a round yellow tag. Playful and a bit clumsy. Nat is a 5-year-old Southeast Asian girl with light brown skin, black hair in two short pigtails with yellow hair ties, round cheerful face; wears a green T-shirt with a small white star, blue shorts and red sneakers.
Style: Soft, warm children's picture-book illustration for toddlers (age 3). Hand-painted gouache/watercolor texture, thick friendly rounded outlines, bright but gentle colors, simple uncluttered background, big expressive faces, one clear main action in the middle of the picture. Landscape 3:2. ABSOLUTELY NO text, letters, numbers, speech bubbles or signs anywhere in the image. Original characters only — do not imitate Clifford, Bluey, Peppa Pig or any existing cartoon character.
```

### `images/b06/p3.png` — teks: “Pip tips the red cup.”

```
Scene: Pip bumping the cup so it tips over, water splashing out.
Characters: Pip is a BIG, friendly young dog, about as tall as a small pony next to Nat; golden-orange fur with a cream muzzle and cream chest, one brown patch around his left eye, long floppy brown ears, round shiny dark eyes, big happy smile, a blue collar with a round yellow tag. Playful and a bit clumsy. Nat is a 5-year-old Southeast Asian girl with light brown skin, black hair in two short pigtails with yellow hair ties, round cheerful face; wears a green T-shirt with a small white star, blue shorts and red sneakers.
Style: Soft, warm children's picture-book illustration for toddlers (age 3). Hand-painted gouache/watercolor texture, thick friendly rounded outlines, bright but gentle colors, simple uncluttered background, big expressive faces, one clear main action in the middle of the picture. Landscape 3:2. ABSOLUTELY NO text, letters, numbers, speech bubbles or signs anywhere in the image. Original characters only — do not imitate Clifford, Bluey, Peppa Pig or any existing cartoon character.
```

### `images/b06/p4.png` — teks: “Mud!”

```
Scene: A big puddle of mud where the water spilled on the dirt.
Characters: Pip is a BIG, friendly young dog, about as tall as a small pony next to Nat; golden-orange fur with a cream muzzle and cream chest, one brown patch around his left eye, long floppy brown ears, round shiny dark eyes, big happy smile, a blue collar with a round yellow tag. Playful and a bit clumsy. Nat is a 5-year-old Southeast Asian girl with light brown skin, black hair in two short pigtails with yellow hair ties, round cheerful face; wears a green T-shirt with a small white star, blue shorts and red sneakers.
Style: Soft, warm children's picture-book illustration for toddlers (age 3). Hand-painted gouache/watercolor texture, thick friendly rounded outlines, bright but gentle colors, simple uncluttered background, big expressive faces, one clear main action in the middle of the picture. Landscape 3:2. ABSOLUTELY NO text, letters, numbers, speech bubbles or signs anywhere in the image. Original characters only — do not imitate Clifford, Bluey, Peppa Pig or any existing cartoon character.
```

### `images/b06/p5.png` — teks: “Pip is in the mud.”

```
Scene: Pip rolling happily in the mud, covered in brown spots.
Characters: Pip is a BIG, friendly young dog, about as tall as a small pony next to Nat; golden-orange fur with a cream muzzle and cream chest, one brown patch around his left eye, long floppy brown ears, round shiny dark eyes, big happy smile, a blue collar with a round yellow tag. Playful and a bit clumsy. Nat is a 5-year-old Southeast Asian girl with light brown skin, black hair in two short pigtails with yellow hair ties, round cheerful face; wears a green T-shirt with a small white star, blue shorts and red sneakers.
Style: Soft, warm children's picture-book illustration for toddlers (age 3). Hand-painted gouache/watercolor texture, thick friendly rounded outlines, bright but gentle colors, simple uncluttered background, big expressive faces, one clear main action in the middle of the picture. Landscape 3:2. ABSOLUTELY NO text, letters, numbers, speech bubbles or signs anywhere in the image. Original characters only — do not imitate Clifford, Bluey, Peppa Pig or any existing cartoon character.
```

### `images/b06/p6.png` — teks: “Nat and Pip run in the sun.”

```
Scene: Nat and muddy Pip running together on the grass under a big sun.
Characters: Pip is a BIG, friendly young dog, about as tall as a small pony next to Nat; golden-orange fur with a cream muzzle and cream chest, one brown patch around his left eye, long floppy brown ears, round shiny dark eyes, big happy smile, a blue collar with a round yellow tag. Playful and a bit clumsy. Nat is a 5-year-old Southeast Asian girl with light brown skin, black hair in two short pigtails with yellow hair ties, round cheerful face; wears a green T-shirt with a small white star, blue shorts and red sneakers.
Style: Soft, warm children's picture-book illustration for toddlers (age 3). Hand-painted gouache/watercolor texture, thick friendly rounded outlines, bright but gentle colors, simple uncluttered background, big expressive faces, one clear main action in the middle of the picture. Landscape 3:2. ABSOLUTELY NO text, letters, numbers, speech bubbles or signs anywhere in the image. Original characters only — do not imitate Clifford, Bluey, Peppa Pig or any existing cartoon character.
```

---

## b07 · Pip and Kit

### `images/b07/cover.png` — sampul

```
Scene: Book cover (no title text): Pip and Kit the grey cat looking at each other curiously
Characters: Pip is a BIG, friendly young dog, about as tall as a small pony next to Nat; golden-orange fur with a cream muzzle and cream chest, one brown patch around his left eye, long floppy brown ears, round shiny dark eyes, big happy smile, a blue collar with a round yellow tag. Playful and a bit clumsy. Kit is a small grey tabby cat with white paws, a white tip on her tail and bright green eyes. Calm and a little bit shy.
Style: Soft, warm children's picture-book illustration for toddlers (age 3). Hand-painted gouache/watercolor texture, thick friendly rounded outlines, bright but gentle colors, simple uncluttered background, big expressive faces, one clear main action in the middle of the picture. Landscape 3:2. ABSOLUTELY NO text, letters, numbers, speech bubbles or signs anywhere in the image. Original characters only — do not imitate Clifford, Bluey, Peppa Pig or any existing cartoon character.
```

### `images/b07/p1.png` — teks: “Kit is a cat.”

```
Scene: Kit, a small grey striped cat, sitting and looking at the reader.
Characters: Pip is a BIG, friendly young dog, about as tall as a small pony next to Nat; golden-orange fur with a cream muzzle and cream chest, one brown patch around his left eye, long floppy brown ears, round shiny dark eyes, big happy smile, a blue collar with a round yellow tag. Playful and a bit clumsy. Kit is a small grey tabby cat with white paws, a white tip on her tail and bright green eyes. Calm and a little bit shy.
Style: Soft, warm children's picture-book illustration for toddlers (age 3). Hand-painted gouache/watercolor texture, thick friendly rounded outlines, bright but gentle colors, simple uncluttered background, big expressive faces, one clear main action in the middle of the picture. Landscape 3:2. ABSOLUTELY NO text, letters, numbers, speech bubbles or signs anywhere in the image. Original characters only — do not imitate Clifford, Bluey, Peppa Pig or any existing cartoon character.
```

### `images/b07/p2.png` — teks: “Kit sits on a rug.”

```
Scene: Kit curled up on a round red rug inside the house.
Characters: Pip is a BIG, friendly young dog, about as tall as a small pony next to Nat; golden-orange fur with a cream muzzle and cream chest, one brown patch around his left eye, long floppy brown ears, round shiny dark eyes, big happy smile, a blue collar with a round yellow tag. Playful and a bit clumsy. Kit is a small grey tabby cat with white paws, a white tip on her tail and bright green eyes. Calm and a little bit shy.
Style: Soft, warm children's picture-book illustration for toddlers (age 3). Hand-painted gouache/watercolor texture, thick friendly rounded outlines, bright but gentle colors, simple uncluttered background, big expressive faces, one clear main action in the middle of the picture. Landscape 3:2. ABSOLUTELY NO text, letters, numbers, speech bubbles or signs anywhere in the image. Original characters only — do not imitate Clifford, Bluey, Peppa Pig or any existing cartoon character.
```

### `images/b07/p3.png` — teks: “Pip runs up to Kit.”

```
Scene: Big Pip bounding happily toward Kit on the rug.
Characters: Pip is a BIG, friendly young dog, about as tall as a small pony next to Nat; golden-orange fur with a cream muzzle and cream chest, one brown patch around his left eye, long floppy brown ears, round shiny dark eyes, big happy smile, a blue collar with a round yellow tag. Playful and a bit clumsy. Kit is a small grey tabby cat with white paws, a white tip on her tail and bright green eyes. Calm and a little bit shy.
Style: Soft, warm children's picture-book illustration for toddlers (age 3). Hand-painted gouache/watercolor texture, thick friendly rounded outlines, bright but gentle colors, simple uncluttered background, big expressive faces, one clear main action in the middle of the picture. Landscape 3:2. ABSOLUTELY NO text, letters, numbers, speech bubbles or signs anywhere in the image. Original characters only — do not imitate Clifford, Bluey, Peppa Pig or any existing cartoon character.
```

### `images/b07/p4.png` — teks: “Kit runs!”

```
Scene: Kit running away quickly with a surprised face, tail up.
Characters: Pip is a BIG, friendly young dog, about as tall as a small pony next to Nat; golden-orange fur with a cream muzzle and cream chest, one brown patch around his left eye, long floppy brown ears, round shiny dark eyes, big happy smile, a blue collar with a round yellow tag. Playful and a bit clumsy. Kit is a small grey tabby cat with white paws, a white tip on her tail and bright green eyes. Calm and a little bit shy.
Style: Soft, warm children's picture-book illustration for toddlers (age 3). Hand-painted gouache/watercolor texture, thick friendly rounded outlines, bright but gentle colors, simple uncluttered background, big expressive faces, one clear main action in the middle of the picture. Landscape 3:2. ABSOLUTELY NO text, letters, numbers, speech bubbles or signs anywhere in the image. Original characters only — do not imitate Clifford, Bluey, Peppa Pig or any existing cartoon character.
```

### `images/b07/p5.png` — teks: “Kit sits on top.”

```
Scene: Kit sitting on top of a tall bookshelf, looking down at Pip.
Characters: Pip is a BIG, friendly young dog, about as tall as a small pony next to Nat; golden-orange fur with a cream muzzle and cream chest, one brown patch around his left eye, long floppy brown ears, round shiny dark eyes, big happy smile, a blue collar with a round yellow tag. Playful and a bit clumsy. Kit is a small grey tabby cat with white paws, a white tip on her tail and bright green eyes. Calm and a little bit shy.
Style: Soft, warm children's picture-book illustration for toddlers (age 3). Hand-painted gouache/watercolor texture, thick friendly rounded outlines, bright but gentle colors, simple uncluttered background, big expressive faces, one clear main action in the middle of the picture. Landscape 3:2. ABSOLUTELY NO text, letters, numbers, speech bubbles or signs anywhere in the image. Original characters only — do not imitate Clifford, Bluey, Peppa Pig or any existing cartoon character.
```

### `images/b07/p6.png` — teks: “Pip and Kit nap in the sun.”

```
Scene: Pip and Kit napping together in a sunny spot by the window, friends now.
Characters: Pip is a BIG, friendly young dog, about as tall as a small pony next to Nat; golden-orange fur with a cream muzzle and cream chest, one brown patch around his left eye, long floppy brown ears, round shiny dark eyes, big happy smile, a blue collar with a round yellow tag. Playful and a bit clumsy. Kit is a small grey tabby cat with white paws, a white tip on her tail and bright green eyes. Calm and a little bit shy.
Style: Soft, warm children's picture-book illustration for toddlers (age 3). Hand-painted gouache/watercolor texture, thick friendly rounded outlines, bright but gentle colors, simple uncluttered background, big expressive faces, one clear main action in the middle of the picture. Landscape 3:2. ABSOLUTELY NO text, letters, numbers, speech bubbles or signs anywhere in the image. Original characters only — do not imitate Clifford, Bluey, Peppa Pig or any existing cartoon character.
```

---

## b08 · The Big Hat

### `images/b08/cover.png` — sampul

```
Scene: Book cover (no title text): Nat wearing a huge red sun hat that covers her eyes, Pip laughing
Characters: Pip is a BIG, friendly young dog, about as tall as a small pony next to Nat; golden-orange fur with a cream muzzle and cream chest, one brown patch around his left eye, long floppy brown ears, round shiny dark eyes, big happy smile, a blue collar with a round yellow tag. Playful and a bit clumsy. Nat is a 5-year-old Southeast Asian girl with light brown skin, black hair in two short pigtails with yellow hair ties, round cheerful face; wears a green T-shirt with a small white star, blue shorts and red sneakers.
Style: Soft, warm children's picture-book illustration for toddlers (age 3). Hand-painted gouache/watercolor texture, thick friendly rounded outlines, bright but gentle colors, simple uncluttered background, big expressive faces, one clear main action in the middle of the picture. Landscape 3:2. ABSOLUTELY NO text, letters, numbers, speech bubbles or signs anywhere in the image. Original characters only — do not imitate Clifford, Bluey, Peppa Pig or any existing cartoon character.
```

### `images/b08/p1.png` — teks: “Nat has a big hat.”

```
Scene: Nat wearing a very big red sun hat that almost covers her eyes.
Characters: Pip is a BIG, friendly young dog, about as tall as a small pony next to Nat; golden-orange fur with a cream muzzle and cream chest, one brown patch around his left eye, long floppy brown ears, round shiny dark eyes, big happy smile, a blue collar with a round yellow tag. Playful and a bit clumsy. Nat is a 5-year-old Southeast Asian girl with light brown skin, black hair in two short pigtails with yellow hair ties, round cheerful face; wears a green T-shirt with a small white star, blue shorts and red sneakers.
Style: Soft, warm children's picture-book illustration for toddlers (age 3). Hand-painted gouache/watercolor texture, thick friendly rounded outlines, bright but gentle colors, simple uncluttered background, big expressive faces, one clear main action in the middle of the picture. Landscape 3:2. ABSOLUTELY NO text, letters, numbers, speech bubbles or signs anywhere in the image. Original characters only — do not imitate Clifford, Bluey, Peppa Pig or any existing cartoon character.
```

### `images/b08/p2.png` — teks: “The hat is red.”

```
Scene: Close-up of the big red hat with a yellow ribbon.
Characters: Pip is a BIG, friendly young dog, about as tall as a small pony next to Nat; golden-orange fur with a cream muzzle and cream chest, one brown patch around his left eye, long floppy brown ears, round shiny dark eyes, big happy smile, a blue collar with a round yellow tag. Playful and a bit clumsy. Nat is a 5-year-old Southeast Asian girl with light brown skin, black hair in two short pigtails with yellow hair ties, round cheerful face; wears a green T-shirt with a small white star, blue shorts and red sneakers.
Style: Soft, warm children's picture-book illustration for toddlers (age 3). Hand-painted gouache/watercolor texture, thick friendly rounded outlines, bright but gentle colors, simple uncluttered background, big expressive faces, one clear main action in the middle of the picture. Landscape 3:2. ABSOLUTELY NO text, letters, numbers, speech bubbles or signs anywhere in the image. Original characters only — do not imitate Clifford, Bluey, Peppa Pig or any existing cartoon character.
```

### `images/b08/p3.png` — teks: “Pip gets the hat.”

```
Scene: The wind blows the hat off; Pip catches it in his mouth.
Characters: Pip is a BIG, friendly young dog, about as tall as a small pony next to Nat; golden-orange fur with a cream muzzle and cream chest, one brown patch around his left eye, long floppy brown ears, round shiny dark eyes, big happy smile, a blue collar with a round yellow tag. Playful and a bit clumsy. Nat is a 5-year-old Southeast Asian girl with light brown skin, black hair in two short pigtails with yellow hair ties, round cheerful face; wears a green T-shirt with a small white star, blue shorts and red sneakers.
Style: Soft, warm children's picture-book illustration for toddlers (age 3). Hand-painted gouache/watercolor texture, thick friendly rounded outlines, bright but gentle colors, simple uncluttered background, big expressive faces, one clear main action in the middle of the picture. Landscape 3:2. ABSOLUTELY NO text, letters, numbers, speech bubbles or signs anywhere in the image. Original characters only — do not imitate Clifford, Bluey, Peppa Pig or any existing cartoon character.
```

### `images/b08/p4.png` — teks: “Pip hops in the hat!”

```
Scene: Pip sitting inside the upside-down big hat like a boat, very silly.
Characters: Pip is a BIG, friendly young dog, about as tall as a small pony next to Nat; golden-orange fur with a cream muzzle and cream chest, one brown patch around his left eye, long floppy brown ears, round shiny dark eyes, big happy smile, a blue collar with a round yellow tag. Playful and a bit clumsy. Nat is a 5-year-old Southeast Asian girl with light brown skin, black hair in two short pigtails with yellow hair ties, round cheerful face; wears a green T-shirt with a small white star, blue shorts and red sneakers.
Style: Soft, warm children's picture-book illustration for toddlers (age 3). Hand-painted gouache/watercolor texture, thick friendly rounded outlines, bright but gentle colors, simple uncluttered background, big expressive faces, one clear main action in the middle of the picture. Landscape 3:2. ABSOLUTELY NO text, letters, numbers, speech bubbles or signs anywhere in the image. Original characters only — do not imitate Clifford, Bluey, Peppa Pig or any existing cartoon character.
```

### `images/b08/p5.png` — teks: “Nat can not get the hat.”

```
Scene: Nat reaching for the hat but Pip is sitting in it; Nat laughing.
Characters: Pip is a BIG, friendly young dog, about as tall as a small pony next to Nat; golden-orange fur with a cream muzzle and cream chest, one brown patch around his left eye, long floppy brown ears, round shiny dark eyes, big happy smile, a blue collar with a round yellow tag. Playful and a bit clumsy. Nat is a 5-year-old Southeast Asian girl with light brown skin, black hair in two short pigtails with yellow hair ties, round cheerful face; wears a green T-shirt with a small white star, blue shorts and red sneakers.
Style: Soft, warm children's picture-book illustration for toddlers (age 3). Hand-painted gouache/watercolor texture, thick friendly rounded outlines, bright but gentle colors, simple uncluttered background, big expressive faces, one clear main action in the middle of the picture. Landscape 3:2. ABSOLUTELY NO text, letters, numbers, speech bubbles or signs anywhere in the image. Original characters only — do not imitate Clifford, Bluey, Peppa Pig or any existing cartoon character.
```

### `images/b08/p6.png` — teks: “Nat and Pip hug.”

```
Scene: Nat hugging Pip, the red hat on Pip's head now.
Characters: Pip is a BIG, friendly young dog, about as tall as a small pony next to Nat; golden-orange fur with a cream muzzle and cream chest, one brown patch around his left eye, long floppy brown ears, round shiny dark eyes, big happy smile, a blue collar with a round yellow tag. Playful and a bit clumsy. Nat is a 5-year-old Southeast Asian girl with light brown skin, black hair in two short pigtails with yellow hair ties, round cheerful face; wears a green T-shirt with a small white star, blue shorts and red sneakers.
Style: Soft, warm children's picture-book illustration for toddlers (age 3). Hand-painted gouache/watercolor texture, thick friendly rounded outlines, bright but gentle colors, simple uncluttered background, big expressive faces, one clear main action in the middle of the picture. Landscape 3:2. ABSOLUTELY NO text, letters, numbers, speech bubbles or signs anywhere in the image. Original characters only — do not imitate Clifford, Bluey, Peppa Pig or any existing cartoon character.
```

---

## b09 · Fun in the Sun

### `images/b09/cover.png` — sampul

```
Scene: Book cover (no title text): Nat and Pip at a small pond with a frog on a log
Characters: Pip is a BIG, friendly young dog, about as tall as a small pony next to Nat; golden-orange fur with a cream muzzle and cream chest, one brown patch around his left eye, long floppy brown ears, round shiny dark eyes, big happy smile, a blue collar with a round yellow tag. Playful and a bit clumsy. Nat is a 5-year-old Southeast Asian girl with light brown skin, black hair in two short pigtails with yellow hair ties, round cheerful face; wears a green T-shirt with a small white star, blue shorts and red sneakers.
Style: Soft, warm children's picture-book illustration for toddlers (age 3). Hand-painted gouache/watercolor texture, thick friendly rounded outlines, bright but gentle colors, simple uncluttered background, big expressive faces, one clear main action in the middle of the picture. Landscape 3:2. ABSOLUTELY NO text, letters, numbers, speech bubbles or signs anywhere in the image. Original characters only — do not imitate Clifford, Bluey, Peppa Pig or any existing cartoon character.
```

### `images/b09/p1.png` — teks: “It is hot.”

```
Scene: A very sunny day; Nat fanning herself, Pip panting in the shade.
Characters: Pip is a BIG, friendly young dog, about as tall as a small pony next to Nat; golden-orange fur with a cream muzzle and cream chest, one brown patch around his left eye, long floppy brown ears, round shiny dark eyes, big happy smile, a blue collar with a round yellow tag. Playful and a bit clumsy. Nat is a 5-year-old Southeast Asian girl with light brown skin, black hair in two short pigtails with yellow hair ties, round cheerful face; wears a green T-shirt with a small white star, blue shorts and red sneakers.
Style: Soft, warm children's picture-book illustration for toddlers (age 3). Hand-painted gouache/watercolor texture, thick friendly rounded outlines, bright but gentle colors, simple uncluttered background, big expressive faces, one clear main action in the middle of the picture. Landscape 3:2. ABSOLUTELY NO text, letters, numbers, speech bubbles or signs anywhere in the image. Original characters only — do not imitate Clifford, Bluey, Peppa Pig or any existing cartoon character.
```

### `images/b09/p2.png` — teks: “Nat and Pip run to the pond.”

```
Scene: Nat and Pip running toward a small pond with reeds.
Characters: Pip is a BIG, friendly young dog, about as tall as a small pony next to Nat; golden-orange fur with a cream muzzle and cream chest, one brown patch around his left eye, long floppy brown ears, round shiny dark eyes, big happy smile, a blue collar with a round yellow tag. Playful and a bit clumsy. Nat is a 5-year-old Southeast Asian girl with light brown skin, black hair in two short pigtails with yellow hair ties, round cheerful face; wears a green T-shirt with a small white star, blue shorts and red sneakers.
Style: Soft, warm children's picture-book illustration for toddlers (age 3). Hand-painted gouache/watercolor texture, thick friendly rounded outlines, bright but gentle colors, simple uncluttered background, big expressive faces, one clear main action in the middle of the picture. Landscape 3:2. ABSOLUTELY NO text, letters, numbers, speech bubbles or signs anywhere in the image. Original characters only — do not imitate Clifford, Bluey, Peppa Pig or any existing cartoon character.
```

### `images/b09/p3.png` — teks: “A frog hops on a log.”

```
Scene: A little green frog hopping onto a log in the pond.
Characters: Pip is a BIG, friendly young dog, about as tall as a small pony next to Nat; golden-orange fur with a cream muzzle and cream chest, one brown patch around his left eye, long floppy brown ears, round shiny dark eyes, big happy smile, a blue collar with a round yellow tag. Playful and a bit clumsy. Nat is a 5-year-old Southeast Asian girl with light brown skin, black hair in two short pigtails with yellow hair ties, round cheerful face; wears a green T-shirt with a small white star, blue shorts and red sneakers.
Style: Soft, warm children's picture-book illustration for toddlers (age 3). Hand-painted gouache/watercolor texture, thick friendly rounded outlines, bright but gentle colors, simple uncluttered background, big expressive faces, one clear main action in the middle of the picture. Landscape 3:2. ABSOLUTELY NO text, letters, numbers, speech bubbles or signs anywhere in the image. Original characters only — do not imitate Clifford, Bluey, Peppa Pig or any existing cartoon character.
```

### `images/b09/p4.png` — teks: “Pip hops on the log.”

```
Scene: Big Pip trying to hop onto the same small log, wobbling.
Characters: Pip is a BIG, friendly young dog, about as tall as a small pony next to Nat; golden-orange fur with a cream muzzle and cream chest, one brown patch around his left eye, long floppy brown ears, round shiny dark eyes, big happy smile, a blue collar with a round yellow tag. Playful and a bit clumsy. Nat is a 5-year-old Southeast Asian girl with light brown skin, black hair in two short pigtails with yellow hair ties, round cheerful face; wears a green T-shirt with a small white star, blue shorts and red sneakers.
Style: Soft, warm children's picture-book illustration for toddlers (age 3). Hand-painted gouache/watercolor texture, thick friendly rounded outlines, bright but gentle colors, simple uncluttered background, big expressive faces, one clear main action in the middle of the picture. Landscape 3:2. ABSOLUTELY NO text, letters, numbers, speech bubbles or signs anywhere in the image. Original characters only — do not imitate Clifford, Bluey, Peppa Pig or any existing cartoon character.
```

### `images/b09/p5.png` — teks: “Plop! Pip is in the pond.”

```
Scene: Pip falling into the pond with a big splash, frog watching.
Characters: Pip is a BIG, friendly young dog, about as tall as a small pony next to Nat; golden-orange fur with a cream muzzle and cream chest, one brown patch around his left eye, long floppy brown ears, round shiny dark eyes, big happy smile, a blue collar with a round yellow tag. Playful and a bit clumsy. Nat is a 5-year-old Southeast Asian girl with light brown skin, black hair in two short pigtails with yellow hair ties, round cheerful face; wears a green T-shirt with a small white star, blue shorts and red sneakers.
Style: Soft, warm children's picture-book illustration for toddlers (age 3). Hand-painted gouache/watercolor texture, thick friendly rounded outlines, bright but gentle colors, simple uncluttered background, big expressive faces, one clear main action in the middle of the picture. Landscape 3:2. ABSOLUTELY NO text, letters, numbers, speech bubbles or signs anywhere in the image. Original characters only — do not imitate Clifford, Bluey, Peppa Pig or any existing cartoon character.
```

### `images/b09/p6.png` — teks: “It is fun in the sun!”

```
Scene: Nat, wet Pip and the frog all smiling together by the pond.
Characters: Pip is a BIG, friendly young dog, about as tall as a small pony next to Nat; golden-orange fur with a cream muzzle and cream chest, one brown patch around his left eye, long floppy brown ears, round shiny dark eyes, big happy smile, a blue collar with a round yellow tag. Playful and a bit clumsy. Nat is a 5-year-old Southeast Asian girl with light brown skin, black hair in two short pigtails with yellow hair ties, round cheerful face; wears a green T-shirt with a small white star, blue shorts and red sneakers.
Style: Soft, warm children's picture-book illustration for toddlers (age 3). Hand-painted gouache/watercolor texture, thick friendly rounded outlines, bright but gentle colors, simple uncluttered background, big expressive faces, one clear main action in the middle of the picture. Landscape 3:2. ABSOLUTELY NO text, letters, numbers, speech bubbles or signs anywhere in the image. Original characters only — do not imitate Clifford, Bluey, Peppa Pig or any existing cartoon character.
```

---

## b10 · Bed, Pip!

### `images/b10/cover.png` — sampul

```
Scene: Book cover (no title text): Pip trying to squeeze onto a small bed with Nat and Kit
Characters: Pip is a BIG, friendly young dog, about as tall as a small pony next to Nat; golden-orange fur with a cream muzzle and cream chest, one brown patch around his left eye, long floppy brown ears, round shiny dark eyes, big happy smile, a blue collar with a round yellow tag. Playful and a bit clumsy. Nat is a 5-year-old Southeast Asian girl with light brown skin, black hair in two short pigtails with yellow hair ties, round cheerful face; wears a green T-shirt with a small white star, blue shorts and red sneakers. Kit is a small grey tabby cat with white paws, a white tip on her tail and bright green eyes. Calm and a little bit shy.
Style: Soft, warm children's picture-book illustration for toddlers (age 3). Hand-painted gouache/watercolor texture, thick friendly rounded outlines, bright but gentle colors, simple uncluttered background, big expressive faces, one clear main action in the middle of the picture. Landscape 3:2. ABSOLUTELY NO text, letters, numbers, speech bubbles or signs anywhere in the image. Original characters only — do not imitate Clifford, Bluey, Peppa Pig or any existing cartoon character.
```

### `images/b10/p1.png` — teks: “It is dusk.”

```
Scene: Evening sky with a pink and orange sunset over Nat's house.
Characters: Pip is a BIG, friendly young dog, about as tall as a small pony next to Nat; golden-orange fur with a cream muzzle and cream chest, one brown patch around his left eye, long floppy brown ears, round shiny dark eyes, big happy smile, a blue collar with a round yellow tag. Playful and a bit clumsy. Nat is a 5-year-old Southeast Asian girl with light brown skin, black hair in two short pigtails with yellow hair ties, round cheerful face; wears a green T-shirt with a small white star, blue shorts and red sneakers. Kit is a small grey tabby cat with white paws, a white tip on her tail and bright green eyes. Calm and a little bit shy.
Style: Soft, warm children's picture-book illustration for toddlers (age 3). Hand-painted gouache/watercolor texture, thick friendly rounded outlines, bright but gentle colors, simple uncluttered background, big expressive faces, one clear main action in the middle of the picture. Landscape 3:2. ABSOLUTELY NO text, letters, numbers, speech bubbles or signs anywhere in the image. Original characters only — do not imitate Clifford, Bluey, Peppa Pig or any existing cartoon character.
```

### `images/b10/p2.png` — teks: “Nat gets in bed.”

```
Scene: Nat in pajamas climbing into her small bed with a teddy bear.
Characters: Pip is a BIG, friendly young dog, about as tall as a small pony next to Nat; golden-orange fur with a cream muzzle and cream chest, one brown patch around his left eye, long floppy brown ears, round shiny dark eyes, big happy smile, a blue collar with a round yellow tag. Playful and a bit clumsy. Nat is a 5-year-old Southeast Asian girl with light brown skin, black hair in two short pigtails with yellow hair ties, round cheerful face; wears a green T-shirt with a small white star, blue shorts and red sneakers. Kit is a small grey tabby cat with white paws, a white tip on her tail and bright green eyes. Calm and a little bit shy.
Style: Soft, warm children's picture-book illustration for toddlers (age 3). Hand-painted gouache/watercolor texture, thick friendly rounded outlines, bright but gentle colors, simple uncluttered background, big expressive faces, one clear main action in the middle of the picture. Landscape 3:2. ABSOLUTELY NO text, letters, numbers, speech bubbles or signs anywhere in the image. Original characters only — do not imitate Clifford, Bluey, Peppa Pig or any existing cartoon character.
```

### `images/b10/p3.png` — teks: “Kit gets on the bed.”

```
Scene: Kit the cat jumping onto the end of the bed.
Characters: Pip is a BIG, friendly young dog, about as tall as a small pony next to Nat; golden-orange fur with a cream muzzle and cream chest, one brown patch around his left eye, long floppy brown ears, round shiny dark eyes, big happy smile, a blue collar with a round yellow tag. Playful and a bit clumsy. Nat is a 5-year-old Southeast Asian girl with light brown skin, black hair in two short pigtails with yellow hair ties, round cheerful face; wears a green T-shirt with a small white star, blue shorts and red sneakers. Kit is a small grey tabby cat with white paws, a white tip on her tail and bright green eyes. Calm and a little bit shy.
Style: Soft, warm children's picture-book illustration for toddlers (age 3). Hand-painted gouache/watercolor texture, thick friendly rounded outlines, bright but gentle colors, simple uncluttered background, big expressive faces, one clear main action in the middle of the picture. Landscape 3:2. ABSOLUTELY NO text, letters, numbers, speech bubbles or signs anywhere in the image. Original characters only — do not imitate Clifford, Bluey, Peppa Pig or any existing cartoon character.
```

### `images/b10/p4.png` — teks: “Pip hops on the bed!”

```
Scene: Huge Pip jumping onto the tiny bed, the bed bending.
Characters: Pip is a BIG, friendly young dog, about as tall as a small pony next to Nat; golden-orange fur with a cream muzzle and cream chest, one brown patch around his left eye, long floppy brown ears, round shiny dark eyes, big happy smile, a blue collar with a round yellow tag. Playful and a bit clumsy. Nat is a 5-year-old Southeast Asian girl with light brown skin, black hair in two short pigtails with yellow hair ties, round cheerful face; wears a green T-shirt with a small white star, blue shorts and red sneakers. Kit is a small grey tabby cat with white paws, a white tip on her tail and bright green eyes. Calm and a little bit shy.
Style: Soft, warm children's picture-book illustration for toddlers (age 3). Hand-painted gouache/watercolor texture, thick friendly rounded outlines, bright but gentle colors, simple uncluttered background, big expressive faces, one clear main action in the middle of the picture. Landscape 3:2. ABSOLUTELY NO text, letters, numbers, speech bubbles or signs anywhere in the image. Original characters only — do not imitate Clifford, Bluey, Peppa Pig or any existing cartoon character.
```

### `images/b10/p5.png` — teks: “The bed is a mess!”

```
Scene: Blankets and pillows everywhere, Nat and Kit squished and laughing.
Characters: Pip is a BIG, friendly young dog, about as tall as a small pony next to Nat; golden-orange fur with a cream muzzle and cream chest, one brown patch around his left eye, long floppy brown ears, round shiny dark eyes, big happy smile, a blue collar with a round yellow tag. Playful and a bit clumsy. Nat is a 5-year-old Southeast Asian girl with light brown skin, black hair in two short pigtails with yellow hair ties, round cheerful face; wears a green T-shirt with a small white star, blue shorts and red sneakers. Kit is a small grey tabby cat with white paws, a white tip on her tail and bright green eyes. Calm and a little bit shy.
Style: Soft, warm children's picture-book illustration for toddlers (age 3). Hand-painted gouache/watercolor texture, thick friendly rounded outlines, bright but gentle colors, simple uncluttered background, big expressive faces, one clear main action in the middle of the picture. Landscape 3:2. ABSOLUTELY NO text, letters, numbers, speech bubbles or signs anywhere in the image. Original characters only — do not imitate Clifford, Bluey, Peppa Pig or any existing cartoon character.
```

### `images/b10/p6.png` — teks: “Pip naps on the rug.”

```
Scene: Pip asleep on a rug next to the bed; Nat and Kit asleep in bed; moon in the window.
Characters: Pip is a BIG, friendly young dog, about as tall as a small pony next to Nat; golden-orange fur with a cream muzzle and cream chest, one brown patch around his left eye, long floppy brown ears, round shiny dark eyes, big happy smile, a blue collar with a round yellow tag. Playful and a bit clumsy. Nat is a 5-year-old Southeast Asian girl with light brown skin, black hair in two short pigtails with yellow hair ties, round cheerful face; wears a green T-shirt with a small white star, blue shorts and red sneakers. Kit is a small grey tabby cat with white paws, a white tip on her tail and bright green eyes. Calm and a little bit shy.
Style: Soft, warm children's picture-book illustration for toddlers (age 3). Hand-painted gouache/watercolor texture, thick friendly rounded outlines, bright but gentle colors, simple uncluttered background, big expressive faces, one clear main action in the middle of the picture. Landscape 3:2. ABSOLUTELY NO text, letters, numbers, speech bubbles or signs anywhere in the image. Original characters only — do not imitate Clifford, Bluey, Peppa Pig or any existing cartoon character.
```

