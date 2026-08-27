<?php
declare(strict_types=1);
require_once __DIR__ . '/../bootstrap.php';

$user=require_login();

function scoped_view(PDO $pdo, array $user, string $view, string $branchCol='branch_id'): array {
    $allowedViews=[
        'vw_kewajiban_per_cabang',
        'vw_kewajiban_per_outlet',
        'vw_top_nasabah_kewajiban',
        'vw_top_outlet_kewajiban',
        'vw_distribusi_bjdpl'
    ];
    if(!in_array($view,$allowedViews,true)) fail('View tidak diizinkan.',400);

    $rows=$pdo->query("SELECT * FROM `{$view}`")->fetchAll();

    if($user['role']==='ADMIN') return $rows;

    $out=[];
    foreach($rows as $r){
        if(isset($r['branch_id']) && !empty($user['branch_id']) && (int)$r['branch_id']===(int)$user['branch_id']) $out[]=$r;
        elseif(isset($r['area_id']) && (int)$r['area_id']===(int)$user['area_id']) $out[]=$r;
        elseif($view==='vw_top_nasabah_kewajiban' && isset($r['branch_id']) && !empty($user['branch_id']) && (int)$r['branch_id']===(int)$user['branch_id']) $out[]=$r;
    }
    return $out;
}

ok([
    'per_cabang'=>scoped_view($pdo,$user,'vw_kewajiban_per_cabang'),
    'per_outlet'=>scoped_view($pdo,$user,'vw_kewajiban_per_outlet'),
    'top_nasabah'=>scoped_view($pdo,$user,'vw_top_nasabah_kewajiban'),
    'top_outlet'=>scoped_view($pdo,$user,'vw_top_outlet_kewajiban'),
    'bjdpl'=>scoped_view($pdo,$user,'vw_distribusi_bjdpl'),
]);
