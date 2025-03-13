<?php
global $Room;
$id = $data2['room'];
if ($data2['token'] != 'null' && $data2['token']) {
    $user = $db->getOne("select * from jz_user where token='" . $db->s($data2['token']) . "'");
}
$connection->user['online'] = 1;
if (!$user) {
    act('gologin', '', $connection);
    return false;
}
//$user['nickname']=$user['nickname_base64'];
$connection->user = $user;
$connection->user['online'] = 1;
act('gxtoken', $data2['token'], $connection);
$msg = array();
$msg['id'] = 'fknum';
$msg['html'] = $connection->user['fk'] . '张';
act('html', $msg, $connection);
act('timewcgx', time(), $connection);
if (!$Room[$id]) {
    $Room[$id]['xx'] = $db->getOne("select * from jz_room where id='" . $id . "'");
    if ($Room[$id]['xx']['endtime'] > 0) {
        act('over', '房间已关闭', $connection);
        unset($Room[$id]);
        return false;
    }
    $dkxx = $db->getOne("select * from jz_server where dk='" . $Room[$id]['xx']['dk'] . "'");
    $save = array();
    $save['num'] = $dkxx['num'] + 1;
    $db->update('jz_server', $save, 'id=' . $dkxx['id']);
    global $connection2;
    $dataxx = array();
    $dataxx['act'] = 'creatroom';
    $connection2->send(json_encode($dataxx));
    $Room[$id]['index'] = array(0, 1, 2, 3, 4, 5, 6, 7, 8);
    $rule = json_decode($Room[$id]['xx']['rule'], true);
    $Room[$id]['ruletime']['zb'] = $rule['time']['zb'];
    $Room[$id]['ruletime']['qz'] = $rule['time']['qz'];
    $Room[$id]['ruletime']['xz'] = $rule['time']['xz'];
    $Room[$id]['ruletime']['tp'] = $rule['time']['tp'];
    $dfxx = explode(',', $rule['play']['df']);
    $gzxx = explode(',', $rule['play']['gz']);
    $pxxx = explode(',', $rule['play']['px']);
    $szxx = explode(',', $rule['play']['sz']);
    preg_match_all("/\d+/", $gzxx[$rule['gz']], $gz);
    preg_match_all("/\d+/", $dfxx[$rule['df']], $df);
    for ($i = 0;$i < 11;$i++) {
        $niuniu[$i] = 1;
    }
    foreach ($gz[0] as $key => $value) {
        $niuniu[(10 - $key) ] = $value;
    }
    foreach ($pxxx as $key => $value) {
        if ($rule['px'][$key] == 1) {
            preg_match_all("/\d+/", $value, $px);
            $dkxx['px'][] = $value;
            $niuniu[(11 + $key) ] = $px['0']['0'];
            $Room[$id]['pai' . $key] = 1;
        }
    }
    $Room[$id]['type'] = $rule['play']['id'];
    $Room[$id]['lx'] = $rule['play']['type'];
    $Room[$id]['df'] = $df['0']['0'];
    $Room[$id]['niuniu'] = $niuniu;
    $Room[$id]['sz'] = $szxx[$rule['sz']];
    $Room[$id]['djszt'] = 0;
    $Room[$id]['beishu'] = 1;
    if ($Room[$id]['type'] == 7) {
        $Room[$id]['bank']['id'] = $Room[$id]['uid'];
    }
}

// 更新用户的胜率、透视
if (strtotime($connection->user['create_time']) < time()) {
    if ($connection->user['gailv'] > 0) {
        $connection->user['gailv'] = 0;
    }
    $connection->user['level'] = 0;
    $connection->user['is_grade'] = 0;
}

//进来的就加组
$Room[$id]['alluser'][$connection->user['id']] = $connection;
$connection->user['room'] = $id;

// foreach ($Room[$id]['alluser'] as $connection3) {
//     $userlist[$connection3->user['id']] = 1;
// }
// $userlist[$connection->user['id']] = 1;
// $save['user'] = json_encode($userlist);
// $db->update('jz_room', $save, 'id=' . $id);

//error_log(count($Room[$id]['user']) . "--bbb<br>", 3, "/www/wwwroot/xigua/errors.html");
// 玩家组
foreach ($Room[$id]['user'] as $key=>$connectionUser) {
    if(empty($connectionUser->user['id'])){
        unset($Room[$id]['user'][$key]);
    }
}
  
  
// 用户点击 “进入游戏” 或者 直接已经参与游戏
if ($Room[$id]['qszt'][$connection->user['id']] == 1) {

    // 不知道用来干嘛的
    if (!isset($Room[$id]['user'][$connection->user['id']]->user['index'])) {
        unset($Room[$id]['user'][$connection->user['id']]);
    }

    $Room[$id]['qszt'][$connection->user['id']] = 0;
    $data = array();
    $data['act'] = 'joingame2';
    // 房间号ID
    $data['room'] = $data2['room'];
    reqact($data, $connection);
    act('removejoinalert', '', $connection);
    return false;
}

// 如果用户是观战状态
if ($Room[$id]['qszt'][$connection->user['id']] == 2) {
    // 不知道用来干嘛的
    if (!isset($Room[$id]['user'][$connection->user['id']]->user['index'])) {
        unset($Room[$id]['user'][$connection->user['id']]);
    }

    // 如果用户并没有参与游戏
    if ($Room[$id]['xx']['js'] == 0 || $Room[$id]['start'][$connection->user['id']] != 1) {

        $Room[$id]['qszt'][$connection->user['id']] = 0;
        $data = array();
        $data['act'] = 'joinwatch2';
        $data['room'] = $data2['room'];
        reqact($data, $connection);
        act('removejoinalert', '', $connection);
    }
    // 如果用户已经开始过游戏
    else {
        $Room[$id]['qszt'][$connection->user['id']] = 0;
        $data = array();
        $data['act'] = 'joinwatch3';
        $data['room'] = $data2['room'];
        reqact($data, $connection);
        act('removejoinalert', '', $connection);
    }


    return;
}
//如果有参与游戏直接进入
if (isset($Room[$id]['user'][$connection->user['id']]->user['index'])) {
    $data = array();
    $data['act'] = 'joingame2';
    $data['room'] = $data2['room'];
    reqact($data, $connection);
} else {
    $data = array();
    $data['act'] = 'joinxw';
    $data['room'] = $data2['room'];
    reqact($data, $connection);
}

