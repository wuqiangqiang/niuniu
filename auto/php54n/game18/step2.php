<?php
global $Room;
$id = $connection->user['room'];
act('initroom', $msg, $connection);
$msg = array();
$msg['id'] = 'jsxx';
$msg['html'] = $Room[$id]['xx']['js'] . '&nbsp;/&nbsp;' . $Room[$id]['xx']['zjs'] . '&nbsp;局';
act('html', $msg, $connection);
$index = array();
foreach ($Room[$id]['user'] as $key => $connection3) {
	if ($connection3->user['zt'] == 1) {
		$index[] = array('index' => $connection3->user['index'], 'id' => $connection3->user['id']);
	}
}
$msg = array();
$msg['user'] = $index;
if ($Room[$id]['user'][$connection->user['id']]->user['zt'] == '1') {
	$msg['card'] = $connection->user['card'];
	for ($i = 0; $i < 2; $i++) {
		if ($connection->user['cardzt'][$i] == 0) {
			unset($msg['card'][$i]);
		}
	}
}
if ($connection->user['is_grade'] == 1) {
	$msg['allcard'] = $Room[$id]['allcard'];
}
act('allfapai', $msg, $connection);
act('mp3play', 'fapai', $connection);
act('operationButton', -1, $connection); 