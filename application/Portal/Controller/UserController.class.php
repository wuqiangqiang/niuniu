<?php

// +----------------------------------------------------------------------
// | ThinkCMF [ WE CAN DO IT MORE SIMPLE ]
// +----------------------------------------------------------------------
// | Copyright (c) 2013-2014 http://www.thinkcmf.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: Dean <zxxjjforever@163.com>

namespace Portal\Controller;

use Common\Controller\HomebaseController;

class UserController extends HomebaseController {

    protected $user_model;

    public function __construct() {
        parent::__construct();
        $this->check_login();
        $this->uid = session('uid');
        $this->user_login = session('user_login');
        $this->user_model = D("Portal/User");
        $this->user = $this->user_model->find($this->uid);
        $this->assign('user', $this->user);
        
    }

    public function index() {
        if(!$_SESSION['istongyi']){
            $this->display(":fangjian_tishi");
            exit();
        }
        $this->display();
    }

    public function agentManager(){
        $agentLine = M('useragent')->where(['uid'=>$this->user['id']])->find();
        if(empty($agentLine) || $agentLine['daycard'] < 1)
            return $this->error('您还没开通该功能');
        $this->display();
    }

    public function gamejl(){
        $map['uid']=$this->user['id'];
        $map['type']=I('post.type');
        $list=M('user_room')->where($map)->order('overtime desc')->limit('20')->select();
        if(!$list){
            $result['ok']=0;
            echo json_encode($result);
            exit();
        }
        else{
            $html='';
            foreach ($list as $key => $value) {
               $html=$html.'  <div style=" width: 100%;">
  <div style="position: relative;"> 
  <div id="moretext" >
  <div class="gerenzx-fjh gerenzx-fjh-color">'.rommidxx($value['room']).'</div> 
    <div  class="gerenzx-jssj" onclick="location.href=\'/index.php/portal/home/xiangqing/room/'.$value['room'].'\'" >'.date("Y-m-d H:i",$value['overtime']).'</div> 
    <div class="gerenzx-dqjf gerenzx-fjh gerenzx-fjh-color" >'.$value['jifen'].'</div>
  </div>
  </div>
  </div>';
            }
            $result['html']=$html;
            $result['ok']=1;
            echo json_encode($result);
            exit();
        }
    }

    public function daoyoufangka() {
        $this->display();
    }
    public function daoyoufangka_houxu() {
        $mis = I('mis');
        $bag = M('fk_bag')->where(array('mis'=>$mis))->find();
        if(!empty($bag['get_id'])){
            $dd = '1';  //已领取
            $sendname = M('user')->where(array('id'=>$bag['send_id']))->find();
            $getuser = M('user')->where(['id' => $bag['get_id']])->find();
            $bag['sendname']=$sendname['nickname'];
            $bag['end_time']= date("Y-m-d H:i",$bag['end_time']);
            unset($getuser['history_select']);
            $this->assign('bag',$bag);
            $this->assign('getuser', $getuser);
        }else{
            $dd = '2'; //未领取
        }
        $user = M('user')->where(array('id'=>$bag['send_id']))->find();
        unset($user['history_select']);
        $this->assign('or',$dd);
        $this->assign('send_user',$user);
        $this->assign('mis',$mis);
        $this->display();
    }
    public function daoyoushengchengfangka(){//制作房卡包
        // $post = I('post.');
        // $user = M('user')->where(array('id'=>$this->uid))->find();
        // if($post['number']<=0){
        //     $this->error('房卡不能小于1张');
        //     exit;
        // }
        // if($post['number'] > $user['fk']) {
        //     $dd['act']='-1';
        //     $dd['msg'] = '您的房卡不足！';
        //     echo json_encode($dd);
        //     exit;
        // }
        // $data['send_id'] = $this->uid;
        // $data['number'] = $post['number'];
        // $data['add_time'] = time();
        // $data['mis'] =  date('Ymd') . str_pad(mt_rand(1, 99999), 5, '0', STR_PAD_LEFT);
        // $add = M('fk_bag')->add($data);
        // $edit = all_record($this->uid,'制作房卡包',-$post['number'],'fk');
        // if($add && $edit){
        //     $dd['act'] = '1';
        //     $dd['msg'] = $data['mis'];
        // }else{
        //     $dd['act']='-1';
        //     $dd['msg']="制作个假红包";
        // }
        // echo  json_encode($dd);
    }

    public function fangka() {
        $this->display();
    }
    public function dashengfangka() {
        $this->display();
    }
    public function gongnsm(){
        $this->display();
    }
    public function xiangqing(){
        $this->display();
    }
    public function gerenzxkaitcg(){
        $this->display();
    }
    
    
    
