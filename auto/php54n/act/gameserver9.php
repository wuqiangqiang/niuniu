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
        $msg['html']=' <div class="createRoomBack" onclick="cancelCreate()"></div>
    <div class="mainPart" style="height: auto;">            
        <div class="createB"></div>
        <div class="createTitle">
        </div>              
        <img src="/themes/game/Public/zhongyi/img/gb_btn.64cf2.png" class="cancelCreate" onclick="cancelCreate()">';

        if(count($playlist)>1 && false){
            $msg['html'].='<div  class="scope xuanzefj-nav">';
            foreach ($playlist as $key => $value) {
                $msg['html'].='<div  id="selectBanker'.strip_tags($value[id]).'"   onclick="send(\'xzplay\',{id:'.strip_tags($value[id]).'})" class="selectBanker'.($key+1).' bankerUnSelected">
                    <img  class="img niuniusz niuniuselect"  src="/static/img/banker_selected.png">
                    <img  class="img niuniusz niuniuunselect"  src="/static/img/banker_unselected.png">
                    <p class="xuanzefj-nav-1">'. mb_substr(strip_tags($value['name']),0,2,'utf-8').'</p>
                    <p class="xuanzefj-nav-2" style="">'.mb_substr(strip_tags($value['name']),2,2,'utf-8').'</p>
                </div>';
            }
            $msg['html'].='</div>';
        }
        $msg['html'].='<div class="blueBack" style="height: auto;">
            <div class="bullRull scope" id="setting">
                
            </div>
            <div class="xuanzefj-top-zt" style="">
                <div class="selectTitle xuanzefj-top">
                    创建房间，无人参与，半小时后返还房卡
                </div>
            </div>
        </div>
        <div class="createCommit" onclick="send(\'openroom\',{})">确 定</div>';
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

        $data['act']='xzplay9';
        $data['id']=$last_id;
        reqact($data,$connection);














