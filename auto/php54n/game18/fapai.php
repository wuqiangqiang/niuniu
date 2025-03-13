<?php
global $Room;
$id = $connection->user['room'];
if ($Room[$id]['xx']['zt'] != 5) {
	return false;
}
$card = $Room[$id]['user'][$connection->user['id']]->user['card'];
$Room[$id]['user'][$connection->user['id']]->user['cardzt'][($data2['id'] - 1)] = 1;
$msg = array();
$msg['id'] = $data2['id'];
$msg['card'] = $card[($data2['id'] - 1)];
act('fapxx', $msg, $connection);
$open = 0;
foreach ($Room[$id]['user'][$connection->user['id']]->user['cardzt'] as $key => $value) {
	if ($value == 1) {
		$open = $open + 1;
	}
}
if ($open == '5') {
	$msg = array();
	$msg['id'] = 'operationButton';
	$msg['html'] = '<div class="operationButton-1-zt" id="jiurenbqz" style="display: block;" onclick="send(\'tanpai\',{});">
                              <img class="operationButton-gg" src="/static/img/bull9/bull_button_blue.png"  /> 
                              <div   class="operationButton-gg1"  style="width: 100%;">
                               摊牌
                              </div>
                             </div>';
	act('html', $msg, $connection);
} 