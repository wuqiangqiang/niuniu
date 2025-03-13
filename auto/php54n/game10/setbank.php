<?php
global $Room;
$id = ceil($data2['room']);

if ($data2['time'] != $Room[$id]['timexx']) {
    return false;
} 

$Room[$id]['timexx'] = time();
$Room[$id]['xx']['zt'] = '4';

cleardjs($Room[$id]['djs'], $id); 
// /广播给观战玩家
$senall['act'] = 'sendall';
$senall['toact'] = 'cleardjs';
$senall['data'] = '';
reqact($senall, $connection); 
// end
$bank = array();
$user = array();

if ($Room[$id]['type'] == 7 || ($Room[$id]['type'] == 6 && $Room[$id]['bank'])) {
    foreach ($Room[$id]['user'] as $connection3) {
        if ($connection3->user['zt'] == '1') {
            $user[] = $connection3->user;
        } 
    } 
    if ($Room[$id]['user'][$Room[$id]['bank']['id']]->user['zt'] == '1') {
        $Room[$id]['bank']['id'] = $Room[$id]['bank']['id'];
        $Room[$id]['bank']['index'] = $Room[$id]['user'][$Room[$id]['bank']['id']]->user['index'];
    } else {
        $xz = rand(0, count($user)-1);
        $Room[$id]['bank'] = $user[$xz];
    } 

    $time_interval = 0;
    $Room[$id]['time'] = time() + $time_interval;
    $Room[$id]['timexx'] = time();
    djs($time_interval, 'initxian', $id, $Room[$id]['timexx']);

    return false;
} 
$type = $Room[$id]['type'];
if ($Room[$id]['type'] == 6) {
    $type = '1';
} elseif ($Room[$id]['type'] == 9) {
    $type = '4';
} else {
    $type = '2';
} 
$cs = 0;
$cs1 = 0;
foreach ($Room[$id]['user'] as $connection3) {
    if ($connection3->user['zt'] == '1' && $connection3->user['qbank'] == '-1') {
        $msg = array();
        $msg['zt'] = 0;
        $msg['type'] = $type;
        act('qbankshow', $msg, $connection3); 
        // /广播给观战玩家
        if ($cs < 1) {
            $cs = $cs + 1;
            $senall['act'] = 'sendall';
            $senall['toact'] = 'qbankshow';
            $senall['data'] = $msg;
            reqact($senall, $connection3);
        } 
        // end
        $msg['index'] = $connection3->user['index'];

        foreach ($Room[$id]['user'] as $connection4) {
            if ($connection3->user['id'] != $connection4->user['id'] && $connection4->user['online'] != '-1') {
                act('qbankshowother', $msg, $connection4); 
                // /广播给观战玩家
                if ($cs < 1) {
                    $cs1 = $cs1 + 1;
                    $senall['act'] = 'sendall';
                    $senall['toact'] = 'qbankshowother';
                    $senall['data'] = $msg;
                    reqact($senall, $connection4);
                } 
                // end
            } 
        } 
    } 
    if ($connection3->user['qbank'] == $Room[$id]['beishu'] && $connection3->user['zt'] == 1) {
        $bank[] = $connection3->user;
    } 
    if ($connection3->user['zt'] == '1') {
        $user[] = $connection3->user;
    } 
} 

if (!$bank) {
    $bank = $user;
} 
$dataxx = array();
foreach ($bank as $key => $value) {
    $dataxx[] = $value['index'];
} 
arsort($dataxx);
$dataxx2 = array();
foreach ($dataxx as $key => $value) {
    $dataxx2[] = $value;
} 
$data = array();
$data['user'] = $dataxx2;
$data['index'] = $dataxx2[0];
if (count($bank) != 1) {

    foreach ($Room[$id]['user'] as $connection3) {
        act('showqz', $data, $connection3); 
    } 
}

// 广播给观战玩家
foreach ($Room[$id]['alluser'] as $key => $connectionGZ) {
    // 如果没参与了
    if (!$Room[$id]['user'][$key]) {
        act('showqz', $data, $connectionGZ);
    }
}


// 生成庄家
if (!$bank) {
    $xz = rand(0, count($user)-1);
    $Room[$id]['bank'] = $user[$xz];
} else {
    $xz = rand(0, count($bank)-1);
    $Room[$id]['bank'] = $bank[$xz];
} 

if (count($bank) == 1) {
    $time_interval = 1;
    $Room[$id]['time'] = time() + $time_interval;
    $Room[$id]['timexx'] = time();
    djs($time_interval, 'initxian', $id, $Room[$id]['timexx']);
} else {
    $time_interval = 4;
    $Room[$id]['time'] = time() + $time_interval;
    $Room[$id]['timexx'] = time();
    djs($time_interval, 'initxian', $id, $Room[$id]['timexx']);
} 
