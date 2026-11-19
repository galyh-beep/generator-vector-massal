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
- **SEO Canva:** panel SEO Stock Otomatis kini punya pilihan Canva, dan ZIP berisi `seo-canva.txt` (judul + tag per file). File SVG & PNG hasil generate bisa diunggah langsung ke Canva (Uploads → Upload files) dan dipakai sebagai elemen, stiker, atau logo — juga bisa diimpor ke Figma, Adobe Illustrator, Affinity Designer, dan Inkscape.

## Catatan
- Butuh internet saat pertama kali dibuka, karena library JSZip untuk membuat ZIP dimuat dari CDN. Setelah itu, aplikasi di-cache dan bisa dibuka offline.
- Prompt diinterpretasikan secara prosedural di browser (deteksi kata kunci subjek + gaya), bukan model AI generatif.
- File ZIP hasil generate berisi SVG, PNG, `keywords.csv`, dan file SEO per platform (Adobe Stock, Shutterstock, Freepik, Canva).
