<?php
// +----------------------------------------------------------------------
// | ThinkCMF [ WE CAN DO IT MORE SIMPLE ]
// +----------------------------------------------------------------------
// | Copyright (c) 2013-2014 http://www.thinkcmf.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: Tuolaji <479923197@qq.com>
// +----------------------------------------------------------------------

namespace Portal\Controller;

use Common\Controller\AdminbaseController;

class AdminBonusController extends AdminbaseController {

    protected $options_model;

    function _initialize() {
        parent::_initialize();
        $this->options_model = D("Common/Options");
    }
    /*
     * 奖金设置
     */
    public function bonusSet() {
        $option = $this->options_model->where("option_name='bonus'")->find();
        $this->assign(json_decode($option['option_value'], true));
        $this->assign("option_id", $option['option_id']);
        $res=sp_get_option('bonus');
        $this->display();
    }
    public function bhbonus(){
        $option = $this->options_model->where("option_name='bonus'")->find();
        $bonus =json_decode($option['option_value'], true);
        $bonus[$_POST['name']]=$_POST['value'];
        $res = sp_set_option('bonus', $bonus);
        if ($res !== false) {
            $this->success("保存成功！");
        } else {
            $this->error("保存失败！");
        }
    }
    public function bonusPost() {
        $bonus = I('post.options/a');
        $res = sp_set_option('bonus', $bonus);
        if ($res !== false) {
            $this->success("保存成功！");
        } else {
            $this->error("保存失败！");
        }
       
    }
   

    /*
     * 提款设置
     */
    public function extractSet() {
        $option = $this->options_model->where("option_name='extract'")->find();
        $this->assign(json_decode($option['option_value'], true));
        $this->assign("option_id", $option['option_id']);
        $this->display();
    }
    public function extractPost() {
        $extract = I('post.options/a');
        $res = sp_set_option('extract', $extract);
        if ($res !== false) {
            $this->success("保存成功！");
        } else {
            $this->error("保存失败！");
        }
    }


}