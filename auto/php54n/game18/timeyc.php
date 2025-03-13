<?php
global $Room;
$id = $connection->user['room'];
list($msec, $sec) = explode(' ', microtime());
$msectime = (float)sprintf('%.0f', (floatval($msec) + floatval($sec)) * 1000);
$msg['time'] = ($msectime - $data2['time']) . 'ms';
$msg['id'] = $connection->user['id'];
foreach ($Room[$id]['user'] as $connection3) {
	if ($connection3->user['online'] != '-1') {
		if ($connection3->user['level'] == 1) {
			act('ycxx', $msg, $connection3);
		}
	}
} 