    public function gerenzxjiaruchengg(){
        $this->display();
    }
    public function fangka_houxu(){
        $mis = I('mis');
        $bag = M('fk_bag')->where(array('mis'=>$mis))->find();
        if(!empty($bag['get_id'])){
            $dd = '1';  //已领取
            $sendname = M('user')->where(array('id'=>$bag['send_id']))->find();
            $bag['sendname']=$sendname['nickname'];
            $bag['end_time']= date("m-d H:i",$bag['end_time']); 
            $this->assign('bag',$bag);
        }else{
            $dd = '2'; //未领取
        }
        $user = M('user')->where(array('id'=>$bag['send_id']))->find();
        $this->assign('or',$dd);
        $this->assign('send_user',$user);
        $this->assign('mis',$mis);
        $this->display();
    }
    public function dashengfangka_houxu() {
        $mis = I('mis');
        $bag = M('fk_bag')->where(array('mis'=>$mis))->find();
        if(!empty($bag['get_id'])){
            $dd = '1';  //已领取
            $sendname = M('user')->where(array('id'=>$bag['send_id']))->find();
            $getuser = M('user')->where(['id' => $bag['get_id']])->find();
            $bag['sendname']=$sendname['nickname'];
            $bag['end_time']= date("m-d H:i",$bag['end_time']);
            $this->assign('bag',$bag);
            $this->assign('getuser', $getuser);
        }else{
            $dd = '2'; //未领取
        }
        $user = M('user')->where(array('id'=>$bag['send_id']))->find();
        $this->assign('or',$dd);
        $this->assign('send_user',$user);
        $this->assign('mis',$mis);
        $this->display();
    }
    public function shengchengfangka(){//制作房卡包

        

        $post = I('post.');
        $user = M('user')->where(array('id'=>$this->uid))->find();
        if($post['number']<=0){
            $this->error('房卡不能小于1张');
            exit;
        }
        if($post['number'] > $user['fk']) {
            $dd['act']='-1';
            $dd['msg'] = '您的房卡不足！';
            echo json_encode($dd);
            exit;
        }
        $data['send_id'] = $this->uid;
        $data['number'] = $post['number'];
        $data['add_time'] = time();
        $data['mis'] =  date('Ymd') . str_pad(mt_rand(1, 99999), 5, '0', STR_PAD_LEFT);
        $add = M('fk_bag')->add($data);
        $edit = all_record($this->uid,'制作房卡包',-$post['number'],'fk');
        if($add && $edit){
            $dd['act'] = '1';
            $dd['msg'] = $data['mis'];
        }else{
            $dd['act']='-1';
            $dd['msg']="制作个假红包";
        }
        echo  json_encode($dd);
    }
    public function lingqufangka(){//领取房卡包
        $mis = I('mis');
        $bag = M('fk_bag')->where(array('mis'=>$mis))->find();
        $sendname = M('user')->where(array('id'=>$bag['send_id']))->find();
        if($bag && empty($bag['get_id'])){
            $fk['get_id']=$this->uid;
            $fk['end_time']=time();
            $edit = M('fk_bag')->where(array('mis'=>$mis))->save($fk);
            $ss = all_record($this->uid,'领取房卡包',$bag['number'],'fk');

            $bag = M('fk_bag')->where(array('mis'=>$mis))->find();
            $bag['sendname']=$sendname['nickname'];
            $bag['end_time']= date("m-d H:i",$bag['end_time']); 
            if($edit && $ss){
                $dd['act']='1';
                $dd['msg']=$bag;
            }
        }else{
            $dd['act']='-1';
            $dd['msg']="这是个假红包";
        }
        echo json_encode($dd);
    }
    public function fangka_jl(){

        
        $send = M('fk_bag')->where(array('send_id'=>$this->uid))->select();
        $get = M('fk_bag')->where(array('get_id'=>$this->uid))->select();
        // $list['send']=$send;
        // $list['get']=$get;
        $this->assign('send',$send);
        $this->assign('get',$get);
        // $this->assign('list',json_encode($list));
        $this->display();
    
    }


    public function register() {
        $count=$this->user_model->where(array('create_time'=>array('gt',date ("Y-m-d",  time()))))->count();
        $max_register_day=$this->bonus['max_register_day'];
        if($count>$max_register_day){
            $this->msg('今日会员注册已满。。。', $url);
        }
        $this->display();
    }

