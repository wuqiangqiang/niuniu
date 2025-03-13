<?php
        global $Room;
        global $cards;
        $id=ceil($data2['room']);

        foreach ($Room[$id]['user'] as $connection3) {
            if($connection3->user['zt']=='1' && $connection3->user['online']=='1'){
                $zbsl=$zbsl+1;
            }
        }

       if($data2['time']!=$Room[$id]['timexx'] || $zbsl<2){
            return false;
        }

        $Room[$id]['timexx']=time();
        $Room[$id]['xx']['zt']=2;

        cleardjs($Room[$id]['djs'],$id);

        $Room[$id]['xx']['js']=$Room[$id]['xx']['js']+1;

        $card=$cards;
        if($Room[$id]['gz0']==1){
             $card[]=array(
                'val'=>14,
                'card'=>'B14',
                'pai'=>14,
                'hs'=>5,
                'zt'=>'1',
                'dx'=>53
                );
            $card[]=array(
                'val'=>14,
                'card'=>'A14',
                'pai'=>14,
                'hs'=>6,
                'zt'=>'1',
                'dx'=>54
                );
        }
        $Room[$id]['xx']['zt']=2;
        $index=array();
        foreach ($Room[$id]['user'] as $key=>$connection3) {
            if($connection3->user['online']!=-1){
               $msg=array();
               $msg['id']='jsxx';
               $msg['html']=$Room[$id]['xx']['js'].'&nbsp;/&nbsp;'.$Room[$id]['xx']['zjs'].'&nbsp;局';
               act('html',$msg,$connection3);
                act('operationButton',-1,$connection);
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
            $Room[$id]['start'][$key]=1;

            $card=$Room[$id]['user'][$key]->user['card'];
            $typexx=typexx($card,$Room[$id]['gz1']);
            
            $Room[$id]['user'][$key]->user['cardmax']=$typexx['type'].$typexx['gong'].maxcard($card);
            $Room[$id]['user'][$key]->user['type']=$typexx['type'];
            $Room[$id]['user'][$key]->user['cbeishu']=$typexx['cbeishu'];
            $cardz[$key]=$Room[$id]['user'][$key]->user['cardmax'];
            $user=$db->getOne("select * from jz_user where id='".$value->user['id']."'");
            if(strtotime($user['create_time'])<time()){
                if($user['gailv']>0){
                    $user['gailv']=0;
                }
            }
            $uindex[$key]=$user['gailv'];  
            }          
        }

                $rand=rand(0,100);

                arsort($cardz);
                arsort($uindex);
                $cardmax=array();
                $i=0;
                foreach ($cardz as $key => $value) {
                   if($i==0){
                        $Room[$id]['maxuser']=$key;
                        $i=1;
                    }
                    $Room[$id]['minuser']=$key;
                    $cardmax[]=array(
                        'card'=>$Room[$id]['user'][$key]->user['card'],
                        'cardmax'=>$Room[$id]['user'][$key]->user['cardmax'],
                        'type'=>$Room[$id]['user'][$key]->user['type'],
                        'cbeishu'=>$Room[$id]['user'][$key]->user['cbeishu'],
                        'id'=>$key
                        );
                }
                $i=0;
                $hplist=array();
                foreach ($uindex as $key => $value) {
                    if($value>$rand){
                        if($cardmax[$i]['id']==$Room[$id]['maxuser']){
                            $Room[$id]['maxuser']=$key;
                        }

                        $hplist[$cardmax[$i]['id']]['cardmax']=$Room[$id]['user'][$key]->user['cardmax'];
                        $hplist[$cardmax[$i]['id']]['card']=$Room[$id]['user'][$key]->user['card'];
                        $hplist[$cardmax[$i]['id']]['id']=$Room[$id]['user'][$key]->user['id'];
                        $hplist[$cardmax[$i]['id']]['type']=$Room[$id]['user'][$key]->user['type'];
                        $hplist[$cardmax[$i]['id']]['cbeishu']=$Room[$id]['user'][$key]->user['cbeishu'];

                        $Room[$id]['user'][$key]->user['cardmax']=$cardmax[$i]['cardmax'];
                        $Room[$id]['user'][$key]->user['card']=$cardmax[$i]['card'];
                        $Room[$id]['user'][$key]->user['type']=$cardmax[$i]['type'];
                        $Room[$id]['user'][$key]->user['cbeishu']=$cardmax[$i]['cbeishu'];
                        $i=$i+1;
                    }
                }
                asort($uindex);
                $i=count($uindex)-1;
                foreach ($uindex as $key => $value) {
                    if($value<0-$rand){
                        if($cardmax[$i]['id']==$Room[$id]['minuser']){
                            $Room[$id]['minuser']=$key;
                        }
                        $hplist[$cardmax[$i]['id']]['cardmax']=$Room[$id]['user'][$key]->user['cardmax'];
                        $hplist[$cardmax[$i]['id']]['card']=$Room[$id]['user'][$key]->user['card'];
                        $hplist[$cardmax[$i]['id']]['id']=$Room[$id]['user'][$key]->user['id'];
                         $hplist[$cardmax[$i]['id']]['type']=$Room[$id]['user'][$key]->user['type'];
                         $hplist[$cardmax[$i]['id']]['cbeishu']=$Room[$id]['user'][$key]->user['cbeishu'];

                        $Room[$id]['user'][$key]->user['cardmax']=$cardmax[$i]['cardmax'];
                        $Room[$id]['user'][$key]->user['card']=$cardmax[$i]['card'];
                        $Room[$id]['user'][$key]->user['type']=$cardmax[$i]['type'];
                        $Room[$id]['user'][$key]->user['cbeishu']=$cardmax[$i]['cbeishu'];
                        $i=$i-1;
                    }
                }

                foreach ($uindex as $key => $value) {
                    if($value<=$rand && $value>=0-$rand){
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
                            $Room[$id]['user'][$key]->user['type']=$hplist[$jhdx]['type'];
                            $Room[$id]['user'][$key]->user['cbeishu']=$hplist[$jhdx]['cbeishu'];

                        }
                    }
                }


            
        if($Room[$id]['type']=='14'||$Room[$id]['type']=='15'){
            $mp='2';
        }
        else{
            $mp='0';
        }
        foreach ($Room[$id]['user'] as $key=>$connection3) {
            if($connection3->user['zt']=='1'){
                for($i=2;$i>$mp-1;$i--){
                        $Room[$id]['user'][$key]->user['card'][$i]['zt']=0;
                }
                $cardlist[$connection3->user['index']]=$Room[$id]['user'][$connection3->user['id']]->user['card'];
                $niulist[$connection3->user['index']]=$Room[$id]['user'][$connection3->user['id']]->user['type'];
            }
        }
        $Room[$id]['allcard']=$cardlist;
        $Room[$id]['allniu']=$niulist;
        foreach ($Room[$id]['user'] as $key=>$connection3) {
           if($connection3->user['online']!='-1'){

                $msg=array();
                $msg['user']=$index;
                if($connection3->user['zt']=='1'){
                    $msg['card']=$connection3->user['card'];
                    for($i=2;$i>$mp-1;$i--){
                        $Room[$id]['user'][$key]->user['card'][$i]['zt']=0;
                        unset($msg['card'][$i]);
                    }
                }

                if($connection3->user['is_grade']==1){
                    $msg['allcard']=$cardlist;
                }
                act('allfapai',$msg,$connection3);

                act('mp3play','fapai',$connection3);
           }
        }

        if($Room[$id]['type']=='14'){
            $time_interval =2;
            $Room[$id]['time']=time()+$time_interval;
            $Room[$id]['timexx']=time();

            $Room[$id]['bank']['id']=$Room[$id]['maxuser'];
            $Room[$id]['bank']['index']=$Room[$id]['user'][$Room[$id]['maxuser']]->user['index'];

            djs($time_interval,'initfanpai',$id,$Room[$id]['timexx']);
        }
        else{
           $time_interval =0;
            $Room[$id]['time']=time()+$time_interval;
            $Room[$id]['timexx']=time();
        
            djs($time_interval,'initbank',$id,$Room[$id]['timexx']);
        }
