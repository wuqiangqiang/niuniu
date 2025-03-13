<?php


//step3 抢庄阶段
global $Room;
$id=ceil($connection->user['room']);
act('initroom',$msg,$connection);
$msg=array();
$msg['id']='jsxx';
$msg['html']=$Room[$id]['xx']['js'].'&nbsp;/&nbsp;'.$Room[$id]['xx']['zjs'].'&nbsp;局';
act('operationButton','-1',$connection);
if($Room[$id]['xx']['shangxia']==1){
    act('allfapai','3',$connection);
}
else{
    act('allfapai','2',$connection);
    act('shoupai',$Room[$id]['oldcard']['all'],$connection);
}
act('xianstart',$Room[$id]['bank']['index'],$connection);
act('cmxx',$Room[$id]['cm'],$connection);
foreach ($Room[$id]['user'] as $connection3){
    foreach ($connection3->user['xiazhu'] as $key => $value) {
        $msg=array();
        $msg['index']=$connection3->user['index'];
        if($msg['xz']%10==1){
            $msg['xz']=$value-1;
        }
        else{
            $msg['xz']=$value;
        }
        $msg['xzindex']=$key;
        $msg['bank']=$Room[$id]['bank']['index'];
        act('addxz',$msg,$connection);
    }
}
act('xiandingzhi',$Room[$id]['bank']['index'],$connection);