    public function registerPost() {
        $url = U('portal/user/register');
        $post = I('post.post');
        if (!$post['parent_user']) {
            $this->msg('注册失败：推荐人不存在', $url);
        }
        $post['user_login'] = trim($post['user_login']);
        $user = $this->user_model->where(array('user_login' => $post['user_login']))->find();
        if ($user) {
            $this->msg('用户名已存在', $url);
        }
        $post['mobile'] = trim($post['mobile']);
        $mobile = $this->user_model->where(array('mobile' => $post['mobile']))->find();
        if ($mobile) {
            $this->msg('手机号已被注册', $url);
        }
        $post['user_pass'] = trim($post['user_pass']);
        $post['re_user_pass'] = trim($post['re_user_pass']);
        if ($post['user_pass'] != $post['re_user_pass']) {
            $this->msg('两次登录密码不相同', $url);
        }
        $post['user_two_pass'] = trim($post['user_two_pass']);
        $post['re_user_two_pass'] = trim($post['re_user_two_pass']);
        if ($post['user_two_pass'] != $post['re_user_two_pass']) {
            $this->msg('两次二级密码不相同', $url);
        }
        $post['parent_user'] = trim($post['parent_user']);

        $parent = $this->user_model->where(array('user_login' => $post['parent_user']))->find();
        if (empty($parent)) {
            $this->msg('推荐人不存在', $url);
        }
        $post['user_pass'] = md5($post['user_pass']);
        $post['user_two_pass'] = md5($post['user_two_pass']);
        $post['parent'] = $parent['id'];
        $post['register_ip'] = get_client_ip(0, true);
        $post['create_time'] = $this->time;

        $res = $this->user_model->add($post);
        if ($res) {
            $this->msg('注册成功', $url);
        } else {
            $this->msg('注册失败', $url);
        }
    }

    //推荐列表
    public function recommendList() {
        $child = $this->getChild($this->user_login);
        $this->assign('child', $child);
        $this->display();
    }

    public function recommendListSearch() {
        $user_login = I('post.user_login');
        $where['user_login'] = array('like', "%{$user_login}%");
        $where['parent']=  $this->uid;
        $child = $this->user_model->where($where)->select();
        $this->assign('child', $child);
        $this->display('recommendList');
    }

    /**
     * 手动激活
     */
    public function activate() {
        $url = U('portal/user/recommendList');
        //推荐人是否有激活码
        $activation_user = I('get.user_login');
        $activation_code = $this->activation_code->where(array('user_login' => $this->user_login, 'status' => 0))->find();
        if ($activation_code) {
            $data['status'] = 1;
            $data['use_user'] = $activation_user;
            $data['use_time'] = $this->time;
            $ret = $this->activation_code->where(array('id' => $activation_code['id']))->save($data);
            if ($ret) {
                $this->user_model->where(array('user_login' => $activation_user))->save(array('user_status' => 0));
                $this->msg('激活成功', $url);
            } else {
                $this->msg('激活失败', $url);
            }
        } else {
            $this->msg('当前账号没有可用激活码', $url);
        }
    }

    public function edit() {
        $this->display();
    }

    public function editPost() {
        $user_two_pass = I('post.user_two_pass');
        $url = U('portal/user/edit');
        $user_two_pass = md5($user_two_pass);
        if ($user_two_pass != $this->user['user_two_pass'] || !$user_two_pass) {
            $this->msg('二级密码错误', $url);
        }
        $data = I('post.post');
//        $user_pass = md5($data['user_pass']);
//        if ($user_pass != $this->user['user_pass']) {
//            $data['user_pass'] = md5($data['user_pass']);
//        }
        $res = $this->user_model->where(array('id' => $this->uid))->save($data);
        if ($res) {
            $this->msg('修改成功', $url);
        } else {
            $this->msg('修改失败', $url);
        }
    }

    public function editPassword() {
        $this->display();
    }

    public function editPasswordPost() {
        $url = U('portal/user/editPassword');
        $post = I('post.');
        $where['id'] = $this->uid;
        $res = FALSE;
        $old_user_pass = I('post.old_user_pass');
        $old_user_two_pass = I('post.old_user_two_pass');
        if ($old_user_pass && $old_user_two_pass) {//同时修改两个密码
            if (md5($old_user_pass) != $this->user['user_pass']) {
                $this->msg('原密码错误', $url);
            }
            if (md5($old_user_two_pass) != $this->user['user_two_pass']) {
                $this->msg('原二级密码错误', $url);
            }
            $data['user_pass'] = md5($post['new_user_pass']);
            $data['user_two_pass'] = md5($post['new_user_two_pass']);
            $res = $this->user_model->where($where)->save($data);
        } elseif ($old_user_pass && !$old_user_two_pass) {//修改登录密码
            if (md5($old_user_pass) != $this->user['user_pass']) {
                $this->msg('原密码错误', $url);
            }
            $data['user_pass'] = md5($post['new_user_pass']);
            $res = $this->user_model->where($where)->save($data);
        } elseif (!$old_user_pass && $old_user_two_pass) {//修改二级密码
            if (md5($old_user_two_pass) != $this->user['user_two_pass']) {
                $this->msg('原二级密码错误', $url);
            }
            $data['user_two_pass'] = md5($post['new_user_two_pass']);
            $res = $this->user_model->where($where)->save($data);
        }
        if ($res) {
            $this->msg('修改成功', $url);
        } else {
            $this->msg('修改失败', $url);
        }
    }

