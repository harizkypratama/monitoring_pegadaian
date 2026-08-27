<?php
declare(strict_types=1);
require_once __DIR__ . '/../bootstrap.php';

$user = require_login();
$data = json_input();
$old = (string)($data['old_password'] ?? '');
$new = (string)($data['new_password'] ?? '');

if ($old === '' || $new === '') fail('Password lama dan password baru wajib diisi.');
if (strlen($new) < 6) fail('Password baru minimal 6 karakter.');

$stmt = $pdo->prepare("SELECT password_hash FROM app_users WHERE user_id=?");
$stmt->execute([$user['user_id']]);
$row = $stmt->fetch();

$valid = $row && (password_verify($old, $row['password_hash']) || hash_equals($row['password_hash'], $old));
if (!$valid) fail('Password lama salah.', 401);

$hash = password_hash($new, PASSWORD_DEFAULT);
$stmt = $pdo->prepare("UPDATE app_users SET password_hash=?, password_managed_by='ADMIN', must_change_password=0, updated_at=NOW() WHERE user_id=?");
$stmt->execute([$hash, $user['user_id']]);

audit($pdo, (int)$user['user_id'], 'RESET_PASSWORD', 'app_users', (int)$user['user_id'], 'Password diubah oleh user.');
ok(null, 'Password berhasil diubah.');
