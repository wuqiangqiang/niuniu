<?php


global $Room;
$id=ceil($data2['room']);

if($data2['time']!=$Room[$id]['timexx']){
    return false;
}
if(!$Room[$id]['card']){
    $Room[$id]['xx']['js']=$Room[$id]['xx']['js']+1;
}

$Room[$id]['timexx']=time();
$Room[$id]['xx']['zt']=2;

cleardjs($Room[$id]['djs'],$id);


foreach ($Room[$id]['user'] as $connection3) {
    if($connection3->user['online']!='-1'){
        $msg=array();
        $msg['id']='jsxx';
        $msg['html']=$Room[$id]['xx']['js'].'&nbsp;/&nbsp;'.$Room[$id]['xx']['zjs'].'&nbsp;局';
        act('html',$msg,$connection3);
    }
}
if($Room[$id]['type']==18 && $Room[$id]['bank']){
    $time_interval =0;
    $Room[$id]['time']=time()+$time_interval;
    $Room[$id]['timexx']=time();
    djs($time_interval,'initxian',$id,$Room[$id]['timexx']);
    return false;
}

$time_interval = 10;
//抢庄
$Room[$id]['time']=time()+$time_interval;
$Room[$id]['timexx']=time();
djs($time_interval,'setbank',$id,$Room[$id]['timexx']);

foreach ($Room[$id]['user'] as $connection3) {
    if($connection3->user['online']!='-1'){
        $msg=array();
        act('zhuangclear','',$connection3);
        act('djs',$Room[$id]['time'],$connection3);
        act('divRobBankerText',1,$connection3);
        act('statclear','',$connection3);

        if($connection3->user['zt']=='1' && $connection3->user['index']<4){
            $Room[$id]['start'][$connection3->user['id']]=1;
            $Room[$id]['user'][$connection3->user['id']]->user['qbank']='-1';
            act('operationButton',1,$connection3);
        }
    }
}

