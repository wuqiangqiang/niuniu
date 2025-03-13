<?php
use Workerman\Worker;
use Workerman\Lib\Timer;
require_once __DIR__ . '/php54n/workerman/Autoloader.php';
error_reporting(E_ALL & ~E_NOTICE);
ini_set('date.timezone', 'Asia/Shanghai');
//包含数据库操作类文件
include './php54n/mysql.class.php';
include './php54n/config.php';
$db = new Mysql($host, $username, $password, $dbname);
$bonussql = $db->getOne("select * from jz_options where option_name='bonus'");
$bonus = json_decode($bonussql['option_value'], true);
$extractsql = $db->getOne("select * from jz_options where option_name='extract'");
$extract = json_decode($extractsql['option_value'], true);
$Room = array();
$Room['id'] = 0;
$Room['xx'] = array();
$Room['user'] = array();
ouput("读取配置");
$worker = new Worker('websocket://0.0.0.0:' . $serverdk);
$worker->onWorkerStart = function ($worker) {
    global $db;
    ouput('程序开始运行');
    $serverlsit = $db->getAll("select * from jz_server ");
    $command = '';
    foreach ($serverlsit as $key => $value) {
        $map = array();
        $map['zt'] = 0;
        $map['num'] = 0;
        $db->update('jz_server', $map, "id=" . $value['id']);
        $id = mb_convert_encoding($value['id'], "UTF-8", "UTF-8");
        $title = mb_convert_encoding($value['title'], "UTF-8", "UTF-8");
        if ($value['type'] != '0') {
            $command.= 'php ' . ' ./php54n/game' . $value['type'] . '.php start -d ' . $id . ' ' . $value['dk'] . ' ' . $title . "\n";
        } else {
            $command.= 'php ' . ' ./php54n/test.php start -d ' . $id . ' ' . $value['dk'] . ' ' . $title . "\n";
        }
    }
    file_put_contents('./run.sh', $command);
    file_put_contents('./stop.sh', str_replace('start', 'stop', $command));
    $cjqlsit = $db->getAll("select * from jz_cjq ");
    foreach ($cjqlsit as $key => $value) {
        $map = array();
        $map['token'] = 0;
        $db->update('jz_cjq', $map, "id=" . $value['id']);
        $title = mb_convert_encoding($value['name'] . $value['id'], "GB2312", "UTF-8");
    }
};
$worker->onConnect = function ($connection) {
    ouput("新的链接ip为 " . $connection->getRemoteIp());
};
$worker->onMessage = function ($connection, $data) {
    global $db;
    global $bonus;
    global $extract;
    $data2 = json_decode($data, true);
    if ($data2['timeout']) {
        if ($data2['timeout'] - time() > 0) {
            $timer_id = Timer::add($data2['timeout'] - time(), function () use(&$timer_id, &$connection, &$data) {
                $connection->send($data);
                Timer::del($timer_id);
            });
        } else {
            $connection->send($data);
        }
        if ($timer_id) {
            $dataxx = array();
            $dataxx['act'] = 'djs';
            $dataxx['id'] = $timer_id;
            $dataxx['room'] = $data2['room'];
            $connection->send(json_encode($dataxx));
        }
    } elseif ($data2['overtime'] == 1) {
        Timer::del($data2['id']);
    } else {
        reqact($data2, $connection);
    }
};
$worker->onClose = function ($connection) {
    global $db;
    if ($connection->task) {
        $server = $db->getOne("select * from jz_server where id='" . $connection->task . "'");
        $map['zt'] = 0;
        $map['num'] = 0;
        ouput($server['title'] . '-' . $server['id'] . '断开到服务器的链接');
        $db->update('jz_server', $map, "id=" . $connection->task);
        httz($server['title'] . '-' . $server['id'] . "断开到服务器的链接");
    }
    if ($connection->cjq) {
        $cjq = $db->getOne("select * from jz_cjq where id='" . $connection->cjq . "'");
        $map = array();
        $map['token'] = 0;
        ouput($cjq['name'] . '断开到服务器的链接');
        $db->update('jz_cjq', $map, "id=" . $connection->cjq);
    }
};
// 运行worker
Worker::runAll();
function tzsql($connection) {
    global $host;
    global $username;
    global $password;
    global $dbname;
    global $charset;
    global $url;
    $hostxx['hostname'] = $host;
    $hostxx['username'] = $username;
    $hostxx['password'] = $password;
    $hostxx['dbname'] = $dbname;
    $hostxx['charset'] = $charset;
    $data['act'] = 'start';
    $data['host'] = $hostxx;
    $data['url'] = $url;
    $connection->send(json_encode($data));
}
function httz($msg) {
    global $worker;
    foreach ($worker->connections as $connection) {
        if ($connection->sfxt) {
            act('success', $msg, $connection);
        }
    }
}
function reqact($data2, $connection) {
    global $db;
    global $bonus;
    global $extract;
    if ($connection->sfxt == 1) {
        $tpl = file_get_contents("./php54n/sys/sact/" . $data2['act'] . ".php");
    } elseif ($connection->task) {
        $tpl = file_get_contents("./php54n/sys/task/" . $data2['act'] . ".php");
    } else {
        $tpl = file_get_contents("./php54n/sys/act/" . $data2['act'] . ".php");
    }
    $tpl = str_replace("<?php", "", $tpl);
    $tpl = str_replace("?>", "", $tpl);
    eval($tpl);
}
function ouput($str) {
    $zmm = mb_convert_encoding($str, "UTF-8", "UTF-8");
    echo $zmm . "\r\n";
}
function error($msg, $connection) {
    $data['msg'] = $msg;
    $data['act'] = 'error';
    $connection->send(json_encode($data));
    return false;
}
function act($act, $sj, $connection) {
    $data['msg'] = $sj;
    $data['act'] = $act;
    $connection->send(json_encode($data));
    return false;
}
function https_post($url, $data = '') {
    $data = is_array($data) ? json_encode($data) : $data;
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
    curl_setopt($ch, CURLOPT_TIMEOUT, 20);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json; charset=utf-8'));
    ob_start();
    curl_exec($ch);
    if (curl_errno($ch)) {
        return curl_error($ch);
    }
    $return_content = ob_get_contents();
    ob_end_clean();
    curl_close($ch);
    return $return_content;
}
