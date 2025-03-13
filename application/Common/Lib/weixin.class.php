<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class weixin {
    private $appid;
    private $key;
    private $access_token;
    private $jsapi_ticket;
    private $get_access_token_url='https://api.weixin.qq.com/cgi-bin/token?';
    private $menu_url='https://api.weixin.qq.com/cgi-bin/menu/create?access_token=';
    private $menu_delete_url='https://api.weixin.qq.com/cgi-bin/menu/delete?access_token=';
    private $getcode_url='https://api.weixin.qq.com/cgi-bin/qrcode/create?access_token=';
    private $oauth2='https://api.weixin.qq.com/sns/oauth2/access_token?';
    private $extract;
    public $menu;
    public function __construct($appid,$key,$access_token) {
           $this->extract=  sp_get_option('extract');
           $this->appid=$appid;
           $this->key=$key;
           $this->access_token=$this->get_access_token();//access_token_time

    }
    public function get_jsapi_ticket(){
        if($this->extract['jsapi_ticket_time']<time()-7200){
            $url='https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token='.$this->access_token.'&type=jsapi';
            $result=$this->https($url);
            $result=json_decode($result,true);
            if($result['ticket']){
            $this->extract['jsapi_ticket']=$result['ticket'];
            $this->extract['jsapi_ticket_time']=time();
            $res = sp_set_option('extract', $this->extract);
            }
            else{
                print_r($result);
                exit();
            }
        }
        return $this->extract['jsapi_ticket'];
    }
    public function get_access_token(){
        if($this->extract['access_token_time']<time()-7200){
            $url=$this->get_access_token_url."grant_type=client_credential&appid=".$this->appid."&secret=".$this->key;
            $result=$this->https($url);
            $result=json_decode($result,true);
            if($result['access_token']){
                $this->extract['access_token']=$result['access_token'];
                $this->extract['access_token_time']=time();
                $res = sp_set_option('extract', $this->extract);
            }
            else{
                print_r($result);
                exit();
            }
        }
        return $this->extract['access_token'];
    }
    public function get_oauth2($code){
            $url=$this->oauth2."appid=".$this->appid."&secret=".$this->key."&code=".$code."&grant_type=authorization_code";
            $result=$this->https($url);
            $result=json_decode($result,true);
            return $result;
            exit;
    }

    public function get_userinfo($token,$openid){
            $url = "https://api.weixin.qq.com/sns/userinfo?access_token=".$token."&openid=".$openid."&lang=zh_CN";
            $result=$this->https($url);
            $result=json_decode($result,true);
            return $result;
            exit;
    }
    public function get_qrcode($id){
            $url=$this->getcode_url.$this->access_token;
            $data='{"action_name": "QR_LIMIT_SCENE", "action_info": {"scene": {"scene_id": '.$id.'}}}';
            $result=$this->https($url,$data,'json');
            $result=json_decode($result,true);
            return $result;
            exit;
    }
    public function updata_menu(){
        $url=$this->menu_url.$this->access_token;
        $this->menu=htmlspecialchars_decode($this->menu);
        $data=$this->menu;
        $result=$this->https($url,$data,'json');
        $result=json_decode($result,true);
        return $result;
        exit;
    }
    public function https($url,$data='',$method='get'){
        $ch = curl_init();
        curl_setopt ($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); // 对认证证书来源的检查  
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false); // 从证书中检查SSL加密算法是否存在  
        curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (compatible; MSIE 5.01; Windows NT 5.0)');  
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1); // 使用自动跳转  
        curl_setopt($ch, CURLOPT_AUTOREFERER, 1); // 自动设置Referer
        if($method=='POST'){  
        curl_setopt($ch, CURLOPT_POST, 1); // 发送一个常规的Post请求 
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");  
        if ($data != ''){  
            curl_setopt($ch, CURLOPT_POSTFIELDS, $data); // Post提交的数据包  
            }  
        }       
        curl_setopt($ch, CURLOPT_TIMEOUT, 30); // 设置超时限制防止死循环  
        if($method=='json'){
        curl_setopt($ch, CURLOPT_POST, TRUE);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST"); 
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data); // Post提交的数据包  
        curl_setopt($ch, CURLOPT_HTTPHEADER, array(  
            'Content-Type: application/json; charset=utf-8',  
            'Content-Length: ' . strlen($data))  
        );  
        } 
        else{
            curl_setopt($ch, CURLOPT_HEADER, 0); // 显示返回的Header区域内容  
        }
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); // 获取的信息以文件流的形式返回  
        $file_contents = curl_exec($ch);
        curl_close($ch);
        return $file_contents;
    }
}