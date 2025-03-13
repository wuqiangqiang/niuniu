<?php

/**
 * User: yanhong.liu
 * Date: 2017/11/30
 * Time: 16:16
 */

namespace Portal\Controller;

use Common\Controller\HomebaseController;


class DashengController extends HomebaseController
{
    public function __construct()
    {
        parent::__construct();
        $this->uid = session('uid');
    }

    public function gamerecord() {
        $page = ceil(I('page'));
        $size = 10;
        $kf_list = M('user_room')->where(['uid' => $this->uid])->order('`id` DESC')->limit(($page-1)*$size, $size)->select();
        foreach ( $kf_list as $k => $v ) {
            $kf_list[$k]['datetime'] = date( 'Y-m-d H:i:s', $v['overtime'] );
        }
        echo json_encode( $kf_list );
    }

    public function firendmanager() {
        $this->display();
    }

    public function sendPhoneCode() {
        $randStr = str_shuffle('1234567890');
        $rand = substr($randStr,0,4);
        $url='http://sms.smsyun.cc:9012';//系统接口地址
        $content=urlencode("【授权大厅】您的验证码是:".$rand.",5分钟后过期，请您及时验证!");
        $mobile = I('post.mobile');
        //$username="12934173_1";//用户名
        $username="15097938_1";
        $password="ef6d22jm";
        //$password="1ptogq4s";//密码百度BASE64加密后密文
        $url=$url."/servlet/UserServiceAPIUTF8?method=sendSMS&extenno=&isLongSms=0&username=".$username."&password=".$password."&smstype=2&mobile={$mobile}&content=".$content;
        $html = file_get_contents($url);
        if(!strpos($html,"success")){
            session('phoneCode', $rand);
            echo json_encode(['status' => '1']);
        } else {
            echo json_encode(['status' => '0', 'info' => '发送失败']);
        }
    }

    public function bindphone() {
        $mobile = I('post.mobile');
        $code = I('post.code');
        if($code != session('phoneCode')) {
            echo json_encode(['status' => '0', 'info' => '验证码不正确']);
        } else {
            M('user')->where(['id' => $this->uid])->save(['mobile' => $mobile]);
            echo json_encode(['status' => '1', 'info' => '绑定成功']);
        }
    }

    public function isbindphone() {
        $user = M('user')->where(['id' => $this->uid])->find();
        if(!empty($user['mobile'])) {
            echo json_encode(['is' => '1']);
        } else {
            echo json_encode(['is' => '0']);
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
        $gz2xx=explode(',',$rule['play']['gz2']);

        $szxx=explode(',',$rule['play']['sz']);
        $sxxx=explode(',',$rule['play']['sx']);
        $cmxx=explode(',',$rule['play']['cm']);

        $dkxx['df']=$dfxx[$rule['df']];
        $dkxx['gz']=$gzxx[$rule['gz']];
        $dkxx['sz']=$szxx[$rule['sz']];
        $dkxx['sx']=$sxxx[$rule['sx']];
        $dkxx['cm']=$cmxx[$rule['cm']];

        $dkxx['wfname']=$rule['play']['name'];
        $dkxx['userlist']=json_decode($dkxx['user'],true);
        foreach ($pxxx as $key => $value) {
            if($rule['px'][$key]==1){
                $dkxx['px'][]=$value;
            }
        }

        foreach ($gz2xx as $key => $value) {
            if($rule['gz2'][$key]==1){
                $dkxx['gz2'][]=$value;
            }
        }

        $dkxx['over']=json_decode($dkxx['overxx'],true);
        $this->assign('room',$dkxx);

        $map=array();
        $map['room']=$id;
        $dj=M('dj_room')->where($map)->order('js asc')->select();


        $this->assign('dj',$dj);
        $this->display('xiangqing');
    }
}