<?php
global $Room;
$id = ceil($data2['room']);
if ($data2['time'] != $Room[$id]['timexx']) {
    return false;
}
$Room[$id]['timexx'] = time();
cleardjs($Room[$id]['djs'], $id);
///广播给观战玩家
$senall['act'] = 'sendall';
$senall['toact'] = 'cleardjs';
$senall['data'] = '';
reqact($senall, $connection);
//end
if ($Room[$id]['xx']['js'] < $Room[$id]['xx']['zjs']) {
    
    foreach ($Room[$id]['user'] as $connection3) {
        if ($connection3->user['online'] == '1') {
            $Room[$id]['user'][$connection3->user['id']]->user['zt'] = 0;
            act('initroom', '', $connection3);

            // 如果用户是在观战中
            if(!$connection3->user['is_watch']){
                act('operationButton', 8, $connection3);
            }
        }
    }

    // 广播给观战玩家
    foreach ($Room[$id]['alluser'] as $key => $connectionGZ) {
        //如果没参与了
        if (!$Room[$id]['user'][$key]) {
            act('initroom', '', $connectionGZ);
        }
    }
    
    if ($Room[$id]['type'] == '1') {
        $Room[$id]['bank']['id'] = $Room[$id]['maxuser'];
    }
    $Room[$id]['beishu'] = 1;
    $Room[$id]['xx']['zt'] = 0;
    $save = array();
    $save['js'] = $Room[$id]['xx']['js'];
    $db->update('jz_room', $save, 'id=' . $id);
    $online = 0;
    foreach ($Room[$id]['user'] as $connection3) {
        if ($connection3->user['online'] == '1') {
            $online = $online + 1;
        }
    }
    if ($online == 0 && $Room[$id]['xx']['zt'] == 0) {
        $time_interval = 600;
        $Room[$id]['xx']['zt'] = '-1';
        $Room[$id]['timexx'] = time();
        djs($time_interval, 'overroom', $id, $Room[$id]['timexx']);
    }
} else {
    $Room[$id]['xx']['zt'] = 7;
    $jflist = array();
    foreach ($Room[$id]['user'] as $connection3) {
        //if($connection3->user['zt']!='-1'){
        $jflist[$connection3->user['id']] = $connection3->user['dqjf'];
        $add = array();
        $add['uid'] = $connection3->user['id'];
        $add['room'] = $id;
        $add['overtime'] = time();
        $add['jifen'] = $connection3->user['dqjf'];
        $add['type'] = $Room[$id]['lx'];
        $db->insert('jz_user_room', $add);
        //}
        
    }
    arsort($jflist);
    $user = array();
    foreach ($jflist as $key => $value) {
        $user[] = $Room[$id]['user'][$key]->user;
    }
    $room['id'] = $Room[$id]['xx']['roomid'];
    $room['zjs'] = $Room[$id]['xx']['js'];
    $room['time'] = date('Y-m-d H:i:s', time());
    $room['user'] = $user;
    $room['fangzhu'] = $Room[$id]['user'][$Room[$id]['xx']['uid']]->user;
    foreach ($user as $key => $value) {
        unset($user[$key]['nickname']);
    }
    $save = array();
    $save['js'] = $Room[$id]['xx']['js'];
    $save['overxx'] = json_encode($user, JSON_UNESCAPED_UNICODE);
    $save['endtime'] = time();
    $db->update('jz_room', $save, 'id=' . $id);

  
    // 广播给所有玩家
    foreach ($Room[$id]['alluser'] as $key => $connectionGZ) {
        // 如果没参与了
        if ($connectionGZ->user['online'] == '1') {
            act('overroom', $room, $connectionGZ);
            //end
            $connectionGZ->close();
        }
    }
  
  
    $dkxx = $db->getOne("select * from jz_server where dk='" . $Room[$id]['xx']['dk'] . "'");
    $save = array();
    $save['num'] = $dkxx['num'] - 1;
    $db->update('jz_server', $save, 'id=' . $dkxx['id']);
    global $connection2;
    $dataxx = array();
    $dataxx['act'] = 'endroom';
    $connection2->send(json_encode($dataxx));
    unset($Room[$id]);
}
