MONITORING PEGADAIAN - PHP API
==============================

Letakkan folder "api" ini di:
C:\xampp\htdocs\monitoring_pegadaian\api\

Struktur:
api/
  db.php
  bootstrap.php
  test-db.php
  auth/
  master/
  contracts/
  dashboard/
  monitoring/
  hdle/
  import/
  export/

Konfigurasi:
- db.php memakai database monitoring_pegadaian
- username MySQL default: root
- password default: kosong

Tes:
http://localhost/monitoring_pegadaian/api/test-db.php

Endpoint utama:
POST  auth/login.php
GET   auth/me.php
POST  auth/logout.php
POST  auth/change-password.php

GET   master/index.php
GET/POST master/users.php

GET   contracts/list.php
GET   contracts/get.php
POST  contracts/save.php
DELETE contracts/delete.php?contract_id=ID

GET   dashboard/kpi.php
GET   dashboard/all.php

GET   monitoring/branch.php
GET   monitoring/outlet.php
GET   monitoring/customer.php?q=

GET/POST hdle/get.php
POST    hdle/save.php

POST import/validate.php
POST import/save.php
GET  import/batches.php

POST export/log.php

CATATAN:
1. PHP tidak boleh diakses langsung dari JavaScript ke MySQL. JavaScript -> PHP API -> MySQL.
2. Login mendukung password plaintext dari SQL awal untuk migrasi pertama, lalu otomatis mengubahnya menjadi password_hash().
3. Setelah API berhasil dites, app.js harus diubah agar load/save data memakai endpoint API.
4. Jangan hapus IndexedDB sebelum migrasi frontend selesai.
