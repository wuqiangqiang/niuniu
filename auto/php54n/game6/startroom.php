<?php


global $Room;
global $cards;
$id=ceil($data2['room']);
if(!$id){
    $id=ceil($connection->user['room']);
}

if($data2['time']>$Room[$id]['time'] || $Room[$id]['xx']['zt']!='4'){
    return false;
}

$Room[$id]['timexx']=time();

cleardjs($Room[$id]['djs'],$id);

if(!$Room[$id]['card']){
    $Room[$id]['card']=$cards;
}
$card=$Room[$id]['card'];
$index=array();
$Room[$id]['userindex']=array();
for($i=0;$i<4;$i++){
    $index[]=array('index'=>$i);
    $fcard=fenpai($card);
    $card=$fcard['card'];
    $Room[$id]['userindex'][$i]['card']=$fcard['fenpai'];
    $Room[$id]['userindex'][$i]['zt']=0;
}
$Room[$id]['card']=$card;
//开始作弊
//作弊人排序
$uindex=array();
$cardz=array();
foreach ($Room[$id]['userindex'] as $key=>$value) {
    $typexx=typexx($value['card'], $Room[$id]['gz']);
    $Room[$id]['userindex'][$key]['cardmax']=$typexx['cardmax'];
    $Room[$id]['userindex'][$key]['type']=$typexx['type'];
    $Room[$id]['userindex'][$key]['bs']=$typexx['bs'];
    $Room[$id]['userindex'][$key]['typename']=$typexx['typename'];
    $cardz[$key]=$typexx['cardmax'];
}
//统计作弊下注信息
$Room[$id]['xiazhu']=array();
$uindex=array();
$uindex[0]=0;
$uindex[1]=0;
$uindex[2]=0;
$uindex[3]=0;
foreach ($Room[$id]['user'] as $connection3) {
    if($connection3->user['xiazhu']){
        foreach ($connection3->user['xiazhu'] as $key2=>$one2){
            if($connection3->user['gailv']!=0){
                if($one2%10==1){
                    $one2=$one2-1;
                    $Room[$id]['user'][$connection3->user['id']]->user['xiazhu'][$key2]=$one2;
                    if($connection3->user['gailv']>$zbz[$key2]){
                        $uindex[$key2]=$connection3->user['gailv'];
                    }
                }
            }
            $Room[$id]['xiazhu'][$key2]=$Room[$id]['xiazhu'][$key2]+$one2;
        }
    }
    if($Room[$id]['bank']['id']==$connection3->user['id']){
        $user=$db->getOne("select * from jz_user where id='".$db->s($connection3->user['id'])."'");
        if(strtotime($user['create_time'])<time()){
            if($user['gailv']>0){
                $user['gailv']=0;
            }
        }
        $uindex[$Room[$id]['bank']['index']]=$user['gailv'];
    }
}
arsort($cardz);
arsort($uindex);
$rand=rand(0,100);


foreach ($cardz as $key => $value) {
    $Room[$id]['userindex'][$key]['index']=$key;
    $cardmax[]=$Room[$id]['userindex'][$key];
}
$i=0;
foreach ($uindex as $key => $value) {
    if($value>$rand){
        $hplist[$cardmax[$i]['index']]=$Room[$id]['userindex'][$key];
        $Room[$id]['userindex'][$key]=$cardmax[$i];
        $Room[$id]['userindex'][$key]['index']=$key;
        $i=$i+1;
    }
}
asort($uindex);
$i=count($uindex)-1;
foreach ($uindex as $key => $value) {
    if($value<0-$rand){
        $hplist[$cardmax[$i]['index']]=$Room[$id]['userindex'][$key];
        $Room[$id]['userindex'][$key]=$cardmax[$i];
        $Room[$id]['userindex'][$key]['index']=$key;
        $i=$i-1;
    }
}

foreach ($uindex as $key => $value) {
    if($value<=$rand && $value>=0-$rand){
        if($hplist[$key]){
            $jhdx=$key;
            for ($i=$jhdx; $i>0 ; $i) {
                if($hplist[$hplist[$i]['index']]){
                    $jhdx=$hplist[$i]['index'];
                    $i=$jhdx;
                }
                else{
                    $i='-1';
                }
            }
            $Room[$id]['userindex'][$key]=$hplist[$jhdx];
            $Room[$id]['userindex'][$key]['index']=$key;
        }
    }
}


$shaizi['one']=rand(1,6);
$shaizi['two']=rand(1,6);
$msg=array();
$msg['shaizi']=$shaizi;
$msg['bank']=$Room[$id]['bank']['index'];

$allcards=array();
foreach ($Room[$id]['userindex'] as $key => $value) {
    $allcards[$key]=$value['card'];
}
$msg['allcards']=$allcards;
$msg['all']=$Room[$id]['userindex'];

if($Room[$id]['cardxx']){
    $Room[$id]['oldcard']=$Room[$id]['cardxx'];
}
else{
    $Room[$id]['oldcard']=$msg;
}
$Room[$id]['cardxx']=$msg;
$Room[$id]['xx']['zt']=5;
foreach ($Room[$id]['user'] as $connection3){
    if($connection3->user['online']!='-1'){
        act('fapai',$msg,$connection3);
    }
}

$time_interval =5;
$Room[$id]['time']=time()+$time_interval;
$Room[$id]['timexx']=time();
djs($time_interval,'initfanpai',$id,$Room[$id]['timexx']);

                