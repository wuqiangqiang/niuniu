<?php
global $Room;
$id = $connection->user['room'];
if ($data2['time'] > $Room[$id]['time'] || $Room[$id]['user'][$connection->user['id']]->user['qbank'] != '-1' || $data2['time'] < $Room[$id]['timexx']) {
	return false;
}
$connection->user['qbank'] = $data2['zt'];
$Room[$id]['user'][$connection->user['id']]->user['qbank'] = $data2['zt'];
if ($data2['zt'] > $Room[$id]['beishu']) {
	$Room[$id]['beishu'] = $data2['zt'];
}
$zbsl = 0;
$qbsl = 0;
foreach ($Room[$id]['user'] as $connection3) {
	if ($connection3->user['zt'] == '1') {
		$zbsl = $zbsl + 1;
	}
	if ($connection3->user['qbank'] != '-1' && $connection3->user['zt'] == '1') {
		$qbsl = $qbsl + 1;
	}
	$msg = array();
	$msg['index'] = $connection->user['index'];
	$msg['zt'] = $data2['zt'];
	$msg['type'] = $data2['type'];
	if ($connection->user['id'] != $connection3->user['id'] && $connection3->user['online'] != '-1') {
		act('qbankshowother', $msg, $connection3);
	}
}
if ($zbsl == $qbsl && $Room[$id]['xx']['zt'] == '3') {
	$Room[$id]['xx']['zt'] = '4';
	$data = array();
	$data['act'] = 'setbank';
	$data['time'] = $Room[$id]['timexx'];
	$data['room'] = $id;
	reqact($data, '');
}