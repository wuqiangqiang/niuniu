<?php
        if($data2['token']!='null' && $data2['token']){
            $user=$db->getOne("select * from jz_user where token='".$db->s($data2['token'])."'");
        }

        if(!$user){
            act('gologin','',$connection);
            return false;
        }
        $user['nickname']=strip_tags($user['nickname_base64']);
        $connection->user=$user;
        act('gxtoken',$data2['token'],$connection);

        $msg=array();
        $msg['id']='userimg';
        $msg['wz']='src';
        $msg['nr']=strip_tags($connection->user['img']);
        act('attr',$msg,$connection);


        $msg=array();
        $msg['id']='nickname';
        $msg['html']=$connection->user['nickname_base64'];
        act('html',$msg,$connection);

        $msg=array();
        $msg['id']='user-id';
        $msg['html']='ID:'.strip_tags($connection->user['id']);
        act('html',$msg,$connection);

        $msg=array();
        $msg['id']='homebg';
        $msg['wz']='src';
        $msg['nr']='/skin/'.strip_tags($connection->user['password']).'/bg.jpg';
        act('attr',$msg,$connection);


        $msg=array();
        $msg['id']='topImg';
        $msg['wz']='src';
        $msg['nr']='/skin/'.strip_tags($connection->user['password']).'/name.png';
        act('attr',$msg,$connection);


        $msg=array();
        $msg['id']='topname';
        $msg['wz']='style';
        $msg['nr']='background: url(\'/skin/'.strip_tags($connection->user['password']).'/title.png\');background-size: 12vw 22vw;';
        act('attr',$msg,$connection);


        $msg=array();
        $msg['id']='fknum';
        $msg['html']=strip_tags($connection->user['fk']).'张';
        act('html',$msg,$connection);



         $gamelist=$db->getAll("select * from jz_game where zt=1 and `type` = 'beast' order by `sort` desc");

        $msg=array();
        $msg['id']='allgame';
        $msg['html']='';
        foreach ($gamelist as $key => $value) {
            $msg['html']=$msg['html'].' <img src="/skin/'.strip_tags($connection->user['password']).'/'.strip_tags($value['id']).'.png" class="cjfj-home-img'.($key+1).'" onclick="send(\'gameserver\',{id:'.strip_tags($value['id']).'})" /> ';
        }
        act('html',$msg,$connection);
