<?php
global $Room;
$id = $connection->user['room'];
if (($data2['time'] != $Room[$id]['timexx']) || ($connection->user['index'] != $Room[$id]['list'][$Room[$id]['next']])) {
    return false;
}
clearuserdjs($Room[$id]['djs'], $id);
$Room[$id]['timexx'] = 0;
$Room[$id]['count'] = $Room[$id]['count'] + 1;
if ($connection->user['tpzt'] == 1) {
    $list = $Room[$id]['cm2'];
} else {
    $list = $Room[$id]['cm'];
}
if ($Room[$id]['beishu'] < $data2['xz']) {
    $Room[$id]['beishu'] = $data2['xz'];
}
$msg = array();
$msg['id'] = 'Buttons';
$msg['html'] = '';
act('html', $msg, $connection);
if ($connection->user['tpzt'] != 1) {
    act('hidebook', '', $connection);
}
$msg = array();
$msg['index'] = $connection->user['index'];
$msg['jf'] = $list[$data2['xz']];
$Room[$id]['total'] = $Room[$id]['total'] + $list[$data2['xz']];
$Room[$id]['cmlist'][] = $list[$data2['xz']];
$Room[$id]['user'][$connection->user['id']]->user['djjf'] = $Room[$id]['user'][$connection->user['id']]->user['djjf'] - $list[$data2['xz']];
$Room[$id]['user'][$connection->user['id']]->user['dqjf'] = $Room[$id]['user'][$connection->user['id']]->user['dqjf'] - $list[$data2['xz']];

// 广播给所有在线玩家
foreach ($Room[$id]['alluser'] as $key => $connectionUser) {
    if ($connectionUser->user['online'] == '1') {
        act('scoresArea', $msg, $connectionUser);
        act('mp3play', $list[$data2['xz']] . 'fen', $connectionUser); 
    }
}

if ($Room[$id]['sx'] > 0 && $Room[$id]['total'] >= $Room[$id]['sx']) {
    $time_interval = 1;
    $Room[$id]['timexx'] = time();
    djs($time_interval, 'over', $id, $Room[$id]['timexx']);
} else {
    $data = array();
    $Room[$id]['time1'] = time();
    $data['act'] = 'next';
    $data['time'] = $Room[$id]['timexx'];
    $data['room'] = $id;
    reqact($data, '');
}
