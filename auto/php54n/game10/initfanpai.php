<?php
global $Room;
$id = ceil($data2['room']);
if ($data2['time'] != $Room[$id]['timexx']) {
    return false;
}
$Room[$id]['timexx'] = time();
$Room[$id]['xx']['zt'] = 5;
cleardjs($Room[$id]['djs'], $id);
///广播给观战玩家
$senall['act'] = 'sendall';
$senall['toact'] = 'cleardjs';
$senall['data'] = '';
reqact($senall, $connection);
//end
$time_interval = $Room[$id]['ruletime']['tp'];
//翻牌时间
$Room[$id]['time'] = time() + $time_interval;
$Room[$id]['timexx'] = time();
djs($time_interval, 'setfanpai', $id, $Room[$id]['timexx']);


$msg = array();
$msg['card'] = $Room[$id]['allcard'];
$msg['newcard'] = $Room[$id]['allnewcard'];
$msg['niu'] = $Room[$id]['allniu'];
$msg['sfniu'] = $Room[$id]['allsfniu'];

foreach ($Room[$id]['user'] as $connection3) {
    if ($connection3->user['zt'] == '1') {
        $Room[$id]['user'][$connection3->user['id']]->user['tpzt'] = '-1';
    }
    if ($connection3->user['online'] != '-1') {
        act('djs', $Room[$id]['time'], $connection3);
        act('divRobBankerText', 4, $connection3);

        if ($connection3->user['zt'] == '1') {
            act('operationButton', 6, $connection3);
        }
        act('fapaistart', $msg, $connection3);
    }
}

// 广播给观战玩家
foreach ($Room[$id]['alluser'] as $key => $connectionGZ) {
    // 如果没参与了
    if (!$Room[$id]['user'][$key]) {
        act('djs', $Room[$id]['time'], $connectionGZ);
        act('fapaistart', $msg, $connectionGZ);
    }
}


