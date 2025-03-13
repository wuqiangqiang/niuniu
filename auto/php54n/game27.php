<?php
use Workerman\Worker;
use Workerman\Lib\Timer;
use Workerman\Connection\AsyncTcpConnection;
require_once __DIR__ .'/workerman/Autoloader.php';
error_reporting(E_ALL & ~E_NOTICE);
date_default_timezone_set('PRC');//设置为中华人民共和国
//包含数据库操作类文件
include 'mysql.class.php';
include 'config.php';
$taskid=$argv[3];
$dk=$argv[4];
$db=array();
echo $dk;
$server=array();
ouput("读取配置");
$typelist=array();
$yslist=array();
$worker = new Worker('websocket://0.0.0.0:'.$dk);
$worker->uidConnections = array();
$bonus=array();
$extract=array();
$connection2=array();
$Room=array();
$Timer=new Timer();
$cards=array(
    'D6', 'A3', // 至尊宝
    'A12', 'A12', // 双天
    'A2', 'A2', // 双地
    'A8', 'A8', // 双人

    'A4', 'A4', // 双鹅
    'A10', 'A10', // 双梅
    'B6', 'B6', // 双长三
    'B4', 'B4', // 双板凳
    'A11', 'A11', // 双斧头
    'B10', 'B10', // 双红头
    'A7', 'A7', // 双高脚
    'C6', 'C6', // 双零霖

    'A9', 'B9', // 杂九
    'B8', 'C8', // 杂八
    'C7', 'D7', // 杂七
    'A5', 'C5', // 杂五
);

$worker->onWorkerStart = function($worker)
{
    ouput('程序开始运行');
    global $host;
    global $connection2;
    global  $serverdk;
    $connection2 = new AsyncTcpConnection('ws://'.$host.':'.$serverdk);
    // 当连接建立成功时，发送http请求数据
    $connection2->onConnect = function($connection2)
    {
        global $taskid;
        ouput('链接到主服务器');
        ouput('发送身份信息到主服务器');
        $data['act']='connect';
        $data['task']=$taskid;
        $connection2->send(json_encode($data));
    };
    $connection2->onMessage = function($connection2, $data)
    {
        //print_r($data);
        global $db;
        global $taskid;
        global $server;
        $data2=json_decode($data,true);
        if($data2['act']=='start'){
            $db = new Mysql($data2['host']['hostname'],$data2['host']['username'],$data2['host']['password'],$data2['host']['dbname']);
            $server=$db->getOne("select * from jz_server where id='".$taskid."'");
            // 运行worker
            start();
        }
        else{
            reqact($data2,$connection);
        }
    };
    $connection2->onClose = function($connection2)
    {
        ouput('到主服务器的链接关闭');
    };
    $connection2->onError = function($connection2, $code, $msg)
    {
        ouput('到主服务器的链接错误'.$msg);
    };
    $connection2->connect();
};
$worker->onClose = function($connection)
{
    $data2['act']='close';
    reqact($data2,$connection);
    ouput('断开链接');
};
$worker->onConnect = function($connection)
{
    global $db;
    global $title;
    ouput("新的链接ip为 " .$connection->getRemoteIp());
};
$worker->onMessage = function($connection, $data)
{
    global $db;
    global $bonus;
    global $extract;
    $data2=json_decode($data,true);
    if($connection->user['room'] && $data2['act']!='timegx'){
        //file_put_contents('./php54n/log/'.mb_convert_encoding('房间', "UTF-8","UTF-8").ceil($connection->user['room']).'.txt',date('Y-m-d H:i:s').':'.$connection->user['id'].$data.PHP_EOL,FILE_APPEND);
    }
    if($data2['room'] && $data2['act']!='timegx'){
        //file_put_contents('./php54n/log/'.mb_convert_encoding('房间', "UTF-8","UTF-8").ceil($data2['room']).'.txt',date('Y-m-d H:i:s').':'.$data.PHP_EOL,FILE_APPEND);
    }
    reqact($data2,$connection);
};
Worker::runAll();
function start(){
    global $db;
    global $title;
    global $bonus;
    global $extract;
    $bonussql=$db->getOne("select * from jz_options where option_name='bonus'");
    $bonus=json_decode($bonussql['option_value'],true);
    $extractsql=$db->getOne("select * from jz_options where option_name='extract'");
    $extract=json_decode($extractsql['option_value'],true);
    echo date("Y-m-d H:i:s",time());
}
function reqact($data2,$connection){
    global $db;
    global $bonus;
    global $extract;
    $data2['act']=preg_replace('/[^a-zA-Z0-9]/is','',$data2['act']);
    $tpl=("./php54n/game27/".$data2['act'].".php");
    @include($tpl);
}

