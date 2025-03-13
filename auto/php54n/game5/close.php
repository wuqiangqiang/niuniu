<?php
global $Room;
$id = $connection->user['room'];
if ($Room[$id]['zt'] == 7) {
    return false;
}
if ($Room[$id]) {
    $Room[$id]['user'][$connection->user['id']]->user['online'] = '-1';
    if ($Room[$id]['xx']['zt'] < 2) {
        $connection3->user['zt'] == 0;
        $Room[$id]['user'][$connection->user['id']]->user['zt'] = 0;
    }
    if ($Room[$id]['xx']['js'] == 0 || $Room[$id]['start'][$connection->user['id']] != 1) {
        //把位置让出来
        $Room[$id]['index'][] = $connection->user['index']; 
        //删除玩家列表
        unset($Room[$id]['user'][$connection->user['id']]); 
        $Room[$id]['index'] = array_flip(array_flip($Room[$id]['index']));
        sort($Room[$id]['index']);
    }
    $zbsl = 0;
    if ($Room[$id]['xx']['js'] == 0 || $Room[$id]['start'][$connection->user['id']] != 1) {
        foreach ($Room[$id]['user'] as $connection3) {
            $userlist[$connection3->user['id']] = 1;
        }
        unset($userlist[$connection->user['id']]);
        $save['user'] = json_encode($userlist);
        $db->update('jz_room', $save, 'id=' . $id);
    }
    
    foreach ($Room[$id]['user'] as $connection3) {
        if ($connection3->user['zt'] == '1') {
            $zbsl = $zbsl + 1;
        }
        // 如果当前user是其他玩家，并且非离线状态
        if ($connection->user['id'] != $connection3->user['id'] && $connection3->user['online'] != '-1') {
            $msg = $connection->user['id'];
            // 如果玩家没参与游戏
            if ($Room[$id]['xx']['js'] == 0 || $Room[$id]['start'][$connection->user['id']] != 1) {                
                act('removeuser2', $msg, $connection3);
            }
            // 如果玩家参与过游戏
            else {
                act('removeuser', $msg, $connection3);
            }
        }
    }

    // 广播给观战玩家
    foreach ($Room[$id]['alluser'] as $key => $connectionGZ) {
        // 如果没参与了
        if (!$Room[$id]['user'][$key]) {
            // 如果玩家没参与游戏
            if ($Room[$id]['xx']['js'] == 0 || $Room[$id]['start'][$connection->user['id']] != 1) {                
                act('removeuser2', $msg, $connectionGZ);
            }
            // 如果玩家参与过游戏
            else {
                act('removeuser', $msg, $connectionGZ);
            }
        }
    }    



    $online = 0;
    foreach ($Room[$id]['user'] as $connection3) {
        if ($connection3->user['online'] == '1') {
            $online = $online + 1;
        }
    }
    echo $zbsl;
    echo $Room[$id]['xx']['zt'];
    if ($Room[$id]['xx']['zt'] == 1 && $zbsl < 2) {
        $Room[$id]['xx']['zt'] = 0;
        cleardjs($Room[$id]['djs'], $id);
        $Room[$id]['time1'] = 0;
    }
    if ($Room[$id]['xx']['zt'] == 1 && $zbsl == $online) {
        if ($Room[$id]['xx']['js'] != 0 && $Room[$id]['start'][$connection->user['id']] == 1) {
            $Room[$id]['user'][$connection->user['id']]->user['zt'] = 0;
        }
        $data = array();
        $data['act'] = 'startroom';
        $data['room'] = $id;
        $data['time'] = $Room[$id]['timexx'];
        reqact($data, '');
    }
    if ($Room[$id]['xx']['js'] != 0 && $Room[$id]['start'][$connection->user['id']] == 1) {
        if ($Room[$id]['xx']['zt'] == 0) {
            $Room[$id]['user'][$connection->user['id']]->user['zt'] = 0;
        }
    }
    if ($online == 0 && $Room[$id]['xx']['zt'] == 0) {
        $time_interval = 600;
        $Room[$id]['xx']['zt'] = '-1';
        $Room[$id]['time10'] = time() + $time_interval;
        $Room[$id]['timexx'] = time();
        djs($time_interval, 'overroom', $id, $Room[$id]['timexx']);
    }
}
