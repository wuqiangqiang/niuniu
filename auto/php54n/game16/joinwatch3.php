<?php
global $Room;


//error_log("joingame2.php<br>", 3, "/www/wwwroot/xigua/errors.html");

$id = $connection->user['room'];
unset($Room[$id]['qszt'][$connection->user['id']]);
$start = 0;
if ($Room[$id]['user'][$connection->user['id']]->user['is_start'] == 1)
{
	$start = 1;
}

$connection->user['is_start'] =  $start;
$connection->user['is_watch'] = true;

act('initok', '', $connection);

$data = array();
$data['act'] = 'joinroom';
$data['room'] = $id ;
reqact($data, $connection);



$Room[$id]['gzlist'][$connection->user['id']] = array('nickname' => $connection->user['nickname'], 'id' => $connection->user['id'], 'img' => $connection->user['img']);
act('watchindex', $Room[$id]['index'], $connection);
act('watch', '', $connection);
$gzinfo['data'] = array_values($Room[$id]['gzlist']);
foreach ($Room[$id]['alluser'] as $connection3) {
    $gzinfo['is_start'] = $connection3->user['is_start'];
    $gzinfo['is_watch'] = $connection3->user['is_watch'];
    act('watchlist', $gzinfo, $connection3);
}
act('operationButton', '', $connection);
act('initok', '', $connection);
act('initroom', '', $connection);



// 用户已经开始过游戏
$senall['act'] = 'sendall';
$senall['toact'] = 'removeuserByWatch';
$senall['data'] = $connection->user['id'];
reqact($senall, $connection3);
//end

