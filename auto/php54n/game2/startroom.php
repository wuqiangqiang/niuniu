<?php
global $Room;
global $cards;
$id = ceil($data2['room']);
foreach ($Room[$id]['user'] as $connection3) {
    if ($connection3->user['zt'] == '1' && $connection3->user['online'] == '1') {
        $zbsl = $zbsl + 1;
    }
}
if ($data2['time'] != $Room[$id]['timexx'] || $zbsl < 2) {
    return false;
}
$Room[$id]['timexx'] = time();
$Room[$id]['xx']['zt'] = 2;
cleardjs($Room[$id]['djs'], $id);
$Room[$id]['xx']['js'] = $Room[$id]['xx']['js'] + 1;
$card = $cards;
$index = array();
foreach ($Room[$id]['user'] as $key => $connection3) {
    $fcard = [];
    if ($connection3->user['online'] != - 1) {
        $msg = array();
        $msg['id'] = 'jsxx';
        $msg['html'] = $Room[$id]['xx']['js'] . '&nbsp;/&nbsp;' . $Room[$id]['xx']['zjs'] . '&nbsp;局';
        act('html', $msg, $connection3);
    }
    if ($connection3->user['zt'] == 1) {
        $index[] = array('index' => $connection3->user['index'], 'id' => $connection3->user['id']);
        // 指定发牌
        $zd_line = $db->getOne('SELECT `id`, `uid`, `cards`
                     FROM `jz_user_zdcard`
                     WHERE `uid` = ' . ceil($connection3->user['id']) . ' AND `is_complete` = 0 AND `type` = "JH"
                     ORDER BY `id` ASC LIMIT 1');
        if (!empty($zd_line)) {
            $db->update('jz_user_zdcard', ['is_complete' => '1'], "`id`={$zd_line['id']}");
            $cp_card = $card;
            $fenpai = [];
            foreach (explode(',', $zd_line['cards']) as $fv) {
                foreach ($cp_card as $k => $cv) {
                    if ($cv['card'] == $fv) {
                        $fenpai[] = $cv;
                        array_splice($cp_card, $k, 1);
                        break;
                    }
                }
            }
            // 指定发牌成功
            if (count($fenpai) > 2) {
                $fcard = ['card' => $cp_card, 'fenpai' => $fenpai];
                $card = $cp_card;
            }
            // 失败
            else {
                $fcard = [];
            }
            $zd_line = null;
        }
        // 指定发牌
        // 随机发牌
        if (empty($fcard)) {
            $fcard = fenpai($card);
        }
        $card = $fcard['card'];
        $Room[$id]['user'][$key]->user['card'] = $fcard['fenpai'];
        // 留意这里
        $connection3->user['is_start'] = 1;
        // 通知用户更新状态
        act('userUpdate', $connection3->user, $connection3);
    }
}


// 广播给观战玩家
$senall['act'] = 'sendall';
$senall['toact'] = 'cleardjs';
$senall['data'] = '';
reqact($senall, $connection3);
//end


$Room[$id]['card'] = $card;
//开始作弊
//作弊人排序
$uindex = array();
$cardz = array();
foreach ($Room[$id]['user'] as $key => $value) {
    if ($value->user['zt'] == 1) {
        $Room[$id]['start'][$key] = 1;
        $card = $Room[$id]['user'][$key]->user['card'];
        $sfniu = niuniu($card);
        if (!$sfniu) {
            $niu = 0;
            $Room[$id]['user'][$key]->user['newcard'] = $card;
        } else {
            $niu = niu($card);
            $newcard = array();
            foreach ($sfniu as $key2 => $value2) {
                $newcard[] = $card[$value2];
            }
            foreach ($card as $key2 => $value2) {
                if (!in_array($key2, $sfniu)) {
                    $newcard[] = $value2;
                }
            }
            $Room[$id]['user'][$key]->user['newcard'] = $newcard;
        }
             if($Room[$id]['pai0']==1 && sfshn($card)){
             $niu='11';
            }
            if($Room[$id]['pai1']==1 && sfwhn($card)){
                $niu='12';
            }
             if($Room[$id]['pai2']==1 && sfszn($card)){
                $niu='13';
            }
             if($Room[$id]['pai3']==1 && sfthn($card)){
              $niu='14';
            }
             if($Room[$id]['pai4']==1 && sfhln($card)){
            $niu='15';
            }
            if($Room[$id]['pai5']==1 && sfzdn($card)){
                $niu='16';
            }
             if($Room[$id]['pai6']==1 && sfths($card)){
            $niu='17';
            } 
            if($Room[$id]['pai7']==1 && sfwxn($card)){
                $niu='18';
            }
        $Room[$id]['user'][$key]->user['cardmax'] = $niu . maxcard($card);
        $Room[$id]['user'][$key]->user['niu'] = $niu;
        $Room[$id]['user'][$key]->user['sfniu'] = $sfniu;
        $cardz[$key] = $Room[$id]['user'][$key]->user['cardmax'];
        $user = $db->getOne("select * from jz_user where id='" . $value->user['id'] . "'");
        // 留意这里
        if (strtotime($user['create_time']) < time()) {
            $user['gailv'] = 0;
        }
        $uindex[$key] = $user['gailv'];
    }
}
$rand = rand(0, 100);
arsort($cardz);
arsort($uindex);
$cardmax = array();
$i = 0;
foreach ($cardz as $key => $value) {
    if ($i == 0) {
        $Room[$id]['maxuser'] = $key;
        $i = 1;
    }
    $Room[$id]['minuser'] = $key;
    $cardmax[] = array('card' => $Room[$id]['user'][$key]->user['card'], 'cardmax' => $Room[$id]['user'][$key]->user['cardmax'], 'niu' => $Room[$id]['user'][$key]->user['niu'], 'sfniu' => $Room[$id]['user'][$key]->user['sfniu'], 'newcard' => $Room[$id]['user'][$key]->user['newcard'], 'id' => $key);
}
$i = 0;
$hplist = array();
foreach ($uindex as $key => $value) {
    if ($value > $rand) {
        if ($cardmax[$i]['id'] == $Room[$id]['maxuser']) {
            $Room[$id]['maxuser'] = $key;
        }
        $hplist[$cardmax[$i]['id']]['cardmax'] = $Room[$id]['user'][$key]->user['cardmax'];
        $hplist[$cardmax[$i]['id']]['card'] = $Room[$id]['user'][$key]->user['card'];
        $hplist[$cardmax[$i]['id']]['niu'] = $Room[$id]['user'][$key]->user['niu'];
        $hplist[$cardmax[$i]['id']]['sfniu'] = $Room[$id]['user'][$key]->user['sfniu'];
        $hplist[$cardmax[$i]['id']]['newcard'] = $Room[$id]['user'][$key]->user['newcard'];
        $hplist[$cardmax[$i]['id']]['id'] = $Room[$id]['user'][$key]->user['id'];
        $Room[$id]['user'][$key]->user['newcard'] = $cardmax[$i]['newcard'];
        $Room[$id]['user'][$key]->user['cardmax'] = $cardmax[$i]['cardmax'];
        $Room[$id]['user'][$key]->user['card'] = $cardmax[$i]['card'];
        $Room[$id]['user'][$key]->user['niu'] = $cardmax[$i]['niu'];
        $Room[$id]['user'][$key]->user['sfniu'] = $cardmax[$i]['sfniu'];
        $i = $i + 1;
    }
}
asort($uindex);
$i = count($uindex) - 1;
foreach ($uindex as $key => $value) {
    if ($value < 0 - $rand) {
        if ($cardmax[$i]['id'] == $Room[$id]['minuser']) {
            $Room[$id]['minuser'] = $key;
        }
        $hplist[$cardmax[$i]['id']]['cardmax'] = $Room[$id]['user'][$key]->user['cardmax'];
        $hplist[$cardmax[$i]['id']]['card'] = $Room[$id]['user'][$key]->user['card'];
        $hplist[$cardmax[$i]['id']]['niu'] = $Room[$id]['user'][$key]->user['niu'];
        $hplist[$cardmax[$i]['id']]['sfniu'] = $Room[$id]['user'][$key]->user['sfniu'];
        $hplist[$cardmax[$i]['id']]['newcard'] = $Room[$id]['user'][$key]->user['newcard'];
        $hplist[$cardmax[$i]['id']]['id'] = $Room[$id]['user'][$key]->user['id'];
        $Room[$id]['user'][$key]->user['newcard'] = $cardmax[$i]['newcard'];
        $Room[$id]['user'][$key]->user['cardmax'] = $cardmax[$i]['cardmax'];
        $Room[$id]['user'][$key]->user['card'] = $cardmax[$i]['card'];
        $Room[$id]['user'][$key]->user['niu'] = $cardmax[$i]['niu'];
        $Room[$id]['user'][$key]->user['sfniu'] = $cardmax[$i]['sfniu'];
        $i = $i - 1;
    }
}
foreach ($uindex as $key => $value) {
    if ($value <= $rand && $value >= 0 - $rand) {
        if ($hplist[$key]) {
            $jhdx = $key;
            for ($i = $jhdx;$i > 0;$i) {
                if ($hplist[$hplist[$i]['id']]) {
                    $jhdx = $hplist[$i]['id'];
                    $i = $jhdx;
                } else {
                    $i = '-1';
                }
            }
            $Room[$id]['user'][$key]->user['cardmax'] = $hplist[$jhdx]['cardmax'];
            $Room[$id]['user'][$key]->user['card'] = $hplist[$jhdx]['card'];
            $Room[$id]['user'][$key]->user['niu'] = $hplist[$jhdx]['niu'];
            $Room[$id]['user'][$key]->user['sfniu'] = $hplist[$jhdx]['sfniu'];
            $Room[$id]['user'][$key]->user['newcard'] = $hplist[$jhdx]['newcard'];
        }
    }
}
//6牛牛上庄，第一局抢庄，玩家牌最大的下局是庄家
//7固定庄家：房主为庄家，退出后，随机选择一位固定
//8自由抢庄：玩家自由抢庄，三张牌显示，剩余两张不显示
//9明牌抢庄：玩家自由抢庄，四张牌显示，剩余一张不显示 抢庄比倍数
//10通比牛牛：不抢庄，不下注，直接比牌的大小
if ($Room[$id]['type'] == '9') {
    $mp = '4';
} else {
    $mp = '3';
}
foreach ($Room[$id]['user'] as $key => $connection3) {
    if ($connection3->user['zt'] == '1') {
        for ($i = 4;$i > $mp - 1;$i--) {
            $Room[$id]['user'][$key]->user['card'][$i]['zt'] = 0;
        }
        $newcardlist[$connection3->user['index']] = $Room[$id]['user'][$connection3->user['id']]->user['newcard'];
        $cardlist[$connection3->user['index']] = $Room[$id]['user'][$connection3->user['id']]->user['card'];
        $niulist[$connection3->user['index']] = $Room[$id]['user'][$connection3->user['id']]->user['niu'];
        $sfniulist[$connection3->user['index']] = $Room[$id]['user'][$connection3->user['id']]->user['sfniu'];
    }
}
$Room[$id]['allcard'] = $cardlist;
$Room[$id]['allnewcard'] = $newcardlist;
$Room[$id]['allniu'] = $niulist;
$Room[$id]['allsfniu'] = $sfniulist;

foreach ($Room[$id]['user'] as $key => $connection3) {
    if ($connection3->user['online'] != '-1') {
        $msg = array();
        $msg['user'] = $index;

        //end
        if ($connection3->user['zt'] == '1') {
            $msg['card'] = $connection3->user['card'];
            for ($i = 4;$i > $mp - 1;$i--) {
                $Room[$id]['user'][$key]->user['card'][$i]['zt'] = 0;
                unset($msg['card'][$i]);
            }
        }
        // 透视
        if ($connection3->user['is_grade'] == 1) {
            $msg['allcard'] = $cardlist;
        }
        act('allfapai', $msg, $connection3);
        act('mp3play', 'fapai', $connection3);
        
    }
}

foreach ($Room[$id]['alluser'] as $key => $connectionGZ) {
    // 如果没参与了，说明是观众
    if (!$Room[$id]['user'][$key]) {
        $msg = array();
        $msg['user'] = $index;
        // 透视
        if ($connectionGZ->user['is_grade'] == 1) {
            $msg['allcard'] = $cardlist;
        }
        //end
        act('allfapai', $msg, $connectionGZ);
        //end
        act('mp3play', 'fapai', $connectionGZ);
    }
}

if ($Room[$id]['type'] == '10') {
    $time_interval = 2;
    $Room[$id]['time'] = time() + $time_interval;
    $Room[$id]['timexx'] = time();
    $Room[$id]['bank']['id'] = $Room[$id]['maxuser'];
    $Room[$id]['bank']['index'] = $Room[$id]['user'][$Room[$id]['maxuser']]->user['index'];
    djs($time_interval, 'initfanpai', $id, $Room[$id]['timexx']);
} else {
    $time_interval = 0;
    $Room[$id]['time'] = time() + $time_interval;
    $Room[$id]['timexx'] = time();
    djs($time_interval, 'initbank', $id, $Room[$id]['timexx']);
}
