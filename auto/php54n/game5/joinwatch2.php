<?php
// 玩家没参与游戏的情况下，进入“观战模式”
global $Room;
$id = $data2['room'];
$connection->user['is_start'] = 0;
$connection->user['is_watch'] = true;
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

// 如果进入玩家组了
// 如果用户已经参与游戏
if ($Room[$id]['user'][$connection->user['id']]) { 

    // 后来修改，只将用户覆盖灰色蒙层
    $senall['act'] = 'sendall';
    $senall['toact'] = 'removeuserByWatch';
    $senall['data'] = $connection->user['id'];
    reqact($senall, $connection3);
}
// 如果用户没有参与游戏
else {
    // error_log(print_r($connection->user['index']) . "--cccc<br>", 3, "/www/wwwroot/xigua/errors.html");
    //把位置让出来
    $Room[$id]['index'][] = $connection->user['index']; 
    //删除玩家列表
    unset($Room[$id]['user'][$connection->user['id']]); 
    $Room[$id]['index'] = array_flip(array_flip($Room[$id]['index']));
    sort($Room[$id]['index']);

    $senall['act'] = 'sendall';
    $senall['toact'] = 'removeuser2';
    $senall['data'] = $connection->user['id'];
    reqact($senall, $connection3);
}


// 玩家组
foreach ($Room[$id]['user'] as $connection3) {
    if ($connection3->user['online'] == '-1' && $Room[$id]['xx']['zt'] < 2) {
        $Room[$id]['user'][$connection3->user['id']]->user['zt'] = 0;
    }
    
    $msg = array();
    $msg['user']['id'] = $connection3->user['id'];
    $msg['user']['nickname'] = $connection3->user['nickname'];
    $msg['user']['img'] = $connection3->user['img'];
    $msg['user']['index'] = $connection3->user['index'];
    $msg['user']['dqjf'] = $connection3->user['dqjf'];
    $msg['user']['online'] = $connection3->user['online'];
    $msg['user']['zt'] = $connection3->user['zt'];
    $msg['zt'] = $connection3->user['zt'];
    act('adduser', $msg, $connection);
}


$data = array();
$data['act'] = 'step' . $Room[$id]['xx']['zt'];
reqact($data, $connection);



