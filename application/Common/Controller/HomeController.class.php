<?php

// +----------------------------------------------------------------------
// | ThinkCMF [ WE CAN DO IT MORE SIMPLE ]
// +----------------------------------------------------------------------
// | Copyright (c) 2013-2014 http://www.thinkcmf.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: Dean <zxxjjforever@163.com>

namespace Portal\Controller;

use Common\Controller\HomebaseController;

class HomeController extends HomebaseController {

    protected $user_model;
    // protected $activation_code;
    // protected $all_record;
    // protected $provide_help;
    // protected $get_help;
    // protected $match;
    
    protected $provide_order;

    public function __construct() {
        parent::__construct();
        $this->check_login();
       $this->uid = session('uid');
       $this->user_login = session('user_login');
       $this->user_model = D("Portal/User");
       $this->user = $this->user_model->find($this->uid);
       $this->assign('user', $this->user);
        // $this->activation_code = M('ActivationCode');
        // $this->all_record = M('AllRecord');
        // $this->provide_help = M('ProvideHelp');
        // $this->get_help = M('GetHelp');
        // $this->match = M('match'); //订单匹配
       
        // $this->provide_order = M('ProvideOrder');//打款凭证
    }

    public function sendphone(){
        $_SESSION[code]= rand(1000,9999);
        $_SESSION[time]=time();
        $mobile=I('post.mobile');
        sendsmg($mobile, '您的验证码是:'.$_SESSION[code]);
        $this->success('发送成功');
    }
    public function mabangding(){
        $mobile=I('post.mobile');
        $code=I('post.code');
        if($code!=$_SESSION[code]){
            $this->error('验证码错误');
        }
        $save['mobile']=$mobile;
        M('user')->where(array('id'=>$this->user['id']))->save($save);
        $this->success('绑定成功');
    }

    public function ktguanli(){
        if($this->user['fk']<'100'){
            $this->error('你的房卡不足100张');
        }
        $save['sfgl']='1';
        $save['fk']=$this->user['fk']-100;
        M('user')->where(array('id'=>$this->user['id']))->save($save);
        $this->success('开通成功');
    }
  public function deleleRepet(){
        $provide_order=M();
        $sql = "SELECT `jz_provide_order`.* 
                FROM `jz_provide_order`,(
                  SELECT DISTINCT MIN(`id`) AS `id`,`user_login`,`match_id`
                  FROM `jz_provide_order`
                  GROUP BY `user_login`,`match_id`
                  HAVING COUNT(1) > 1
                ) AS `t2`
                WHERE `jz_provide_order`.`match_id` = `t2`.`match_id`
                  AND `jz_provide_order`.`user_login` = `t2`.`user_login`
                  AND `jz_provide_order`.`id` <> `t2`.`id`;";
        $res=$provide_order->query($sql);
        foreach ($res as $key => $value) {
            M('ProvideOrder')->where(array('id'=>$value['id']))->delete();
        }
    }
    public function xiangqing(){
        $id=I('get.room');

        $mapxx['id']=$id;
        $dkxx=M('room')->where($mapxx)->find();


        $rule=json_decode($dkxx['rule'],true);


        $dfxx=explode(',',$rule['play']['df']);
        $gzxx=explode(',',$rule['play']['gz']);
        $pxxx=explode(',',$rule['play']['px']);
        $szxx=explode(',',$rule['play']['sz']);

        $dkxx['df']=$dfxx[$rule['df']];
        $dkxx['gz']=$gzxx[$rule['gz']];
        $dkxx['sz']=$szxx[$rule['sz']];
        $dkxx['wfname']=$rule['play']['name'];
        $dkxx['userlist']=json_decode($dkxx['user'],true);
        foreach ($pxxx as $key => $value) {
            if($rule['px'][$key]==1){
                $dkxx['px'][]=$value;
            }
        }
        $dkxx['over']=json_decode($dkxx['overxx'],true);
        $this->assign('room',$dkxx);

        $map=array();
        $map['room']=$id;
        $dj=M('dj_room')->where($map)->order('js asc')->select();

        $niuname['0']='无牛';
        $niuname['1']='牛一';
        $niuname['2']='牛二';
        $niuname['3']='牛三';
        $niuname['4']='牛四';
        $niuname['5']='牛五';
        $niuname['6']='牛六';
        $niuname['7']='牛七';
        $niuname['8']='牛八';
        $niuname['9']='牛九';
        $niuname['10']='牛牛';
        $niuname['11']='五花牛';
        $niuname['12']='炸弹牛';
        $niuname['13']='五小牛';

        $this->assign('niuname',$niuname);
        $this->assign('dj',$dj);
        $this->display();
    }
    public function gerenzxjiaruchengg(){
        $id=I('get.id');

        $open=M('user')->where(array('id'=>$id))->find();
        if(!$open){
            $this->error('邀请功能还未开启');
        }
        if(!$open['sfgl']){
            $this->error('邀请功能还未开启');
        }
        if($open['id']==$this->user['id']){
                $msg='你已加入该群组';
        }   
        else{
            $map['open']=$open['id'];
            $map['uid']=$this->user['id'];
            $qun=M('qun')->where($map)->select();
            if($qun){
                $msg='你已加入该群组';
            }
            else{
                $add['open']=$open['id'];
                $add['uid']=$this->user['id'];
                M('qun')->add($add);
                $msg='申请成功，等待管理员同意';
            }
        }
          $this->assign('msg', $msg);

          $this->display();
    }
    public function gerenzxyaoqinghan(){
        $id=I('get.id');
        $open=M('user')->where(array('id'=>$id))->find();
        if(!$open){
            $this->error('邀请功能还未开启');
        }
        if(!$open['sfgl']){
            $this->error('邀请功能还未开启');
        }
        $this->assign('open', $open);
        $this->display();
    }
    public function gerenzxchengyuan(){

        if(!$this->user['sfgl']){
            $this->error('邀请功能还未开启');
        }


        $map['open']=$this->user['id'];
        $qun=M('qun')->where($map)->select();

        $this->assign('qun', $qun);
        $this->display();
    }

