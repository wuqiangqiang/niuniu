<?php
        global $Room;
        global $cards;
        $id=ceil($data2['room']);

        if($data2['time']!=$Room[$id]['timexx']){
            return false;
        }

        $Room[$id]['timexx']=time();
        $Room[$id]['xx']['zt']=6;
        cleardjs($Room[$id]['djs'],$id);
        $time_interval = 8;
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
                // 闲家等待庄家开骰
                act('divRobBankerText',4,$connection3);
                if($Room[$id]['bank']['id'] != $connection3->user['id']) {
                    act('operationButton','',$connection3);
                }
                // 庄家开骰
                else {
                    act('operationButton',7,$connection3);
                }

                if($connection3->user['zt']=='1'){
                    //act('operationButton',6,$connection3);
                    $msg=array();
                    $msg['card']=$Room[$id]['allcard'];
                    $msg['allniu']=$Room[$id]['allniu'];
                    $msg['newcard']=$Room[$id]['allcard'];
                    //act('fapaistart',$msg,$connection3);
                }
            }
        }