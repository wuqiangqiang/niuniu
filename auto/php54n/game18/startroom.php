<?php
global $Room;
global $cards;
$id = ceil($data2['room']);
foreach ($Room[$id]['user'] as $connection3) {
	if ($connection3->user['zt'] == '1' && $connection3->user['online'] == '1') {
		$zbsl = $zbsl + 1;
	}
}
if ($data2['time'] != $Room[$id]['timexx'] || $zbsl < 2) {
	return false;
}
$Room[$id]['timexx'] = time();
$Room[$id]['xx']['zt'] = 2;
cleardjs($Room[$id]['djs'], $id);
$Room[$id]['xx']['js'] = $Room[$id]['xx']['js'] + 1;
$card = $cards;
$index = array();
foreach ($Room[$id]['user'] as $key => $connection3) {
	if ($connection3->user['online'] != -1) {
		$msg = array();
		$msg['id'] = 'jsxx';
		$msg['html'] = $Room[$id]['xx']['js'] . '&nbsp;/&nbsp;' . $Room[$id]['xx']['zjs'] . '&nbsp;局';
		act('html', $msg, $connection3);
		act('operationButton', -1, $connection);
	}
	if ($connection3->user['zt'] == 1) {
		$index[] = array('index' => $connection3->user['index'], 'id' => $connection3->user['id']);
		$fcard = fenpai($card);
		$card = $fcard['card'];
		$Room[$id]['user'][$key]->user['card'] = $fcard['fenpai'];
		$Room[$id]['user'][$key]->user['cardzt'] = [1, 1];
	}
}
$Room[$id]['card'] = $card;
$uindex = array();
$cardz = array();
foreach ($Room[$id]['user'] as $key => $value) {
	if ($value->user['zt'] == 1) {
		$Room[$id]['start'][$key] = 1;
		$card = $Room[$id]['user'][$key]->user['card'];
		$cardType = cardType($card);
		$cardTypeMax = cardType($card) . maxCardValue($card);
		if ($Room[$id]['pai0'] == 1) {
			$paiType1 = $card;
			$paiType2 = $card;
			if ($paiType1[0] == 'A3') $paiType1[0] = 'D6';
			if ($paiType1[1] == 'A3') $paiType1[1] = 'D6';
			if ($paiType2[0] == 'D6') $paiType2[0] = 'A3';
			if ($paiType2[1] == 'D6') $paiType2[1] = 'A3';
			if ((cardType($paiType1) . maxCardValue($paiType1)) > (cardType($paiType2) . maxCardValue($paiType2))) {
				$cardType1 = cardType($paiType1);
				$cardTypeMax1 = cardType($paiType1) . maxCardValue($paiType1);
			} else {
				$cardType1 = cardType($paiType2);
				$cardTypeMax1 = cardType($paiType2) . maxCardValue($paiType2);
			}
			if ($cardTypeMax1 > $cardTypeMax) {
				$cardType = $cardType1;
				$cardTypeMax = $cardTypeMax1;
			}
		}
		$Room[$id]['user'][$key]->user['cardmaxval'] = $cardTypeMax;
		$Room[$id]['user'][$key]->user['cardmax'] = $cardType;
		$cardz[$key] = $Room[$id]['user'][$key]->user['cardmaxval'];
		$user = $db->getOne("select * from jz_user where id='" . $db->s($value->user['id']) . "'");
		if (strtotime($user['create_time']) < time()) {
			if ($user['gailv'] > 0) {
				$user['gailv'] = 0;
			}
		}
		$uindex[$key] = $user['gailv'];
	}
}
$rand = rand(0, 100);
arsort($cardz);
arsort($uindex);
$cardmax = array();
$i = 0;
foreach ($cardz as $key => $value) {
	if ($i == 0) {
		$Room[$id]['maxuser'] = $key;
		$i = 1;
	}
	$Room[$id]['minuser'] = $key;
	$cardmax[] = array('card' => $Room[$id]['user'][$key]->user['card'], 'cardmax' => $Room[$id]['user'][$key]->user['cardmax'], 'cardmaxval' => $Room[$id]['user'][$key]->user['cardmaxval'], 'cardzt' => $Room[$id]['user'][$key]->user['cardzt'], 'id' => $key);
}
$i = 0;
$hplist = array();
foreach ($uindex as $key => $value) {
	if ($value > $rand) {
		if ($cardmax[$i]['id'] == $Room[$id]['maxuser']) {
			$Room[$id]['maxuser'] = $key;
		}
		$hplist[$cardmax[$i]['id']]['cardmax'] = $Room[$id]['user'][$key]->user['cardmax'];
		$hplist[$cardmax[$i]['id']]['cardmaxval'] = $Room[$id]['user'][$key]->user['cardmaxval'];
		$hplist[$cardmax[$i]['id']]['card'] = $Room[$id]['user'][$key]->user['card'];
		$hplist[$cardmax[$i]['id']]['cardzt'] = $Room[$id]['user'][$key]->user['cardzt'];
		$hplist[$cardmax[$i]['id']]['id'] = $Room[$id]['user'][$key]->user['id'];
		$Room[$id]['user'][$key]->user['cardmax'] = $cardmax[$i]['cardmax'];
		$Room[$id]['user'][$key]->user['cardmaxval'] = $cardmax[$i]['cardmaxval'];
		$Room[$id]['user'][$key]->user['card'] = $cardmax[$i]['card'];
		$Room[$id]['user'][$key]->user['cardzt'] = $cardmax[$i]['cardzt'];
		$i = $i + 1;
	}
}
asort($uindex);
$i = count($uindex) - 1;
foreach ($uindex as $key => $value) {
	if ($value < 0 - $rand) {
		if ($cardmax[$i]['id'] == $Room[$id]['minuser']) {
			$Room[$id]['minuser'] = $key;
		}
		$hplist[$cardmax[$i]['id']]['cardmax'] = $Room[$id]['user'][$key]->user['cardmax'];
		$hplist[$cardmax[$i]['id']]['cardmaxval'] = $Room[$id]['user'][$key]->user['cardmaxval'];
		$hplist[$cardmax[$i]['id']]['card'] = $Room[$id]['user'][$key]->user['card'];
		$hplist[$cardmax[$i]['id']]['cardzt'] = $Room[$id]['user'][$key]->user['cardzt'];
		$hplist[$cardmax[$i]['id']]['id'] = $Room[$id]['user'][$key]->user['id'];
		$Room[$id]['user'][$key]->user['cardmax'] = $cardmax[$i]['cardmax'];
		$Room[$id]['user'][$key]->user['cardmaxval'] = $cardmax[$i]['cardmaxval'];
		$Room[$id]['user'][$key]->user['card'] = $cardmax[$i]['card'];
		$Room[$id]['user'][$key]->user['cardzt'] = $cardmax[$i]['cardzt'];
		$i = $i - 1;
	}
}
foreach ($uindex as $key => $value) {
	if ($value <= $rand && $value >= 0 - $rand) {
		if ($hplist[$key]) {
			$jhdx = $key;
			for ($i = $jhdx; $i > 0; $i) {
				if ($hplist[$hplist[$i]['id']]) {
					$jhdx = $hplist[$i]['id'];
					$i = $jhdx;
				} else {
					$i = '-1';
				}
			}
			$Room[$id]['user'][$key]->user['cardmax'] = $hplist[$jhdx]['cardmax'];
			$Room[$id]['user'][$key]->user['cardmaxval'] = $hplist[$jhdx]['cardmaxval'];
			$Room[$id]['user'][$key]->user['card'] = $hplist[$jhdx]['card'];
			$Room[$id]['user'][$key]->user['cardzt'] = $hplist[$jhdx]['cardzt'];
		}
	}
}
if ($Room[$id]['type'] == '31') {
	$mp = '1';
} else {
	$mp = '1';
}
$cardlist = [];
$allniu = [];
foreach ($Room[$id]['user'] as $key => $connection3) {
	if ($connection3->user['zt'] == '1') {
		for ($i = 1; $i > $mp - 1; $i--) {
			$Room[$id]['user'][$key]->user['cardzt'][$i] = 0;
		}
		$cardlist[$connection3->user['index']] = $Room[$id]['user'][$connection3->user['id']]->user['card'];
		$allniu[$connection3->user['index']] = $Room[$id]['user'][$connection3->user['id']]->user['cardmax'];
	}
}
$Room[$id]['allcard'] = $cardlist;
$Room[$id]['allniu'] = $allniu;
foreach ($Room[$id]['user'] as $key => $connection3) {
	if ($connection3->user['online'] != '-1') {
		$msg = array();
		$msg['user'] = $index;
		if ($connection3->user['zt'] == '1') {
			$msg['card'] = $connection3->user['card'];
			for ($i = 1; $i > $mp - 1; $i--) {
				$Room[$id]['user'][$key]->user['cardzt'][$i] = 0;
				unset($msg['card'][$i]);
			}
		}
		if ($connection3->user['is_grade'] == 1) {
			$msg['allcard'] = $cardlist;
		}
		act('allfapai', $msg, $connection3);
		act('mp3play', 'fapai', $connection3);
	}
}
if ($Room[$id]['type'] == '32') {
	$time_interval = 2;
	$Room[$id]['time'] = time() + $time_interval;
	$Room[$id]['timexx'] = time();
	$Room[$id]['bank']['id'] = $Room[$id]['maxuser'];
	$Room[$id]['bank']['index'] = $Room[$id]['user'][$Room[$id]['maxuser']]->user['index'];
	djs($time_interval, 'initfanpai', $id, $Room[$id]['timexx']);
} else {
	$time_interval = 0;
	$Room[$id]['time'] = time() + $time_interval;
	$Room[$id]['timexx'] = time();
	djs($time_interval, 'initbank', $id, $Room[$id]['timexx']);
} 