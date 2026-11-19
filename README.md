# Generator Vector Massal untuk Stock

Buat puluhan sampai ratusan vector SVG untuk microstock dari mode cepat atau daftar prompt, dengan gaya custom, latar transparan, SEO stock, dan unduhan ZIP.

## Isi file
- `index.html` — aplikasi lengkap (satu file utama)
- `manifest.webmanifest` — supaya bisa diinstal sebagai web app (PWA)
- `sw.js` — service worker, supaya bisa dibuka offline setelah kunjungan pertama
- `icon-192.png` / `icon-512.png` — ikon aplikasi
- `.nojekyll` — supaya GitHub Pages tidak memproses file dengan Jekyll

## Instal sebagai aplikasi
**Android (Chrome)**
1. Buka alamat GitHub Pages di Chrome.
2. Ketuk menu titik tiga (⋮) di kanan atas → Instal aplikasi (atau Tambahkan ke Layar Utama).
3. Ketuk Instal. Ikon "Vector Massal" muncul di layar utama dan bisa dibuka seperti aplikasi biasa, termasuk offline setelah pertama kali dibuka.

**iPhone / iPad (Safari)**
1. Buka alamatnya di Safari (harus Safari, bukan Chrome).
2. Ketuk tombol Bagikan (kotak dengan panah ke atas) → Add to Home Screen.
3. Ketuk Add. Ikon muncul di Home Screen.

**Laptop (Chrome / Edge)**
1. Buka alamatnya di Chrome atau Edge.
2. Klik ikon instal (gambar monitor + panah) di ujung kanan address bar → Install.
3. Aplikasi terbuka di jendela sendiri, tanpa address bar.

## Yang baru di versi ini
- **Preset & riwayat tersimpan di perangkat:** preset, palet custom, gaya custom, pengaturan terakhir, dan riwayat batch (maks 8) tersimpan di browser perangkat ini lewat localStorage — tetap ada setelah halaman ditutup dan dibuka lagi. Tidak tersinkron antar perangkat, dan di mode privat (incognito) penyimpanan bisa gagal tanpa pesan.
- **Tooltip di semua tombol:** arahkan kursor ke tombol (desktop/laptop) atau sentuh tombolnya (HP) untuk melihat penjelasan fungsinya.
- **SEO Canva:** panel SEO Stock Otomatis kini punya pilihan Canva, dan ZIP berisi `seo-canva.txt` (judul + tag per file). File SVG & PNG hasil generate bisa diunggah langsung ke Canva (Uploads → Upload files) dan dipakai sebagai elemen, stiker, atau logo — juga bisa diimpor ke Figma, Adobe Illustrator, Affinity Designer, dan Inkscape.

## Catatan
- Butuh internet saat pertama kali dibuka, karena library JSZip untuk membuat ZIP dimuat dari CDN. Setelah itu, aplikasi di-cache dan bisa dibuka offline.
- Prompt diinterpretasikan secara prosedural di browser (deteksi kata kunci subjek + gaya), bukan model AI generatif.
- File ZIP hasil generate berisi SVG, PNG, `keywords.csv`, dan file SEO per platform (Adobe Stock, Shutterstock, Freepik, Canva).