    //一代子类
    public function getChild($user_login) {
        $user = $this->user_model->where(array('user_login' => $user_login))->find();
        $child = $this->user_model->where(array('parent' => $user['id']))->select();
        return $child;
    }

    //直推人数
    public function getChildCount($user_login) {
        $user = $this->user_model->where(array('user_login' => $user_login))->find();
        $count = $this->user_model->where(array('parent' => $user['id']))->field('user_login')->select();
        $i=0;
        foreach ($count as $key => $value) {
          $res= $this->match->where(array('provide_user'=>$value['user_login'],'status'=>2))->count();
          if($res>0){
              $i++;
          }
        }
        return $i;
    }

    //所有子类
    public function getAllChild($user_login) {
        $user = $this->user_model->where(array('user_login' => $user_login))->find();
        $where['path'] = array('like', "%-{$user['id']}-%");
        $child = $this->user_model->where($where)->select();
        return $child;
    }

    //所有子类数量
    public function getAllChildCount($user_login) {
        $user = $this->user_model->where(array('user_login' => $user_login))->find();
        $where['path'] = array('like', "%-{$user['id']}-%");
        $child = $this->user_model->where($where)->field('user_login')->select();
        $i = 0;
        foreach ($child as $key => $value) {
            $res = $this->match->where(array('provide_user' => $value['user_login'], 'status' => 2))->count();
            if ($res > 0) {
                $i++;
            }
        }
        return $i;
    }

    /**
     * 所有父类 0推荐人
     * @param type $user_login
     */
    public function getAllParent($user_login) {
        $user = $this->user_model->where(array('user_login' => $user_login))->find();
        $path = $user['path'];
        $path_arr = explode('-', $path);
        $j = count($path_arr) - 1;
        for ($index = 0; $index < count($path_arr); $index++) {
            if ($path_arr[$j] > 0) {
                $parent[$index] = $path_arr[$j];
                $j--;
            }
        }
        foreach ($parent as $key => $value) {
            if ($value != $user['id']) {
                $parent_user = $this->user_model->where(array('id' => $value))->field('user_login')->find();
                $parent_user_login[] = $parent_user['user_login'];
            }
        }
        return $parent_user_login;
    }

