<?php
//step2 发牌阶段
global $Room;
$cardtype['0'] = '高牌';
$cardtype['1'] = '对子';
$cardtype['2'] = '顺子';
$cardtype['3'] = '同花';
$cardtype['4'] = '同花顺';
$cardtype['5'] = '三条';
$id = $connection->user['room'];
act('initroom', $msg, $connection);
$msg = array();
$msg['id'] = 'jsxx';
$msg['html'] = $Room[$id]['xx']['js'] . '&nbsp;/&nbsp;' . $Room[$id]['xx']['zjs'] . '&nbsp;局';
act('html', $msg, $connection);
$index = array();
foreach ($Room[$id]['user'] as $key => $connection3) {
    if ($connection3->user['zt'] == 1) {
        $index[] = array('index' => $connection3->user['index'], 'id' => $connection3->user['id']);
    }
}
$msg = array();
$msg['cm'] = $Room[$id]['cmlist'];
act('recm', $msg, $connection);
$msg = array();
$msg['user'] = $index;
act('allfapai', $msg, $connection);
if ($connection->user['tpzt'] == 1) {
    $card = $Room[$id]['user'][$connection->user['id']]->user['card'];
    $msg = array();
    $msg['card'] = $card;
    act('fapai', $msg, $connection);
    $msg = array();
    $msg['id'] = 'CardType';
    $msg['html'] = '<div style="display: block;">' . $cardtype[$Room[$id]['user'][$connection->user['id']]->user['typexx']] . '</div> ';
    act('html', $msg, $connection);
}
$msg = array();
$msg['index'] = $Room[$id]['list'][$Room[$id]['next']];
$msg['time'] = $Room[$id]['time'];
act('qxbp', '', $connection);
act('userdjs', $msg, $connection);
if ($connection->user['index'] == $Room[$id]['list'][$Room[$id]['next']]) {
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
    if ($Room[$id]['gz1'] == 1 && $Room[$id]['total'] < 100) {
        $biuser['user'] = array();
    }
    if ($connection->user['online'] != '-1') {
        act('qxbp', '', $connection);
        act('userdjs', $msg, $connection);
    }
    if ($Room[$id]['gz0'] == 1 && count($Room[$id]['list']) > 2 && $connection->user['tpzt'] != 1) {
        $biuser['user'] = array();
    }
    $msg2 = array();
    $msg2['id'] = 'Buttons';
    $html = '<div class="scoreList"><div style="display: block;">';
    if ($connection->user['tpzt'] == 1) {
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

    // 如果是观众
    if($connection->user['is_watch'] == 1){

    } else {
        act('html', $msg2, $connection);
    }

    if ($connection->user['tpzt'] != 1 && $connection->user['is_watch'] == 0) {
        act('showbook', '', $connection);
    } else {
        act('hidebook', '', $connection);
    }
}
