<?php
global $Room;
$id = ceil($data2['room']);
$Room[$id]['xx']['zt'] = 3;
if ($data2['time'] != $Room[$id]['timexx']) {
    return false;
}

// cleardjs($Room[$id]['djs'], $id);
// 广播给所有玩家
foreach ($Room[$id]['alluser'] as $key => $connectionGZ) {
    if ($connectionGZ->user['online'] != '-1') {
        act('cleardjs', '', $connectionGZ);
    }
}

$Room[$id]['timexx'] = time();
$time_interval = 20;
$Room[$id]['next'] = $Room[$id]['next'] + 1;
if ($Room[$id]['next'] >= count($Room[$id]['list'])) {
    $Room[$id]['next'] = 0;
}
$Room[$id]['timexx'] = time();
$Room[$id]['time'] = time() + $time_interval;
djs($time_interval, 'qipaixx', $id, $Room[$id]['timexx']);
$msg = array();
$msg['index'] = $Room[$id]['list'][$Room[$id]['next']];
$msg['time'] = $Room[$id]['time'];
$biuser = array();
$biuser['time'] = $Room[$id]['timexx'];
foreach ($Room[$id]['user'] as $connection3) {
    if ($connection3->user['zt'] == '1' && ($connection3->user['tpzt'] == 1 || count($Room[$id]['list']) == 2) && $connection3->user['index'] != $Room[$id]['list'][$Room[$id]['next']]) {
        $userdata = array();
        $userdata['index'] = $connection3->user['index'];
        $userdata['id'] = $connection3->user['id'];
        $biuser['user'][] = $userdata;
    }
}
if ($Room[$id]['count'] < count($Room[$id]['list'])) {
    $biuser['user'] = array();
}
if ($Room[$id]['gz0'] == 1 && $Room[$id]['total'] < 100) {
    $biuser['user'] = array();
}


foreach ($Room[$id]['user'] as $connection3) {

    if ($connection3->user['index'] == $msg['index']) {
        if ($Room[$id]['gz0'] == 0 && count($Room[$id]['list']) > 2 && $connection3->user['tpzt'] != 1) {
            $biuser['user'] = array();
        }
        $msg2 = array();
        $msg2['id'] = 'Buttons';
        $html = '<div class="scoreList"><div style="display: block;">';
        if ($connection3->user['tpzt'] == 1) {
            $list = $Room[$id]['cm2'];
        } else {
            $list = $Room[$id]['cm'];
        }
        foreach ($list as $key => $value) {
            if ($key >= $Room[$id]['beishu']) {
                $html = $html . '<div class="scoreItem scoreItemText scoreItem' . ($key + 1) . '1"  onclick="send(\'xiazhu\',{xz:' . $key . ',time:' . $Room[$id]['timexx'] . '})">' . $value . '</div>';
            } else {
                $html = $html . '<div class="scoreItem scoreItemText scoreItem50">' . $value . '</div>';
            }
        }
        $html = $html . '</div></div>';
        $html = $html . '</div></div>';
        //count($Room[$id]['list'])==2 && $Room[$id]['count']>2
        if ($biuser['user']) { 
            $html = $html . '<div class="doubleButton"><div class="isOver"><div class="leftButton button" onclick="send(\'qipai\',{time:' . $Room[$id]['timexx'] . '})"></div><div class="rightButton button" onclick=\'bipai(' . json_encode($biuser) . ');\'></div></div></div>';
        } else {
            $html = $html . '<div class="doubleButton"><div class="isOver"><div class="leftButton button" onclick="send(\'qipai\',{time:' . $Room[$id]['timexx'] . '})"></div><div class="rightButton1 button" ></div></div></div>';
        }
        $msg2['html'] = $html;
        act('html', $msg2, $connection3);
        if ($connection3->user['tpzt'] != 1) {
            act('showbook', '', $connection3);
        }
    }
}

// 广播给所有玩家
foreach ($Room[$id]['alluser'] as $key => $connectionGZ) {
    if ($connectionGZ->user['online'] != '-1') {
        act('qxbp', '', $connectionGZ);
        act('userdjs', $msg, $connectionGZ);
    }
}



