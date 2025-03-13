<?php
    //step4 闲家下注
        global $Room;
        $id=$connection->user['room'];
        act('initroom',$msg,$connection);
        $msg=array();


         if($Room[$id]['time']>0){
                act('djs',$Room[$id]['time'],$connection);
                act('divRobBankerText',4,$connection);

             if($Room[$id]['user'][$connection->user['id']]->user['zt']=='1' && $Room[$id]['user'][$connection->user['id']]->user['tpzt']=='-1'){
                    act('operationButton',6,$connection);
              }
               $msg=array();
               $msg['card']=$Room[$id]['allcard'];
               $msg['newcard']=$Room[$id]['allcard'];
               $msg['allniu']=$Room[$id]['allniu'];
               act('fapaistart',$msg,$connection);
        }

         foreach ($Room[$id]['user'] as $connection3) {
                if($connection3->user['tpzt']!='-1' && $connection3->user['zt']=='1'){
                    if($connection3->user['id']==$connection->user['id']){
                      act('showtanpai','',$connection);
                    } 
                    else{
                      act('showothertanpai',$connection3->user['index'],$connection);
                    }
                  }
        }