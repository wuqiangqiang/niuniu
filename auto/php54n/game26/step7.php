<?php
    //step7 游戏开始倒计数阶段
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
      if($connection3->user['online']!='-1'){
          $msg = [];
          $msg['result'] = $Room[$id]['fenpai'];
          act('showresult', $msg, $connection);
          act('operationButton', '', $connection);
      }