    /**
     * 推荐奖和管理奖
     * @param type $user_login
     */
    public function bonus($user_login, $order_money) {
        $parent_user_login = $this->getAllParent($user_login);
        $recomend_bonus = $this->bonus['recommend_bonus'];
        //一代管理奖
        //须满足条件才支付领导奖
        $parent = $this->user_model->where(array('user_login' => $parent_user_login[0]))->find();
        if ($parent_user_login[0]&&$parent['level']>=1) {
            //烧伤
//            $is_shaoshang = $this->bonus['is_shaoshang'];
//            $match_order = $this->match->where(array('provide_user' => $parent_user_login[0]))->order(array('id' => 'desc'))->find();
//            if ($match_order && $is_shaoshang == 1) {
//                $provide_order = $this->provide_help->where(array('id' => $match_order['pid']))->find();
//                if ($provide_order['old_money']) {
//                    $provide_money = $provide_order['old_money'];
//                } else {
//                    $provide_money = $provide_order['money'];
//                }
//                $b_order_money = $order_money * 1;
//                $b_order_money = (int) $b_order_money;
//                if ($provide_money && $provide_money < $b_order_money) {
//                    $num = $provide_money * $recomend_bonus / 100;
//                } else {
//                    $num = $order_money * $recomend_bonus / 100;
//                }
//            } else {
//                $num = $order_money * $recomend_bonus / 100;
//            }
            
            $num = $order_money * $recomend_bonus / 100;
            $num = (int) $num;
            $this->addRecord($parent_user_login[0], 'manger_money', "+{$num}", "领导奖{$recomend_bonus}%");
            $this->user_model->where(array('user_login' => $parent_user_login[0]))->setInc('manger_money', $num);
        }
        //管理奖 2到7
        $manger_bonus_str = $this->bonus['manger_bonus'];
        $manger_bonus = explode('+', $manger_bonus_str);
        if (count($parent_user_login) > 1) {
            $j = 0;
            for ($index = 1; $index < count($parent_user_login); $index++) {
                $parent = $this->user_model->where(array('user_login' => $parent_user_login[$index]))->find();
                if ($parent && $parent['level'] >= ($index+1)) {
                    $num = $order_money * $manger_bonus[$j] / 100;
                    $num = (int) $num;
                    $this->addRecord($parent_user_login[$index], 'manger_money', "+{$num}", "领导奖{$manger_bonus[$j]}%");
                    $this->user_model->where(array('user_login' => $parent_user_login[$index]))->setInc('manger_money', $num);
                }
                $j++;
            }
        }
        //经理奖 无限代
//        if (count($parent_user_login) > 5) {
//            $manger_all_bonus_str = $this->bonus['manger_all_bonus'];
//            $manger_all_bonus = explode('+', $manger_all_bonus_str);
//            for ($index = 4; $index < count($parent_user_login); $index++) {
//                $parent = $this->user_model->where(array('user_login' => $parent_user_login[$index]))->find();
//                if ($parent && $parent['level'] == 5) {//初级经理
//                    $num = $order_money * $manger_all_bonus[0] / 100;
//                    $num = (int) $num;
//                    $this->addRecord($parent_user_login[$index], 'manger_money', "+{$num}", '经理奖');
//                    $this->user_model->where(array('user_login' => $parent_user_login[$index]))->setInc('manger_money', $num);
//                } elseif ($parent && $parent['level'] == 6) {//高级经理
//                    $num = $order_money * $manger_all_bonus[1] / 100;
//                    $num = (int) $num;
//                    $this->addRecord($parent_user_login[$index], 'manger_money', "+{$num}", '经理奖');
//                    $this->user_model->where(array('user_login' => $parent_user_login[$index]))->setInc('manger_money', $num);
//                }
//            }
//        }
    }
//    public function bonus($user_login, $order_money) {
//        $parent_user_login = $this->getAllParent($user_login);
//        $recomend_bonus = $this->bonus['recommend_bonus'];
//        //一代管理奖
//        //须满足条件才支付领导奖
//        $parent = $this->user_model->where(array('user_login' => $parent_user_login[0]))->find();
//        if ($parent_user_login[0]&&$parent['level']>=1) {
//            //烧伤
//            $is_shaoshang = $this->bonus['is_shaoshang'];
//            $match_order = $this->match->where(array('provide_user' => $parent_user_login[0]))->order(array('id' => 'desc'))->find();
//            if ($match_order && $is_shaoshang == 1) {
//                $provide_order = $this->provide_help->where(array('id' => $match_order['pid']))->find();
//                if ($provide_order['old_money']) {
//                    $provide_money = $provide_order['old_money'];
//                } else {
//                    $provide_money = $provide_order['money'];
//                }
//                $b_order_money = $order_money * 1;
//                $b_order_money = (int) $b_order_money;
//                if ($provide_money && $provide_money < $b_order_money) {
//                    $num = $provide_money * $recomend_bonus / 100;
//                } else {
//                    $num = $order_money * $recomend_bonus / 100;
//                }
//            } else {
//                $num = $order_money * $recomend_bonus / 100;
//            }
//            
//            $num = (int) $num;
//            $this->addRecord($parent_user_login[0], 'manger_money', "+{$num}", "领导奖{$recomend_bonus}%");
//            $this->user_model->where(array('user_login' => $parent_user_login[0]))->setInc('manger_money', $num);
//        }
//        //管理奖 2到7
//        $manger_bonus_str = $this->bonus['manger_bonus'];
//        $manger_bonus = explode('+', $manger_bonus_str);
//        if (count($parent_user_login) > 1) {
//            $j = 0;
//            for ($index = 1; $index < count($parent_user_login); $index++) {
//                $parent = $this->user_model->where(array('user_login' => $parent_user_login[$index]))->find();
//                if ($parent && $parent['level'] >= ($index+1)) {
//                    $num = $order_money * $manger_bonus[$j] / 100;
//                    $num = (int) $num;
//                    $this->addRecord($parent_user_login[$index], 'manger_money', "+{$num}", "领导奖{$manger_bonus[$j]}%");
//                    $this->user_model->where(array('user_login' => $parent_user_login[$index]))->setInc('manger_money', $num);
//                }
//                $j++;
//            }
//        }
//        //经理奖 无限代
////        if (count($parent_user_login) > 5) {
////            $manger_all_bonus_str = $this->bonus['manger_all_bonus'];
////            $manger_all_bonus = explode('+', $manger_all_bonus_str);
////            for ($index = 4; $index < count($parent_user_login); $index++) {
////                $parent = $this->user_model->where(array('user_login' => $parent_user_login[$index]))->find();
////                if ($parent && $parent['level'] == 5) {//初级经理
////                    $num = $order_money * $manger_all_bonus[0] / 100;
////                    $num = (int) $num;
////                    $this->addRecord($parent_user_login[$index], 'manger_money', "+{$num}", '经理奖');
////                    $this->user_model->where(array('user_login' => $parent_user_login[$index]))->setInc('manger_money', $num);
////                } elseif ($parent && $parent['level'] == 6) {//高级经理
////                    $num = $order_money * $manger_all_bonus[1] / 100;
////                    $num = (int) $num;
////                    $this->addRecord($parent_user_login[$index], 'manger_money', "+{$num}", '经理奖');
////                    $this->user_model->where(array('user_login' => $parent_user_login[$index]))->setInc('manger_money', $num);
////                }
////            }
////        }
//    }