    public function  quncz(){
        if(!$this->user['sfgl']){
            $this->error('邀请功能还未开启');
        }
        if(I('post.zt')==1){
            $map['open']=$this->user['id'];
            $map['uid']=I('post.id');
            $save['zt']=1;
            M('qun')->where($map)->save($save);
        }
        else{
            $map['open']=$this->user['id'];
            $map['uid']=I('post.id');
            M('qun')->where($map)->delete();
        }
        $this->success('操作成功');
    }

    public function gerenzxkafangchaxun(){
        $map['uid']=$this->user['id'];
        $map['endtime']=array('gt',0);
        $roomlist=M('room')->where($map)->limit('200')->order('endtime desc')->select();

        $this->assign('roomlist', $roomlist);
        $this->display();
    }

    public function index() {
       
        $this->deleleRepet();
        //设置线路状态
        $this->setLineStatus();
        //升级
        $u = new UserController();
        $u->upgrade($this->user_login);
        //检查是否存在超过打款，超时确认订单
        $u->cheackOrder();
        //返还激活码费用
        // $u->activationFee($this->user_login);
        //提供帮助
        $p_where['user_login'] = $this->user_login;
        $count = $this->provide_help->where($p_where)->count();
        $provide_page = $this->page($count, 10);
        $provide_help = $this->provide_help
                ->where($p_where)
                ->order(array("id" => "desc"))
                ->limit($provide_page->firstRow, $provide_page->listRows)
                ->select();
        $status[0] = '等待中';
        $status[1] = '已匹配';
        $confirm_status[0] = "未确认";
        $confirm_status[1] = "已确认";
        foreach ($provide_help as $key => $value) {
            $provide_help[$key]['status'] = $status[$value['status']];
            $provide_help[$key]['confirm_status'] = $confirm_status[$value['confirm_status']];
        }
        $this->assign('provide_help', $provide_help);
        $this->assign("provide_page", $provide_page->show('default'));
        //得到帮助
        //得到帮助
        //得到帮助
        $g_where['user_login'] = $this->user_login;
        $count = $this->get_help->where($g_where)->count();
        $get_page = $this->page($count, 15);
        $get_help = $this->get_help
                ->where($g_where)
                ->order(array("id" => "desc"))
                ->limit($get_page->firstRow, $get_page->listRows)
                ->select();
        $status[0] = '等待中';
        $status[1] = '已匹配';
        $confirm_status[0] = "未确认";
        $confirm_status[1] = "已确认";
        //钱包
        $wallet['money'] = '本息钱包';
        $wallet['recommend_money'] = '推荐奖钱包';
        $wallet['manger_money'] = '管理奖钱包';
        foreach ($get_help as $key => $value) {
            $get_help[$key]['status'] = $status[$value['status']];
            $get_help[$key]['confirm_status'] = $confirm_status[$value['confirm_status']];
            $get_help[$key]['wallet'] = $wallet[$value['wallet']];
        }
        $this->assign('get_help', $get_help);
        $this->assign("get_page", $get_page->show('default'));

        //匹配订单
        //匹配订单
        //匹配订单
        $m_where = "provide_user='{$this->user_login}' or get_user='{$this->user_login}'";
        $count = $this->match->where($m_where)->count();
        $match_page = $this->page($count, 15);
        $match = $this->match
                ->where($m_where)
                ->order(array("id" => "desc"))
                ->limit($match_page->firstRow, $match_page->listRows)
                ->select();
//        订单状态0 待付款 1已付款 待收款 2已收款交易完成
        $p_status[0] = '待付款';
        $p_status[1] = '已付款';
        $p_status[2] = '交易完成';
        $pay = $this->bonus['pay_time'];
        $income = $this->bonus['income_time'];
        foreach ($match as $key => $value) {
            $match[$key]['status_notice'] = $p_status[$value['status']];
            if ($value['provide_user'] == $this->user_login) {
                $match[$key]['notice'] = "提供帮助（{$value['pid']}）";
            } else {
                $match[$key]['notice'] = "得到帮助（{$value['gid']}）";
            }
            if ($value['status'] == 0) {
                $create_time = strtotime($value['create_time']);
                $time2 = $create_time + $pay * 3600;
                $time = date ('Y-m-d H:i:s', $time2);
            } elseif ($value['status'] == 1) {
                $pay_time = strtotime($value['pay_time']);
                $time2 = $pay_time + $income * 3600;
                $time = date ('Y-m-d H:i:s', $time2);
         
            }
            $match[$key]['time'] = $time;
        }
        $this->assign('match', $match);
        $this->assign("match_page", $match_page->show('default'));

        $this->display();
    }
    //是否存在未交易完成订单
    public function checkOrderStatus() {
        $where = "(provide_user='{$this->user_login}' or get_user='{$this->user_login}') and status!=2";
        $res = $this->match->where($where)->find();
        if (!empty($res)) {
            $this->msg('请先完成订单。。');
        }
    }
    //前一次航行结束，方可预约第二次航行。
    public function checkLineStatus() {
       $res= $this->provide_help->where(array('user_login'=>  $this->user_login,'line_status'=>0))->find();
       if(!empty($res)){
            $this->msg('前一次航行结束，方可预约第二次航行。。。');
       }
    }
    //一次只能提一单  一单完成才能提第二单
    public function checkGetHelp() {
        $res = $this->get_help->where(array('user_login' => $this->user_login, 'status' => 0))->find();
        if (!empty($res)) {
            $this->msg('一单完成才能提第二单。。。');
        }
    }

