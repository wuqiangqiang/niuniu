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
            }
        }
        act('allfapai',$msg,$connection);

        act('mp3play','fapai',$connection);

         $msg=array();
        $msg['id']='operationButton';
        $msg['html']='';
        act('html',$msg,$connection);

        if($Room[$id]['time3']>0){
        if($Room[$id]['type']==0){
                act('djs',$Room[$id]['time3'],$connection);
                $msg=array();
                $msg['id']='divRobBankerText';
                $msg['html']='<p class="liurenniuniu-ziti">上庄</p>';
                act('html',$msg,$connection);
        }
        else{
                act('djs',$Room[$id]['time3'],$connection3);
                $msg=array();
                $msg['id']='divRobBankerText';
                $msg['html']='<p class="liurenniuniu-ziti">抢庄</p>';
                act('html',$msg,$connection3);
        }
        if($Room[$id]['user'][$connection->user['id']]->user['zt']=='1' && $Room[$id]['user'][$connection->user['id']]->user['qbank']=='-1'){
            if($Room[$id]['type']==0){
                $msg=array();
                $msg['id']='operationButton';
                $msg['html']='<div class="operationButton-3-zt" id="jiurenqz" style="display: block;" onclick="send(\'qbank\',{zt:1})">
                              <img class="operationButton-3" src="/app/img/bull9/bull_button_orange.png">
                              <div class="operationButton-3-ts" >
                               上庄
                              </div>
                             </div>
                             <div class="operationButton-4-zt" id="jiurenbqz" style="display: block;" onclick="send(\'qbank\',{zt:0})">
                              <img class="operationButton-gg" src="/app/img/bull9/bull_button_blue.png"> 
                              <div class="operationButton-gg1" >
                               不上
                              </div>
                             </div>';
                act('html',$msg,$connection);
            }
            else{
                $msg=array();
                $msg['id']='operationButton';
                if($Room[$id]['type']==0){
                    $msg['html']='<div class="divCoin divCoin1" style="display: block;
                    z-index: 200;" onclick="send(\'qbank\',{zt:1})">
                      <img src="/app/img/bull9/bull_times_bg1.png"  class="operationButton-gg"  /> 
                      <div class="operationButton-gg3">
                       1倍
                      </div>
                     </div> 
                     <div class="divCoin divCoin2" style="display: block;
                    z-index: 200;" onclick="send(\'qbank\',{zt:2})">
                      <img src="/app/img/bull9/bull_times_bg1.png"  class="operationButton-gg"  /> 
                      <div  class="operationButton-gg3"  >
                       2倍
                      </div>
                     </div> 
                     <div class="divCoin divCoin3" style="display: block;
                    z-index: 200;" onclick="send(\'qbank\',{zt:4})">
                      <img src="/app/img/bull9/bull_times_bg1.png"  class="operationButton-gg"  /> 
                      <div  class="operationButton-gg3"  >
                       4倍
                      </div>
                     </div> 
                     <div class="divCoin divCoin4" style="display: block;
                    z-index: 200;" onclick="send(\'qbank\',{zt:0})">
                      <img src="/app/img/bull9/bull_times_bg_blue.png"  class="operationButton-gg"  /> 
                      <div  class="operationButton-gg3"  >
                       不抢
                      </div>
                     </div> 
                ';
                }
                else{
                $msg['html']='<div class="operationButton-3-zt" id="jiurenqz" style="display: block;" onclick="send(\'qbank\',{zt:1})">
                              <img class="operationButton-3" src="/app/img/bull9/bull_button_orange.png">
                              <div class="operationButton-3-ts" >
                               抢庄
                              </div>
                             </div>
                             <div class="operationButton-4-zt" id="jiurenbqz" style="display: block;" onclick="send(\'qbank\',{zt:0})">
                              <img class="operationButton-gg" src="/app/img/bull9/bull_button_blue.png"> 
                              <div class="operationButton-gg1" >
                               不抢
                              </div>
                             </div>';
                }
                act('html',$msg,$connection);
            }
        }
        
        }

        foreach ($Room[$id]['user'] as $connection3) {
             $msg=array();
             $msg['id']='operationButton';
            if($connection3->user['qbank']!='-1' && $connection3->user['zt']==1){


                if($Room[$id]['type']==0){
                    $wz='go';
                }
                else{
                    $wz='rob';
                }
            if($connection3->user['qbank']){

            if($Room[$id]['type']==4){
                $img2='/app/img/X-'.$connection3->user['qbank'].'.png';
                $img='/app/img/bull9/bull_text_'.$wz.'.png';
            $msg['html']='<div id="jiurenniuniu-qiangzhuangs" class="jiurenniuniu-qiangzhuangs" style="display: block">
            <img class="jiurenniuniu-qiangzhuangs-img" src="/app/img/bull9/bull_text_'.$wz.'.png">
         </div><div id="jiurenniuniu-qiangzhuangs" class="jiurenniuniu-qiangzhuangs" style="display: block;
    width: 22px;
    left: 190px;
    height: 22px;
    top: 24px;"><img class="jiurenniuniu-qiangzhuangs-img" src="/app/img/X-'.$connection3->user['qbank'].'.png"></div>';
                $mp3='qiangzhuang';
            }
            else{
            $img='/app/img/bull9/bull_text_'.$wz.'.png';
            $msg['html']='<div id="jiurenniuniu-qiangzhuangs" class="jiurenniuniu-qiangzhuangs" style="display: block;">
            <img class="jiurenniuniu-qiangzhuangs-img" src="/app/img/bull9/bull_text_'.$wz.'.png">
         </div>';
                $mp3='qiangzhuang';
            }
        }
        else{
            $img='/app/img/bull9/bull_text_'.$wz.'.png';
            $msg['html']='<div id="jiurenniuniu-qiangzhuangs" class="jiurenniuniu-qiangzhuangs" style="display: block;">
            <img class="jiurenniuniu-qiangzhuangs-img" src="/app/img/bull9/bull_text_'.$wz.'.png">
         </div>';
                $mp3='qiangzhuang';
          }
        if($connection3->user['id']==$connection->user['id']){
            act('html',$msg,$connection);
        }
        else{
            $msg=array();
            $msg['index']=$connection3->user['index'];
            $msg['img']=$img;

            if($img2){
                $msg2=array();
                act('showmemberRobText2',$msg,$connection);
                $msg2['index']=$connection3->user['index'];
                $msg2['img']=$img2;
                act('showmemberTimesText2',$msg2,$connection);
            }
            else{
                act('showmemberRobText',$msg,$connection);
            }
        }

        }
        }


