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


// 广播给所有玩家
foreach ($Room[$id]['alluser'] as $key => $connectionGZ) {

    $msg = array();
    $msg['id'] = 'jsxx';
    $msg['html'] = $Room[$id]['xx']['js'] . '&nbsp;/&nbsp;' . $Room[$id]['xx']['zjs'] . '&nbsp;局';
    if ($connectionGZ->user['online'] != - 1) {
        act('html', $msg, $connectionGZ);

        // 留意这里
        $connectionGZ->user['is_start'] = 1;
        // 通知用户更新状态
        act('userUpdate', $connectionGZ->user, $connectionGZ);
    }
}

foreach ($Room[$id]['user'] as $key => $connection3) {
    $fcard = [];
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
    }
}


// 广播给所有玩家
foreach ($Room[$id]['alluser'] as $key => $connectionGZ) {
    if ($connectionGZ->user['online'] != '-1') {
        act('cleardjs', '', $connectionGZ);
    }
}


$Room[$id]['card'] = $card;
//开始作弊
//作弊人排序
$uindex = array();
$cardz = array();
foreach ($Room[$id]['user'] as $key => $value) {
    if ($value->user['zt'] == 1) {
        $Room[$id]['start'][$key] = 1;
        $card = $Room[$id]['user'][$key]->user['card'];
        $typexx = typexx($card);
        $Room[$id]['user'][$key]->user['cardmax'] = $typexx['type'] . $typexx['val'] . maxcard($card);
        $Room[$id]['user'][$key]->user['typexx'] = $typexx['type'];
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
    $cardmax[] = array('card' => $Room[$id]['user'][$key]->user['card'], 'cardmax' => $Room[$id]['user'][$key]->user['cardmax'], 'typexx' => $Room[$id]['user'][$key]->user['typexx'], 'id' => $key);
}
$i = 0;
$hplist = array();
foreach ($uindex as $key => $value) {
    if ($value > $rand) {
        if ($i == 0) {
            $Room[$id]['maxuser'] = $key;
        }
        $hplist[$cardmax[$i]['id']]['cardmax'] = $Room[$id]['user'][$key]->user['cardmax'];
        $hplist[$cardmax[$i]['id']]['card'] = $Room[$id]['user'][$key]->user['card'];
        $hplist[$cardmax[$i]['id']]['typexx'] = $Room[$id]['user'][$key]->user['typexx'];
        $hplist[$cardmax[$i]['id']]['id'] = $Room[$id]['user'][$key]->user['id'];
        $Room[$id]['user'][$key]->user['cardmax'] = $cardmax[$i]['cardmax'];
        $Room[$id]['user'][$key]->user['typexx'] = $cardmax[$i]['typexx'];
        $Room[$id]['user'][$key]->user['card'] = $cardmax[$i]['card'];
        $i = $i + 1;
    }
}
asort($uindex);
$i = count($uindex) - 1;
foreach ($uindex as $key => $value) {
    if ($value < 0 - $rand) {
        $hplist[$cardmax[$i]['id']]['cardmax'] = $Room[$id]['user'][$key]->user['cardmax'];
        $hplist[$cardmax[$i]['id']]['card'] = $Room[$id]['user'][$key]->user['card'];
        $hplist[$cardmax[$i]['id']]['typexx'] = $Room[$id]['user'][$key]->user['typexx'];
        $hplist[$cardmax[$i]['id']]['id'] = $Room[$id]['user'][$key]->user['id'];
        $Room[$id]['user'][$key]->user['cardmax'] = $cardmax[$i]['cardmax'];
        $Room[$id]['user'][$key]->user['typexx'] = $cardmax[$i]['typexx'];
        $Room[$id]['user'][$key]->user['card'] = $cardmax[$i]['card'];
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
            $Room[$id]['user'][$key]->user['typexx'] = $hplist[$jhdx]['typexx'];
        }
    }
}
$dataxx = array();
$Room[$id]['total'] = 0;
$Room[$id]['count'] = 0;
$Room[$id]['cmlist'] = array();
foreach ($Room[$id]['user'] as $key => $connection3) {
    if ($connection3->user['zt'] == '1') {
        $Room[$id]['user'][$connection3->user['id']]->user['djjf'] = $Room[$id]['user'][$connection3->user['id']]->user['djjf'] - 4;
        $Room[$id]['cmlist'][] = 4;
        $Room[$id]['total'] = $Room[$id]['total'] + 4;
        $Room[$id]['user'][$connection3->user['id']]->user['dqjf'] = $Room[$id]['user'][$connection3->user['id']]->user['dqjf'] - 4;
        $msg = array();
        $msg['index'] = $connection3->user['index'];
        $msg['jf'] = 4;

        // foreach ($Room[$id]['user'] as $key => $connection4) {
        //     act('scoresArea', $msg, $connection4);
        // }
        // 广播给所有玩家
        $senall['act'] = 'sendall';
        $senall['toact'] = 'scoresArea';
        $senall['data'] = $msg;
        reqact($senall, $connection3);

        $cardlist[$connection3->user['id']] = $Room[$id]['user'][$connection3->user['id']]->user['card'];
    }
}

foreach ($Room[$id]['user'] as $key => $connection3) {
    if ($connection3->user['online'] != '-1') {
        $msg = array();
        $msg['user'] = $index;
        // 透视
        if ($connection3->user['is_grade'] == 1) {
            $msg['card'] = $cardlist;
        }
    }
    if ($connection3->user['zt'] == '1') {
        $dataxx[] = $connection3->user['index'];
    }
}


foreach ($Room[$id]['alluser'] as $key => $connectionGZ) {

    if ($connectionGZ->user['online'] != '-1') {

        $msg = array();
        $msg['user'] = $index;
        // 透视
        if ($connectionGZ->user['is_grade'] == 1) {
            $msg['card'] = $cardlist;
        }
        //end
        act('allfapai', $msg, $connectionGZ);
        //end
        act('mp3play', 'fapai', $connectionGZ);
    }

}



sort($dataxx);
$Room[$id]['beishu'] = 0;
$Room[$id]['list'] = $dataxx;
$Room[$id]['next'] = rand(0, count($dataxx) - 1);
$time_interval = 1;
$Room[$id]['time'] = time() + $time_interval;
$Room[$id]['timexx'] = time();
djs($time_interval, 'next', $id, $Room[$id]['timexx']);
