<?php
declare(strict_types=1);
require_once __DIR__ . '/../bootstrap.php';

$user=require_login();
$rows=$pdo->query("SELECT * FROM vw_kewajiban_per_outlet ORDER BY total_kewajiban DESC")->fetchAll();

if($user['role']!=='ADMIN'){
    $rows=array_values(array_filter($rows, function($r) use ($user){
        return !empty($user['branch_id']) && (int)$r['branch_id']===(int)$user['branch_id'];
    }));
}
ok($rows);