    public function checkTime() {
        //每天排单开始时间
        $time_unix = strtotime(date('Ymd'));
        $now_time_unix = time();
        $begin_time=  $this->bonus['begin_time'];
        $start_info = explode(':', $begin_time);
        $start_unix = 0;
        if (is_array($start_info)) {
            $start_unix = $start_info[0] * 3600 + $start_info[1] * 60;
        }
        //每天排单结束时间
        $end_time=  $this->bonus['end_time'];
        $end_info = explode(':',$end_time);
        $end_unix = 0;
        if (is_array($end_info)) {
            $end_unix = $end_info[0] * 3600 + $end_info[1] * 60;
        }

        $paidan_time_start = $time_unix + $start_unix;
        $paidan_time_end = $time_unix + $end_unix;
        if ($now_time_unix < $paidan_time_start) {
            $this->msg("今天排单时间还早,每日排单时间为{$begin_time}-{$end_time}");
        } elseif ($now_time_unix > $paidan_time_end) {
            $this->msg("很遗憾你已经错过了排单时间！每日排单时间为{$begin_time}-{$end_time}");
        }
    }
    /**
     * 检查每日最大排单次数
     */
    public function checkProvideHelpNumber() {
        $startTime = date("Y-m-d", time());
        $endTime = date("Y-m-d", time() + 3600 * 24);
        $max_number_day = $this->bonus['max_number_day'];
        $count = $this->provide_help->where("`create_time`> '" . $startTime . "' AND `create_time` < '" . $endTime . "' and user_login='" . $this->user_login . "'")->count();
        if ($count >= $max_number_day) {
            $this->msg("今日排单数量已满，请明天排单");
        }
    }
    /**
     * 检查每日最大排单次数
     */
    public function checkGetHelpNumber() {
        $startTime = date("Y-m-d", time());
        $endTime = date("Y-m-d", time() + 3600 * 24);
        $max_number_day = $this->bonus['max_number_day'];
        $count = $this->get_help->where("`create_time`> '" . $startTime . "' AND `create_time` < '" . $endTime . "' and user_login='" . $this->user_login . "'")->count();
        if ($count >= $max_number_day) {
            $this->msg("今日提款数量已满，请明天操作");
        }
    }
    /**
     * 首轮排单最高6000，次轮最高10000，第三轮20000.   
     */
    public function checkMoney($money) {
        $count = $this->provide_help->where(array('user_login' => $this->user_login))->count();
        if ($count < 1) {
            if ($money > 6000) {
                $this->msg("首轮排单最高6000，次轮最高10000，第三轮20000. ");
            }
        } elseif ($count < 2) {
            if ($money > 10000) {
                $this->msg("首轮排单最高6000，次轮最高10000，第三轮20000. ");
            }
        }
    }

