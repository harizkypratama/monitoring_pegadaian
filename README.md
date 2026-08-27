# Monitoring Pegadaian — V4 Revisi

Static web app untuk monitoring kontrak gadai, taksir ulang, perhitungan lelang, monitoring cabang/outlet, dashboard KPI, dan ekspor data.

## Perubahan terbaru
- Login dihapus; aplikasi menampilkan splash/opening Monitoring Pegadaian terlebih dahulu.
- Logo pada `assets/logo-placeholder.svg` dapat diganti dengan logo Pegadaian yang sebenarnya.
- Taksir ulang selalu sinkron dengan Detail Barang (Karatase, BK, BB); hanya Nilai Berlian yang diinput.
- Taksir Ulang BK ditambahkan ke preview, data kontrak, dan ekspor.
- Selisih NPBL vs UP dihitung dari total NPBL seluruh barang dikurangi total UP dan ditampilkan satu kali sebagai ringkasan.
- Perhitungan lelang ditampilkan sebagai alur visual, bukan deretan kartu.
- Rincian BJDPL outlet menggunakan nominal kewajiban, bukan jumlah baris.
- Dashboard dan grafik monitoring dipoles menjadi lebih minimal dan ringkas.
- **[Baru] Perhitungan Minimal Kewajiban Pembeli Lelang**: kartu "02 · Harga Minimal Lelang" kini menampilkan rincian singkat (Total Kewajiban × Faktor Pengali 101/99) sehingga tidak lagi terlihat kosong dibanding kartu lain di barisnya; nilai akhir didorong ke bawah kartu agar seimbang secara visual. Ditambahkan pula konektor panah kecil antar kartu (pada layar lebar) supaya alur 01→02→03 dan 04→05→06 terbaca sebagai satu rangkaian.
- **[Baru] Dashboard KPI**: ditambahkan bagian "Indikator Lelang & Aging" berisi 4 kartu ringkasan (Kontrak Berpotensi Diskon Lelang, Estimasi Total Diskon Lelang, Rata-rata BJDPL, Kontrak > 90 Hari) serta 2 grafik baru (Status Diskon Lelang, Top 10 Nasabah berdasarkan Kewajiban), memanfaatkan data yang sudah dihitung otomatis (Diskon_Tidak_Diskon, Diskon_Lelang_Rp, BJDPL_Hari) tanpa mengubah kartu/grafik yang sudah ada.

## Deploy
Upload isi folder ini ke GitHub dan deploy sebagai static site di Vercel.


## Penyimpanan data
Versi ini menggunakan IndexedDB untuk menyimpan data monitoring di browser sehingga data tetap tersedia setelah refresh. Form taksir ulang juga memiliki autosave draft melalui localStorage dan akan dipulihkan saat halaman dibuka kembali pada browser yang sama.


## Hak akses import
- ADMIN dapat memilih beberapa file Excel sekaligus; seluruh sheet valid dari semua file digabung menjadi satu dataset.
- USER hanya dapat melihat Preview/Pemeriksaan dan tidak dapat menjalankan import atau penghapusan data import.
- Filter Cabang dan Outlet pada Preview mempersempit KPI, pemeriksaan, dan baris tabel secara bersamaan.
