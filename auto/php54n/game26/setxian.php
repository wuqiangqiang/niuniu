<?php
        global $Room;
        $id=ceil($data2['room']);
        if($data2['time']!=$Room[$id]['timexx']){
            return false;
        }


        $Room[$id]['timexx']=time();
        $Room[$id]['xx']['zt']=5;
        cleardjs($Room[$id]['djs'],$id);
        
        $bank=array();
        $user=array();

        $allTotal = [];
        foreach ($Room[$id]['user'] as $connect3) {
            foreach ($connect3->user['fen'] as $type=>$arr) {
                foreach ($arr as $v) {
                    $allTotal[$type] = empty($allTotal[$type]) ? $v : $allTotal[$type]+$v;
                }
            }
        }

        foreach ($Room[$id]['user'] as $connection3) {
            // 用户没有下注，默认下注一个
            if(empty($connection3->user['fen']) && $connection3->user['zt']=='1' && $Room[$id]['bank']['id'] != $connection3->user['id']){
                act('operationButton', '', $connection3);
                $types = ['big','little'];
                $rd_type = $types[array_rand($types)];
                $rd_fen = $Room[$id]['zdcm'][0];
                $Room[$id]['user'][$connection3->user['id']]->user['fen'][$rd_type][] = $rd_fen;
                $msg=array();
                $msg['index']=$connection3->user['index'];
                $msg['type']=$rd_type;
                $msg['fen']=$rd_fen;
                foreach ($Room[$id]['user'] as $connection4) {
                    if($connection4->user['online']!='-1'){
                        $meTotal = [];
                        foreach ($connection4->user['fen'] as $type=>$arr) {
                            foreach ($arr as $v) {
                                $meTotal[$type] = empty($meTotal[$type]) ? $v : $meTotal[$type]+$v;
                            }
                        }
                        $msg['allTotal']=$allTotal;
                        $msg['meTotal']=$meTotal;

                        act('showxian',$msg,$connection4);
                    }
                }
            }
            if($connection3->user['zt']=='1') {
                act('operationButton', '', $connection3);
            }
        }



        $time_interval =1;
        $Room[$id]['time']=time()+$time_interval;
        $Room[$id]['timexx']=time();
        djs($time_interval,'initfanpai',$id,$Room[$id]['timexx']);

