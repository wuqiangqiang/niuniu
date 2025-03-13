<?php


global $Room;
$id=ceil($connection->user['room']);
if($data2['time']>$Room[$id]['time'] || $Room[$id]['user'][$connection->user['id']]->user['qbank']!='-1' || $data2['time']<$Room[$id]['timexx']){
    return false;
}
$connection->user['qbank']=$data2['zt'];
$Room[$id]['user'][$connection->user['id']]->user['qbank']=$data2['zt'];

if($data2['zt']>$Room[$id]['beishu']){
    $Room[$id]['beishu']=$data2['zt'];
}
if($data2['zt']){
    $Room[$id]['start'][$connection->user['id']]=1;
}

$zbsl=0;
$qbsl=0;
foreach ($Room[$id]['user'] as $connection3) {
    if($connection3->user['zt']=='1' && $connection3->user['index']<4){
        $zbsl=$zbsl+1;
    }
    if($connection3->user['qbank']!='-1' && $connection3->user['zt']=='1' && $connection3->user['index']<4){
        $qbsl=$qbsl+1;
    }
    $msg=array();
    $msg['index']=$connection->user['index'];
    $msg['zt']=$data2['zt'];
    if($connection->user['id']!=$connection3->user['id'] && $connection3->user['online']!='-1'){
        act('qbankshow',$msg,$connection3);
    }
}
if($zbsl==$qbsl && $Room[$id]['xx']['zt']=='2'){
    $Room[$id]['xx']['zt']='3';
    $data=array();
    $data['act']='setbank';
    $data['time']=$Room[$id]['timexx'];
    $data['room']=$id;
    reqact($data,'');
}