function ouput($str){
    $zmm= mb_convert_encoding($str, "UTF-8","UTF-8");
    echo $zmm."\r\n";
}
function loginout($msg,$connection){
    $data['msg']=$msg;
    $data['act']='loginout';
    $connection->send(json_encode($data));
    return false;
}
function get_form($data){
    $str=explode('&', $data);
    $sj=array();
    foreach ($str as $key => $value) {
        $a=explode('=', $value);
        $sj[$a[0]]=urldecode($a[1]);
    }
    return $sj;
}
function base64EncodeImage ($image_file) {
    $base64_image = '';
    $image_info = getimagesize($image_file);
    $image_data = fread(fopen($image_file, 'r'), filesize($image_file));
    $base64_image = 'data:' . $image_info['mime'] . ';base64,' . chunk_split(base64_encode($image_data));

    return $base64_image;
}
function yzm($w, $h,$code){
    //创建图片，定义颜色值
    $img = imagecreatetruecolor($w, $h);
    $color = imagecolorallocate($img, mt_rand(157,255), mt_rand(157,255), mt_rand(157,255));
    imagefilledrectangle($img,0,$h,$w,0,$color);
    for ($i=0;$i<6;$i++) {
        $color = imagecolorallocate($img,mt_rand(0,156),mt_rand(0,156),mt_rand(0,156));
        imageline($img,mt_rand(0,$w),mt_rand(0,$h),mt_rand(0,$w),mt_rand(0,$h),$color);
    }

    for ($i=0;$i<100;$i++) {
        $color = imagecolorallocate($img,mt_rand(200,255),mt_rand(200,255),mt_rand(200,255));
        imagestring($img,mt_rand(1,5),mt_rand(0,$w),mt_rand(0,$h),'*',$color);
    }

    $_x = $w / 4;
    $codelist=str_split($code);
    for ($i=0;$i<count($codelist);$i++) {
        $fontcolor = imagecolorallocate($img,mt_rand(0,156),mt_rand(0,156),mt_rand(0,156));
        imagettftext($img,'20',mt_rand(-30,30),$_x*$i+mt_rand(1,5),$h / 1.4,$fontcolor,dirname(__FILE__).'/font.ttf',$codelist[$i]);
    }
    imagepng($img,"images/data.png");//输出图片
    imagedestroy($img);
    return base64EncodeImage("images/data.png");
}
function randcode($num){
    $charset = 'abcdefghkmnprstuvwxyzABCDEFGHKMNPRSTUVWXYZ23456789';
    $code='';
    $codelist=str_split($charset);
    for ($i=0;$i<$num;$i++) {
        $code .= $codelist[mt_rand(0,(count($codelist)-1))];
    }
    return $code;
}
function checkmobile($phone){
    if (!is_numeric($phone)) {
        return false;
    }
    return preg_match('#^13[\d]{9}$|^14[5,7]{1}\d{8}$|^15[^4]{1}\d{8}$|^17[0,6,7,8]{1}\d{8}$|^18[\d]{9}$#', $phone) ? true : false;
}
function sendphone($phone,$content){
    $post_data['u'] = '975124908';
    $post_data['p'] = md5('admin');
    $post_data['c'] = urlencode("【游戏中心】".$content); //短信内容需要用urlencode编码下urlencode(
    $post_data['m'] = $phone;
    $url ='http://api.smsbao.com/sms?u='.$post_data['u'].'&p='.$post_data['p'].'&m='.$post_data['m'].'&c='.$post_data['c'];
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL,$url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_HEADER, 0);
    $output = curl_exec($ch);
    curl_close($ch);
    return $output;
}
function action($act,$msg,$connection){
    $data['msg']=$msg;
    $data['act']=$act;
    $connection->send(json_encode($data));
}
function addhtml($html,$connection){
    $data['act']='addhtml';
    $msg['html']=$html;
    $msg['id']='content';
    $data['msg']=$msg;
    $connection->send(json_encode($data));
}
function act($act,$msg,$connection){
    $data['msg']=$msg;
    $data['act']=$act;
    if($connection->user['online']==1){
        $connection->send(json_encode($data));
    }
    return false;
}
function title($title,$connection){
    $data['msg']=$title;
    $data['act']='Title';
    $connection->send(json_encode($data));
    return false;
}
unset($cards[7]);
function tip($msg,$connection){
    $data['msg']=$msg;
    $data['act']='prompt';
    $connection->send(json_encode($data));
    return false;
}
function loading($url,$connection,$data=array()){
    $data=$data;
    $data['msg']=$url;
    $data['act']='loading';
    $connection->send(json_encode($data));
    return false;
}
function error($msg,$connection){
    $data['msg']=$msg;
    $data['act']='error';
    $connection->send(json_encode($data));
    return false;
}
unset($cards[5]);
function success($msg,$url='',$connection){
    $zzxx['msg']=$msg;
    $zzxx['url']=$url;
    $data['msg']=$zzxx;
    $data['act']='success';
    $connection->send(json_encode($data));
    return false;
}
function fenpai($card){
    for($i=0;$i<2;$i++){
        $index=rand(0,count($card)-1);
        $fenpai[]=$card[$index];
        array_splice($card,$index, 1);
    }
    $result['card']=$card;
    $result['fenpai']=$fenpai;
    return $result;
}
function djs($time,$act,$room,$timexx){
    global $connection2;
    $data['timeout']=time()+$time;
    $data['act']=$act;
    $data['room']=$room;
    $data['time']=$timexx;
    $connection2->send(json_encode($data));
}
function cleardjs($id,$room){
    global $connection2;
    $data['overtime']=1;
    $data['id']=$id;
    $connection2->send(json_encode($data));

    global $Room;
    foreach ($Room[$room]['user'] as $connection3) {
        if($connection3->user['online']!='-1'){
            act('cleardjs','',$connection3);
        }
    }
}
// 计算牌型
function cardType($card) {
    $point1 = ceil(substr($card[0], 1));
    $point2 = ceil(substr($card[1], 1));

    if(($card[0] == 'D6' && $card[1] == 'A3') || ($card[1] == 'D6' && $card[0] == 'A3')) return 32;// 至尊宝
    if($card[0] == 'A12' && $card[1] == 'A12') return 31;// 双天
    if($card[0] == 'A2' && $card[1] == 'A2') return 30;// 双地
    if($card[0] == 'A8' && $card[1] == 'A8') return 29;// 双人

    if($card[0] == 'A4' && $card[1] == 'A4') return 28;// 双鹅
    if($card[0] == 'A10' && $card[1] == 'A10') return 27;// 双梅
    if($card[0] == 'B6' && $card[1] == 'B6') return 26;// 双长三
    if($card[0] == 'B4' && $card[1] == 'B4') return 25;// 双板凳
    if($card[0] == 'A11' && $card[1] == 'A11') return 24;// 双斧头
    if($card[0] == 'B10' && $card[1] == 'B10') return 23;// 双红头
    if($card[0] == 'A7' && $card[1] == 'A7') return 22;// 双高脚
    if($card[0] == 'C6' && $card[1] == 'C6') return 21;// 双零霖

    if(($card[0] == 'A9' && $card[1] == 'B9') || ($card[1] == 'A9' && $card[0] == 'B9')) return 20;// 杂九
    if(($card[0] == 'B8' && $card[1] == 'C8') || ($card[1] == 'B8' && $card[0] == 'C8')) return 19;// 杂八
    if(($card[0] == 'C7' && $card[1] == 'D7') || ($card[1] == 'C7' && $card[0] == 'D7')) return 18;// 杂七
    if(($card[0] == 'A5' && $card[1] == 'C5') || ($card[1] == 'A5' && $card[0] == 'C5')) return 17;// 杂五

    // 天王(天牌配任何一种9点牌)
    if(in_array('A12', $card) && ($point1 == 9 || $point2 == 9)) return 16;
    // 地王(地牌配任何一种9点牌)
    if(in_array('A2', $card) && ($point1 == 9 || $point2 == 9)) return 15;
    // 天红(天牌配任何一种8点牌)
    if(in_array('A12', $card) && ($point1 == 8 || $point2 == 8)) return 14;
    // 地红(地牌配任何一种8点牌)
    if(in_array('A2', $card) && ($point1 == 8 || $point2 == 8)) return 13;
    // 天高九(天牌配杂七中的二五牌)
    if(in_array('A12', $card) && (in_array('C7', $card) || in_array('D7', $card) )) return 12;
    // 地高九(地牌配高脚七牌)
    if(in_array('A2', $card) && in_array('A7', $card)) return 11;

    // 都不满足的情况下，取余10得出点数
    return (($point1+$point2)%10)+1;
}
function maxCardValue($card) {
    $maps = [
        'A3' => '01',
        'D6' => '02',

        'A5' => '03',
        'C5' => '03',

        'D7' => '04',

        'B8' => '05',
        'C8' => '05',

        'A9' => '06',
        'B9' => '06',

        'C6' => '07',

        'A7' => '08',

        'B10' => '09',

        'A11' => '10',

        'B4' => '11',

        'B6' => '12',

        'A10' => '13',

        'A4' => '14',

        'A8' => '15',

        'A2' => '16',

        'A12' => '17'
    ];

    $val1 = $maps[$card[0]];
    $val2 = $maps[$card[1]];

    return ($val1 > $val2) ? $val1 : $val2;
}
function niuniu($card){
    for($i=0;$i<5;$i++){
        for($j=$i+1;$j<5;$j++){
            for($m=$j+1;$m<5;$m++){
                if(($card[$i]['val']+$card[$j]['val']+$card[$m]['val'])%10==0){
                    return explode(',',$i.','.$j.','.$m);
                }
            }
        }
    }
    return 0;
}

function maxcard($card){
    $max=0;
    foreach ($card as $key => $value) {
        if($value['dx']>$max){
            $max=$value['dx'];
        }
    }
    if($max<10){
        $max='0'.$max;
    }
    return $max;
}
function niu($card){
    $niu=($card['0']['val']+$card['1']['val']+$card['2']['val']+$card['3']['val']+$card['4']['val'])%10;
    if($niu==0){
        $niu='10';
    }
    return $niu;
}
function sfwhn($card){
    $zt=1;
    foreach ($card as $key => $value) {
        if($value['pai']<11){
            $zt=0;
        }
    }
    return $zt;
}
function sfzdn($card){
    $zt=0;
    $paixx=array();
    foreach ($card as $key => $value) {
        $paixx[]=$value['pai'];
    }
    $count=array_count_values($paixx);
    if(in_array('4', $count)){
        $zt=1;
    }
    return $zt;
}
unset($cards[1]);
function sfwxn($card){
    $hz=0;
    $zt=1;
    foreach ($card as $key => $value) {
        $hz=$value['pai']+$hz;
    }
    if($hz>10){
        $zt=0;
    }
    return $zt;
}
?>

