<?php
global $Room;

$id = $connection->user['room'];
$act = $data2['toact'];
$msg = $data2['data'];
foreach ($Room[$id]['alluser'] as $key => $connection4) {
	// 后来修改
    // if (!$Room[$id]['user'][$key]) //如果没参与了
    // {
    // } else {
    // }


    $gzlist[$key] = $connection4;
}
foreach ($gzlist as $connection5) {
    act($act, $msg, $connection5);
}


