<?php
         global $Room;
         $id=ceil($data2['room']);


         if($data2['time']!=$Room[$id]['timexx']){
            return false;
          }

          $Room[$id]['timexx']=time();
          $Room[$id]['xx']['zt']=5;

         cleardjs($Room[$id]['djs'],$id);

         foreach ($Room[$id]['user'] as $connection3) {
            act('sss',$Room[$id]['bank']['index'],$connection3);
            act('clearmemberRobText','',$connection3);
            act('clearmemberRobText2','',$connection3);
            act('clearmemberTimesText','',$connection3);
         }

          //闲家下注
         $time_interval = 10;
         //闲家下注
         $Room[$id]['time']=time()+$time_interval;
         $Room[$id]['timexx']=time();
         djs($time_interval,'setxian',$id,$Room[$id]['timexx']);

        foreach ($Room[$id]['user'] as $connection3) {
            if($connection3->user['zt']==1){
              $Room[$id]['user'][$connection3->user['id']]->user['beishu']='-1';
            }
            if($connection3->user['online']!='-1'){
                act('djs',$Room[$id]['time'],$connection3);
                act('divRobBankerText',3,$connection3);

                if($connection3->user['zt']==1){
                    // 闲家下注
                    if($connection3->user['index']!=$Room[$id]['bank']['index']){
                        act('mp3play', 'yafen_start',$connection3);
                        act('operationButton',$Room[$id]['zdop'],$connection3);
                    }
                    // 庄家摇骰
                    else {
                        act('operationButton','',$connection3);
                    }
              }
            }
        }