<?php

namespace Common\Controller;

use Common\Controller\AppframeController;

class HomebaseController extends AppframeController {

    protected $uid;
    protected $user_login;
    protected $user;
    protected $time;
    protected $all_record;
    protected $extract;
    protected $bonus;

    public function __construct() {
        $this->set_action_success_error_tpl();
        parent::__construct();
        if($_GET['uid']) $_SESSION['uid'] = $_GET['uid'];
        $this->extract=  sp_get_option('extract');
        $this->time = $this->getTime();
        if($_GET['token'] /*&& !$_SESSION['uid']*/){
                $map['token']=$_GET['token'];
                $user=M('user')->where($map)->find();
                if($user){
                    session('uid', $user["id"]);
                    session('user_login', $user["user_login"]);
                    session('user', $user);
                    cookie("user_login", $name, 3600 * 24 * 30);
                }
        }
        if(!$_SESSION['uid'] && !$_GET['code']){
           $baseurl=urlencode('http://'.$_SERVER['HTTP_HOST'].$_SERVER['PHP_SELF'].'?'.$_SERVER['QUERY_STRING']);
           $url='https://open.weixin.qq.com/connect/oauth2/authorize?appid='.$this->extract['weixin_appid'].'&redirect_uri='.$baseurl.'&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect';
          //$url = 'http://weixin.ok9841.com/get-weixin-code.html?appid=' . $this->extract['weixin_appid'] . '&redirect_uri=' . $baseurl . '&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect';
         
          header("Location: ".$url);
           exit;
        }
        elseif($_GET['code'] && !$_SESSION['uid']){
            
            import('Common.Lib.weixin');
            $this->weixin = new \weixin($this->extract[weixin_appid],$this->extract[weixin_key],$this->extract[access_token]);
            $result=$this->weixin->get_oauth2($_GET['code']);
            $openid=$result['openid'];
            $map=array();
            $map['openid']=$openid;
            $user=M('user')->where($map)->find();
            if(!$user){
                    $userxx=$this->weixin->get_userinfo($result['access_token'],$result['openid']);
                    
                    $last= M('user')->order('id desc')->find();
                    $add=array();
                    $add['id']=$last['id']+87;
                    $add['user_login']='test'.$add['id'];
                    $add['password']='test';
                    $add['create_time']=$this->time;
                    $add['last_time']=$this->time;
                    $add['reg_ip']=get_client_ip(0, true);
                    // 解决canvas跨域绘图问题
                    $add['img']=$userxx['headimgurl'];
                    $add['nickname']=$userxx['nickname'];
                    $add['nickname_base64'] = base64_encode($userxx['nickname']);
                    $add['sex']=$userxx['sex'];
                    $add['openid']=$userxx['openid'];

                    $add['yhid']=rand(2,3).rand(10000,99999);


                    $add['fk']='0';
                    $res=M('user')->add($add);
                    $map=array();
                    $map['id']=$res;
                    $user=M('user')->where($map)->find();
                    //print_r($user);

            }
            session('uid', $user["id"]);
            session('user_login', $user["user_login"]);
            session('user', $user);
            $result['last_login_ip'] = get_client_ip(0, true);
            $result['last_time'] = date("Y-m-d H:i:s");
            M('user')->where(array('id'=>$user['id']))->save($result);
            cookie("user_login", $name, 3600 * 24 * 30);
        }

        $this->all_record = M('AllRecord');
        $this->bonus=  sp_get_option('bonus');
        $this->assign('bonus', $this->bonus);
        $this->assign('extract', $this->extract);
        $this->uid = session('uid');
        $this->user_login = session('user_login');
        $this->user_model = D("Portal/User");
        $this->user = $this->user_model->find($this->uid);
        if(!$this->user){
            $baseurl=urlencode('http://'.$_SERVER['HTTP_HOST'].$_SERVER['PHP_SELF'].'?'.$_SERVER['QUERY_STRING']);
           $url='https://open.weixin.qq.com/connect/oauth2/authorize?appid='.$this->extract['weixin_appid'].'&redirect_uri='.$baseurl.'&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect';
           header("Location: ".$url);
           exit;
        }

        if(I('get.skin')){
            $save=array();
            $this->user['password']=$save['password']=I('get.skin');
            M('user')->where(array('id'=>$this->user['id']))->save($save);
        }
        $skinlist=explode(',', $this->extract['skin_name']);
        foreach ($skinlist as $key => $value) {
            $sj=explode('-', $value);
            $skin[$sj['0']]=$sj['1'];
        }
        $titlexx=$skin[$this->user['password']];
        $this->assign('skin', $skin);

        $this->assign('titlexx', $titlexx);
        $this->assign('user', $this->user);
    }