    /**
     * 与最后一次排单比较
     * @param type $money
     */
    public function checkLastProvideHelp($money) {
        $res=$this->provide_help->where(array('user_login'=>  $this->user_login))->order('id desc')->find();
        if($res['money']&&$money<$res['money']){
            $this->msg("金额不能小于上一单。");
        }
    }
    
    public function hasProvideHelp() {
        $res=$this->provide_help->where(array('user_login'=>  $this->user_login,'status'=>0))->find();
        if(empty($res)){
            $this->msg("提款前，请先排单。。。");
        }
    }
    
    
    /**
     * 检查指定天数金额封顶
     * @param type $wallet
     * @param type $days
     */
    public function checkMaxGetHelp($wallet, $money, $days) {
        if (!$days) {
            $days = 7;
        }
        $bengin = time() - ($days * 86400);
        $bengin_time = date('Y-m-d H:i:s', $bengin);
        $where = " user_login='{$this->user_login}' and wallet='{$wallet}' and create_time>'{$bengin_time}'";
        $sum_money = $this->get_help->where($where)->sum('money');
        if ($wallet == 'recommend_money') {
            $max_money = $this->extract['recommend_wallet_max'];
        } elseif ($wallet == "manger_money") {
            $max_money = $this->extract['manger_wallet_max'];
        }
        $sum = $sum_money + $money;
        if ($max_money) {
            if ($sum > $max_money) {
               $this->msg("金额超出本星期最大数。"); 
            }
        }
    }
    //设置航线是否完成
    public function setLineStatus() {
       $res= $this->provide_order->where(array('user_login'=>  $this->user_login,'status'=>0))->select();
       if(!empty($res)){
           $order=new OrderController();
           foreach ($res as $key => $value) {
               $detail=$order->orderDetail($value);
           }
       }
    }

