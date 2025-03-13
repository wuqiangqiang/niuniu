<?php
global $Room;

//$user['nickname'] = $user['nickname_base64'];

$id= $connection->user['gzroomid'] = $data2['room'];


$info['id'] = 'valert';
act('showid', $info, $connection);
act('gxindex', '', $connection);

 
act('watchindex', $Room[$id]['index'], $connection);

$Room[$id]['gzlist'][$connection->user['id']] = array('nickname' => $connection->user['nickname'], 'id' => $connection->user['id'], 'img' => $connection->user['img']);


$gzinfo['data'] = array_values($Room[$id]['gzlist']);
$gzinfo['is_start'] = $connection->user['is_start'] =  0;
$gzinfo['is_watch'] = $connection->user['is_watch'] = true;

act('watchlist', $gzinfo, $connection);
act('initok', '', $connection);
act('initroom','',$connection);



//error_log("join-xw-end.php<br>", 3, "/www/wwwroot/xigua/errors.html");

