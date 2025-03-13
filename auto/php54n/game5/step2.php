<?php
//step2 发牌阶段
global $Room;
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
$msg['user'] = $index;
act('allfapai', $msg, $connection);
