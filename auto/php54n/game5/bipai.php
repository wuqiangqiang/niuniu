<?php
global $Room;
$id = $connection->user['room'];
if ($data2['time'] != $Room[$id]['timexx']) {
    return false;
}
clearuserdjs($Room[$id]['djs'], $id);
$msg['id'] = 'Buttons';
$msg['html'] = '';
act('html', $msg, $connection);
act('hidebook', '', $connection);
if ($connection->user['tpzt'] == 1) {
    $list = $Room[$id]['cm2'];
} else {
    $list = $Room[$id]['cm'];
}
$msg = array();
$msg['index'] = $connection->user['index'];
$msg['jf'] = $list[$Room[$id]['beishu']];
$Room[$id]['total'] = $Room[$id]['total'] + $list[$Room[$id]['beishu']];
$Room[$id]['user'][$connection->user['id']]->user['djjf'] = $Room[$id]['user'][$connection->user['id']]->user['djjf'] - $list[$Room[$id]['beishu']];
$Room[$id]['user'][$connection->user['id']]->user['dqjf'] = $Room[$id]['user'][$connection->user['id']]->user['dqjf'] - $list[$Room[$id]['beishu']];
$Room[$id]['cmlist'][] = $list[$Room[$id]['beishu']];

// foreach ($Room[$id]['user'] as $key => $connection3) {
//     act('scoresArea', $msg, $connection3);
// }
///广播给所有玩家
$data['act'] = 'sendall';
$data['toact'] = 'scoresArea';
$data['data'] = $msg;
reqact($data, $connection);
//end

if (count($Room[$id]['list']) <= 2) {
    $time_interval = 1;
    $Room[$id]['timexx'] = time();
    djs($time_interval, 'over', $id, $Room[$id]['timexx']);
    return false;
}
$biuser[user][] = $Room[$id]['user'][$data2['uid']]->user;
$biuser[user][] = $Room[$id]['user'][$connection->user['id']]->user;
if ($Room[$id]['user'][$data2['uid']]->user['cardmax'] > $Room[$id]['user'][$connection->user['id']]->user['cardmax']) {
    $Room[$id]['user'][$connection->user['id']]->user['zt'] = '3';
    $biuser[lose] = $Room[$id]['user'][$connection->user['id']]->user['index'];
} else {
    $Room[$id]['user'][$data2['uid']]->user['zt'] = 3;
    $biuser[lose] = $Room[$id]['user'][$data2['uid']]->user['index'];
}
foreach ($Room[$id]['user'] as $connection3) {
    if ($connection3->user['online'] != '-1') {
        act('startPk', $biuser, $connection3);
    }
    if ($connection3->user['zt'] == '1') {
        $dataxx[] = $connection3->user['index'];
    }
}


// 广播给观战玩家
foreach ($Room[$id]['alluser'] as $key => $connectionGZ) {
    //如果没参与了
    if (!$Room[$id]['user'][$key]) {
        act('startPk', $biuser, $connectionGZ);
    }
}


sort($dataxx);
$Room[$id]['list'] = $dataxx;
if ($Room[$id]['user'][$connection->user['id']]->user['zt'] == 3) {
    $Room[$id]['next'] = $Room[$id]['next'] - 1;
} else {
    if ($Room[$id]['user'][$connection->user['id']]->user['index'] > $Room[$id]['user'][$data2['uid']]->user['index']) {
        $Room[$id]['next'] = $Room[$id]['next'] - 1;
    }
}
$time_interval = 3;
$Room[$id]['timexx'] = time();
djs($time_interval, 'next', $id, $Room[$id]['timexx']);
