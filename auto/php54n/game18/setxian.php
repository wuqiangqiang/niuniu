<?php
global $Room;
$id = ceil($data2['room']);
if ($data2['time'] != $Room[$id]['timexx']) {
	return false;
}
$Room[$id]['timexx'] = time();
$Room[$id]['xx']['zt'] = '5';
cleardjs($Room[$id]['djs'], $id);
$bank = array();
$user = array();
foreach ($Room[$id]['user'] as $connection3) {
	if ($connection3->user['beishu'] == '-1' && $connection3->user['zt'] == '1' && $Room[$id]['bank']['id'] != $connection3->user['id']) {
		$Room[$id]['user'][$connection3->user['id']]->user['beishu'] = '1';
		$msg = array();
		$msg['index'] = $connection3->user['index'];
		$msg['zt'] = 1;
		foreach ($Room[$id]['user'] as $connection4) {
			if ($connection4->user['online'] != '-1') {
				act('showxian', $msg, $connection4);
			}
		}
	}
}
$time_interval = 1;
$Room[$id]['time'] = time() + $time_interval;
$Room[$id]['timexx'] = time();
djs($time_interval, 'initfanpai', $id, $Room[$id]['timexx']); 