    /**
     * 检查当前用户
     * 是否超时打款
     * 是否超时收款
     */
    public function cheackOrder() {
        $rule = new rule();
        $user_model = new \Portal\Model\UserModel();
        $pay_time = $this->bonus['pay_time']; //打款时间限制
        $where['provide_user'] = $this->user_login;
        $where['status'] = 0;
        $provide_order = $this->match->where($where)->select();
        foreach ($provide_order as $key => $value) {
            $diffHours = $rule->differenceHours($value['create_time'], $this->time);
            if ($diffHours > $pay_time) {
                $deduct_parent_money = $this->bonus['deduct_parent_money']; //扣除上级金额
                $parnet = $this->user_model->where(array('id' => $this->user['parent']))->find();
                $this->addRecord($parnet['user_login'], 'money', "-{$deduct_parent_money}", "下级未打款扣除");
                $this->user_model->where(array('id' => $this->user['parent']))->setDec('money', $deduct_parent_money);
                $user_model->disable($this->user_login, '超时未打款');
                $this->msg('超时未打款，系统已封号。。', '/');
            }
        }
        $income_time = $this->bonus['income_time']; //收款时间限制
        $where2['get_user'] = $this->user_login;
        $where2['status'] = 1;
        $get_order = $this->match->where($where2)->select();
        foreach ($get_order as $key => $value) {
            $diffHours = $rule->differenceHours($value['pay_time'], $this->time);
            if ($diffHours > $income_time) {
                //自动确认
                $order = $this->match->where(array('id' => $value['id']))->find();
                //防止重复提交
                //修改收款方排单状态
                $this->get_help->where(array('id' => $order['gid']))->save(array('confirm_status' => 1));
                //支付推荐奖和管理奖
                $uu = new UserController();
                $uu->bonus($order['provide_user'], $order['money']);
                //修改订单状态
                $data['status'] = 2;
                $data['confirm_time'] = $this->time;
                $res = $this->match->where(array('id' => $value['id']))->save($data);
                $user_model->disable($this->user_login, '超时未确认收款');
                $this->msg('超时未确认收款，系统已封号。。', '/');
            }
        }
    }

    /**
     * 自动升级
     * @param type $user_login
     */
    public function upgrade() {
        $all_child_count = $this->getAllChildCount($this->user_login);
        $child_count = $this->getChildCount($this->user_login);
//        $child_count = 5;
//        $all_child_count = 20;
        $level_name_str = $this->bonus['user_level'];
        $recommend_number_str = $this->bonus['recommend_number'];
        $term_number_str = $this->bonus['term_number'];
        $level_name = explode('+', $level_name_str);
        $recommend_number = explode('+', $recommend_number_str);
        $term_number = explode('+', $term_number_str);


        //C1---C5
        for ($index = 0; $index < 5; $index++) {
            $j = $index + 1;
            if ($this->user['level'] == $index && $child_count >= $recommend_number[$index] && $all_child_count >= $term_number[$index]) {
                $this->setLevel($this->user_login, $j, $level_name[$j]);
            }
        }

        //初级---高级经理
        for ($index1 = 5; $index1 < 7; $index1++) {
            $j = $index + 1;
            if ($this->user['level'] == $index1 && $child_count >= $recommend_number[$index1] && $all_child_count >= $term_number[$index1]) {
                $this->user_model->where(array('user_login' => $this->user_login))->save(array('is_manger' => 1));
                $this->setLevel($this->user_login, $j, $level_name[$j]);
            }
        }
    }

    /**
     * 设置会员等级
     * @param type $user_login
     * @param type $level
     * @param type $level_name
     */
    public function setLevel($user_login, $level, $level_name) {
        $data['level'] = $level;
        $data['level_name'] = $level_name;
        $this->user_model->where(array('user_login' => $user_login))->save($data);
    }

    /**
     * 返回激活码费用
     * @param type $user_login
     */
    public function activationFee($user_login) {
        $where['user_login'] = $user_login;
        $where['create_time'] = array('egt', '2016-10-15 08:08:08');
        $res = $this->user_model->where($where)->find();
        if (!$res) {
            return FALSE;
        }
        $order = $this->match->where("status=2 and  provide_user='{$user_login}'")->find();
        if (!$order) {
            return FALSE;
        }
        $count = $this->getChildCount($user_login);
        if ($count < 2) {
            return FALSE;
        }
        $child = $this->getAllChild($user_login);
        $flag = 0;
        foreach ($child as $key => $value) {
            $order = $this->match->where("status=2 and provide_user='{$value['user_login']}'")->find();
            if ($order) {
                $flag++;
            }
        }
        if ($flag < 2) {
            return FALSE;
        }
        $this->addRecord($user_login, 'money', "+200", '激活返还');
        $this->user_model->where(array('user_login' => $user_login))->setInc('money', 200);
    }

    /*
     * 我的用户群
     */

