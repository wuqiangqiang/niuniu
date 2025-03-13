<?php
        $id=ceil($data2['id']);
        $msg=array();
        $msg['id']='selectBanker'.$data2['id'];
        $msg['html']='active';
        act('active',$msg,$connection);
        $play=$db->getOne("select * from jz_rule where id='".$db->s($id)."' and zt=1");
        $rule_list=$db->getAll("SELECT id,name FROM `jz_rule` WHERE `type`=".$play['type']);

        if(isset($connection->user['history_select'])) {
            $history_select = $db->getOne('SELECT `history_select` FROM `jz_user` WHERE `id` = ' . ceil($connection->user['id']));
            $history_select = !empty($history_select['history_select']) ? json_decode($history_select['history_select'], true) : [];
            if(empty($history_select[$play['type']])) {
                $history_select[$play['type']] = [];
            }
            $history_select[$play['type']]['id'] = $play['id'];
            $db->update('jz_user', ['history_select' => json_encode($history_select)], 'id=' . ceil($connection->user['id']));
        }

        $msg=array();
        $msg['id']='setting';
        $msg['html']='';

        $msg['html'] .= '<div class="selectPart">
                            <div class="selectTitle">模式</div>
                            <div class="selectList">
                            ';
        foreach ($rule_list as $key=>$value) {
            $active = $value['id'] == $play['id'] ? ' active' : '';
            $msg['html'].='<div class="selectItem'.$active.'" id="rule'.$value['id'].'" onclick="send(\'xzplay9\',{id:\''.$value['id'].'\'})">
                                    <div class="selectBox"></div>
                                    <img src="/themes/game/Public/zhongyi/img/DuiGuo.08271.png">
                                    <div class="selectText">'.$value['name'].'</div>
                                </div> ';
        }
        $msg['html'] .= '    </div>
                            <div style="clear: both;"></div>
                         </div>';


        if($play['cm']){
            $msg['html'].='<div class="selectPart">
                            <div class="selectTitle">筹码</div>
                            <div class="selectList">';
            $list=explode(',',$play['cm']);
            foreach ($list as $key => $value) {
                $msg['html'].='<div class="selectItem" id="cm'.$key.'" onclick="send(\'rule\',{id:\'cm\',key:'.$key.'})">
                                    <div class="selectBox"></div>
                                    <img src="/themes/game/Public/zhongyi/img/DuiGuo.08271.png">
                                    <div class="selectText">'.$value.'</div>
                                </div> ';
            }
            $msg['html'].='</div><div style="clear: both;"></div>
                        </div>';
        }

        if($play['df']){
            $msg['html'].='<div class="selectPart">
                    <div class="selectTitle">底分</div>
                    <div class="selectList" style="width: 35vh;">';
            $list=explode(',',$play['df']);
            foreach ($list as $key => $value) {
                $style = $key > 0 ? ' style="margin-left:0.5vh;"' : '';
                $msg['html'].='<div class="selectItem"'.$style.' id="df'.$key.'" onclick="send(\'rule\',{id:\'df\',key:'.$key.'})">
                            <div class="selectBox"></div>
                            <img src="/themes/game/Public/zhongyi/img/DuiGuo.08271.png">
                            <div class="selectText">'.$value.'</div>
                        </div> ';
            }
            $msg['html'].='</div><div style="clear: both;"></div>
                </div>';
        }
        if($play['gz']){
            $msg['html'].='<div class="selectPart selectRule">
                    <div class="selectTitle">规则</div>
                    <div class="selectList">';
            $list=explode(',',$play['gz']);
            foreach ($list as $key => $value) {
                $msg['html'].='<div class="selectItem" id="gz'.$key.'" onclick="send(\'rule\',{id:\'gz\',key:'.$key.'})">
                            <div class="selectBox"></div>
                            <img src="/themes/game/Public/zhongyi/img/DuiGuo.08271.png">
                            <div class="selectText selectRuleText">'.$value.'</div>
                        </div> ';
            }
            $msg['html'].='</div><div style="clear: both;"></div>
                </div>';
        }

        if($play['gz2']){
            $msg['html'].='<div class="selectPart">
                    <div class="selectTitle">规则</div>
                    <div class="selectList">';
            $list=explode(',',$play['gz2']);
            foreach ($list as $key => $value) {
                $msg['html'].='<div class="selectItem" id="gz2'.$key.'" onclick="send(\'rule\',{id:\'gz2\',key:'.$key.'})">
                            <div class="selectBox"></div>
                            <img src="/themes/game/Public/zhongyi/img/DuiGuo.08271.png">
                            <div class="selectText">'.$value.'</div>
                        </div> ';
            }
            $msg['html'].='</div><div style="clear: both;"></div>
                </div>';
        }

        if($play['zd']){
            $msg['html'].='<div class="selectPart">
                            <div class="selectTitle">单局最大下注</div>
                            <div class="selectList" style="width: 35vh;">';
            $list=explode(',',$play['zd']);
            foreach ($list as $key => $value) {
                $style = $key > 0 ? ' style="margin-left:0.5vh;"' : '';
                $msg['html'].='<div class="selectItem"'.$style.' id="zd'.$key.'" onclick="send(\'rule\',{id:\'zd\',key:'.$key.'})">
                                    <div class="selectBox"></div>
                                    <img src="/themes/game/Public/zhongyi/img/DuiGuo.08271.png">
                                    <div class="selectText">'.$value.'</div>
                                </div> ';
            }
            $msg['html'].='</div><div style="clear: both;"></div>
                        </div>';
        }


        if($play['px']){
            $msg['html'].='<div class="selectPart">
                    <div class="selectTitle">牌型</div>
                    <div class="selectList">';
            $list=explode(',',$play['px']);
            foreach ($list as $key => $value) {
                $msg['html'].='<div class="selectItem" id="px'.$key.'" onclick="send(\'rule\',{id:\'px\',key:'.$key.'})">
                            <div class="selectBox"></div>
                            <img src="/themes/game/Public/zhongyi/img/DuiGuo.08271.png">
                            <div class="selectText">'.$value.'</div>
                        </div> ';
            }
            $msg['html'].='</div><div style="clear: both;"></div>
                </div>';
        }

        if($play['js']){
            $msg['html'].='<div class="selectPart">
                    <div class="selectTitle">局数</div>
                    <div class="selectList">';
            $list=explode(',',$play['js']);
            foreach ($list as $key => $value) {
                $msg['html'].='<div class="selectItem" id="js'.$key.'" onclick="send(\'rule\',{id:\'js\',key:'.$key.'})">
                            <div class="selectBox"></div>
                            <img src="/themes/game/Public/zhongyi/img/DuiGuo.08271.png">
                            <div class="selectText">'.$value.'</div>
                        </div> ';
            }
            $msg['html'].='</div><div style="clear: both;"></div>
                </div>';
        }

        if($play['sz']){
            $msg['html'].='<div class="selectPart">
                    <div class="selectTitle">上庄</div>
                    <div class="selectList">';
            $list=explode(',',$play['sz']);
            foreach ($list as $key => $value) {
                $msg['html'].='<div class="selectItem" id="sz'.$key.'" onclick="send(\'rule\',{id:\'sz\',key:'.$key.'})">
                            <div class="selectBox"></div>
                            <img src="/themes/game/Public/zhongyi/img/DuiGuo.08271.png">
                            <div class="selectText">'.$value.'</div>
                        </div> ';
            }
            $msg['html'].='</div><div style="clear: both;"></div>
                </div>';
        }


        if($play['sx']){
            $msg['html'].='<div class="selectPart">
                    <div class="selectTitle">上限</div>
                    <div class="selectList">';
            $list=explode(',',$play['sx']);
            foreach ($list as $key => $value) {
                $msg['html'].='<div class="selectItem" id="sx'.$key.'" onclick="send(\'rule\',{id:\'sx\',key:'.$key.'})">
                            <div class="selectBox"></div>
                            <img src="/themes/game/Public/zhongyi/img/DuiGuo.08271.png">
                            <div class="selectText">'.$value.'</div>
                        </div> ';
            }
            $msg['html'].='</div><div style="clear: both;"></div>
                </div>';
        }

        if($play['zm']){
            $msg['html'].='<div class="selectPart">
                    <div class="selectTitle">抓马</div>
                    <div class="selectList">';
            $list=explode(',',$play['zm']);
            foreach ($list as $key => $value) {
                $msg['html'].='<div class="selectItem" id="zm'.$key.'" onclick="send(\'rule\',{id:\'zm\',key:'.$key.'})">
                            <div class="selectBox"></div>
                            <img src="/themes/game/Public/zhongyi/img/DuiGuo.08271.png">
                            <div class="selectText">'.$value.'</div>
                        </div> ';
            }
            $msg['html'].='</div><div style="clear: both;"></div>
                </div>';
        }


        if($play['gp']){
            $msg['html'].='<div class="selectPart">
                    <div class="selectTitle">鬼牌</div>
                    <div class="selectList">';
            $list=explode(',',$play['gp']);
            foreach ($list as $key => $value) {
                $msg['html'].='<div class="selectItem" id="gp'.$key.'" onclick="send(\'rule\',{id:\'gp\',key:'.$key.'})">
                            <div class="selectBox"></div>
                            <img src="/themes/game/Public/zhongyi/img/DuiGuo.08271.png">
                            <div class="selectText">'.$value.'</div>
                        </div> ';
            }
            $msg['html'].='</div><div style="clear: both;"></div>
                </div>';
        }

        if($play['gd']){
            $msg['html'].='<div class="selectPart">
                    <div class="selectTitle">锅底</div>
                    <div class="selectList">';
            $list=explode(',',$play['gd']);
            foreach ($list as $key => $value) {
                $msg['html'].='<div class="selectItem" id="gd'.$key.'" onclick="send(\'rule\',{id:\'gd\',key:'.$key.'})">
                            <div class="selectBox"></div>
                            <img src="/themes/game/Public/zhongyi/img/DuiGuo.08271.png">
                            <div class="selectText">'.$value.'</div>
                        </div> ';
            }
            $msg['html'].='</div><div style="clear: both;"></div>
                </div>';
        }
        act('html',$msg,$connection);


        $data=array();
        $data['act']='rule';
        $data['play']=$play;
        reqact($data,$connection);

        if(!empty($history_select) && !empty($history_select[$play['type']]) && !empty($history_select[$play['type']]['rule'])) {
            foreach ($history_select[$play['type']]['rule'] as $id=>$val) {
                if(($id=='gz2') || ($id=='px')) {
                    /*
                    foreach ($val as $key=>$arrv) {
                        $data=array();
                        $data['act']='rule';
                        $data['id']=$id;
                        $data['key']=$key;
                        reqact($data,$connection);
                    }*/
                } else {
                    $data=array();
                    $data['act']='rule';
                    $data['id']=$id;
                    $data['key']=$val;
                    reqact($data,$connection);
                }
            }
        }
