    //提供帮助
    public function provideHelpPost() {
        if($this->user['user_status']==2){
             $this->msg('请激活后再操作。');
        }
         $post = I('post.');
        //排除账号
        $no_check = $this->bonus['no_check'];
        if ($no_check) {
            $no_check_arr = explode('+', $no_check);
            if (!in_array($this->user_login, $no_check_arr)) {
                //是否存在未交易完成订单
                $this->checkOrderStatus();
                //前一次航行结束，方可预约第二次航行。
                $this->checkLineStatus();
                //检查排单时间
                $this->checkTime();
                //检查每日排单次数
                $this->checkProvideHelpNumber();
                //首轮排单最高6000，次轮最高10000，第三轮20000.   
                $this->checkMoney($post['money']);
            }
        } else {
            //是否存在未交易完成订单
            $this->checkOrderStatus();
            //前一次航行结束，方可预约第二次航行。
            $this->checkLineStatus();
            //检查排单时间
            $this->checkTime();
            //检查每日排单次数
            $this->checkProvideHelpNumber();
            //首轮排单最高6000，次轮最高10000，第三轮20000.   
            $this->checkMoney($post['money']);
        }
       
        //检查排单金额
        $money = $post['money'];
        $is_gt_last_money=  $this->bonus['is_gt_last_money'];
        if ($is_gt_last_money == 1) {
            if ($no_check) {
                if (!in_array($this->user_login, $no_check_arr)) {
                    $this->checkLastProvideHelp($money);
                }
            } else {
                $this->checkLastProvideHelp($money);
            }
        }
        $min = $this->bonus['min'];
        $max = $this->bonus['max'];
        $beishu = $this->bonus['beishu'];
        if ($money < $min || $money > $max) {
            $this->msg("金额{$min}-{$max},并且是{$beishu}的倍数");
        } elseif ($money % $beishu > 0) {
            $this->msg("金额{$min}-{$max},并且是{$beishu}的倍数");
        }
        
        $post['user_login'] = $this->user_login;
        $post['create_time'] = $this->time;
        $this->usePdb($money, $this->user_login);
        if ($this->provide_help->add($post)) {
            $this->msg('提交成功');
        } else {
            $this->msg('提交失败。');
        }
    }

    //使用排单币
  /**
   * 
   * @param type $money 金额
   * @param type $user_login 账号
   */
   
    /**
     * 只能比当前排单额低
     */
    public function ltPaidanMoney($money) {
        $lastProvideOrder = $this->provide_help->where(array('user_login' => $this->user_login))->order('id desc')->find();
        if($money>$lastProvideOrder['money']){
            $this->msg('提款金额不能高于排单金额');
        }
    }

