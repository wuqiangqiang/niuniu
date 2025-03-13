<?php


global $Room;
$id=ceil($connection->user['room']);

if($data2['time']>$Room[$id]['time'] || $Room[$id]['userindex'][$connection->user['index']]['zt']!='0' || $data2['time']<$Room[$id]['timexx']){
    return false;
}


$Room[$id]['userindex'][$connection->user['index']]['zt']='1';

$zbsl=0;
foreach ($Room[$id]['user'] as $connection3) {
    if($connection3->user['online']!='-1' && $connection3->user['id']!=$connection->user['id']){
        act('tanpaixx',$connection->user['index'],$connection3);
    }
    if($connection3->user['index']<4){
        $zbsl=$zbsl+1;
    }
}
$tpsl=0;
foreach ($Room[$id]['userindex'] as $key => $value) {
    if($value['zt']){
        $tpsl=$tpsl+1;
    }
}

if($zbsl==$tpsl &&  $Room[$id]['xx']['zt']=='6' && $data2['wczt']!=1){
    $Room[$id]['xx']['zt']='7';
    $data=array();
    $data['act']='setfanpai';
    $data['time']=$Room[$id]['timexx'];
    $data['room']=$id;
    reqact($data,'');
}





