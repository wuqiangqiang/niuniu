<?php
// +----------------------------------------------------------------------
// | ThinkCMF [ WE CAN DO IT MORE SIMPLE ]
// +----------------------------------------------------------------------
// | Copyright (c) 2013-2014 http://www.thinkcmf.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: Tuolaji <479923197@qq.com>
// +----------------------------------------------------------------------
/**
 */
namespace Admin\Controller;
use Common\Controller\AdminbaseController;
class PublicController extends AdminbaseController {

    public function _initialize() {
        C(S('sp_dynamic_config'));//加载动态配置
    }
    
    //后台登陆界面
    public function login() {
       
        $admin_id=session('ADMIN_ID');
        if(!empty($admin_id)){//已经登录
            redirect(U("admin/index/index"));
        }else{
            $site_admin_url_password =C("SP_SITE_ADMIN_URL_PASSWORD");
            $upw=session("__SP_UPW__");
            if(!empty($site_admin_url_password) && $upw!=$site_admin_url_password){
                redirect(__ROOT__."/");
            }else{
                session("__SP_ADMIN_LOGIN_PAGE_SHOWED_SUCCESS__",true);
                $this->display(":login");
            }
        }
    }

    
    public function logout(){
        session('ADMIN_ID',null); 
        redirect(__ROOT__."/");
    }
    
    public function dologin()
    {
        $login_page_showed_success = session("__SP_ADMIN_LOGIN_PAGE_SHOWED_SUCCESS__");
        if (!$login_page_showed_success) {
            $this->error('login error!');
        }
        $name = I("post.username");
        if (empty($name)) {
            $this->error(L('USERNAME_OR_EMAIL_EMPTY'));
        }
        $pass = I("post.password");
        if (empty($pass)) {
            $this->error(L('PASSWORD_REQUIRED'));
        }
        // $verrify = I("post.verify");
        // if (empty($verrify)) {
        //  $this->error(L('CAPTCHA_REQUIRED'));
        // }
        // if (!sp_check_verify_code()) {
        //  $this->error(L('CAPTCHA_NOT_RIGHT'));
        // } else {
            
        // }
        $user = D("Common/Users");
            if (strpos($name, "@") > 0) {
                $where['user_email'] = $name;
            } else {
                $where['user_login'] = $name;
            }
            $result = $user->where($where)->find();
            if (!empty($result) && $result['user_type'] == 1) {
                if (sp_compare_password($pass, $result['user_pass'])) {
                    $role_user_model = M("RoleUser");
                    $role_user_join = C('DB_PREFIX') . 'role as b on a.role_id =b.id';
                    $groups = $role_user_model->alias("a")->join($role_user_join)->where(array("user_id" => $result["id"], "status" => 1))->getField("role_id", true);
                    if ($result["id"] != 1 && (empty($groups) || empty($result['user_status']))) {
                        $this->error(L('USE_DISABLED'));
                    }
                    session('ADMIN_ID', $result["id"]);
                    session('name', $result["user_login"]);
                    $result['last_login_ip'] = get_client_ip(0, true);
                    $result['last_login_time'] = date("Y-m-d H:i:s");
                    $user->save($result);
                    cookie("admin_username", $name, 3600 * 24 * 30);
                    cookie("admin_password", $pass, 3600 * 24 * 30);
                    $this->success(L('LOGIN_SUCCESS'), U("Index/index"));
                } else {
                    $this->error(L('PASSWORD_NOT_RIGHT'));
                }
            } else {
                $this->error(L('USERNAME_NOT_EXIST'));
            }
    }






    public function usersession()
    {   

        // 查询出用户的openid
        $where['openid'] = $_GET['openid'];
        $user = M('user')->where($where)->find();

        //用户存在了，设置session，直接登录
        if (!empty($user) && !empty($user['openid'])) {

            session('uid', $user["id"]);
            session('user_login', $user["user_login"]);
            session('user', $user);
            $result['last_login_ip'] = get_client_ip(0, true);
            $result['last_time'] = date("Y-m-d H:i:s");
            M('user')->where(array('id' => $user['id']))->save($result);
            cookie("user_login", $name, 3600 * 24 * 30);

            // 查询 session 中的 rediretUrl ，然后跳转
            $jumpurl = session('jumpurl');
            session('jumpurl', null);
            header("Location: " . $jumpurl);

        } else {
          
            //用户不存在，进入头像获取流程
            // $url = Wechat::app()->oauth->scopes(['snsapi_userinfo'])->setRedirectUrl($GLOBALS['workRootUrl'] . '/game.php/login/weixinloginback.html?memberHost=' . $_SERVER['HTTP_HOST'])->redirect() -> getTargetUrl();
            // $this->redirect($url);
            
            echo "user info error";          
        }
    }



    public function userroom() {   

        // 查询出用户的openid
        $where['id'] = $_GET['id'];
        $user = M('user')->where($where)->find();

        //用户存在了，设置session，直接登录
        if (!empty($user)) {

            $mapxx['uid'] = $_GET['id'];
            $dkxx = M('user_room')->where($mapxx)->order("id desc")->select();
            
            if(!empty($dkxx)){
                 
                echo "<br ><br >";

                foreach ($dkxx as $key => $value) {      
                  
                  echo "结束时间：".(date('Y-m-d H:i:s', $value['overtime']))." ， 房号：".$value['room']."<br >";
                  echo "<a href='http://".$_SERVER['HTTP_HOST']."/index.php/portal/home/xiangqing/room/".$value['room']."'>点击查询房间</a><br >";

                  //if($value['zjs'] == $value['js']){
                  //  echo "<a href='http://".$_SERVER['HTTP_HOST']."/index.php/portal/home/xiangqing/room/".$value['id']."'>点击查询房间</a><br >";
                  //} else {
                  //  echo "<br ><br >";
                  //}
                }
            } else {
                echo "玩家未创建任何房间";
            }

        } else {
            echo "user info error";          
        }
    }



    
  
  
  
  
  
  
  
  


    

}