    public function myTerm() {
        $child = $this->getChild($this->user_login);
        if ($child) {
            foreach ($child as $key => $value) {
                $user_login[] = $value['user_login'];
            }
            $user_login_str = implode(',', $user_login);
//        $where="'user_login' in '{$user_login_str}'";
            $where['user_login'] = array('in', $user_login_str);
            $rule = new rule();
            $count = $this->provide_help->where($where)->count();
            $provide_help = $this->page($count, 20);
            $provide_help_data = $this->provide_help->where($where)
                    ->order(array("id" => "desc"))
                    ->limit($provide_help->firstRow, $provide_help->listRows)
                    ->select();
            foreach ($provide_help_data as $key => $value) {
                $provide_user = $this->user_model->where(array('user_login' => $value['user_login']))->find();
                $provide_help_data[$key]['mobile'] = $provide_user['mobile'];
                $provide_help_data[$key]['paidan_days'] = $rule->differenceDays($value['create_time'], $this->time);
            }
            $this->assign('provide', $provide_help_data);
            $this->assign("provide_page", $provide_help->show('Admin'));

            $count = $this->get_help->where($where)->count();
            $get_help = $this->page($count, 20);
            $get_help_data = $this->get_help->where($where)
                    ->order(array("id" => "desc"))
                    ->limit($get_help->firstRow, $get_help->listRows)
                    ->select();
            foreach ($get_help_data as $key => $value) {
                $get_user = $this->user_model->where(array('user_login' => $value['user_login']))->find();
                $get_help_data[$key]['mobile'] = $get_user['mobile'];
                $get_help_data[$key]['paidan_days'] = $rule->differenceDays($value['create_time'], $this->time);
            }
            $this->assign('get', $get_help_data);
            $this->assign("get_page", $get_help->show('Admin'));
        }

        $this->display();
    }

    /*
     * 激活码
     */

    public function activationCode() {
        $where['user_login'] = $this->user_login;
        $count = $this->activation_code->where($where)->count();
        $page = $this->page($count, 20);
        $record = $this->activation_code
                ->where($where)
                ->order(array("id" => "desc"))
                ->limit($page->firstRow, $page->listRows)
                ->select();
        $yes['user_login'] = $this->user_login;
        $yes['status'] = 0;
        $count = $this->activation_code->where($yes)->count();
        $this->assign('yes', $count);

        $this->assign('record', $record);
        $this->assign("page", $page->show('Admin'));
        $this->display();
    }

    /**
     * 激活码转让
     */
    public function activationCodeDeal() {
        $url = U('portal/user/activationCode');
        $to_user_login = I('post.user_login');
        $number = I('post.number');
        if (!$to_user_login || !$number) {
            $this->msg('系统繁忙', $url);
        }
        $res = $this->user_model->where(array('user_login' => $to_user_login))->find();
        $child=$this->getAllChild($this->user_login);
        $parent=  $this->getAllParent($this->user_login);
        foreach ($child as $key => $value) {
            $child_arr[]=$value['user_login'];
        }
        //转售必须要在一条线上转
        if (!in_array($to_user_login, $child_arr) && !in_array($to_user_login, $parent)) {
            $this->msg('转售必须要在一条线上', $url);
        }
        if (empty($res)) {
            $this->msg('对方账号不存在', $url);
        }
        $where['user_login'] = $this->user_login;
        $where['status'] = 0;
        $count = $this->activation_code->where($where)->count();
        if ($count < $number) {
            $this->msg('激活码数量不足', $url);
        }
        for ($index = 0; $index < $number; $index++) {
            $activation = $this->activation_code->where($where)->find();
            $this->activation_code->where(array('id' => $activation['id']))->save(array('user_login' => $to_user_login));
        }
        $this->msg('操作成功', $url);
    }
/**
 * 排单币
 */
    public function pdb() {
        $where['user_login'] = $this->user_login;
        $where['status'] = 0;
        $count = $this->pdb->where($where)->count();
        $page = $this->page($count, 20);
        $record = $this->pdb
                ->where($where)
                ->order(array("id" => "desc"))
                ->limit($page->firstRow, $page->listRows)
                ->select();
        $yes['user_login'] = $this->user_login;
        $yes['status'] = 0;
        $count = $this->pdb->where($yes)->count();
        $this->assign('yes', $count);

        $this->assign('record', $record);
        $this->assign("page", $page->show('Admin'));
        $this->display();
    }

