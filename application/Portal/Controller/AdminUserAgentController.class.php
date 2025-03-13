<?php

/**
 * 下级代理管理
 * Date: 2017/11/22
 * Time: 20:05
 */

namespace Portal\Controller;

use Common\Controller\AdminbaseController;


class AdminUserAgentController extends AdminbaseController
{
    public function _initialize() {
        parent::_initialize();
    }

    public function index() {
        $id = ceil(I('get.id'));
        $nickname = I('get.nickname');

        $map = ['jz_useragent.daycard'=>['GT', 0]];
        if($id)
            $map['jz_useragent.uid'] = $id;
        if(!empty($nickname))
            $map['jz_user.nickname'] = ['like', "{$nickname}%"];

        $count = M('user')->join('INNER JOIN `jz_useragent` ON `jz_user`.id=`jz_useragent`.uid')->where($map)->count();
        $page = $this->page($count, 20);
        $users = M('user')
            ->join('INNER JOIN `jz_useragent` ON `jz_user`.id=`jz_useragent`.uid')
            ->where($map)
            ->limit($page->firstRow, $page->listRows)
            ->order('`jz_useragent`.`expire` ASC')
            ->select();

        $this->assign( 'users', $users );
        $this->assign('page', $page->show('Admin'));
        $this->assign('id', $id);
        $this->assign('nickname', $nickname);
        $this->display();
    }

    public function delete() {
        M('useragent')->where(['uid' => ceil(I('get.id'))])->delete();
        $this->success('操作成功！', '/Portal/AdminUserAgent/index');
    }

    public function op() {
        $id = ceil(I('post.id'));
        $op = I('post.op');
        $daycard = ceil(I('post.daycard'));
        $expire = strtotime(I('post.expire'));

        if(M('user')->where(['id' => $id])->count() < 1) {
            return $this->error('用户不存在', '/Portal/AdminUserAgent/index');
        }
        $line = $this->_init($id);

        // 增加
        if($op == 'incre') {
            M('useragent')->where(['uid' => $id])->setInc('daycard', $daycard);
            M('useragent')->where(['uid' => $id])->save(['expire' => $expire]);
        }
        // 减少
        if($op == 'reduce') {
            if( $line['daycard'] > $daycard )
                M('useragent')->where(['uid' => $id])->setDec('daycard', $daycard);
            else
                M('useragent')->where(['uid' => $id])->delete();
        }
        $this->success('操作成功！', '/Portal/AdminUserAgent/index');
    }

    protected function _init($id) {
        $line = M('useragent')->where(['uid'=>$id])->find();
        if( empty( $line ) ) {
            $add_id = M('useragent')->add(['uid' => $id]);
            $line = M('useragent')->where(['id' => $add_id])->find();
        }
        return $line;
    }
}










