<?php
        global $Room;
        $cardtype['0']='高牌';
        $cardtype['1']='对子';
        $cardtype['2']='顺子';
        $cardtype['3']='同花';
        $cardtype['4']='同花顺';
        $cardtype['5']='三条';
        $id=$connection->user['room'];
        
        if($connection->user['tpzt']==1 || $connection->user['index']!=$Room[$id]['list'][$Room[$id]['next']]){
            return false;
        }
        act('hidebook','',$connection);
        $card=$Room[$id]['user'][$connection->user['id']]->user['card'];

        $msg=array();
        $msg['card']=$card;
        act('fapai',$msg,$connection);


        $msg=array();
        $msg['id']='CardType';
        $msg['html']='<div style="display: block;">'.$cardtype[$Room[$id]['user'][$connection->user['id']]->user['typexx']].'</div> ';
        act('html',$msg,$connection);


         foreach ($Room[$id]['user'] as $connection3) {
             if($connection3->user['online']!='-1' && $connection3->user['id']!=$connection->user['id']){
                $msg=array();
                $msg['index']=$connection->user['index'];
                act('havelook',$msg,$connection3);
             }
             if($connection3->user['online']!='-1')
             {
              act('mp3play','lookmp3',$connection3);
             }
         }
         $connection->user['tpzt']=1;
         $Room[$id]['user'][$connection->user['id']]->user['tpzt']=1;

         $biuser=array();
         $biuser['time']=$Room[$id]['timexx'];

         foreach ($Room[$id]['user'] as $connection3) {
          if($connection3->user['zt']=='1' && ($connection3->user['tpzt']==1 || count($Room[$id]['list'])==2) && $connection3->user['index']!=$Room[$id]['list'][$Room[$id]['next']]){
            $userdata=array();
            $userdata['index']=$connection3->user['index'];
            $userdata['id']=$connection3->user['id'];
            $biuser['user'][]=$userdata;
          }
         }


         if($Room[$id]['count']<count($Room[$id]['list'])){
            $biuser['user']=array();
         } 

         if($Room[$id]['gz1']==1 && $Room[$id]['total']<100){
           $biuser['user']=array();
         }

            if($connection3->user['online']!='-1'){
                act('qxbp','',$connection3);
                act('userdjs',$msg,$connection3);
            }

              if($Room[$id]['gz0']==1 && count($Room[$id]['list'])>2  && $connection->user['tpzt']!=1){
                $biuser['user']=array();
              }  

              $msg2=array();
              $msg2['id']='Buttons';
              $html='<div class="scoreList"><div style="display: block;">';
              if($connection->user['tpzt']==1){
                $list=$Room[$id]['cm2'];
              }
              else{
                $list=$Room[$id]['cm'];
              }
              foreach ($list as $key => $value) {
                  if($key>=$Room[$id]['beishu']){
                    $html=$html.'<div class="scoreItem scoreItemText scoreItem'.($key+1).'1"  onclick="send(\'xiazhu\',{xz:'.$key.',time:'.$Room[$id]['timexx'].'})">'.$value.'</div>';
                  }
                  else{
                    $html=$html.'<div class="scoreItem scoreItemText scoreItem50">'.$value.'</div>';
                  }
              }
              $html=$html.'</div></div>';
              $html=$html.'</div></div>';
              if($biuser['user']){//count($Room[$id]['list'])==2 && $Room[$id]['count']>2
                $html=$html.'<div class="doubleButton"><div class="isOver"><div class="leftButton button" onclick="send(\'qipai\',{time:'.$Room[$id]['timexx'].'})"></div><div class="rightButton button" onclick=\'bipai('.json_encode($biuser).');\'></div></div></div>';
              }
              else{
                $html=$html.'<div class="doubleButton"><div class="isOver"><div class="leftButton button" onclick="send(\'qipai\',{time:'.$Room[$id]['timexx'].'})"></div><div class="rightButton1 button" ></div></div></div>';
              }
              $msg2['html']=$html;
              act('html',$msg2,$connection);
              act('hidebook','',$connection);