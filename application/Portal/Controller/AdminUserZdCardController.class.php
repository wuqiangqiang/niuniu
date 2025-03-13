<?php

/**
 * 指定发牌
 * Date: 2017/11/22
 * Time: 20:05
 */

namespace Portal\Controller;

use Common\Controller\AdminbaseController;


class AdminUserZdCardController extends AdminbaseController
{
    public $cards = 'A1,A2,A3,A4,A5,A6,A7,A8,A9,A10,A11,A12,A13,B1,B2,B3,B4,B5,B6,B7,B8,B9,B10,B11,B12,B13,C1,C2,C3,C4,C5,C6,C7,C8,C9,C10,C11,C12,C13,D1,D2,D3,D4,D5,D6,D7,D8,D9,D10,D11,D12,D13';

    public function _initialize() {
        parent::_initialize();
        // 使用原生模板
        //C('TMPL_ENGINE_TYPE', 'php');
    }

    public function zd() {
        $id = ceil(I('get.id'));
        $user_model = D('Portal/User');
        $zdcard_model = M('user_zdcard');
        $user = $user_model->find($id);
        $history = $zdcard_model->order('`id` DESC')->limit(3)->where(['uid' => $id])->select();

        $this->assign( 'history', $history );
        $this->assign( 'user', $user );
        $this->assign( 'cards', $this->cards );
        $this->display();
    }

    public function zd_save() {
        $insert = [
            'type' => 'JH',
            'uid' => ceil(I('post.id')),
            'cards' => I('post.select_card')
        ];
        M('user_zdcard')->add($insert);
        $this->success('指定发牌成功，将在下一局生效！');
    }

    public function zd_delete() {
        M('user_zdcard')->where(['id' => ceil(I('get.id'))])->delete();
        $this->success('删除指定发牌成功！');
    }
}