<?php
// 停止摇骰

global $Room;
$id=ceil($connection->user['room']);

if($data2['time']>$Room[$id]['time'] || $Room[$id]['xx']['zt'] != 4 || $data2['time']<$Room[$id]['timexx']){
    return false;
}

cleardjs($Room[$id]['djs'],$id);

act('operationButton','',$connection);

$data=array();
$data['act']='initxian';
$data['room']=$id;
$data['time'] = $Room[$id]['timexx'];
reqact($data, '');