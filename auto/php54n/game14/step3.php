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


        $msg=array();
        $msg['user']=$index;
        if($Room[$id]['user'][$connection->user['id']]->user['zt']=='1'){
            $msg['card']=$connection->user['card'];
            for($i=0;$i<5;$i++){
                if($msg['card'][$i]['zt']==0){
                    unset($msg['card'][$i]);
                }
                if($connection->user['is_grade']==1){
                    $msg['allcard']= $Room[$id]['allcard'];
                }
            }
        }
        act('allfapai',$msg,$connection);

        act('mp3play','fapai',$connection);

         act('operationButton',-1,$connection);

        if($Room[$id]['time']>0){
        if($Room[$id]['type']==27){
                act('djs',$Room[$id]['time'],$connection);
                act('divRobBankerText',1,$connection);
        }
        else{
                act('djs',$Room[$id]['time'],$connection);
                act('divRobBankerText',2,$connection);
        }
        if($Room[$id]['user'][$connection->user['id']]->user['zt']=='1' && $Room[$id]['user'][$connection->user['id']]->user['qbank']=='-1'){
            if($Room[$id]['type']==27){
                 act('operationButton',1,$connection);
            }
            else{
                if($Room[$id]['type']==24){
                    act('operationButton',2,$connection);
                }
                else{
                    act('operationButton',3,$connection);
                }
            }
        }
        
        }

        if($Room[$id]['type']==27){
            $type='1';
        }
        elseif($Room[$id]['type']==24){
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


