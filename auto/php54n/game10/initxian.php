<?php
global $Room;
$id = ceil($data2['room']);

if ($data2['time'] != $Room[$id]['timexx']) {
    return false;
} 

$Room[$id]['timexx'] = time();
$Room[$id]['xx']['zt'] = 4;

cleardjs($Room[$id]['djs'], $id); 
// /广播给观战玩家
$senall['act'] = 'sendall';
$senall['toact'] = 'cleardjs';
$senall['data'] = '';
reqact($senall, $connection); 
// end
$cs = 0;

foreach ($Room[$id]['user'] as $connection3) {
    act('sss', $Room[$id]['bank']['index'], $connection3);
    act('clearmemberRobText', '', $connection3);
    act('clearmemberRobText2', '', $connection3);
    act('clearmemberTimesText', '', $connection3);

    if ($cs < 1) {
        $cs = $cs + 1; 
        // /广播给观战玩家
        $senall['act'] = 'sendall';
        $senall['toact'] = 'sss';
        $senall['data'] = $Room[$id]['bank']['index'];
        reqact($senall, $connection3); 
        // end
        // /广播给观战玩家
        $senall['act'] = 'sendall';
        $senall['toact'] = 'clearmemberRobText';
        $senall['data'] = '';
        reqact($senall, $connection3); 
        // end
        // /广播给观战玩家
        $senall['act'] = 'sendall';
        $senall['toact'] = 'clearmemberRobText2';
        $senall['data'] = '';
        reqact($senall, $connection3); 
        // end
        // /广播给观战玩家
        $senall['act'] = 'sendall';
        $senall['toact'] = 'clearmemberTimesText';
        $senall['data'] = '';
        reqact($senall, $connection3); 
        // end
    } 
} 
// 闲家下注
$time_interval = $Room[$id]['ruletime']['xz']; 
// 闲家下注
$Room[$id]['time'] = time() + $time_interval;
$Room[$id]['timexx'] = time();
djs($time_interval, 'setxian', $id, $Room[$id]['timexx']);

if ($Room[$id]['type'] == 10) {
    $msg = array();

    $img = '/app/img/X-' . $Room[$id]['beishu'] . '.png';
    $msg['index'] = $Room[$id]['bank']['index'];
    $msg['img'] = $img;
    $cs = 0;
    foreach ($Room[$id]['user'] as $connection3) {
        act('showmemberTimesText', $msg, $connection3); 
        // /广播给观战玩家
        if ($cs < 1) {
            $cs = $cs + 1;
            $senall['act'] = 'sendall';
            $senall['toact'] = 'showmemberTimesText';
            $senall['data'] = $msg;
            reqact($senall, $connection3);
        } 
        // end
    } 
} 
$cs = 0;
foreach ($Room[$id]['user'] as $connection3) {
    if ($connection3->user['zt'] == 1) {
        $Room[$id]['user'][$connection3->user['id']]->user['beishu'] = '-1';
    } 
    if ($connection3->user['online'] != '-1') {
        act('djs', $Room[$id]['time'], $connection3); 
        // /广播给观战玩家
        if ($cs < 1) {
            $senall['act'] = 'sendall';
            $senall['toact'] = 'djs';
            $senall['data'] = $Room[$id]['time'];
            reqact($senall, $connection3);
        } 
        // end
        act('divRobBankerText', 3, $connection3); 
        // /广播给观战玩家
        if ($cs < 1) {
            $cs = $cs + 1;
            $senall['act'] = 'sendall';
            $senall['toact'] = 'divRobBankerText';
            $senall['data'] = 3;
            reqact($senall, $connection3);
        } 
        // end
        if ($connection3->user['zt'] == 1) {
            if ($connection3->user['index'] != $Room[$id]['bank']['index']) {
                act('operationButton', 4, $connection3);
            } else {
                act('operationButton', 5, $connection3);
            } 
        } 
    } 
} 
