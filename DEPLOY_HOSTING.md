# Monitoring Pegadaian — Hosting Deployment

## 1. Upload
Upload **isi folder `monitoring_pegadaian`** ke document root hosting (umumnya `htdocs`, `public_html`, atau folder web root).

## 2. Database
Buat database MySQL dari control panel hosting. Catat:
- DB Host
- DB Name
- DB User
- DB Password
- DB Port (biasanya 3306)

Import `database/monitoring_pegadaian_hosting.sql` melalui phpMyAdmin hosting.

## 3. Koneksi PHP
Isi environment variables server jika tersedia:
- `DB_HOST`
- `DB_NAME`
- `DB_USER`
- `DB_PASS`
- `DB_PORT`

Jika hosting tidak menyediakan environment variables, edit `api/db.php` dan isi nilai fallback dengan kredensial database hosting. Jangan commit/password-kan kredensial ke repository publik.

## 4. Test
Setelah upload, buka:
`https://DOMAIN-LO/api/test-db.php`

Jika berhasil akan muncul JSON `Database connected successfully`.

## 5. Login
Buka root domain aplikasi. Data user harus sudah ada di tabel `app_users`.

## Catatan
- Aplikasi ini membutuhkan PHP dengan PDO MySQL (`pdo_mysql`).
- Database V2 tidak memakai tabel `import_rows`.
- `import_batches` hanya menyimpan metadata import.
- `contracts` menyimpan satu record per No Kontrak; `contract_items` menyimpan seluruh barang.