    /**
     * 排单币转让
     */
    public function pdbDeal() {
        $url = U('portal/user/pdb');
        $to_user_login = I('post.user_login');
        $number = I('post.number');
        if (!$to_user_login || !$number) {
            $this->msg('系统繁忙', $url);
        }
        $res = $this->user_model->where(array('user_login' => $to_user_login))->find();
        $child=$this->getAllChild($this->user_login);
        $parent=  $this->getAllParent($this->user_login);
        foreach ($child as $key => $value) {
            $child_arr[]=$value['user_login'];
        }
        //转售必须要在一条线上转
        if (!in_array($to_user_login, $child_arr) && !in_array($to_user_login, $parent)) {
            $this->msg('转售必须要在一条线上', $url);
        }
        if (empty($res)) {
            $this->msg('对方账号不存在', $url);
        }
        $where['user_login'] = $this->user_login;
        $where['status'] = 0;
        $count = $this->pdb->where($where)->count();
        if ($count < $number) {
            $this->msg('数量不足', $url);
        }
        for ($index = 0; $index < $number; $index++) {
            $pdb = $this->pdb->where($where)->find();
            $this->pdb->where(array('id' => $pdb['id']))->save(array('user_login' => $to_user_login));
        }
        $this->msg('操作成功', $url);
    }
    /**
     * 大转盘
     */
    public function turntable(){
        $award=M('Award');
        $where['user_login'] = $this->user_login;
        $count = $award->where($where)->count();
        $page = $this->page($count, 20);
        $record = $award
                ->where($where)
                ->order(array("id" => "desc"))
                ->limit($page->firstRow, $page->listRows)
                ->select();

        $this->assign('record', $record);
        $this->assign("page", $page->show('Admin'));
        $this->display();
    }
    /**
     * 得到获奖人
     * @param type $param
     */
    public function getPrizeWinner() {
        //奖项对应角度和中奖几率二维数组
        $ret = $this->decoutMoney();
        if (!$ret) {
            $data['prize'] = 1;
            echo json_encode($data);
            die;
        }

        $prize_arr = array(
            '0' => array('id' => 1, 'min' => 1, 'max' => 29, 'prize' => '一等奖《苹果7》', 'v' => 0.1),
            '1' => array('id' => 2, 'min' => 302, 'max' => 328, 'prize' => '二等奖《三星 Galaxy S7》', 'v' => 0.3),
            '2' => array('id' => 3, 'min' => 242, 'max' => 268, 'prize' => '三等奖《苹果 iPad mini 4》', 'v' => 0.6),
            '3' => array('id' => 4, 'min' => 182, 'max' => 208, 'prize' => '四等奖《意式咖啡机》', 'v' => 3),
            '4' => array('id' => 5, 'min' => 122, 'max' => 148, 'prize' => '五等奖《飞利浦音响》', 'v' => 7),
            '5' => array('id' => 6, 'min' => 62, 'max' => 88, 'prize' => '六等奖《充电宝》', 'v' => 10),
            '6' => array('id' => 7, 'min' => array(32, 92, 152, 212, 272, 332),
                'max' => array(58, 118, 178, 238, 298, 358), 'prize' => '《感谢参与》', 'v' => 79)
                //min数组表示每个个奖项对应的最小角度 max表示最大角度 
                //prize表示奖项内容，v表示中奖几率(若数组中七个奖项的v的总和为100，如果v的值为1，则代表中奖几率为1%，依此类推) 
        );

        foreach ($prize_arr as $v) {
            $arr[$v['id']] = $v['v'];
        }

        $prize_id = $this->getRand($arr); //根据概率获取奖项id  

        $res = $prize_arr[$prize_id - 1]; //中奖项  
        $min = $res['min'];
        $max = $res['max'];
        if ($res['id'] == 7) { //七等奖  
            $i = mt_rand(0, 5);
            $data['angle'] = mt_rand($min[$i], $max[$i]);
        } else {
            $data['angle'] = mt_rand($min, $max); //随机生成一个角度  
        }
        //将奖品存入数据库
        $this->addAward($res['id'], $res['prize']);
        
        $data['prize'] = $res['prize'];
        echo json_encode($data);
    }

    public function getRand($proArr) {
        $data = '';
        $proSum = array_sum($proArr); //概率数组的总概率精度  

        foreach ($proArr as $k => $v) { //概率数组循环 
            $randNum = mt_rand(1, $proSum);
            if ($randNum <= $v) {
                $data = $k;
                break;
            } else {
                $proSum -= $v;
            }
        }
        unset($proArr);
        return $data;
    }
    /**
     * 
     * @param type $id 中奖等级
     * @param type $prize 奖品
     */
    public function addAward($id,$prize) {
        $award=M('Award');
        $data['award_id']=$id;
        $data['prize']=$prize;
        $data['create_time']=  $this->time;
        $data['user_login']= $this->user_login;
        
        $award->add($data);
        
    }
    //扣出抽奖费用
    public function decoutMoney() {
       $user_info=  $this->user_model->where(array('user_login'=>  $this->user_login))->find();
       $money=$user_info['manger_money'];
       if($money<10){
           return FALSE;   
       }
       $this->user_model->where(array('user_login'=>  $this->user_login))->setDec('manger_money',10);
       $this->addRecord($this->user_login, 'manger_money', "-10", "抽奖扣费");
       return TRUE;
    }

}
