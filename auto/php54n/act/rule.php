<?php

if (!$data2['play']) {
	
	if ($data2['id'] == 'time'){
			$connection->rule['time'][$data2['key']] = $data2['value'];
			$msg['id'] = 'time'.$data2['key'].$data2['value'];
			$msg['html'] = 'active';
			act('active', $msg, $connection);
	}	
	
	
	if (($data2['id'] == 'gz2') || ($data2['id'] == 'px')) {
		if ($connection->rule[$data2['id']][$data2['key']]) {
			$connection->rule[$data2['id']][$data2['key']] = 0;
			$msg = array();
			$msg['id'] = $data2['id'] . $data2['key'];
			$msg['html'] = 'active';
			act('removeid', $msg, $connection);
		} else  {
			$connection->rule[$data2['id']][$data2['key']] = 1;
			$msg['id'] = $data2['id'] . $data2['key'];
			$msg['html'] = 'active';
			act('addid', $msg, $connection);
		} 
	}else {
		if ($data2['id'] != 'time'){
		$connection->rule[$data2['id']] = $data2['key'];
		$msg = array();
		$msg['id'] = $data2['id'] . $data2['key'];
		$msg['html'] = 'active';
		act('active', $msg, $connection);
	}
	}
	
	
	
} else {
	$play = $data2['play'];
	$connection->rule = array();
	$connection->rule['play'] = $play;
	if ($play['df']) {
		$connection->rule['df'] = 0;
		$msg = array();
		$msg['id'] = 'df0';
		$msg['html'] = 'active';
		act('active', $msg, $connection);
	}
	if ($play['gz']) {
		$connection->rule['gz'] = 0;
		$msg = array();
		$msg['id'] = 'gz0';
		$msg['html'] = 'active';
		act('active', $msg, $connection);
	}
	if ($play['js']) {
		$connection->rule['js'] = 0;
		$msg = array();
		$msg['id'] = 'js0';
		$msg['html'] = 'active';
		act('active', $msg, $connection);
	}
	if ($play['sz']) {
		$connection->rule['sz'] = 0;
		$msg = array();
		$msg['id'] = 'sz0';
		$msg['html'] = 'active';
		act('active', $msg, $connection);
	}
	if ($play['cm']) {
		$connection->rule['cm'] = 0;
		$msg = array();
		$msg['id'] = 'cm0';
		$msg['html'] = 'active';
		act('active', $msg, $connection);
	}
	if ($play['sx']) {
		$connection->rule['sx'] = 0;
		$msg = array();
		$msg['id'] = 'sx0';
		$msg['html'] = 'active';
		act('active', $msg, $connection);
	}
	if ($play['zm']) {
		$connection->rule['zm'] = 0;
		$msg = array();
		$msg['id'] = 'zm0';
		$msg['html'] = 'active';
		act('active', $msg, $connection);
	}
	if ($play['gp']) {
		$connection->rule['gp'] = 0;
		$msg = array();
		$msg['id'] = 'gp0';
		$msg['html'] = 'active';
		act('active', $msg, $connection);
	}
	if ($play['gd']) {
		$connection->rule['gd'] = 0;
		$msg = array();
		$msg['id'] = 'gd0';
		$msg['html'] = 'active';
		act('active', $msg, $connection);
	}
	if ($play['zd']) {
		$connection->rule['zd'] = 0;
		$msg = array();
		$msg['id'] = 'zd0';
		$msg['html'] = 'active';
		act('active', $msg, $connection);
	}
	if ($play['bs']) {
		$connection->rule['bs'] = 1;
		$msg = array();
		$msg['id'] = 'bs1';
		$msg['html'] = 'active';
		act('active', $msg, $connection);
	}
	
}
if (isset($connection->user['history_select'])) {
	$history_select = $db->getOne('SELECT `history_select` FROM `jz_user` WHERE `id` = ' . ceil($connection->user['id']));
	$history_select = !empty($history_select['history_select']) ? json_decode($history_select['history_select'], true) : [];
	$type = $connection->rule['play']['type'];
	if (empty($history_select[$type])) {
		$history_select[$type] = [];
	}
	$rule = $connection->rule;
	unset($rule['play']);
	$history_select[$type]['rule'] = $rule;
	$db->update('jz_user', ['history_select' => json_encode($history_select)], 'id=' . ceil($connection->user['id']));
} 