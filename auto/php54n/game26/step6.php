<?php
        //step6 翻牌
        global $Room;
        $id=$connection->user['room'];
        act('initroom',$msg,$connection);
        $msg=array();
       $msg['id']='jsxx';
       $msg['html']=$Room[$id]['xx']['js'].'&nbsp;/&nbsp;'.$Room[$id]['xx']['zjs'].'&nbsp;局';
       act('html',$msg,$connection);

        $index=array();
        foreach ($Room[$id]['user'] as $key=>$connection3) {
            if($connection3->user['zt']==1){
                $index[]=array('index'=>$connection3->user['index'],'id'=>$connection3->user['id']);
            }
        }

        $msg = [];
        if($connection->user['is_grade'] == '1'){
            $msg['fenpai'] = $Room[$id]['fenpai'];
        }
        act('startroom', $msg, $connection);

        $allTotal = [];
        foreach ($Room[$id]['user'] as $connect3) {
            foreach ($connect3->user['fen'] as $type=>$arr) {
                foreach ($arr as $v) {
                    $allTotal[$type] = empty($allTotal[$type]) ? $v : $allTotal[$type]+$v;
                }
            }
        }
        $msg=array();
        $msg['index']=$connection->user['index'];
        act('operationButton', '', $connection);
        if($connection->user['online']!='-1'){
            $meTotal = [];
            if(!empty($connection->user['fen'])) {
                foreach ($connection->user['fen'] as $type=>$arr) {
                    foreach ($arr as $v) {
                        $meTotal[$type] = empty($meTotal[$type]) ? $v : $meTotal[$type]+$v;
                    }
                }
            }
            $msg['allTotal']=$allTotal;
            $msg['meTotal']=$meTotal;
            act('showxianTotal', $msg, $connection);
        }
