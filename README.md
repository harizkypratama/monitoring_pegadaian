# Monitoring Pegadaian

Aplikasi monitoring data Pegadaian berbasis web yang digunakan untuk mengelola, memantau, dan menganalisis data kontrak secara terintegrasi.

## Tentang Aplikasi

Monitoring Pegadaian dirancang untuk membantu proses pemantauan data kontrak, barang, nasabah, outlet, serta berbagai indikator monitoring dalam satu sistem.

Aplikasi menggunakan database sebagai sumber data utama sehingga data yang tersimpan dapat digunakan secara terpusat oleh pengguna dengan hak akses yang berbeda.

## Fitur Utama

- **Dashboard Monitoring**
  - Menampilkan ringkasan dan indikator utama data kontrak.
  - Menyediakan informasi KPI untuk membantu proses monitoring.

- **Manajemen Data Kontrak**
  - Pengelolaan data kontrak dan detail barang.
  - Satu nomor kontrak dapat memiliki beberapa barang.
  - Data kontrak dengan nomor yang sama dicocokkan berdasarkan kelengkapan informasi.

- **Import Data**
  - Mendukung import data dari file Excel.
  - Mendukung penggabungan data dari beberapa sumber.
  - Data dengan nomor kontrak yang sama diproses berdasarkan data yang paling lengkap.

- **Preview Data**
  - Menampilkan data yang tersimpan dalam database.
  - Dilengkapi fitur pencarian dan penyaringan data.

- **Monitoring Lelang**
  - Menampilkan informasi terkait data lelang dan indikator yang berkaitan dengan proses monitoring.

- **Manajemen Pengguna**
  - Mendukung role **ADMIN** dan **USER** dengan hak akses yang berbeda.

- **Export Data**
  - Menyediakan fungsi ekspor data untuk kebutuhan pengolahan dan pelaporan.

- **Audit & Log**
  - Mencatat aktivitas penting dalam sistem, termasuk aktivitas import dan export data.

## Struktur Data

Sistem menggunakan database terstruktur untuk memisahkan data berdasarkan entitasnya, antara lain:

- Area
- Cabang
- Outlet
- User
- Nasabah
- Kontrak
- Detail Barang
- Perhitungan Lelang
- HDLE
- Import Batch
- Audit Log
- Export Log

## Teknologi

- PHP
- MySQL / MariaDB
- JavaScript
- HTML
- CSS

## Konsep Utama

Sistem menggunakan **No Kontrak sebagai identitas utama kontrak**. Detail barang disimpan secara terpisah sehingga satu kontrak dapat memiliki lebih dari satu barang tanpa kehilangan informasi.

Pada proses penggabungan data, apabila nomor kontrak yang sama terdapat pada beberapa sumber, sistem mempertahankan data dengan informasi yang paling lengkap sehingga data kontrak tidak berkurang hanya karena adanya perbedaan jumlah barang atau kelengkapan antar sumber.
