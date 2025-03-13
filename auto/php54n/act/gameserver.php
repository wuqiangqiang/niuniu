<?php
        $id=ceil($data2['id']);
        $server=$db->getOne("select * from jz_server where type='".$db->s($id)."' and zt=1 order by num asc");
        // if(!$server){
        //     act('zhengzkf','',$connection);
        //     return false;
        // }
        $playlist=$db->getAll("select * from jz_rule where type='".$db->s($id)."' and zt=1 order by `sort` desc");
        $msg=array();
        $msg['id']='room';
        $msg['html']=' <div class="createRoomBack"></div>
    <div class="mainPart" style="height: auto;">            
        <div class="createB"></div>
        <div class="createTitle">
            <img src="/app/files/d_11/images/common/createroom2.png">
        </div>              
        <img src="/app/files/d_11/images/common/cancel.png" class="cancelCreate" onclick="cancelCreate()">';

        $playlist[0]['name'] = trim($playlist[0]['name']);
        if(!empty($playlist[0]['name'])){
            $msg['html'].='<div  class="scope xuanzefj-nav">';
            foreach ($playlist as $key => $value) {
                $msg['html'].='<div  id="selectBanker'.strip_tags($value[id]).'"   onclick="send(\'xzplay\',{id:'.strip_tags($value[id]).'})" class="selectBanker'.($key+1).' bankerUnSelected">
                    <img  class="img niuniusz niuniuselect"  src="/app/img/banker_selected.png">
                    <img  class="img niuniusz niuniuunselect"  src="/app/img/banker_unselected.png">
                    <p class="xuanzefj-nav-1">'. mb_substr(strip_tags($value['name']),0,2,'utf-8').'</p>
                    <p class="xuanzefj-nav-2" style="">'.mb_substr(strip_tags($value['name']),2,2,'utf-8').'</p>
                </div>';
            }
            $msg['html'].='</div>';
        }
        $msg['html'].='<div class="blueBack" style="height: auto;">
            <div class="selectPart xuanzefj-top-zt" style="">
                <div class="selectTitle xuanzefj-top">
                    创建房间,游戏未进行,不消耗房卡
                </div>
            </div>
            <div class="bullRull scope" id="setting">    
            </div>
        </div>
        <div class="createCommit" onclick="send(\'openroom\',{})">确定</div>';
         act('html',$msg,$connection);

         $msg=array();
         $msg['id']='room';
         act('showid',$msg,$connection);

        $last_id = $playlist['0']['id'];
        if(isset($connection->user['history_select'])) {
            $history_select = $db->getOne('SELECT `history_select` FROM `jz_user` WHERE `id` = ' . ceil($connection->user['id']));
            $history_select = !empty($history_select['history_select']) ? json_decode($history_select['history_select'], true) : [];
            $last_id = !empty($history_select[$id]) ? ceil($history_select[$id]['id']) : $playlist['0']['id'];
        }

        $data['act']='xzplay';
        $data['id']=$last_id;
        reqact($data,$connection);














