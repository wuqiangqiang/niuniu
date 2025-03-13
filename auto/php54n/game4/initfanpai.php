<?php
         global $Room;
         $id=ceil($data2['room']);

        if($data2['time']!=$Room[$id]['timexx']){
            return false;
        }

        $Room[$id]['timexx']=time();
        $Room[$id]['xx']['zt']=5;
        cleardjs($Room[$id]['djs'],$id);



         $time_interval = 15;
         //翻牌时间
         $Room[$id]['time']=time()+$time_interval;
         $Room[$id]['timexx']=time();
        djs($time_interval,'setfanpai',$id,$Room[$id]['timexx']);


        foreach ($Room[$id]['user'] as $connection3) {
            if($connection3->user['zt']=='1'){
                 $Room[$id]['user'][$connection3->user['id']]->user['tpzt']='-1';
            }
            if($connection3->user['online']!='-1'){
                act('djs',$Room[$id]['time'],$connection3);
                act('divRobBankerText',4,$connection3);


                if($connection3->user['zt']=='1'){
                    act('operationButton',6,$connection3);
                    $msg['card']=$Room[$id]['allcard'];
                    $msg['niu']=$Room[$id]['allniu'];
                    act('fapaistart',$msg,$connection3);
                }
            }
        }