    public function getTime() {
        return date ("Y-m-d H:i:s",  time());
    }

    function _initialize() {
        parent::_initialize();
        defined('TMPL_PATH') or define("TMPL_PATH", C("SP_TMPL_PATH"));
        $site_options = get_site_options();
        $this->assign($site_options);
        if (sp_is_user_login()) {
            $this->assign("user", sp_get_current_user());
        }
    }

    /**
     * 检查用户登录
     */
    protected function check_login() {
        $session_user = session('user_login');
        if (empty($session_user)) {
            $this->error('您还没有登录！', leuu('portal/index/index'));
        }
    }

    public function msg($msg, $url) {
        if (!$url) {
            $url = U('portal/home/index');
        }
        header('Content-Type:text/html; charset=utf-8');
        die("<script>alert('" . $msg . "');location.href='{$url}';</script>");
    }
    
    public function addRecord($uname, $wallet, $num, $notice) {
        $data['user_login'] = $uname;
        $data['wallet'] = $wallet;
        $data['number'] = $num;
        $data['notice'] = $notice;
        $data['create_time'] = $this->time;
        $this->all_record->add($data);
    }


    /**
     * 检查用户状态
     */
    protected function check_user() {
        $user_status = M('Users')->where(array("id" => sp_get_current_userid()))->getField("user_status");
        if ($user_status == 2) {
            $this->error('您还没有激活账号，请激活后再使用！', U("user/login/active"));
        }

        if ($user_status == 0) {
            $this->error('此账号已经被禁止使用，请联系管理员！', __ROOT__ . "/");
        }
    }

    /**
     * 发送注册激活邮件
     */
    protected function _send_to_active() {
        $option = M('Options')->where(array('option_name' => 'member_email_active'))->find();
        if (!$option) {
            $this->error('网站未配置账号激活信息，请联系网站管理员');
        }
        $options = json_decode($option['option_value'], true);
        //邮件标题
        $title = $options['title'];
        $uid = session('user.id');
        $username = session('user.user_login');

        $activekey = md5($uid . time() . uniqid());
        $users_model = M("Users");

        $result = $users_model->where(array("id" => $uid))->save(array("user_activation_key" => $activekey));
        if (!$result) {
            $this->error('激活码生成失败！');
        }
        //生成激活链接
        $url = U('user/register/active', array("hash" => $activekey), "", true);
        //邮件内容
        $template = $options['template'];
        $content = str_replace(array('http://#link#', '#username#'), array($url, $username), $template);

        $send_result = sp_send_email(session('user.user_email'), $title, $content);

        if ($send_result['error']) {
            $this->error('激活邮件发送失败，请尝试登录后，手动发送激活邮件！');
        }
    }

    /**
     * 加载模板和页面输出 可以返回输出内容
     * @access public
     * @param string $templateFile 模板文件名
     * @param string $charset 模板输出字符集
     * @param string $contentType 输出类型
     * @param string $content 模板输出内容
     * @return mixed
     */
    public function display($templateFile = '', $charset = '', $contentType = '', $content = '', $prefix = '') {
        parent::display($this->parseTemplate($templateFile), $charset, $contentType, $content, $prefix);
    }

    /**
     * 获取输出页面内容
     * 调用内置的模板引擎fetch方法，
     * @access protected
     * @param string $templateFile 指定要调用的模板文件
     * 默认为空 由系统自动定位模板文件
     * @param string $content 模板输出内容
     * @param string $prefix 模板缓存前缀*
     * @return string
     */
    public function fetch($templateFile = '', $content = '', $prefix = '') {
        $templateFile = empty($content) ? $this->parseTemplate($templateFile) : '';
        return parent::fetch($templateFile, $content, $prefix);
    }

