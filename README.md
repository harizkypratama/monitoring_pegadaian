# Monitoring Pegadaian

Aplikasi web untuk monitoring data kontrak, barang, import Excel, dashboard KPI, dan pengelolaan akses pengguna.

## Fitur

- Login dengan role **ADMIN** dan **USER**
- Dashboard monitoring dan KPI
- Import Excel oleh ADMIN
- Multi-import
- Pencocokan kontrak berdasarkan data yang paling lengkap
- Preview data dari database
- Update kontrak
- Export dan export log
- Hak akses ADMIN/USER
- MySQL sebagai sumber data utama

## Logika Data Kontrak

**No Kontrak** digunakan sebagai identitas kontrak.

Satu kontrak dapat memiliki banyak barang:

```text
A001
├── Barang 1
├── Barang 2
└── Barang 3
```

Jika kontrak yang sama ditemukan pada beberapa file, sistem tidak bergantung pada urutan upload. Versi dengan **data/item yang paling lengkap** dipertahankan.

Contoh:

```text
Import 1
A001 | Barang 1

Import 2
A001 | Barang 1
A001 | Barang 2
A001 | Barang 3
```

Hasil:

```text
A001 | Barang 1
A001 | Barang 2
A001 | Barang 3
```

## Struktur Database

```text
areas
branches
outlets
app_users
customers
import_batches
contracts
contract_items
contract_auction_calculations
hdle_history
audit_logs
export_logs
```

`contracts` menyimpan satu record per No Kontrak. `contract_items` menyimpan seluruh barang dalam kontrak.

`import_batches` menyimpan metadata import untuk kebutuhan audit. Data mentah Excel bukan sumber data utama aplikasi.

## Hak Akses

| Fitur | ADMIN | USER |
|---|:---:|:---:|
| Login | ✅ | ✅ |
| Melihat data | ✅ | ✅ |
| Dashboard | ✅ | ✅ |
| Preview data | ✅ | ✅ |
| Import Excel | ✅ | ❌ |
| Multi-import | ✅ | ❌ |
| Pengelolaan user | ✅ | ❌ |

## Instalasi Lokal

Persyaratan:

- PHP
- MySQL/MariaDB
- Apache atau web server PHP
- Browser modern

Untuk XAMPP, letakkan project di:

```text
C:\xampp\htdocs\monitoring_pegadaian\
```

Import schema database yang disediakan, lalu atur konfigurasi:

```text
DB_HOST
DB_PORT
DB_NAME
DB_USER
DB_PASS
```

Jalankan:

```text
http://localhost/monitoring_pegadaian/
```

## Deployment

Project membutuhkan hosting/server yang mendukung **PHP + MySQL/MariaDB**.

Langkah umum:

1. Buat database di server.
2. Import schema SQL.
3. Upload source code ke web root.
4. Isi credential database melalui environment/configuration server.
5. Pastikan web server mengarah ke folder aplikasi.
6. Uji koneksi database.

## Keamanan

**Jangan commit credential production ke repository publik.**

Jangan masukkan ke GitHub:

- password database
- API key
- credential production
- `.env` berisi secret
- data pelanggan atau data operasional sensitif

Gunakan environment variables atau konfigurasi server.

## Arsitektur

```text
Excel
  ↓
Import API
  ↓
contracts + contract_items
  ↓
MySQL
  ↓
PHP API
  ↓
Frontend
```

**Stack:** PHP + MySQL/MariaDB + JavaScript + HTML/CSS
