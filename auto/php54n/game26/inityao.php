<?php
global $Room;
$id=ceil($data2['room']);

if($data2['time']!=$Room[$id]['timexx']){
    return false;
}

$Room[$id]['timexx']=time();
$Room[$id]['xx']['zt']=4;

cleardjs($Room[$id]['djs'],$id);

//庄家摇骰
$time_interval = 7;
//庄家摇骰
$Room[$id]['time']=time()+$time_interval;
$Room[$id]['timexx']=time();
djs($time_interval,'initxian',$id,$Room[$id]['timexx']);

foreach ($Room[$id]['user'] as $connection3) {
    if($connection3->user['online']!='-1'){
        act('djs',$Room[$id]['time'],$connection3);
        act('divRobBankerText',7,$connection3);
        act('clearmemberRobText','',$connection3);
        act('clearmemberRobText2','',$connection3);
        act('clearmemberTimesText','',$connection3);
        if($connection3->user['zt']==1){
            // 闲家等待庄家摇骰
            if($connection3->user['index']!=$Room[$id]['bank']['index']){
                act('operationButton','',$connection3);
            }
            // 庄家摇骰
            else {
                act('operationButton',2,$connection3);
            }
        }
    }
}