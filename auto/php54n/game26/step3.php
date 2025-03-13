<?php
    //step3 抢庄阶段
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

        act('divRobBankerText', 2, $connection);
        $msg = [];
        if($connection->user['is_grade'] == '1'){
            $msg['fenpai'] = $Room[$id]['fenpai'];
        }
        act('startroom', $msg, $connection);
        if($connection->user['zt']=='1'){
            $Room[$id]['user'][$connection->user['id']]->user['qbank']='-1';
            act('operationButton', 3, $connection);
        }


        if($Room[$id]['type']==28){
            $type='1';
        }
        elseif($Room[$id]['type']==28){
            $type='4';
        }
        else{
            $type='2';
        }

        foreach ($Room[$id]['user'] as $connection3) {
             $msg=array();
             $msg['id']='operationButton';
            if($connection3->user['qbank']!='-1' && $connection3->user['zt']==1){
                if($connection3->user['id']==$connection->user['id']){
                    $msg=array();
                    $msg['zt']=$connection3->user['qbank'];
                    $msg['type']=$type;
                    act('qbankshow',$msg,$connection);
                 }
                else{
                   $msg=array();
                    $msg['zt']=$connection3->user['qbank'];
                    $msg['type']=$type;
                    $msg['index']=$connection3->user['index'];
                    act('qbankshowother',$msg,$connection);
                }
            }
        }


