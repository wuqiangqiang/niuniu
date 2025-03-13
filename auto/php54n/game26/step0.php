<?php
    //step0 游戏准备阶段
global $Room;
$id=ceil($connection->user['room']);

$history_list = $db->getAll('SELECT * FROM jz_dj_room WHERE room = '.$db->s($id).' ORDER BY `id` DESC LIMIT 10');
$history_list = empty($history_list) ? [] : array_reverse($history_list);
$send_data = [];
foreach ($history_list as $k => $v) {
    $detail = json_decode($v['djxx'], true);
    $send_data[] = [
        'js' => $v['js'],
        'result' => $detail['result'],
        'prizes' => $detail['prizes']
    ];
}

act('initroom',$msg,$connection);
act('history', $send_data, $connection);

