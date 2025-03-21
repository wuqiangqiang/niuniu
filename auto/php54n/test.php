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
$worker->onWorkerStart = function($worker)
{	
	ouput('程序开始运行');
    global $host;
    global $connection2;
    global $serverdk;
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
    print_r($data);
    $data2=json_decode($data,true);
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
	$data2['act'] = preg_replace('/[^a-zA-Z0-9]/is', '', $data2['act']);
	$tpl = ("./php54n/act/" . $data2['act'] . ".php");
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
    $connection->send(json_encode($data));
    return false;
}
function title($title,$connection){
    $data['msg']=$title;
    $data['act']='Title';
    $connection->send(json_encode($data));
    return false;
}
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
function success($msg,$url='',$connection){
    $zzxx['msg']=$msg;
    $zzxx['url']=$url;
    $data['msg']=$zzxx;
    $data['act']='success';
    $connection->send(json_encode($data));
    return false;
}
?>

