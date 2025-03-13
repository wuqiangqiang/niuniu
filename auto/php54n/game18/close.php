<?php
global $Room;
$id = $connection->user['room'];
if ($Room[$id]['zt'] == 7) {
	return false;
}
if ($Room[$id]) {
	$Room[$id]['user'][$connection->user['id']]->user['online'] = '-1';
	if ($Room[$id]['xx']['zt'] <= 2) {
		$connection3->user['zt'] == 0;
		$Room[$id]['user'][$connection->user['id']]->user['zt'] = 0;
	}
	if ($Room[$id]['xx']['js'] == 0 || $Room[$id]['start'][$connection->user['id']] != 1) {
		$Room[$id]['index'][] = $connection->user['index'];
		unset($Room[$id]['user'][$connection->user['id']]);
	}
	$zbsl = 0;
	if ($Room[$id]['xx']['js'] == 0 || $Room[$id]['start'][$connection->user['id']] != 1) {
		foreach ($Room[$id]['user'] as $connection3) {
			if ($connection3->user['online'] == '1') {
				$userlist[$connection3->user['id']] = 1;
			}
		}
		unset($userlist[$connection->user['id']]);
		$save['user'] = json_encode($userlist);
		$db->update('jz_room', $save, 'id=' . $db->s($id));
	}
	foreach ($Room[$id]['user'] as $connection3) {
		if ($connection3->user['zt'] == '1') {
			$zbsl = $zbsl + 1;
		}
		if ($connection->user['id'] != $connection3->user['id'] && $connection3->user['online'] != '-1') {
			$msg = $connection->user['index'];
			if ($Room[$id]['xx']['js'] == 0 || $Room[$id]['start'][$connection->user['id']] != 1) {
				act('removeuser2', $msg, $connection3);
			} else {
				act('removeuser', $msg, $connection3);
			}
		}
	}
	$online = 0;
	foreach ($Room[$id]['user'] as $connection3) {
		if ($connection3->user['online'] == '1') {
			$online = $online + 1;
		}
	}
	echo $zbsl;
	echo $Room[$id]['xx']['zt'];
	if ($Room[$id]['xx']['zt'] == 1 && $zbsl < 2) {
		$Room[$id]['xx']['zt'] = 0;
		cleardjs($Room[$id]['djs'], $id);
		$Room[$id]['timexx'] = time();
	}
	if ($Room[$id]['xx']['zt'] == 1 && $zbsl == $online) {
		if ($Room[$id]['xx']['js'] != 0 && $Room[$id]['start'][$connection->user['id']] == 1) {
			$Room[$id]['user'][$connection->user['id']]->user['zt'] = 0;
		}
		$data = array();
		$data['act'] = 'startroom';
		$data['room'] = $id;
		$data['time'] = $Room[$id]['timexx'];
		reqact($data, '');
	}
	if ($Room[$id]['xx']['js'] != 0 && $Room[$id]['start'][$connection->user['id']] == 1) {
		if ($Room[$id]['xx']['zt'] == 0) {
			$Room[$id]['user'][$connection->user['id']]->user['zt'] = 0;
		}
	}
	if ($online == 0 && $Room[$id]['xx']['zt'] == 0) {
		$time_interval = 600;
		$Room[$id]['xx']['zt'] = '-1';
		$Room[$id]['timexx'] = time();
		djs($time_interval, 'overroom', $id, $Room[$id]['timexx']);
	}
} 