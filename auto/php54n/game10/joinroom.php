<?php
global $Room;
$id = $data2['room'];
if ($Room[$id] && count($Room[$id]['index']) <= 0 && !$Room[$id]['user'][$connection->user['id']]) {
    act('over', '该房间已经满员了', $connection);
    return false;
}
if ($Room[$id]['xx']['zt'] == '-1') {
    $Room[$id]['xx']['zt'] = 0;
    cleardjs($Room[$id]['djs'], $id);
    $Room[$id]['timeover'] = time();
}
$connection->user['online'] = 1;
$connection->user['zt'] = 0;
if (!$Room[$id]['user'][$connection->user['id']]) {

    $connection->user['room'] = $id;
    // 后来修改，会改变进入游戏的头像？重叠？
    $index = rand(0, count($Room[$id]['index']) - 1);
    // $index = 0;
    $connection->user['index'] = $Room[$id]['index'][$index];
    $connection->user['dqjf'] = 0;
    foreach ($Room[$id]['user'] as $connection3) {
        $userlist[$connection3->user['id']] = 1;
    }
    $userlist[$connection->user['id']] = 1;
    $save['user'] = json_encode($userlist);
    $db->update('jz_room', $save, 'id=' . $id);
    array_splice($Room[$id]['index'], $index, 1);

} else {
    $connection->user['room'] = $id;
    $connection->user['card'] = $Room[$id]['user'][$connection->user['id']]->user['card'];
    $connection->user['cardmax'] = $Room[$id]['user'][$connection->user['id']]->user['cardmax'];
    $connection->user['index'] = $Room[$id]['user'][$connection->user['id']]->user['index'];
    $connection->user['dqjf'] = $Room[$id]['user'][$connection->user['id']]->user['dqjf'];
    $connection->user['zt'] = $Room[$id]['user'][$connection->user['id']]->user['zt'];
    $connection->user['tpzt'] = $Room[$id]['user'][$connection->user['id']]->user['tpzt'];
    $connection->user['beishu'] = $Room[$id]['user'][$connection->user['id']]->user['beishu'];
    $connection->user['qbank'] = $Room[$id]['user'][$connection->user['id']]->user['qbank'];
    $connection->user['niu'] = $Room[$id]['user'][$connection->user['id']]->user['niu'];
    $connection->user['sfniu'] = $Room[$id]['user'][$connection->user['id']]->user['sfniu'];
    $connection->user['newcard'] = $Room[$id]['user'][$connection->user['id']]->user['newcard'];
}
act('gxindex', $connection->user['index'], $connection);
$Room[$id]['user'][$connection->user['id']] = $connection;
foreach ($Room[$id]['user'] as $connection3) {
    if ($connection3->user['online'] == '-1' && $Room[$id]['xx']['zt'] < 2) {
        $Room[$id]['user'][$connection3->user['id']]->user['zt'] = 0;
    }
    // 
    if ($connection->user['id'] != $connection3->user['id'] && $connection3->user['online'] != '-1') {
        $msg = array();
        $msg['user'] = $connection->user;
        // 告诉其他玩家，添加 “刚进入的玩家”
        act('adduser', $msg, $connection3);
    }
    $msg = array();
    $msg['user'] = $connection3->user;
    // 让“刚进入的玩家”添加其他玩家
    act('adduser', $msg, $connection);
}


///广播给观战玩家
foreach ($Room[$id]['alluser'] as $key => $connection4) {
    //如果没参与了
    if (!$Room[$id]['user'][$key]){
        $msg = array();
        $msg['user'] = $connection->user;
        // 让观众添加“刚进入的玩家”
        act('adduser', $msg, $connection4);
    }
}




$data = array();
$data['act'] = 'step' . $Room[$id]['xx']['zt'];
reqact($data, $connection);
