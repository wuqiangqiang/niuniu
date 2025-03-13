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
$connection->user['is_watch'] = false;





act('initok', '', $connection);





$data = array();
$data['act'] = 'joinroom';
$data['room'] = $id ;
reqact($data, $connection);


act('tojoin','',$connection);

unset($Room[$id]['gzlist'][$connection->user['id']]);	 //从观战列表中移除
$gzinfo['data'] = array_values($Room[$id]['gzlist']);

foreach ($Room[$id]['alluser'] as $connection3) {
$gzinfo['is_start'] = $connection3->user['is_start'];
$gzinfo['is_watch'] = $connection3->user['is_watch'];
act('watchlist', $gzinfo, $connection3);
		
}

