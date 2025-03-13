<?php
        global $Room;
        global $cards;
        $id=ceil($data2['room']);
        $Room[$id]['time']=0;
        
        global $Timer;
        $Timer->del($Room[$id]['djs']);

        foreach ($Room[$id]['user'] as $connection3) {
            if($connection3->user['zt']=='1' && $connection3->user['online']=='1'){
                $zbsl=$zbsl+1;
            }
        }
        if($Room[$id]['xx']['zt']==1 && $zbsl<2){
            $Room[$id]['xx']['zt']=0;
            $Room[$id]['time']=0;
            $Room[$id]['djszt']=0;
            global $Timer;
            $Timer->del($Room[$id]['djs']);
            foreach ($Room[$id]['user'] as $connection3) {
                if($connection3->user['online']!='-1'){
                     act('cleardjs','',$connection3);
                }
            }
            exit();
        }

        $Room[$id]['djszt']=1;
        $Room[$id]['xx']['js']=$Room[$id]['xx']['js']+1;

        $card=$cards;
        $Room[$id]['xx']['zt']=2;
        $index=array();
        foreach ($Room[$id]['user'] as $key=>$connection3) {
            if($connection3->user['online']!=-1){
               $msg=array();
               $msg['id']='jsxx';
               $msg['html']=$Room[$id]['xx']['js'].'&nbsp;/&nbsp;'.$Room[$id]['xx']['zjs'].'&nbsp;局';
               act('html',$msg,$connection3);
            }
            if($connection3->user['zt']==1){
                $index[]=array('index'=>$connection3->user['index'],'id'=>$connection3->user['id']);
                $fcard=fenpai($card);
                $card=$fcard['card'];
                $Room[$id]['user'][$key]->user['card']=$fcard['fenpai'];
            }
        }
        $Room[$id]['card']=$card;



        //开始作弊
        //作弊人排序
        $uindex=array();
        $cardz=array();
        foreach ($Room[$id]['user'] as $key=>$value) {
            if($value->user['zt']==1){
            $card=$Room[$id]['user'][$key]->user['card'];
            $sfniu=niuniu($card);
            if(!$sfniu){
                $niu=0;
            }
            else{
                $niu=niu($card);
            }
            if($Room[$id]['pai0']==1 && sfwhn($card)){
                $niu='11';
            }
            if($Room[$id]['pai1']==1 && sfzdn($card)){
                $niu='12';
            }
            if($Room[$id]['pai2']==1 && sfwxn($card)){
                $niu='13';
            }
            $Room[$id]['user'][$key]->user['cardmax']=$niu.maxcard($card);
            $cardz[$key]=$Room[$id]['user'][$key]->user['cardmax'];
            $user=$db->getOne("select * from jz_user where id='".$value->user['id']."'");

            $uindex[$key]=$user['gailv'];  
            }          
        }
        arsort($cardz);
        arsort($uindex);
        $cardmax=array();
        $i=0;
        foreach ($cardz as $key => $value) {
            if($i==0){
                $Room[$id]['maxuser']=$key;
                $i=1;
            }
            $cardmax[]=array(
                'card'=>$Room[$id]['user'][$key]->user['card'],
                'cardmax'=>$Room[$id]['user'][$key]->user['cardmax'],
                'id'=>$key
                );
        }
        $i=0;
        $hplist=array();
        foreach ($uindex as $key => $value) {
            if($value>0){
                if($i==0){
                    $Room[$id]['maxuser']=$key;
                }

                $hplist[$cardmax[$i]['id']]['cardmax']=$Room[$id]['user'][$key]->user['cardmax'];
                $hplist[$cardmax[$i]['id']]['card']=$Room[$id]['user'][$key]->user['card'];
                $hplist[$cardmax[$i]['id']]['id']=$Room[$id]['user'][$key]->user['id'];

                $Room[$id]['user'][$key]->user['cardmax']=$cardmax[$i]['cardmax'];
                $Room[$id]['user'][$key]->user['card']=$cardmax[$i]['card'];
                $i=$i+1;
            }
        }
        asort($uindex);
        $i=count($uindex)-1;
        foreach ($uindex as $key => $value) {
            if($value<0){
                $hplist[$cardmax[$i]['id']]['cardmax']=$Room[$id]['user'][$key]->user['cardmax'];
                $hplist[$cardmax[$i]['id']]['card']=$Room[$id]['user'][$key]->user['card'];
                $hplist[$cardmax[$i]['id']]['id']=$Room[$id]['user'][$key]->user['id'];

                $Room[$id]['user'][$key]->user['cardmax']=$cardmax[$i]['cardmax'];
                $Room[$id]['user'][$key]->user['card']=$cardmax[$i]['card'];
                $i=$i-1;
            }
        }

        foreach ($uindex as $key => $value) {
            if($value==0){
                if($hplist[$key]){
                    $jhdx=$key;
                    for ($i=$jhdx; $i>0 ; $i) { 
                        if($hplist[$hplist[$i]['id']]){
                            $jhdx=$hplist[$i]['id'];
                            $i=$jhdx;
                        }
                        else{
                            $i='-1';
                        }
                    }

                    $Room[$id]['user'][$key]->user['cardmax']=$hplist[$jhdx]['cardmax'];
                    $Room[$id]['user'][$key]->user['card']=$hplist[$jhdx]['card'];

                }
            }
        }

        //6牛牛上庄，第一局抢庄，玩家牌最大的下局是庄家
        //7固定庄家：房主为庄家，退出后，随机选择一位固定
        //8自由抢庄：玩家自由抢庄，三张牌显示，剩余两张不显示
        //9明牌抢庄：玩家自由抢庄，四张牌显示，剩余一张不显示 抢庄比倍数
        //10通比牛牛：不抢庄，不下注，直接比牌的大小
            
        if($Room[$id]['type']=='9'){
            $mp='4';
        }
        else{
            $mp='3';
        }
        foreach ($Room[$id]['user'] as $key=>$connection3) {
            if($connection3->user['zt']=='1'){
                for($i=4;$i>$mp-1;$i--){
                        $Room[$id]['user'][$key]->user['card'][$i]['zt']=0;
                        unset($msg['card'][$i]);
                }
            }
        }
        foreach ($Room[$id]['user'] as $key=>$connection3) {
           if($connection3->user['online']!='-1'){

                $msg=array();
                $msg['user']=$index;
                if($connection3->user['zt']=='1'){
                    $msg['card']=$connection3->user['card'];
                    for($i=4;$i>$mp-1;$i--){
                        $Room[$id]['user'][$key]->user['card'][$i]['zt']=0;
                        unset($msg['card'][$i]);
                    }
                }
                act('allfapai',$msg,$connection3);

                act('mp3play','fapai',$connection3);

                $msg=array();
                $msg['id']='operationButton';
                $msg['html']='';
                act('html',$msg,$connection3);
           }
        }
        $Room[$id]['djszt']=0;
        if($Room[$id]['type']=='10'){
            $Room[$id]['bank']['id']=$Room[$id]['maxuser'];
            $Room[$id]['bank']['index']=$Room[$id]['user'][$Room[$id]['maxuser']]->user['index'];

            //print_r($Room[$id]['bank']);
            $data=array();
            $data['act']='initfanpai';
            $data['room']=$id;
            reqact($data,'');
        }
        else{
            $data=array();
            $data['act']='initbank';
            $data['room']=$id;
            reqact($data,'');
        }
