<?php


global $Room;
$id=ceil($data2['room']);
if($data2['time']!=$Room[$id]['timexx']){
    return false;
}


$Room[$id]['timexx']=time();
$Room[$id]['xx']['zt']='4';
cleardjs($Room[$id]['djs'],$id);


$time_interval =4;
$Room[$id]['time']=time()+$time_interval;
$Room[$id]['timexx']=time();
djs($time_interval,'startroom',$id,$Room[$id]['timexx']);



foreach ($Room[$id]['user'] as $connection3) {
    act('djs',$Room[$id]['time'],$connection3);
    act('divRobBankerText',6,$connection3);
    act('statclear','',$connection3);
    act('xiandingzhi',$Room[$id]['bank']['index'],$connection3);
    if($Room[$id]['bank']['id']==$connection3->user['id']){
        act('operationButton','4',$connection3);
    }
    else{
        act('operationButton','',$connection3);
    }
}







