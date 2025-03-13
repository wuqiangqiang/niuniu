<?php
global $Room;
$id = ceil($data2['room']);
if ($data2['time'] != $Room[$id]['timexx']) {
	return false;
}
$Room[$id]['timexx'] = time();
$Room[$id]['xx']['zt'] = 3;
cleardjs($Room[$id]['djs'], $id);
if ($Room[$id]['type'] == 29 || ($Room[$id]['type'] == 28 && $Room[$id]['bank'])) {
	$time_interval = 0;
	$Room[$id]['time'] = time() + $time_interval;
	$Room[$id]['timexx'] = time();
	djs($time_interval, 'setbank', $id, $Room[$id]['timexx']);
	return false;
}
$time_interval = 10;
$Room[$id]['time'] = time() + $time_interval;
$Room[$id]['timexx'] = time();
djs($time_interval, 'setbank', $id, $Room[$id]['timexx']);
if ($Room[$id]['type'] == 28) {
	foreach ($Room[$id]['user'] as $connection3) {
		if ($connection3->user['online'] != '-1') {
			act('djs', $Room[$id]['time'], $connection3);
			act('divRobBankerText', 1, $connection3);
			if ($connection3->user['zt'] == '1') {
				$Room[$id]['user'][$connection3->user['id']]->user['qbank'] = '-1';
				act('operationButton', 1, $connection3);
			}
		}
	}
} else {
	foreach ($Room[$id]['user'] as $connection3) {
		if ($connection3->user['zt'] == '1') {
			$Room[$id]['user'][$connection3->user['id']]->user['qbank'] = '-1';
		}
		if ($connection3->user['online'] != '-1') {
			act('djs', $Room[$id]['time'], $connection3);
			act('divRobBankerText', 2, $connection3);
			if ($connection3->user['zt'] == '1') {
				$msg = array();
				$msg['id'] = 'operationButton';
				if ($Room[$id]['type'] == 31 || 1) {
					act('operationButton', 2, $connection3);
				} else {
					act('operationButton', 3, $connection3);
				}
			}
		}
	}
}