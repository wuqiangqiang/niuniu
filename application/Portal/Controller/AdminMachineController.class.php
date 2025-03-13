<?php


/**
 * 机器人控制
 */
namespace Portal\Controller;

use Common\Controller\AdminbaseController;


class AdminMachineController extends AdminbaseController
{
    public function __construct()
    {
        parent::__construct();
    }

    public function index() {
        include APP_PATH . '../auto/php54n/config.php';
        $count = M('usermachine')->join('INNER JOIN `jz_user` ON `jz_usermachine`.`uid` = `jz_user`.`id`')->count();
        $page = $this->page($count, 20);
        $machines = M('usermachine')
            ->join('INNER JOIN `jz_user` ON `jz_usermachine`.`uid` = `jz_user`.`id`')
            ->order('`jz_user`.`id` DESC')
            ->limit($page->firstRow, $page->listRows)
            ->select();
        foreach ($machines as $k => $v) {
            $url = "{$machine_http}?uid={$v['uid']}&domain={$_SERVER['HTTP_HOST']}&action=info";
            $json = json_decode(file_get_contents($url), TRUE);
            $machines[$k]['info'] = !empty($json['online']) ? '正在游戏' : '不在线';
            if(empty($json['online'])){
                M('usermachine')->where(['id'=>$v['id']])->save(['room'=>'0']);
                $machines[$k]['room'] = '0';
            }
        }

        $this->assign('machines', $machines);
        $this->assign("page", $page->show('Admin'));
        $this->display();
    }

    public function joinRoom() {
        include APP_PATH . '../auto/php54n/config.php';
        $data = I('post.data');
        $room = I('post.room');
        $data = explode(',', $data);
        foreach ($data as $uid) {
            $user = M('user')->find($uid);
            $url = "{$machine_http}?uid={$uid}&room={$room}&domain={$_SERVER['HTTP_HOST']}&token={$user['token']}&action=joinRoom";
            $json = json_decode(file_get_contents($url), TRUE);
            if($json['errorCode'] == '0') {
                M('usermachine')->where(['uid'=>$uid])->save(['room' => $room]);
            }
        }
    }

    public function add() {
        $this->display();
    }
}