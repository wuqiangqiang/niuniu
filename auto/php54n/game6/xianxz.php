<?php


global $Room;
$id=ceil($connection->user['room']);

if($data2['time']>$Room[$id]['time']  || $data2['time']<$Room[$id]['timexx']){
    return false;
}
if($Room[$id]['user'][$connection->user['id']]->user['xiazhu'][$data2['xzindex']]){
    return false;
}
if($data2['xz']){
    $Room[$id]['start'][$connection->user['id']]=1;
}
$Room[$id]['user'][$connection->user['id']]->user['xiazhu'][$data2['xzindex']]=$data2['xz'];


$zbsl=0;
$qbsl=0;
foreach ($Room[$id]['user'] as $connection3) {
    $zbsl=$zbsl+1;
    if(count($Room[$id]['user'][$connection3->user['id']]->user['xiazhu'])==3 && $connection3->user['index']!=$Room[$id]['bank']['index']){
        $qbsl=$qbsl+1;
    }
    if($connection3->user['online']!='-1' && $connection3->user['id']!=$connection->user['id']){
        $msg=array();
        $msg['index']=$connection->user['index'];
        if($data2['xz']%10==1){
            $msg['xz']=$data2['xz']-1;
        }
        else{
            $msg['xz']=$data2['xz'];
        }
        $msg['xzindex']=$data2['xzindex'];
        $msg['bank']=$Room[$id]['bank']['index'];
        act('addxz',$msg,$connection3);
    }
}
if($zbsl==$qbsl+1 &&  $Room[$id]['xx']['zt']=='3'){
    $Room[$id]['xx']['zt']=4;
    $data=array();
    $data['act']='setxian';
    $data['time']=$Room[$id]['timexx'];
    $data['room']=$id;
    reqact($data,'');
}




