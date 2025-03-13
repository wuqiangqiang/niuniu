<?php
global $Room;
$id = ceil($data2['room']);
if ($data2['time'] != $Room[$id]['timexx']) {
    return false;
}
$Room[$id]['timexx'] = time();
$Room[$id]['xx']['zt'] = 3;
cleardjs($Room[$id]['djs'], $id);
///广播给观战玩家
$senall['act'] = 'sendall';
$senall['toact'] = 'cleardjs';
$senall['data'] = '';
reqact($senall, $connection);
//end
if ($Room[$id]['type'] == 2 || ($Room[$id]['type'] == 1 && $Room[$id]['bank'])) {
    $time_interval = 0;
    $Room[$id]['time'] = time() + $time_interval;
    $Room[$id]['timexx'] = time();
    djs($time_interval, 'setbank', $id, $Room[$id]['timexx']);
    return false;
}
$time_interval = $Room[$id]['ruletime']['qz'];
//抢庄
$Room[$id]['time'] = time() + $time_interval;
$Room[$id]['timexx'] = time();
djs($time_interval, 'setbank', $id, $Room[$id]['timexx']);
if ($Room[$id]['type'] == 1) {
    $cs = 0;
    foreach ($Room[$id]['user'] as $connection3) {
        if ($connection3->user['online'] != '-1') {
            act('djs', $Room[$id]['time'], $connection3);
            ///广播给观战玩家
            if ($cs < 1) {
                $cs = $cs + 1;
                $senall['act'] = 'sendall';
                $senall['toact'] = 'djs';
                $senall['data'] = $Room[$id]['time'];
                reqact($senall, $connection3);
            }
            //end
            act('divRobBankerText', 1, $connection3);
            if ($connection3->user['zt'] == '1') {
                $Room[$id]['user'][$connection3->user['id']]->user['qbank'] = '-1';
                act('operationButton', 1, $connection3);
            }
        }
    }
} else {
    $cs = 0;
    foreach ($Room[$id]['user'] as $connection3) {
        if ($connection3->user['zt'] == '1') {
            $Room[$id]['user'][$connection3->user['id']]->user['qbank'] = '-1';
        }
        if ($connection3->user['online'] != '-1') {
            act('djs', $Room[$id]['time'], $connection3);
            ///广播给观战玩家
            if ($cs < 1) {
                $cs = $cs + 1;
                $senall['act'] = 'sendall';
                $senall['toact'] = 'djs';
                $senall['data'] = $Room[$id]['time'];
                reqact($senall, $connection3);
            }
            //end
            act('divRobBankerText', 2, $connection3);
            if ($connection3->user['zt'] == '1') {
                $msg = array();
                $msg['id'] = 'operationButton';
                if ($Room[$id]['type'] == 6) {
                    act('operationButton', 2, $connection3);
                } else {
                    act('operationButton', 3, $connection3);
                }
            }
        }
    }
}
