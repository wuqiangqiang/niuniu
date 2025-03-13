<?php
global $Room;
$id = $connection->user['room'];
if ($Room[$id]['xx']['zt'] > 1) {
    return false;
}
$connection->user['zt'] = 1;
$Room[$id]['user'][$connection->user['id']]->user['zt'] = 1;
$zbsl = 0;
$zrs = 0;

foreach ($Room[$id]['user'] as $connection3) {
    if ($connection3->user['online'] == '-1' && $Room[$id]['xx']['zt'] < 2) {
        $Room[$id]['user'][$connection3->user['id']]->user['zt'] = 0;
    }
    if ($connection3->user['zt'] == '1') {
        $zbsl = $zbsl + 1;
    }
    if ($connection3->user['online'] == '1' && !$connection3->user['is_watch']) {
        $zrs = $zrs + 1;
    }
}


// 广播给观战玩家
foreach ($Room[$id]['alluser'] as $key => $connectionGZ) {
    // 如果没参与了
    if ($connectionGZ->user['online'] != '-1') {
        act('zbuser', $connection->user['index'], $connectionGZ);
    }
}



if ($zrs == $zbsl && $zrs >= 2) {
    $data = array();
    $data['act'] = 'startroom';
    $data['time'] = $Room[$id]['timexx'];
    $data['room'] = $id;
    reqact($data, '');
    return false;
}
if ($zbsl >= 2 && $Room[$id]['xx']['zt'] == 0) {
    $Room[$id]['xx']['zt'] = 1;
    if ($zrs == $zbsl) {
        $time_interval = 0;
    } else {
        $time_interval = 10;
    }
    if ($Room[$id]['xx']['js'] == '0') {
        // 后来修改
        $time_interval = 30;
    }
    $Room[$id]['time'] = time() + $time_interval;
    $Room[$id]['timexx'] = time();
    djs($time_interval, 'startroom', $id, $Room[$id]['timexx']);

    foreach ($Room[$id]['user'] as $connection3) {
        if ($connection3->user['online'] != '-1') {
            act('djs', $Room[$id]['time'], $connection3);            
        }
    }


    // 广播给观战玩家
    foreach ($Room[$id]['alluser'] as $key => $connectionGZ) {
        //如果没参与了
        if (!$Room[$id]['user'][$key]) {
            act('djs', $Room[$id]['time'], $connectionGZ);
        }
    }

}
