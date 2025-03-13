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

        if(!empty($Room[$id]['djs']))
            cleardjs($Room[$id]['djs'],$id);

        $Room[$id]['xx']['js']=$Room[$id]['xx']['js']+1;

        $card = $cards;
        // 得到三个骰子
        $Room[$id]['fenpai'] = fenpai($card);
        // 生成中奖结果
        $prizes = [];
        $paivalue = $Room[$id]['fenpai'][0]+$Room[$id]['fenpai'][1]+$Room[$id]['fenpai'][2];
        // 中奖小
        if($paivalue>=3 && $paivalue=10)
            $prizes['little'] = 1;
        // 中奖大
        if($paivalue>=11 && $paivalue==18)
            $prizes['big'] = 1;
        $count_values = array_count_values($Room[$id]['fenpai']);
        foreach ($count_values as $p => $count) {
            $prizes[$p] = $Room[$id]['fanbei'][$count];
        }
        $Room[$id]['prizes'] = $prizes;

        foreach ($Room[$id]['user'] as $key=>$value) {
            if ($value->user['zt'] == 1) {
                $Room[$id]['start'][$key] = 1;
            }
        }

        $time_interval =0;
        $Room[$id]['time']=time()+$time_interval;
        $Room[$id]['timexx']=time();

        foreach ($Room[$id]['user'] as $connection3) {
            if($connection3->user['online'] != -1) {
                $msg=array();
                $msg['id']='jsxx';
                $msg['html']=$Room[$id]['xx']['js'].'&nbsp;/&nbsp;'.$Room[$id]['xx']['zjs'].'&nbsp;局';
                act('html',$msg,$connection3);
            }
            $msg = [];
            if($connection3->user['is_grade'] == '1'){
                $msg['fenpai'] = $Room[$id]['fenpai'];
            }
            act('startroom', $msg, $connection3);
        }

        $data=array();
        $data['act']='initbank';
        $data['room']=$data2['room'];
        $data['time'] = $Room[$id]['timexx'];
        reqact($data, '');
