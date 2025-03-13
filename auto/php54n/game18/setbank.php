<?php
global $Room;
$id = ceil($data2['room']);
if ($data2['time'] != $Room[$id]['timexx']) {
	return false;
}
$Room[$id]['timexx'] = time();
$Room[$id]['xx']['zt'] = '4';
cleardjs($Room[$id]['djs'], $id);
$bank = array();
$user = array();
if ($Room[$id]['type'] == 29 || ($Room[$id]['type'] == 28 && $Room[$id]['bank'])) {
	foreach ($Room[$id]['user'] as $connection3) {
		if ($connection3->user['zt'] == '1') {
			$user[] = $connection3->user;
		}
	}
	if ($Room[$id]['user'][$Room[$id]['bank']['id']]->user['zt'] == '1') {
		$Room[$id]['bank']['id'] = $Room[$id]['bank']['id'];
		$Room[$id]['bank']['index'] = $Room[$id]['user'][$Room[$id]['bank']['id']]->user['index'];
	} else {
		$xz = rand(0, count($user) - 1);
		$Room[$id]['bank'] = $user[$xz];
	}
	$time_interval = 0;
	$Room[$id]['time'] = time() + $time_interval;
	$Room[$id]['timexx'] = time();
	djs($time_interval, 'initxian', $id, $Room[$id]['timexx']);
	return false;
}
$type = $Room[$id]['type'];
if ($Room[$id]['type'] == 28) {
	$type = '1';
} elseif ($Room[$id]['type'] == 31) {
	$type = '4';
} else {
	$type = '2';
}
foreach ($Room[$id]['user'] as $connection3) {
	if ($connection3->user['zt'] == '1' && $connection3->user['qbank'] == '-1') {
		$msg = array();
		$msg['zt'] = 0;
		$msg['type'] = $type;
		act('qbankshow', $msg, $connection3);
		$msg['index'] = $connection3->user['index'];
		foreach ($Room[$id]['user'] as $connection4) {
			if ($connection3->user['id'] != $connection4->user['id'] && $connection4->user['online'] != '-1') {
				act('qbankshowother', $msg, $connection4);
			}
		}
	}
	if ($connection3->user['qbank'] == $Room[$id]['beishu'] && $connection3->user['zt'] == 1) {
		$bank[] = $connection3->user;
	}
	if ($connection3->user['zt'] == '1') {
		$user[] = $connection3->user;
	}
}
if (!$bank) {
	$bank = $user;
}
$dataxx = array();
foreach ($bank as $key => $value) {
	$dataxx[] = $value['index'];
}
arsort($dataxx);
$dataxx2 = array();
foreach ($dataxx as $key => $value) {
	$dataxx2[] = $value;
}
$data = array();
$data['user'] = $dataxx2;
$data['index'] = $dataxx2[0];
if (count($bank) != 1) {
	foreach ($Room[$id]['user'] as $connection3) {
		act('showqz', $data, $connection3);
	}
}
if (!$bank) {
	$xz = rand(0, count($user) - 1);
	$Room[$id]['bank'] = $user[$xz];
} else {
	$xz = rand(0, count($bank) - 1);
	$Room[$id]['bank'] = $bank[$xz];
}
if (count($bank) == 1) {
	$time_interval = 1;
	$Room[$id]['time'] = time() + $time_interval;
	$Room[$id]['timexx'] = time();
	djs($time_interval, 'initxian', $id, $Room[$id]['timexx']);
} else {
	$time_interval = 4;
	$Room[$id]['time'] = time() + $time_interval;
	$Room[$id]['timexx'] = time();
	djs($time_interval, 'initxian', $id, $Room[$id]['timexx']);
} 