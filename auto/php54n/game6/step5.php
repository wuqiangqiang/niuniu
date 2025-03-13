<?php


//step3 抢庄阶段
global $Room;
$id=ceil($connection->user['room']);
act('initroom',$msg,$connection);
$msg=array();
$msg['id']='jsxx';
$msg['html']=$Room[$id]['xx']['js'].'&nbsp;/&nbsp;'.$Room[$id]['xx']['zjs'].'&nbsp;局';
act('html',$msg,$connection);
act('zhuangclear','',$connection);
act('sss',$Room[$id]['bank']['index'],$connection);
act('statclear','',$connection);
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
        $msg['xz']=$value;
        $msg['xzindex']=$key;
        $msg['bank']=$Room[$id]['bank']['index'];
        act('addxz',$msg,$connection);
    }
}
act('xiandingzhi',$Room[$id]['bank']['index'],$connection);
$msg=$Room[$id]['cardxx'];
$msg['act']=1;
act('fapai',$msg,$connection);