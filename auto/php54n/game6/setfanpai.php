<?php


global $Room;
$id=ceil($data2['room']);
if($data2['time']!=$Room[$id]['timexx']){
    return false;
}

$Room[$id]['timexx']=time();
$Room[$id]['xx']['zt']='7';

cleardjs($Room[$id]['djs'],$id);




foreach ($Room[$id]['userindex'] as $key => $value) {
    if($value['zt']==0){
        $Room[$id]['userindex'][$key]['zt']=1;
        foreach ($Room[$id]['user'] as $connection4) {
            if($connection4->user['online']!='-1'){
                act('tanpaixx',$key,$connection4);
            }
        }
    }
}
$jibixx=array();
$bankjf=0;
if($Room[$id]['minuser']==$Room[$id]['bank']['id']){
    $fx=1;
}
elseif($Room[$id]['maxuser']==$Room[$id]['bank']['id']){
    $fx=2;
}
else{
    $fx=0;
}
$Room[$id]['winxx']=array();
foreach ($Room[$id]['userindex'] as $key => $value) {
    $data=array();
    $data['fx']=$fx;
    $data['beishu']=$bs;
    $data['bank']['index']=$Room[$id]['bank']['index'];
    //比大小
    if(($Room[$id]['bank']['index']!=$key) || ($Room[$id]['xiazhu'][$key]>=0)){
        if($value['cardmax']>$Room[$id]['userindex'][$Room[$id]['bank']['index']]['cardmax']){
            $beishu=$value['bs'];
            $Room[$id]['user'][$Room[$id]['bank']['id']]->user['dqjf']=$Room[$id]['user'][$Room[$id]['bank']['id']]->user['dqjf']-$beishu*$Room[$id]['xiazhu'][$key];
            $data['win']['index']=$Room[$id]['bank']['index'];
            $data['lose']['index']=$key;
            $Room[$id]['winxx'][$Room[$id]['bank']['id']]=$Room[$id]['winxx'][$Room[$id]['bank']['id']]-$beishu*$Room[$id]['xiazhu'][$key];
        }
        else{
            $beishu=0-$Room[$id]['userindex'][$Room[$id]['bank']['index']]['bs'];
            $Room[$id]['user'][$Room[$id]['bank']['id']]->user['dqjf']=$Room[$id]['user'][$Room[$id]['bank']['id']]->user['dqjf']-$beishu*$Room[$id]['xiazhu'][$key];
            $data['win']['index']=$Room[$id]['bank']['index'];
            $data['lose']['index']=$key;
            $Room[$id]['winxx'][$Room[$id]['bank']['id']]=$Room[$id]['winxx'][$Room[$id]['bank']['id']]-$beishu*$Room[$id]['xiazhu'][$key];
        }
        foreach ($Room[$id]['user'] as $connection4) {
            if($Room[$id]['user'][$connection4->user['id']]->user['xiazhu'][$key]){
                $jifen=$Room[$id]['user'][$connection4->user['id']]->user['xiazhu'][$key]*$beishu;
                $Room[$id]['user'][$connection4->user['id']]->user['win'][$key]=$jifen;
                $Room[$id]['user'][$connection4->user['id']]->user['dqjf']=$Room[$id]['user'][$connection4->user['id']]->user['dqjf']+$jifen;
                $Room[$id]['winxx'][$connection4->user['id']]=$Room[$id]['winxx'][$connection4->user['id']]+$jifen;
                if($jifen){
                    $Room[$id]['user'][$connection4->user['id']]->user['win'][$key]='+'.$jifen;
                }
                else{
                    $Room[$id]['user'][$connection4->user['id']]->user['win'][$key]=$jifen;
                }
            }
            if($connection4->user['online']!=-1){
               
            }
        }
    }
}
foreach ($Room[$id]['user'] as $connection3) {
    $jibixx[]=array('dqjf'=>$Room[$id]['user'][$connection3->user['id']]->user['dqjf'],'index'=>$Room[$id]['user'][$connection3->user['id']]->user['index']);
    if($Room[$id]['bank']['index']==$connection3->user['index']){
        $djxx[]=array('user'=>$connection3->user,sfbank=>'1','jf'=>$Room[$id]['winxx'][$connection3->user['id']]);
    }
    else{
        $djxx[]=array('user'=>$connection3->user,sfbank=>'0','jf'=>$Room[$id]['winxx'][$connection3->user['id']]);
    }
}


foreach ($Room[$id]['user'] as $connection3) {
    if($connection3->user['online']!=-1){
        act('jibichange',$jibixx,$connection3);
    }
}
//牌局信息入库
foreach ($djxx as $key => $value) {
    unset($djxx[$key]['user']['nickname']);
}

$jsxx['bank']=$Room[$id]['bank'];
$jsxx['card']=$Room[$id]['cardxx']['all'];
$jsxx['user']=$djxx;
$add['room']=$id;
$add['js']=$Room[$id]['xx']['js'];
$add['djxx']=json_encode($jsxx,JSON_UNESCAPED_UNICODE);
$db->insert('jz_dj_room',$add);


$time_interval =9;
$Room[$id]['time']=time()+$time_interval;
$Room[$id]['timexx']=time();
djs($time_interval,'initroom',$id,$Room[$id]['timexx']);


        