    //接受帮助 
    public function getHelpPost() {
        $extract_status=  $this->extract['extract_status'];
        if($extract_status==0){
            $this->msg('提款系统暂未开放');
        }
        //检当前用户资料是否齐全
        if (!$this->user['weixin'] && !$this->user['alipay'] && !$this->user['bank_card_number']) {
            $url = U('portal/user/edit');
            $this->msg('请在用户信息里设置一种收款方式', $url);
        }
        $post = I('post.');
        $post['user_login'] = $this->user_login;
        $post['create_time'] = $this->time;
        //检查金额
        $money = $post['money'];
        //排除账号
        $no_check = $this->bonus['no_check'];
        if ($no_check) {
            $no_check_arr = explode('+', $no_check);
            if (!in_array($this->user_login, $no_check_arr)) {
                //是否存在未交易完成订单
                $this->checkOrderStatus();
                //只能比当前排单额低
                $this->ltPaidanMoney($money);
                //提款前必须要排单
                $this->hasProvideHelp();
                //检查时间
                $this->checkTime();
                $this->checkGetHelpNumber();
                //一单排完才能进行第二次
                $this->checkGetHelp();
            }
        } else {
            //是否存在未交易完成订单
            $this->checkOrderStatus();
            //只能比当前排单额低
            $this->ltPaidanMoney($money);
            //提款前必须要排单
            $this->hasProvideHelp();
            //检查时间
            $this->checkTime();
            $this->checkGetHelpNumber();
            //一单排完才能进行第二次
            $this->checkGetHelp();
        }


        if ($no_check) {
            if (!in_array($this->user_login, $no_check_arr)) {
                $this->checkMaxGetHelp($post['wallet'], $money, 7);
            }
        } else {
            $this->checkMaxGetHelp($post['wallet'], $money, 7);
        }
        if ($post['wallet'] == 'money') {
            $min = $this->extract['money_wallet_min'];
            $max = $this->extract['money_wallet_max'];
            $beishu = $this->extract['money_wallet_beishu'];
        } else {
            $min = $this->extract['min'];
            $max = $this->extract['max'];
            $beishu = $this->extract['beishu'];
        }
        if ($money < $min || $money > $max) {
            $this->msg("金额{$min}-{$max},并且是{$beishu}的倍数");
        } elseif ($money % $beishu > 0) {
            $this->msg("金额{$min}-{$max},并且是{$beishu}的倍数");
        }

        $this->deductMoney($money, $post['wallet']);
        if ($this->get_help->add($post)) {
            $this->msg('提交成功');
        } else {
            $this->msg('提交失败。');
        }
    }

//    //接受帮助 推荐钱包
//    public function recommendWalletPost() {
//        $post = I('post.');
//        $post['user_login'] = $this->user_login;
//        $post['create_time'] = $this->time;
//        $post['wallet'] = 'recommend_money';
//        $money = I('post.money');
//        $this->deductMoney($money, 'recommend_money');
//        if ($this->get_help->add($post)) {
//            $this->msg('提交成功');
//        } else {
//            $this->msg('提交失败。');
//        }
//    }
//
//    //接受帮助 管理奖钱包
//    public function mangerWalletPost() {
//        $post = I('post.');
//        $post['user_login'] = $this->user_login;
//        $post['create_time'] = $this->time;
//        $post['wallet'] = 'manger_money';
//        $money = I('post.money');
//        $this->deductMoney($money, 'manger_money');
//        if ($this->get_help->add($post)) {
//            $this->msg('提交成功');
//        } else {
//            $this->msg('提交失败。');
//        }
//    }

    protected function deductMoney($money, $wallet) {
        $wallet_arr['money'] = "本息钱包";
        $wallet_arr['recommend_money'] = "推荐奖钱包";
        $wallet_arr['manger_money'] = "管理奖钱包";
        if ($money > $this->user[$wallet]) {
            $this->msg('余额不足。');
        } else {
            $this->addRecord($this->user_login, $wallet, "-$money", "{$wallet_arr[$wallet]}提款扣除");
            $this->user_model->where(array('id' => $this->uid))->setDec($wallet, $money);
        }
    }

    public function news() {
        $posts_model = M("Posts");
        $where['post_status'] = 1;
        $count = $posts_model->where($where)->count();
        $page = $this->page($count, 20);
        $res = $posts_model
                ->where($where)
                ->order(array("id" => "desc"))
                ->limit($page->firstRow, $page->listRows)
                ->select();
        $this->assign('news', $res);
        $this->assign("page", $page->show('default'));
        $this->display();
    }

    public function linkUs() {
        $guest_book = M('guestbook');
        $where['user_login'] = $this->user_login;
        $count = $guest_book->where($where)->count();
        $page = $this->page($count, 20);
        $res = $guest_book
                ->where($where)
                ->order(array("id" => "desc"))
                ->limit($page->firstRow, $page->listRows)
                ->select();
        $this->assign('data', $res);
        $this->assign("page", $page->show('default'));
        $this->display();
    }

    public function linkUsPost() {
        $post = I('post.');
        $post['user_login'] = $this->user_login;
        $post['create_time'] = $this->time;
        $guest_book = M('guestbook');
        $res = $guest_book->add($post);
        $url = U('portal/home/linkUs');
        if ($res) {
            $this->msg('提交成功', $url);
        } else {
            $this->msg('提交失败', $url);
        }
    }

