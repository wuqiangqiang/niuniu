<?php

// +----------------------------------------------------------------------
// | ThinkCMF [ WE CAN DO IT MORE SIMPLE ]
// +----------------------------------------------------------------------
// | Copyright (c) 2013-2014 http://www.thinkcmf.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: Dean <zxxjjforever@163.com>

namespace Portal\Controller;

use Common\Controller\AdminbaseController;

class AdminweixinController extends AdminbaseController {
	protected $weixin;
    public function __construct() {
        parent::__construct();
    }
    function _initialize() {
    	parent::_initialize();
    	import('Common.Lib.weixin');
        $this->weixin = new \weixin($this->extract[weixin_appid],$this->extract[weixin_key],$this->extract[access_token]);    
    }
    public function access_token() {
       $this->extract[access_token]=$this->weixin->get_access_token();
       $res = sp_set_option('extract', $this->extract);
        if ($res !== false) {
            $this->success("获取成功！");
        } else {
            $this->error("获取失败！");
        }
    }
    public function updata_menu(){
    	$this->weixin->menu=$this->extract[weixin_menu];
    	$result=$this->weixin->updata_menu();
    	if($result['errcode']=='40001'||$result['errcode']=='42001'){
    		$this->extract[access_token]=$this->weixin->get_access_token();
       		$res = sp_set_option('extract', $this->extract);
       		$result=$this->weixin->updata_menu();
    	}
    	if ($result['errcode']=='0') {
            $this->success("更新成功！");
        } else {
            $this->error("更新失败！".$result['errmsg']);
        }
    }
}