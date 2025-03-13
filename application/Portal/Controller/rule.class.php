<?php
// +----------------------------------------------------------------------
// | ThinkCMF [ WE CAN DO IT MORE SIMPLE ]
// +----------------------------------------------------------------------
// | Copyright (c) 2013-2014 http://www.thinkcmf.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: Dean <zxxjjforever@163.com>
namespace Portal\Controller;

use Common\Controller\HomebaseController;

class rule extends HomebaseController {

    protected $user_model;
    protected $activation_code;
    protected $all_record;
    protected $provide_help;
    protected $get_help;
    protected $match;
    protected $date;

    public function __construct() {
        parent::__construct();
        $this->user_model = D("Portal/User");
        $this->user = $this->user_model->find($this->uid);
        $this->activation_code = M('ActivationCode');
        $this->all_record = M('AllRecord');
        $this->provide_help = M('ProvideHelp');
        $this->get_help = M('GetHelp');
        $this->match = M('match'); //订单匹配
        import('Common.Lib.time');
        $this->date = new \time();
        
    }
  

    /**
     * 两个时间差别天数
     * @param type $begin_time
     * @param type $end_time
     */
    public function differenceDays($begin_time, $end_time) {
        $begin_time = date('Y-m-d', strtotime($begin_time));
        $end_time = date('Y-m-d', strtotime($end_time));
        $begin_time = strtotime($begin_time);
        $end_time = strtotime($end_time);
        return ($end_time - $begin_time) / 86400;
    }
    /**
     * 两个时间差别小时
     * @param type $begin_time
     * @param type $end_time
     */
    public function differenceHours($begin_time, $end_time) {
        $begin_time = strtotime($begin_time);
        $end_time = strtotime($end_time);
        return ($end_time - $begin_time) / 3600;
    }

    

    
    

}
