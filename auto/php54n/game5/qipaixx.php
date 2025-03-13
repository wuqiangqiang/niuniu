<?php
global $Room;
$id = ceil($data2['room']);
if ($data2['time'] != $Room[$id]['timexx']) {
    return false;
}
clearuserdjs($Room[$id]['djs'], $id);
foreach ($Room[$id]['user'] as $connection3) {
    if ($connection3->user['index'] == $Room[$id]['list'][$Room[$id]['next']]) {
        $Room[$id]['user'][$connection3->user['id']]->user['zt'] = 2;
        $msg = array();
        $msg['id'] = 'Buttons';
        $msg['html'] = '';
        act('html', $msg, $connection3);
        if ($connection3->user['tpzt'] == 1) {
            act('hidebook', '', $connection3);
        }
    }
    if ($connection3->user['online'] != '-1') {
        $msg = array();
        $msg['index'] = $Room[$id]['list'][$Room[$id]['next']];

        act('havequit', $msg, $connection3);
        act('mp3play', 'qipaimp3', $connection3);
    }
}


// 广播给观战玩家
foreach ($Room[$id]['alluser'] as $key => $connectionGZ) {
    // 如果没参与了
    if (!$Room[$id]['user'][$key]) {
        act('havequit', $msg, $connectionGZ);
        //end
        act('mp3play', 'qipaimp3', $connectionGZ);
    }
}


foreach ($Room[$id]['user'] as $connection3) {
    if ($connection3->user['zt'] == '1') {
        $dataxx[] = $connection3->user['index'];
    }
}
sort($dataxx);
$Room[$id]['list'] = $dataxx;
$Room[$id]['next'] = $Room[$id]['next'] - 1;
if (count($Room[$id]['list']) > 1) {
    $time_interval = 1;
    $Room[$id]['time2'] = time() + $time_interval;
    $Room[$id]['timexx'] = time();
    djs($time_interval, 'next', $id, $Room[$id]['timexx']);
} else {
    $time_interval = 1;
    $Room[$id]['time2'] = time() + $time_interval;
    $Room[$id]['timexx'] = time();
    djs($time_interval, 'over', $id, $Room[$id]['timexx']);
}

