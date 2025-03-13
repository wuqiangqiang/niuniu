<?php
global $Room;
$id = ceil($data2['room']);
cleardjs($Room[$id]['djs'], $id);
$Room[$id]['time10'] = 0;
$jflist = array();
if ($Room[$id]['xx']['js'] > 0) {
    foreach ($Room[$id]['user'] as $connection3) {
        $jflist[$connection3->user['id']] = $connection3->user['dqjf'];
        $add = array();
        $add['uid'] = $connection3->user['id'];
        $add['room'] = $id;
        $add['overtime'] = time();
        $add['jifen'] = $connection3->user['dqjf'];
        $add['type'] = $Room[$id]['lx'];
        $db->insert('jz_user_room', $add);
    }
} else {
    $userxx = $db->getOne("select * from jz_user where id='" . $Room[$id]['xx']['uid'] . "'");
    $save = array();
    $save['fk'] = $Room[$id]['xx']['fk'] + $userxx['fk'];
    $db->update('jz_room', $save, 'id=' . $Room[$id]['xx']['uid']);
}
arsort($jflist);
$user = array();
foreach ($jflist as $key => $value) {
    $user[] = $Room[$id]['user'][$key]->user;
}
foreach ($user as $key => $value) {
    unset($user[$key]['nickname']);
}
$save = array();
$save['js'] = $Room[$id]['xx']['js'];
$save['overxx'] = json_encode($user, JSON_UNESCAPED_UNICODE);
$save['endtime'] = time();
$db->update('jz_room', $save, 'id=' . $id);
$dkxx = $db->getOne("select * from jz_server where dk='" . $Room[$id]['xx']['dk'] . "'");
$save = array();
$save['num'] = $dkxx['num'] - 1;
$db->update('jz_server', $save, 'id=' . $dkxx['id']);
global $connection2;
$dataxx = array();
$dataxx['act'] = 'endroom';
$connection2->send(json_encode($dataxx));
unset($Room[$id]);
