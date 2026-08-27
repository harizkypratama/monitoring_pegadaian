<?php
declare(strict_types=1);
require_once __DIR__ . '/bootstrap.php';
try {
    $name = (string)$pdo->query('SELECT DATABASE()')->fetchColumn();
    ok(['database' => $name], 'Database connected successfully');
} catch (Throwable $e) {
    fail('Database test gagal.', 500);
}
