<?php
global $Room;
$id=ceil($connection->user['room']);

if($data2['time']>$Room[$id]['time'] || $Room[$id]['xx']['zt'] != 4 || $data2['time']<$Room[$id]['timexx']){
    return false;
}

foreach ($Room[$id]['user'] as $connection3) {
    $msg = '';
    act('showyao',$msg,$connection3);
}