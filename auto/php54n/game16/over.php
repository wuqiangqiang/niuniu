<?php
global $Room;
$id = ceil($data2['room']);

if ($data2['time'] != $Room[$id]['timexx']) {
    return false;
}



$Room[$id]['timexx'] = 0;
clearuserdjs($Room[$id]['djs'], $id);
if (count($Room[$id]['list']) > 1) {
    $max = 0;
    $win = array();

    // 通知所有玩家开牌
    foreach ($Room[$id]['alluser'] as $connection3) {
        if ($connection3->user['online'] != '-1') {
            act('mp3play', 'kaipai', $connection3);            
        }
    }



    foreach ($Room[$id]['user'] as $connection3) {
        if ($connection3->user['zt'] == '1') {
            if ($Room[$id]['user'][$connection3->user['id']]->user['cardmax'] > $max) {
                $max = $Room[$id]['user'][$connection3->user['id']]->user['cardmax'];
                $win['index'] = $connection3->user['index'];
                $win['type'] = $connection3->user['typexx'] + 1;
                $win['id'] = $connection3->user['id'];
            }
            if ($connection3->user['tpzt'] != '1') {
                $msg = array();
                $msg['card'] = $Room[$id]['user'][$connection3->user['id']]->user['card'];
                act('fapai', $msg, $connection3);
                $msg = array();
                $msg['id'] = 'CardType';
                $msg['html'] = '<div style="display: block;">' . $cardtype[$Room[$id]['user'][$connection->user['id']]->user['typexx']] . '</div> ';
                act('html', $msg, $connection3);
            }
            $msg = array();
            $msg['index'] = $connection3->user['index'];
            $msg['card'] = $connection3->user['card'];

            foreach ($Room[$id]['alluser'] as $connection4) {
                if ($connection4->user['online'] == '1' && $connection3->user['id'] != $connection4->user['id']) {
                    act('otherpai', $msg, $connection4);
                }
            }
        }
    }
} else {
    $win = array();
    foreach ($Room[$id]['user'] as $connection3) {
        if ($connection3->user['zt'] == '1') {
            $win['index'] = $connection3->user['index'];
            $win['id'] = $connection3->user['id'];
        }
    }
}
$Room[$id]['user'][$win['id']]->user['dqjf'] = $Room[$id]['user'][$win['id']]->user['dqjf'] + $Room[$id]['total'];
$Room[$id]['user'][$win['id']]->user['djjf'] = $Room[$id]['user'][$win['id']]->user['djjf'] + $Room[$id]['total'];
$djxx = array();
foreach ($Room[$id]['alluser'] as $connection3) {
    if ($win['index'] == $connection3->user['index']) {
        $djxx[] = array('user' => $connection3->user, sfwin => '1');
    } else {
        $djxx[] = array('user' => $connection3->user, sfwin => '0');
    }
    $win['total'] = $Room[$id]['total'];
    $Room[$id]['user'][$connection3->user['id']]->user['djjf'] = 0;
    act('shou', $win, $connection3);

    // 留意这里
    $connection3->user['is_start'] = 0;
    // 通知用户更新状态
    act('userUpdate', $connection3->user, $connection3);
}



//牌局信息入库
foreach ($djxx as $key => $value) {
    unset($djxx[$key]['user']['nickname']);
}
$add['room'] = $id;
$add['js'] = $Room[$id]['xx']['js'];
$add['djxx'] = json_encode($djxx, JSON_UNESCAPED_UNICODE);
$db->insert('jz_dj_room', $add);
$time_interval = 3;
$Room[$id]['time2'] = time() + $time_interval;
$Room[$id]['timexx'] = time();



djs($time_interval, 'initroom', $id, $Room[$id]['timexx']);






