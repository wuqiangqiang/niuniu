<?php
        global $Room;
        $id=ceil($data2['room']);
        if($data2['time']!=$Room[$id]['timexx']){
            return false;
        }

        $Room[$id]['timexx']=time();
        $Room[$id]['xx']['zt']=6;

        cleardjs($Room[$id]['djs'],$id);

        foreach ($Room[$id]['user'] as $connection3) {
            if($connection3->user['online']!='-1'){
                $msg = [];
                $msg['prizes'] = $Room[$id]['prizes'];
                $msg['result'] = $Room[$id]['fenpai'];
                act('showresult',$msg,$connection3);
                act('operationButton','',$connection3);
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
        foreach ($Room[$id]['user'] as $connection3) {
            $jifen = 0;
            $connection3->user['fen'] = $Room[$id]['user'][$connection3->user['id']]->user['fen'];
            if($Room[$id]['bank']['id'] == $connection3->user['id'] || $connection3->user['zt']!='1'){
                continue;
            }
            // 计算中的奖
            foreach ($Room[$id]['prizes'] as $type => $beishu) {
                // 中奖
                if(!empty($connection3->user['fen'][$type])) {
                    $xiazhu = 0;
                    foreach ($connection3->user['fen'][$type] as $fen) {
                        $xiazhu += $fen;
                    }
                    // 赔率 = 低分 * 倍数 * 下注 * 1（特殊牌型的倍数）。
                    $jifen += 1*$xiazhu*$beishu;
                }
            }
            // 计算未中奖损失
            $loss = 0;
            foreach ($connection3->user['fen'] as $type=>$arr) {
                // 押注的图案没有中奖
                if(empty($Room[$id]['prizes'][$type])) {
                    foreach ($arr as $fen2) {
                        $loss += $fen2;
                    }
                }
            }
            $jifen -= $loss;

            $data = [];
            $data['fx'] = $fx;
            $data['bank']['index'] = $Room[$id]['bank']['index'];
            // 未损失
            if($jifen > 0) {
                $Room[$id]['user'][$connection3->user['id']]->user['dqjf']=$Room[$id]['user'][$connection3->user['id']]->user['dqjf']-abs($jifen);
                $Room[$id]['user'][$Room[$id]['bank']['id']]->user['dqjf']=$Room[$id]['user'][$Room[$id]['bank']['id']]->user['dqjf']+abs($jifen);
                $data['win']['index']=$Room[$id]['bank']['index'];
                $data['win']['dqjf']=$Room[$id]['user'][$Room[$id]['bank']['id']]->user['dqjf'];
                $data['lose']['index']=$connection3->user['index'];
                $data['lose']['dqjf']=$Room[$id]['user'][$connection3->user['id']]->user['dqjf'];
            } else {
                $Room[$id]['user'][$connection3->user['id']]->user['dqjf']=$Room[$id]['user'][$connection3->user['id']]->user['dqjf']+abs($jifen);
                $Room[$id]['user'][$Room[$id]['bank']['id']]->user['dqjf']=$Room[$id]['user'][$Room[$id]['bank']['id']]->user['dqjf']-abs($jifen);
                $data['lose']['index']=$Room[$id]['bank']['index'];
                $data['lose']['dqjf']=$Room[$id]['user'][$Room[$id]['bank']['id']]->user['dqjf'];
                $data['win']['index']=$connection3->user['index'];
                $data['win']['dqjf']=$Room[$id]['user'][$connection3->user['id']]->user['dqjf'];
            }
            $jibixx[]=array('dqjf'=>$Room[$id]['user'][$connection3->user['id']]->user['dqjf'],'index'=>$Room[$id]['user'][$connection3->user['id']]->user['index']);
            foreach ($Room[$id]['user'] as $connection4) {
                if($connection4->user['online']!=-1){
                    //act('mp3play','mp3gold',$connection3);
                    act('jibi',$data,$connection4);
                }
            }
            $djxx[]=array('user'=>$connection3->user,'sfbank'=>'0','jf'=>$jifen,'beishu'=>$connection3->user['beishu']);
        }
        $jibixx[]=array('dqjf'=>$Room[$id]['user'][$Room[$id]['bank']['id']]->user['dqjf'],'index'=>$Room[$id]['user'][$Room[$id]['bank']['id']]->user['index'],'fx'=>$fx);

        $djxx[]=array('user'=>$Room[$id]['user'][$Room[$id]['bank']['id']]->user,'sfbank'=>'1','jf'=>$bankjf,'beishu'=>$Room[$id]['beishu']);

        foreach ($Room[$id]['user'] as $connection3) {
            if($connection3->user['online']!=-1){
                act('jibichange',$jibixx,$connection3);
            }
        }
        //牌局信息入库
        foreach ($djxx as $key => $value) {
            unset($djxx[$key]['user']['history_select']);
        }
        $detail_arr = [];
        $detail_arr['djxx'] = $djxx;
        $detail_arr['result'] = $Room[$id]['fenpai'];
        $detail_arr['prizes'] = $Room[$id]['prizes'];

        $add['room']=$id;
        $add['js']=$Room[$id]['xx']['js'];
        $add['djxx']=json_encode($detail_arr,JSON_UNESCAPED_UNICODE);
        $db->insert('jz_dj_room',$add);

        if($fx==0){
            $time_interval =10;
        }
        else{
            $time_interval =10;
        }
        $Room[$id]['time']=time()+$time_interval;
        $Room[$id]['timexx']=time();
        djs($time_interval,'initroom',$id,$Room[$id]['timexx']);
        
