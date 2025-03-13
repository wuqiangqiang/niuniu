<?php
global $Room;
$id = ceil($data2['room']);
if ($data2['time'] != $Room[$id]['timexx']) {
	return false;
}
$Room[$id]['timexx'] = time();
$Room[$id]['xx']['zt'] = '6';
cleardjs($Room[$id]['djs'], $id);
foreach ($Room[$id]['user'] as $connection3) {
	if ($connection3->user['zt'] == '1' && $connection3->user['tpzt'] == '-1') {
		$Room[$id]['user'][$connection3->user['id']]->user['tpzt'] = '1';
		foreach ($Room[$id]['user'] as $connection4) {
			if ($connection4->user['online'] != '-1') {
				act('showothertanpai', $connection3->user['index'], $connection4);
			}
		}
	}
}
$jibixx = array();
$bankjf = 0;
if ($Room[$id]['minuser'] == $Room[$id]['bank']['id']) {
	$fx = 1;
} elseif ($Room[$id]['maxuser'] == $Room[$id]['bank']['id']) {
	$fx = 2;
} else {
	$fx = 0;
}
foreach ($Room[$id]['user'] as $connection3) {
	if ($Room[$id]['bank']['id'] != $connection3->user['id'] && $connection3->user['zt'] == '1') {
		$data = array();
		$data['fx'] = $fx;
		$data['bank']['index'] = $Room[$id]['bank']['index'];
		if (!$connection3->user['beishu']) {
			$connection3->user['beishu'] = 1;
		}
		if (!$Room[$id]['beishu']) {
			$Room[$id]['beishu'] = 1;
		}
		$jifen = $Room[$id]['df'] * $connection3->user['beishu'] * $Room[$id]['beishu'];
		if ($Room[$id]['user'][$connection3->user['id']]->user['cardmaxval'] > $Room[$id]['user'][$Room[$id]['bank']['id']]->user['cardmaxval']) {
			$jifen = $jifen * $Room[$id]['niuniu'][$Room[$id]['user'][$connection3->user['id']]->user['cardmax']];
			$Room[$id]['user'][$connection3->user['id']]->user['dqjf'] = $Room[$id]['user'][$connection3->user['id']]->user['dqjf'] + $jifen;
			$Room[$id]['user'][$Room[$id]['bank']['id']]->user['dqjf'] = $Room[$id]['user'][$Room[$id]['bank']['id']]->user['dqjf'] - $jifen;
			$data['lose']['index'] = $Room[$id]['bank']['index'];
			$data['lose']['dqjf'] = $Room[$id]['user'][$Room[$id]['bank']['id']]->user['dqjf'];
			$data['win']['index'] = $connection3->user['index'];
			$data['win']['dqjf'] = $Room[$id]['user'][$connection3->user['id']]->user['dqjf'];
			$bankjf = $bankjf - $jifen;
		} else {
			$jifen = $jifen * $Room[$id]['niuniu'][$Room[$id]['user'][$Room[$id]['bank']['id']]->user['cardmax']];
			$Room[$id]['user'][$connection3->user['id']]->user['dqjf'] = $Room[$id]['user'][$connection3->user['id']]->user['dqjf'] - $jifen;
			$Room[$id]['user'][$Room[$id]['bank']['id']]->user['dqjf'] = $Room[$id]['user'][$Room[$id]['bank']['id']]->user['dqjf'] + $jifen;
			$data['win']['index'] = $Room[$id]['bank']['index'];
			$data['win']['dqjf'] = $Room[$id]['user'][$Room[$id]['bank']['id']]->user['dqjf'];
			$data['lose']['index'] = $connection3->user['index'];
			$data['lose']['dqjf'] = $Room[$id]['user'][$connection3->user['id']]->user['dqjf'];
			$bankjf = $bankjf + $jifen;
			$jifen = 0 - $jifen;
		}
		$jibixx[] = array('dqjf' => $Room[$id]['user'][$connection3->user['id']]->user['dqjf'], 'index' => $Room[$id]['user'][$connection3->user['id']]->user['index']);
		foreach ($Room[$id]['user'] as $connection4) {
			if ($connection4->user['online'] != -1) {
				act('jibi', $data, $connection4);
			}
		}
		$djxx[] = array('user' => $connection3->user, 'sfbank' => '0', 'jf' => $jifen, 'beishu' => $connection3->user['beishu']);
	}
}
$jibixx[] = array('dqjf' => $Room[$id]['user'][$Room[$id]['bank']['id']]->user['dqjf'], 'index' => $Room[$id]['user'][$Room[$id]['bank']['id']]->user['index'], 'fx' => $fx);
$djxx[] = array('user' => $Room[$id]['user'][$Room[$id]['bank']['id']]->user, 'sfbank' => '1', 'jf' => $bankjf, 'beishu' => $Room[$id]['beishu']);
foreach ($Room[$id]['user'] as $connection3) {
	if ($connection3->user['online'] != -1) {
		act('jibichange', $jibixx, $connection3);
	}
}
foreach ($djxx as $key => $value) {
	unset($djxx[$key]['user']['history_select']);
}
$add['room'] = $id;
$add['js'] = $Room[$id]['xx']['js'];
$add['djxx'] = json_encode($djxx, JSON_UNESCAPED_UNICODE);
$db->insert('jz_dj_room', $add);
if ($fx == 0) {
	$time_interval = 9;
} else {
	$time_interval = 5;
}
$Room[$id]['time'] = time() + $time_interval;
$Room[$id]['timexx'] = time();
djs($time_interval, 'initroom', $id, $Room[$id]['timexx']); 