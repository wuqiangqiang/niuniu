<?php
global $Room;
$id = $connection->user['room'];
$jflist = array();
foreach ($Room[$id]['user'] as $connection3) {
	if ($connection3->user['zt'] != '-1') {
		$jflist[$connection3->user['id']] = $connection3->user['dqjf'];
	}
}
arsort($jflist);
$user = array();
foreach ($jflist as $key => $value) {
	$user[] = $Room[$id]['user'][$key]->user;
}
foreach ($Room[$id]['user'] as $connection3) {
	$room['id'] = $id;
	$room['zjs'] = $Room[$id]['xx']['js'];
	$room['time'] = date('Y-m-d H:i:s', time());
	$room['user'] = $user;
	act('overroom', $room, $connection3);
} 