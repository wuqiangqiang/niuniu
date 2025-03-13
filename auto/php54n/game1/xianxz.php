<?php
global $Room;
$id = $connection->user['room'];
if ($data2['time'] > $Room[$id]['time'] || $Room[$id]['user'][$connection->user['id']]->user['beishu'] != '-1' || $data2['time'] < $Room[$id]['timexx']) {
    return false;
}
$connection->user['beishu'] = $data2['bs'];
$Room[$id]['user'][$connection->user['id']]->user['beishu'] = $data2['bs'];
$zbsl = 0;
$qbsl = 0;


$msg = array();
$msg['index'] = $connection->user['index'];
$msg['zt'] = $data2['bs'];

foreach ($Room[$id]['user'] as $connection3) {
    if ($connection3->user['zt'] == '1') {
        $zbsl = $zbsl + 1;
    }
    if ($connection3->user['beishu'] != '-1' && $connection3->user['zt'] == '1' && $connection3->user['index'] != $Room[$id]['bank']['index']) {
        $qbsl = $qbsl + 1;
    }
}

// 广播给观战玩家
foreach ($Room[$id]['alluser'] as $key => $connectionUser) {
    //如果没参与了
    if ($connectionUser->user['online'] == '1') {
        act('showxian', $msg, $connectionUser);
    }
}

if ($zbsl == $qbsl + 1 && $Room[$id]['xx']['zt'] == '4') {
    $Room[$id]['xx']['zt'] = 5;
    $data = array();
    $data['act'] = 'setxian';
    $data['time'] = $Room[$id]['timexx'];
    $data['room'] = $id;
    reqact($data, '');
}
