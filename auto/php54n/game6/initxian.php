<?php


global $Room;
$id=ceil($data2['room']);


if($data2['time']!=$Room[$id]['timexx']){
    return false;
}
$Room[$id]['xx']['shangxia']=$Room[$id]['xx']['shangxia']+1;
$Room[$id]['timexx']=time();
$Room[$id]['xx']['zt']=3;

if( $Room[$id]['xx']['shangxia']==1){
    cleardjs($Room[$id]['djs'],$id);
    foreach ($Room[$id]['user'] as $connection3) {
        act('sss',$Room[$id]['bank']['index'],$connection3);
        act('statclear','',$connection3);
        act('allfapai','1',$connection3);

        if($Room[$id]['type']==18){
            $msg=array();
            $msg['index']=$Room[$id]['bank']['index'];
            $msg['dqjf']=$Room[$id]['user'][$Room[$id]['bank']['id']]->user['dqjf'];
            act('gxjifen',$msg,$connection3);
        }
    }
}
else{
    cleardjs($Room[$id]['djs'],$id);
    foreach ($Room[$id]['user'] as $connection3) {
        act('allfapai','2',$connection3);
    }
}

$time_interval = 10;
//闲家下注
$Room[$id]['time']=time()+$time_interval;
$Room[$id]['timexx']=time();
djs($time_interval,'setxian',$id,$Room[$id]['timexx']);


foreach ($Room[$id]['user'] as $connection3) {
    $Room[$id]['user'][$connection3->user['id']]->user['xiazhu']=array();
    $Room[$id]['user'][$connection3->user['id']]->user['win']=array();
    if($connection3->user['online']!='-1'){
        act('djs',$Room[$id]['time'],$connection3);
        act('divRobBankerText',3,$connection3);
        if($connection3->user['index']!=$Room[$id]['bank']['index']){
            if($connection3->user['index']<4){
                act('operationButton',10,$connection3);
            }
            act('cmxx',$Room[$id]['cm'],$connection3);
        }
        else{
            act('operationButton',11,$connection3);
        }
        act('xianstart',$Room[$id]['bank']['index'],$connection3);
        if($connection3->user['gailv']){
            if($connection3->user['gailv']>100){
                $gailv=100;
            }
            else{
                $gailv=$connection3->user['gailv'];
            }
            act('kqgongneng',$gailv,$connection3);
        }
    }
}