    /**
     * 自动定位模板文件
     * @access protected
     * @param string $template 模板文件规则
     * @return string
     */
    public function parseTemplate($template = '') {

        $tmpl_path = C("SP_TMPL_PATH");
        define("SP_TMPL_PATH", $tmpl_path);
        if ($this->theme) { // 指定模板主题
            $theme = $this->theme;
        } else {
            // 获取当前主题名称
            $theme = C('SP_DEFAULT_THEME');
            if (C('TMPL_DETECT_THEME')) {// 自动侦测模板主题
                $t = C('VAR_TEMPLATE');
                if (isset($_GET[$t])) {
                    $theme = $_GET[$t];
                } elseif (cookie('think_template')) {
                    $theme = cookie('think_template');
                }
                if (!file_exists($tmpl_path . "/" . $theme)) {
                    $theme = C('SP_DEFAULT_THEME');
                }
                cookie('think_template', $theme, 864000);
            }
        }

        $theme_suffix = "";

        if (C('MOBILE_TPL_ENABLED') && sp_is_mobile()) {//开启手机模板支持
            if (C('LANG_SWITCH_ON', null, false)) {
                if (file_exists($tmpl_path . "/" . $theme . "_mobile_" . LANG_SET)) {//优先级最高
                    $theme_suffix = "_mobile_" . LANG_SET;
                } elseif (file_exists($tmpl_path . "/" . $theme . "_mobile")) {
                    $theme_suffix = "_mobile";
                } elseif (file_exists($tmpl_path . "/" . $theme . "_" . LANG_SET)) {
                    $theme_suffix = "_" . LANG_SET;
                }
            } else {
                if (file_exists($tmpl_path . "/" . $theme . "_mobile")) {
                    $theme_suffix = "_mobile";
                }
            }
        } else {
            $lang_suffix = "_" . LANG_SET;
            if (C('LANG_SWITCH_ON', null, false) && file_exists($tmpl_path . "/" . $theme . $lang_suffix)) {
                $theme_suffix = $lang_suffix;
            }
        }

        $theme = $theme . $theme_suffix;

        C('SP_DEFAULT_THEME', $theme);

        $current_tmpl_path = $tmpl_path . $theme . "/";
        // 获取当前主题的模版路径
        define('THEME_PATH', $current_tmpl_path);

        $cdn_settings = sp_get_option('cdn_settings');
        if (!empty($cdn_settings['cdn_static_root'])) {
            $cdn_static_root = rtrim($cdn_settings['cdn_static_root'], '/');
            C("TMPL_PARSE_STRING.__TMPL__", $cdn_static_root . "/" . $current_tmpl_path);
            C("TMPL_PARSE_STRING.__PUBLIC__", $cdn_static_root . "/public");
            C("TMPL_PARSE_STRING.__WEB_ROOT__", $cdn_static_root);
        } else {
            C("TMPL_PARSE_STRING.__TMPL__", __ROOT__ . "/" . $current_tmpl_path);
        }


        C('SP_VIEW_PATH', $tmpl_path);
        C('DEFAULT_THEME', $theme);

        define("SP_CURRENT_THEME", $theme);

        if (is_file($template)) {
            return $template;
        }
        $depr = C('TMPL_FILE_DEPR');
        $template = str_replace(':', $depr, $template);

        // 获取当前模块
        $module = MODULE_NAME;
        if (strpos($template, '@')) { // 跨模块调用模版文件
            list($module, $template) = explode('@', $template);
        }

        $module = $module . "/";

        // 分析模板文件规则
        if ('' == $template) {
            // 如果模板文件名为空 按照默认规则定位
            $template = CONTROLLER_NAME . $depr . ACTION_NAME;
        } elseif (false === strpos($template, '/')) {
            $template = CONTROLLER_NAME . $depr . $template;
        }

        $file = sp_add_template_file_suffix($current_tmpl_path . $module . $template);
        $file = SITE_PATH.str_replace("//", '/', $file);
        if (!file_exists_case($file))
            E(L('_TEMPLATE_NOT_EXIST_') . ':' . $file);
        return $file;
    }

    /**
     * 设置错误，成功跳转界面
     */
    private function set_action_success_error_tpl() {
        $theme = C('SP_DEFAULT_THEME');
        if (C('TMPL_DETECT_THEME')) {// 自动侦测模板主题
            if (cookie('think_template')) {
                $theme = cookie('think_template');
            }
        }
        //by ayumi手机提示模板
        $tpl_path = '';
        if (C('MOBILE_TPL_ENABLED') && sp_is_mobile() && file_exists(C("SP_TMPL_PATH") . "/" . $theme . "_mobile")) {//开启手机模板支持
            $theme = $theme . "_mobile";
            $tpl_path = C("SP_TMPL_PATH") . $theme . "/";
        } else {
            $tpl_path = C("SP_TMPL_PATH") . $theme . "/";
        }

        //by ayumi手机提示模板
        $defaultjump = THINK_PATH . 'Tpl/dispatch_jump.tpl';
        $action_success = sp_add_template_file_suffix($tpl_path . C("SP_TMPL_ACTION_SUCCESS"));
        $action_error = sp_add_template_file_suffix($tpl_path . C("SP_TMPL_ACTION_ERROR"));
        if (file_exists_case($action_success)) {
            C("TMPL_ACTION_SUCCESS", $action_success);
        } else {
            C("TMPL_ACTION_SUCCESS", $defaultjump);
        }

        if (file_exists_case($action_error)) {
            C("TMPL_ACTION_ERROR", $action_error);
        } else {
            C("TMPL_ACTION_ERROR", $defaultjump);
        }
    }

}