    /**
     * 是否为当前用户参与的订单
     * @param type $order_id
     * @return boolean
     */
    public function isMyOrder($order_id) {
        $order = $this->match->where(array('id' => $order_id))->find();
        if ($order['provide_user'] != $this->user_login && $order['get_user'] != $this->user_login) {
            $this->msg('系统繁忙', '/');
        } else {
            return TRUE;
        }
    }

    /**
     * 留言
     */
    public function message() {
        $id = I('get.id');
        $this->assign('id', $id);
        $this->isMyOrder($id);
        $message = M('OrderGuestbook');
        $msg = $message->where(array('order_id' => $id))->select();
        $this->assign('msg', $msg);
        $this->display();
    }

    public function messagePost() {
        $message = M('OrderGuestbook');
        $order_id = I('post.order_id');
        $this->isMyOrder($order_id);
        $msg = I('post.msg');
        $url = U('portal/home/index');
        if (!$msg) {
            $this->msg('请输入留言内容', $url);
        }
        $data['msg'] = $msg;
        $data['order_id'] = $order_id;
        $data['user_login'] = $this->user_login;
        $data['create_time'] = $this->time;
        if ($message->add($data)) {
            $this->msg('留言成功', $url);
        } else {
            $this->msg('留言失败', $url);
        }
    }

    public function detail() {
        $id = I('get.id');
        $this->isMyOrder($id);
        $this->assign('id', $id);
        $order = $this->match->where(array('id' => $id))->find();
        $this->assign('order', $order);
        $provide_user = $this->user_model->where(array('user_login' => $order['provide_user']))->find();
        $provide_user_parent=  $this->user_model->where(array('id'=>$provide_user['parent']))->find();
        $this->assign('provide_user_parent', $provide_user_parent);
        $get_user = $this->user_model->where(array('user_login' => $order['get_user']))->find();
        $get_user_parent=  $this->user_model->where(array('id'=>$get_user['parent']))->find();
        $this->assign('get_user_parent', $get_user_parent);
        $this->assign('provide_user', $provide_user);
        $this->assign('get_user', $get_user);
        $this->display();
    }

    public function upload() {
        $upload = new \Think\Upload(); //  实例化上传类
        $upload->maxSize = 3145728; //  设置附件上传大小
        $upload->exts = array('jpg', 'gif', 'png', 'jpeg'); //  设置附件上传类
        $upload->savePath = '/photo/'; //  设置附件上传目录
        //  上传单个文件
        $info = $upload->uploadOne($_FILES['file']);
        if (!$info) {//  上传错误提示错误信息
            $this->error($upload->getError());
        } else {//  上传成功 获取上传文件信息
            $file = "/Uploads" . $info['savepath'] . $info['savename'];
            $data['name'] = $file;
            $this->ajaxReturn($data, 'JSON');
        }
    }

    /**
     * 确认打款
     * @param type $param
     */
    public function confirmPay() {
        $id = I('get.id');
        $this->isMyOrder($id);
        $this->assign('id', $id);
        $this->display();
    }
    /**
     * 确认打款提交
     */
    public function confirmPayPost() {
        $order_id = I('post.order_id');
        $this->isMyOrder($order_id);
        $confirm_pay = I('post.confirm_pay');
        $img = I('post.img');
        $url = U('portal/home/index');
        if (!$order_id) {
            $this->msg('系统繁忙', '/');
        }
        if ($confirm_pay != 1) {
            $this->msg('请先确认后，再提交。', $url);
        }
        if (!$img) {
            $this->msg('请先上传打款图片，再提交。', $url);
        }
        $order = $this->match->where(array('id' => $order_id))->find();
        //防止重复提交
        if($order['status']==1){
            $this->msg('请勿重复提交', $url);
        }
        //修改打款方排单状态
        $this->provide_help->where(array('id' => $order['pid']))->save(array('confirm_status' => 1));
        //修改订单状态
        $data['status'] = 1;
        $data['pay_time'] = $this->time;
        $data['pay_img'] = $img;
        $this->match->where(array('id' => $order_id))->save($data);
        //为打款方 新增订单冻结凭证
        $provide_order = M('ProvideOrder');
        $po=$provide_order->where(array('match_id'=>$order_id,'user_login'=>$order['user_login']))->find();
        if($po){
            $this->msg('请勿重复提交', $url);
        }
        $dd['match_id'] = $order_id;
        $dd['user_login'] = $order['provide_user'];
        $dd['create_time'] = $this->time;
        $dd['money'] = $order['money'];
        $res = $provide_order->add($dd);
        //2小时内打款后立即支付3%利息,4小时内打款后立即支付2%利息,6小时内打款后立即支付1%利息,
        $this->payBonusByTime($order['create_time'], $order['money']);
        if ($res) {
            $this->msg('操作成功,请联系对方收款', $url);
        } else {
            $this->msg('操作失败', $url);
        }
    }

