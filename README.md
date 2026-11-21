# Generator Vector Massal untuk Stock

Buat puluhan sampai ratusan vector SVG untuk microstock dari mode cepat atau daftar prompt, dengan gaya custom, latar transparan, SEO stock, dan unduhan ZIP.

## Isi file
- `index.html` — aplikasi lengkap (satu file utama)
- `manifest.webmanifest` — supaya bisa diinstal sebagai web app (PWA)
- `sw.js` — service worker, supaya bisa dibuka offline setelah kunjungan pertama
- `icon-192.png` / `icon-512.png` — ikon aplikasi
- `.nojekyll` — supaya GitHub Pages tidak memproses file dengan Jekyll

## Cara pasang di GitHub Pages
1. Buat repository baru di GitHub, misalnya `generator-vector-massal`.
2. Upload semua file di folder ini ke repository (drag & drop di halaman repository, atau lewat `git push`).
3. Buka **Settings > Pages**.
4. Di **Build and deployment > Source**, pilih **Deploy from a branch**.
5. Pilih branch `main` dan folder `/ (root)`, lalu **Save**.
6. Tunggu 1-2 menit, lalu buka `https://<username>.github.io/<nama-repo>/`

Contoh: kalau username `ardian` dan repo `generator-vector-massal`, alamatnya:
`https://ardian.github.io/generator-vector-massal/`

Tutorial langkah-demi-langkah yang lengkap (dari membuat akun GitHub sampai instal di HP) ada di file **Tutorial GitHub Pages — Generator Vector Massal** yang disertakan terpisah.

## Cara instal di Android
1. Buka alamat GitHub Pages di atas lewat **Chrome** di Android.
2. Ketuk menu titik tiga > **Instal aplikasi** / **Tambahkan ke Layar Utama**.
3. Aplikasi akan muncul seperti aplikasi biasa dan bisa dibuka offline setelah pertama kali dibuka.

Di laptop: buka di Chrome/Edge, lalu klik ikon instal di address bar.

## Yang baru di versi ini
- **Preset & riwayat tersimpan di perangkat:** preset, palet custom, gaya custom, pengaturan terakhir, dan riwayat batch (maks 8) tersimpan di browser perangkat ini lewat localStorage — tetap ada setelah halaman ditutup dan dibuka lagi. Tidak tersinkron antar perangkat, dan di mode privat (incognito) penyimpanan bisa gagal tanpa pesan.
- **Tooltip di semua tombol:** arahkan kursor ke tombol (desktop/laptop) atau sentuh tombolnya (HP) untuk melihat penjelasan fungsinya.
- **SEO 6 platform:** panel SEO Stock Otomatis kini punya pilihan Adobe Stock, Shutterstock, Freepik, Canva, Vecteezy, dan Envato Elements, dan ZIP berisi file SEO masing-masing (`seo-adobe-stock.csv`, `seo-shutterstock.csv`, `seo-freepik.txt`, `seo-canva.txt`, `seo-vecteezy.csv`, `seo-envato.txt`). File SVG & PNG hasil generate bisa diunggah langsung ke Canva (Uploads → Upload files) dan dipakai sebagai elemen, stiker, atau logo — juga bisa diimpor ke Figma, Adobe Illustrator, Affinity Designer, dan Inkscape.
- **Rumusan Prompt 7 unsur:** prompt kini dianalisis mengikuti rumus **Subjek + Warna + Aksi/Pose + Setting + Waktu & Suasana + Gaya + Komposisi** — tiap unsur benar-benar mengubah gambar (warna subjek, pose, elemen setting, suasana). Di bawah daftar prompt ada analisis kelengkapan per prompt (skor /7 unsur) dan tombol **✨ Perluas prompt jadi rumusan lengkap** untuk melengkapi prompt pendek secara otomatis. Perbaikan deteksi subjek: kata waktu/latar seperti "malam" atau "laut" tidak lagi mengalahkan kata benda utamanya (mis. "Roket … saat malam" kini benar jadi roket, bukan bulan).
- **Tombol ↺ Reset Generate:** di bawah panel Pengaturan — mengosongkan galeri hasil dan mengembalikan semua pengaturan generate ke awal. Daftar prompt, preset, dan riwayat batch tidak ikut dihapus.
- **169 subjek + fallback umum:** sinkronisasi PENUH dari versi Muse selesai (2026-11-20) — subjek yang dikenali naik dari 92 menjadi 169, sama persis dengan versi Muse. Yang baru masuk: koala, kanguru, kelelawar, elang, merak, flamingo, kepiting, buaya, dinosaurus, laba-laba, capung, siput, awan, salju, tetes air, jeruk, anggur, nanas, semangka, wortel, teh, kue, burger, roti, permen, pensil, piano, jam, topi, sepatu, tas, kacamata, kunci, lilin, balon (pesta — "balon" saja kini balon pesta, "balon udara" tetap balon udara), layang-layang, bola, bus, truk, helikopter, jembatan, menara, tenda, peri, berlian, jangkar, putri duyung, bunga matahari — plus 32 subjek baru di kedua versi: kuda nil, ikan badut, gunung berapi, air terjun, unta, badak, rakun, tikus, angsa, merpati, kakaktua, cumi-cumi, kerang, belalang, kumbang, bambu, pohon kelapa, teratai, keju, telur, sushi, mie, telepon/smartphone, laptop, televisi, gunting, lampu, piala, kado, skuter, becak, gereja. Masing-masing digambar sesuai bendanya (badak bercula, unta berpunuk, kakaktua berjambul, ikan badut belang, gereja ber-menara & salib). Urutan daftar juga diatur supaya frasa khas menang: "mercusuar di tepi pantai" jadi mercusuar, "telur mata sapi" jadi telur, "jangkar kapal" jadi jangkar, "pohon kelapa" jadi kelapa, "bunga teratai" jadi teratai. Prompt di luar daftar itu dibuatkan komposisi emblem — lencana berisi huruf awal subjek — dengan setting & suasana dari rumusan prompt. Deteksi kata pendek juga diperketat supaya "bayam" tidak terbaca "ayam" dan "tapi" tidak terbaca "api".

## Catatan
- Butuh internet saat pertama kali dibuka, karena library JSZip untuk membuat ZIP dimuat dari CDN. Setelah itu, aplikasi di-cache dan bisa dibuka offline.
- Prompt diinterpretasikan secara prosedural di browser (deteksi kata kunci subjek + gaya), bukan model AI generatif.
- File ZIP hasil generate berisi SVG, PNG, `keywords.csv`, dan file SEO per platform (Adobe Stock, Shutterstock, Freepik, Canva, Vecteezy, Envato Elements).
