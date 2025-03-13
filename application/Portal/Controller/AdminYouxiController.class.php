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

class AdminYouxiController extends AdminbaseController {
	

	function _initialize() {
        parent::_initialize();
    }
    /*
     * 游戏种类
     */
    public function GameList(){
    	 if($_POST){
            $_GET=$_POST;
        }
        $where=' 1=1 ';

        if($_GET['name']){
            $where=$where.' and name LIKE "%'.$_GET['name'].'%"';
        }
        $count = M('game')->where($where)->count();
        $page = $this->page($count, 10);
        $posts = M('game')
                ->where($where)
                ->order(array("`sort`" => "desc"))
                ->limit($page->firstRow, $page->listRows)
                ->select();
        $this->assign('posts', $posts);
        $this->assign('page', $page->show('Admin'));

        $this->display();
    }
    public function Add_Game(){
    	$this->display();
    }
    public function Add_Game_Post(){
    	 if(IS_POST){
            $post=I("post.");
            $res=M('game')->add($post);
            if($res){
                $this->success('添加成功',U('AdminYouxi/GameList'));
            }
        }
    }
    public function Edit_Game(){
    	$id=I('get.id');
    	$post = M("game")->where(array('id'=>$id))->find();
    	$this->assign('post',$post);
    	$this->display();
    }
    public function Edit_Game_Post(){
    	$id=I('post.id');
    	$post=I('post.');
        $rs = M('game')->where(array("id" => $id))->find();
         if (IS_POST) {
            if (M('game')->where(array("id" => $id))->save($post) !== false) {
                $this->success("更新成功！");
            } else {
                $this->error("更新失败！");
            }
        }
    }
     /*
     * 游戏玩法
     */
    public function RuleList(){
    	 if($_POST){
            $_GET=$_POST;
        }
        $where=' 1=1 ';

        if($_GET['name']){
            $where=$where.' and name LIKE "%'.$_GET['name'].'%"';
        }
        if($_GET['type']){
            $where=$where.' and type="'.$_GET['type'].'"';
        }
        $count = M('rule')->where($where)->count();
        $page = $this->page($count, 10);
        $posts = M('rule')
                ->where($where)
                ->order(array("id" => "desc"))
                ->limit($page->firstRow, $page->listRows)
                ->select();
        $this->assign('posts', $posts);
        $this->assign('page', $page->show('Admin'));
        $game = M('game')->select();
        $this->assign('game',$game);
        $this->display();
    }
    public function Add_Rule(){
        $game = M('game')->select();
        $this->assign('game',$game);
    	$this->display();
    }
    public function Add_Rule_Post(){
    	 if(IS_POST){
            $post=I("post.");
            $res=M('rule')->add($post);
            if($res){
                $this->success('添加成功',U('AdminYouxi/RuleList'));
            }
        }
    }
    public function Edit_Rule(){
    	$id=I('get.id');
    	$post = M("rule")->where(array('id'=>$id))->find();
    	$this->assign('post',$post);
        $game = M('game')->select();
        $this->assign('game',$game);
    	$this->display();
    }
    public function Edit_Rule_Post(){
    	$id=I('post.id');
    	$post=I('post.');
        $rs = M('rule')->where(array("id" => $id))->find();
         if (IS_POST) {
            if (M('rule')->where(array("id" => $id))->save($post) !== false) {
                $this->success("更新成功！");
            } else {
                $this->error("更新失败！");
            }
        }
    }
}