    /**
     * 确认收款
     */
    public function confirmIncome() {
        $id = I('get.id');
        $this->isMyOrder($id);
        $order=$this->match->find($id);
        $this->assign('order', $order);
        $this->assign('id', $id);
        $this->display();
    }

    public function confirmIncomePost() {
        $order_id = I('post.order_id');
        $this->isMyOrder($order_id);
        $confirm_income = I('post.confirm_income');
        $img = I('post.img');
        $url = U('portal/home/index');
        if (!$order_id) {
            $this->msg('系统繁忙', '/');
        }
        if (!$confirm_income) {
            $this->msg('请先确认后，再提交。。', $url);
        }
        if ($confirm_income == 1) {//正常订单
            $order = $this->match->where(array('id' => $order_id))->find();
            
            //防止重复提交
            if ($order['status'] == 2) {
                $this->msg('系统繁忙', '/');
            }
            //修改收款方排单状态
            $this->get_help->where(array('id' => $order['gid']))->save(array('confirm_status' => 1));
            //支付推荐奖和管理奖
//            $uu = new UserController();
//            $uu->bonus($order['provide_user'], $order['money']);

            //修改订单状态
            $data['status'] = 2;
            $data['confirm_time'] = $this->time;
            $res = $this->match->where(array('id' => $order_id))->save($data);

            if ($res) {
                $this->msg('交易成功', $url);
            } else {
                $this->msg('操作失败', $url);
            }
        } elseif ($confirm_income == 2) {//订单投诉
            if (!$img) {
                $this->msg('请先上传图片，再提交。', $url);
            }
            //修改订单状态
            $data['is_complain'] = 1;
            $data['complain_img'] = $img;
            $res = $this->match->where(array('id' => $order_id))->save($data);
            if ($res) {
                $this->msg('提交成功,等待处理中。。。', $url);
            } else {
                $this->msg('操作失败', $url);
            }
        }
    }
    /**
     * 2小时内打款后立即支付3%利息,4小时内打款后立即支付2%利息,6小时内打款后立即支付1%利息,
     * @param type $match_time 匹配时间
     */
    public function payBonusByTime($match_time, $money) {
        $match_time = strtotime($match_time);
        $diff_time = time() - $match_time;
        $diff_hours = $diff_time / 3600;
        if ($diff_hours <= 2) {
            $num = $money * 3 / 100;
            $num = (int) $num;
            $this->addRecord($this->user_login, 'manger_money', "+{$num}", "2小时内打款后支付3%利息");
            $this->user_model->where(array('user_login' => $this->user_login))->setInc('manger_money', $num);
        } elseif ($diff_hours <= 4) {
            $num = $money * 2 / 100;
            $num = (int) $num;
            $this->addRecord($this->user_login, 'manger_money', "+{$num}", "4小时内打款后支付2%利息");
            $this->user_model->where(array('user_login' => $this->user_login))->setInc('manger_money', $num);
        } elseif ($diff_hours <= 6) {
            $num = $money * 1 / 100;
            $num = (int) $num;
            $this->addRecord($this->user_login, 'manger_money', "+{$num}", "6小时内打款后支付1%利息");
            $this->user_model->where(array('user_login' => $this->user_login))->setInc('manger_money', $num);
        }
    }

}
