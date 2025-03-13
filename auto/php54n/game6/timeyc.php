<?php


global $Room;
$id=ceil($connection->user['room']);
list($msec, $sec) = explode(' ', microtime());
$msectime =  (float)sprintf('%.0f', (floatval($msec) + floatval($sec)) * 1000);
$msg['time']=($msectime-abs($data2['time'])).'ms';
$msg['id']=$connection->user['id'];
foreach ($Room[$id]['user'] as $connection3) {
    if($connection3->user['online']!='-1'){
        //echo $connection3->user['level'];
        if($connection3->user['level']==1){
            act('ycxx',$msg,$connection3);
        }
    }
}

