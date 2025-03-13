<?php
        $connection->rule['js'];
        $jsxx=explode(',',$connection->rule['play']['js']);
        preg_match_all("/\d+/",$jsxx[$connection->rule['js']],$js);
        
        $connection->user=$db->getOne("select * from jz_user where id='".$db->s($connection->user['id'])."'");
        
		act('66666666666666', $connection->rule, $connection);
		
		if($connection->user['fk']<$js['0']['1']){
            return  act('alert2v', '房卡不足', $connection);
        }
        $server=$db->getOne("select * from jz_server where type='".$db->s($connection->rule['play']['type'])."' and zt=1 order by num asc");
        if(!$server){
            return  act('alert2v', '暂未开放', $connection);
        }

        $add=array();
        $add['type']=$connection->rule['play']['type'];
        if($add['type'] == 27) {
            $connection->rule['px'][0] = 1;
        }
        $add['dk']=$server['dk'];
        $add['rule']=json_encode($connection->rule,JSON_UNESCAPED_UNICODE);
        $add['user']=json_encode(array(),JSON_UNESCAPED_UNICODE);
        $add['time']=time();
        $add['online']=0;
        $add['zt']=0;
        $add['zjs']=$js['0']['0'];
        $add['js']=0;
        $add['fk']=$js['0']['1'];
        $add['uid']=$connection->user['id'];
        //$add['roomid']='1932'.rand(100,999);

		$lastRoomId = $db->getOne("select id from jz_room order by id desc limit 0,1");
        $add['id'] = $lastRoomId['id'] + rand(0, 12);

        // $add['roomid'] = in_array($add['type'], [1,2]) ? rand(5000000,5999999) : rand(700000,899999);
        $add['roomid'] = in_array($add['type'], [1,2,10,14]) ? 1568654 + $lastRoomId['id'] : 4216346 + $lastRoomId['id'];

        $roomid=$db->insert('jz_room',$add);

        $save['fk']=$connection->user['fk']-$js['0']['1'];
        
        $db->update('jz_user',$save,'id="'.$db->s($connection->user['id']).'"');
        $msg=array();
        $msg['game']=$connection->rule['play']['type'];
        $msg['room']=$roomid;
        $msg['dk']=$server['dk'];
        act('goroom',$msg,$connection);

