<?php

// +----------------------------------------------------------------------
// | ThinkCMF [ WE CAN DO IT MORE SIMPLE ]
// +----------------------------------------------------------------------
// | Copyright (c) 2013-2014 http://www.thinkcmf.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: Dean <zxxjjforever@163.com>

namespace Portal\Controller;

use Common\Controller\HomebaseController;

class WeixinController extends HomebaseController {
    public function __construct() {
        parent::__construct();    
    }
    function _initialize() {
        parent::_initialize();
        import('Common.Lib.weixin');
        $this->weixin = new \weixin($this->extract[weixin_appid],$this->extract[weixin_key],$this->extract[access_token]);    
    }
    public function index() {
        $data2['get']=$_GET;
        $data2['post']=$_POST;
        $data2['server']=$_SERVER;
                //接收传送的数据
        $fileContent = file_get_contents("php://input");
        //转换为simplexml对象
        $xmlResult = simplexml_load_string($fileContent, 'SimpleXMLElement', LIBXML_NOCDATA);
        $xmlarray=json_decode(json_encode($xmlResult), true);
        $data2['xml']=$xmlarray;
        $data['msg']=json_encode($data2);
        $data['time']=date('y-m-d H:i:s',time());
        M('weixin')->add($data);
        define("TOKEN", "zmm32323232");
        $echoStr = $_GET["echostr"];  
        if($this->checkSignature()){
            if($xmlarray['Event']=='subscribe'){
                $data=array();
                $data['openid']=$xmlarray['FromUserName'];
                if(!M('user')->where($data)->find()){
                    if(!M('openid')->where($data)->find()){
                        $data['code']=$xmlarray['EventKey'];
                        $data['time']=date('Y-m-d H:i:s',time());
                        M('openid')->add($data);
                    }
                    elseif($xmlarray['EventKey']){
                        $data['code']=$xmlarray['EventKey'];
                        $data['time']=date('Y-m-d H:i:s',time());
                        M('openid')->where(array('openid'=>$data['openid']))->save($data);
                    }
                }
            }
            ob_clean();
            echo $echoStr;
            exit;
        }
    }
    public function responseMsg()
    {
        //get post data, May be due to the different environments
        $postStr = $GLOBALS["HTTP_RAW_POST_DATA"];

        //extract post data
        if (!empty($postStr)){
                /* libxml_disable_entity_loader is to prevent XML eXternal Entity Injection,
                   the best way is to check the validity of xml by yourself */
                libxml_disable_entity_loader(true);
                $postObj = simplexml_load_string($postStr, 'SimpleXMLElement', LIBXML_NOCDATA);
                $fromUsername = $postObj->FromUserName;
                $toUsername = $postObj->ToUserName;
                $keyword = trim($postObj->Content);
                $time = time();
                $textTpl = "<xml>
                            <ToUserName><![CDATA[%s]]></ToUserName>
                            <FromUserName><![CDATA[%s]]></FromUserName>
                            <CreateTime>%s</CreateTime>
                            <MsgType><![CDATA[%s]]></MsgType>
                            <Content><![CDATA[%s]]></Content>
                            <FuncFlag>0</FuncFlag>
                            </xml>";             
                if(!empty( $keyword ))
                {
                    $msgType = "text";
                    $contentStr = "Welcome to wechat world!";
                    $resultStr = sprintf($textTpl, $fromUsername, $toUsername, $time, $msgType, $contentStr);
                    echo $resultStr;
                }else{
                    echo "Input something...";
                }

        }else {
            echo "";
            exit;
        }
    }
    private function checkSignature()
    {
        // you must define TOKEN by yourself
        if (!defined("TOKEN")) {
            define("TOKEN", "zmm32323232");
        }
        
        $signature = $_GET["signature"];
        $timestamp = $_GET["timestamp"];
        $nonce = $_GET["nonce"];
                
        $token = TOKEN;
        $tmpArr = array($token, $timestamp, $nonce);
        // use SORT_STRING rule
        sort($tmpArr, SORT_STRING);
        $tmpStr = implode( $tmpArr );
        $tmpStr = sha1( $tmpStr );
        
        if( $tmpStr == $signature ){
            return true;
        }else{
            return false;
        }
    }

}