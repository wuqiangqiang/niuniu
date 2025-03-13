<?php


global $Room;
$id=ceil($data2['room']);

if($data2['time']!=$Room[$id]['timexx']){
    return false;
}

$Room[$id]['timexx']=time();
cleardjs($Room[$id]['djs'],$id);


if( ($Room[$id]['type']==18) && ($Room[$id]['sz']>0) && ($Room[$id]['user'][$Room[$id]['bank']['id']]->user['dqjf']<=0)){
    $Room[$id]['xx']['js']=$Room[$id]['xx']['zjs'];
    $Room[$id]['xx']['shangxia']=2;
}

if($Room[$id]['xx']['js']<$Room[$id]['xx']['zjs'] || $Room[$id]['xx']['shangxia']==1){

    if($Room[$id]['xx']['shangxia']==2){
        foreach ($Room[$id]['user'] as $connection3) {
            if($connection3->user['online']=='1'){
                $Room[$id]['user'][$connection3->user['id']]->user['zt']=0;
                act('initroom','',$connection3);
            }
        }
        if( $Room[$id]['type']!=18){
            $Room[$id]['bank']=array();
        }
        $save['js']=$Room[$id]['xx']['js'];
        $db->update('jz_room',$save,'id='.ceil($id));
        $Room[$id]['xx']['shangxia']=0;
        $Room[$id]['card']=array();
    }
    if($Room[$id]['xx']['shangxia']==1){
        $Room[$id]['oldcard']=$Room[$id]['cardxx'];
        foreach ($Room[$id]['user'] as $connection3) {
            if($connection3->user['online']=='1'){
                //$Room[$id]['user'][$connection3->user['id']]->user['zt']=0;
                act('initroom2','',$connection3);
            }
        }
    }

    $Room[$id]['xx']['zt']=0;
    $save=array();

    $online=0;
    foreach ($Room[$id]['user'] as $connection3) {
        if($connection3->user['online']=='1'){
            $online=$online+1;
        }
    }
    if($online==0 && $Room[$id]['xx']['zt']==0){
        $time_interval = 600;
        $Room[$id]['xx']['zt']='-1';
        $Room[$id]['timexx']=time();
        djs($time_interval,'overroom',$id,$Room[$id]['timexx']);
    }
    else{
        if($Room[$id]['xx']['shangxia']==1){
            $time_interval =1;
            $Room[$id]['time']=time()+$time_interval;
            $Room[$id]['timexx']=time();
            djs($time_interval,'initxian',$id,$Room[$id]['timexx']);
        }
    }
}
else{


    if( ($Room[$id]['type']==18) && ($Room[$id]['sz']>0) ){
        $Room[$id]['user'][$Room[$id]['bank']['id']]->user['dqjf']=$Room[$id]['user'][$Room[$id]['bank']['id']]->user['dqjf']-$Room[$id]['sz'];
    }

    $Room[$id]['xx']['zt']=8;
    $jflist=array();
    foreach ($Room[$id]['user'] as $connection3) {
        //if($connection3->user['zt']!='-1'){
        $jflist[$connection3->user['id']]=$connection3->user['dqjf'];
        $add=array();
        $add['uid']=$connection3->user['id'];
        $add['room']=$id;
        $add['overtime']=time();
        $add['jifen']=$connection3->user['dqjf'];
        $add['type']=$Room[$id]['lx'];

        $db->insert('jz_user_room',$add);
        //}
    }
    arsort($jflist);
    $user=array();
    foreach ($jflist as $key => $value) {
        $user[]=$Room[$id]['user'][$key]->user;
    }
    $room['id']=$Room[$id]['xx']['roomid'];
    $room['zjs']=$Room[$id]['xx']['js'];
    $room['time']=date('Y-m-d H:i:s',time());
    $room['user']=$user;
    foreach ($user as $key => $value) {
        unset($user[$key]['nickname']);
    }

    $save=array();
    $save['js']=$Room[$id]['xx']['js'];
    $save['overxx']=json_encode($user,JSON_UNESCAPED_UNICODE);
    $save['endtime']=time();
    $db->update('jz_room',$save,'id='.ceil($id));

    foreach ($Room[$id]['user'] as $connection3) {
        if($connection3->user['online']!=-1){
            act('overroom',$room,$connection3);
            //$connection3->close();
        }
    }
    $dkxx=$db->getOne("select * from jz_server where dk='".$db->s($Room[$id]['xx']['dk'])."'");
    $save=array();
    $save['num']=$dkxx['num']-1;
    $db->update('jz_server',$save,'id='.ceil($dkxx['id']));


    global $connection2;
    $dataxx=array();
    $dataxx['act']='endroom';
    $connection2->send(json_encode($dataxx));

    unset($Room[$id]);
}