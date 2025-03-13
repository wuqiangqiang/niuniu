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

class AdminOrderController extends AdminbaseController {

    protected $user_model;
    protected $all_record;
    protected $order_menu;
    protected $plan;
    protected $location;
    protected $type;
    protected $lottery_type;
 
    function _initialize() {
        parent::_initialize();
        $this->user_model = D("Portal/User");
        $this->all_record = M('AllRecord');
        $this->order_menu =M('order_menu');
        $this->plan = M('Plan');
        $this->location =M('location');
        $this->type =M('type');
        $this->lottery_type =M('lottery_type');
    }
    /*
     * 计划管理  
     */
    public function index(){
        if($_POST){
            $_GET=$_POST;
        }
        $where=' 1=1 ';
        if($_GET['type_id']){
            $where=$where.' and type_id='.$_GET['type_id'].' ';
            $src2=$this->order_menu->where(array('parentid' =>$_GET['type_id']))->order('id asc')->select();
            $this->assign('src2',$src2);
        }
        if($_GET['location']){
            $where=$where.' and location='.$_GET['location'].' ';
            $src3=$this->order_menu->where(array('parentid' =>$_GET['location']))->order('id asc')->select();
            $this->assign('src3',$src3);
        }
        if($_GET['sort']){
            $where=$where.' and sort='.$_GET['sort'].' ';
        }
        if($_GET['plan_name']){
            $where=$where.' and plan_name="'.$_GET['plan_name'].'"';
        }
        $count = $this->plan->where($where)->count();
        $page = $this->page($count, 10);
        $posts = $this->plan
                ->where($where)
                ->order(array("id" => "desc"))
                ->limit($page->firstRow, $page->listRows)
                ->select();
        $this->assign('sum', $sum);
        $this->assign('posts', $posts);
        $this->assign('page', $page->show('Admin'));
        $src=$this->order_menu->where(array('parentid' =>0))->order('id asc')->select();
        $this->assign('src',$src);
        $this->display();
    }
    public function pk10(){
        $count = $this->plan->where(array('type'=>'pk10'))->count();
        $page = $this->page($count, 10);
        $posts = $this->plan
                ->where(array('type_id'=>'2'))
                ->order(array("id" => "desc"))
                ->limit($page->firstRow, $page->listRows)
                ->select();
        $this->assign('sum', $sum);
        $this->assign('posts', $posts);
        $this->display();

    }

    public function Delete() {
        $id = I('get.id');
        $res = $this->plan->where(array('id' => $id))->delete();
        if ($res) {
            $this->success('删除成功');
        } else {
            $this->error('删除失败');
        }
    }
    

    /*
     * 添加时时彩计划
     */
    public function addPlan(){
        $src=$this->order_menu->where(array('parentid' =>0))->order('id asc')->select();
        $this->assign('src',$src);
        $this->display();
    }
    public function ajaxtype(){
        $id=I('post.id');
        $type=$this->order_menu->where(array('parentid'=>$id))->field('id,name')->select();
        exit(json_encode($type));
    }
    public function ajaxtype2(){
        $id=I('post.id');
        $type=$this->order_menu->where(array('id'=>$id))->field('select')->find();
        $list=explode(',', $type['select']);
        $list2=array();
        foreach ($list as $key => $value) {
            $xx=explode('-', $value);
            $list2[$key]['id']=$xx[0];
            $list2[$key]['name']=$xx[1];
        }
        exit(json_encode($list2));
    }
    
    
    public function addPlanPost(){
        $post=I('post');
        $post['type']=I('get.type');
        if(empty($post[plan_name])){
            $this->msg('请填写一个计划名');
        }
        // $name=$this->plan->where(array('plan_name'=>$post['plan_name'],'sort'=>$post['sort'],'stages'=>$post['stages']))->find();
        // if(!empty($name)){
        //     $this->msg('已存在此计划');
        // }
        if($post['weizhi']==6666){
            $sort=$this->order_menu->where(array('id'=>$post['sort']))->field('method')->find();
            if(count($post['rx'])<$sort['method']){
                $this->msg('任选位置不能少于'.$sort['method']);
            }
            $post['weizhi']=implode('#', $post['rx']);
        }
        $trr=$this->plan->add($post);
        if($trr){
            $this->msg('添加成功');
        }else{
            $this->msg('添加失败');
        }

        $this->display('addplan');
    }
    public function editPlan(){
        $id=I('get.id');
        $src=$this->order_menu->where(array('parentid' =>0))->order('id asc')->select();
        $plan=$this->plan->find($id);
        $src2=$this->order_menu->where(array('parentid' =>$plan['type_id']))->order('id asc')->select();
        $src3=$this->order_menu->where(array('parentid' =>$plan['location']))->order('id asc')->select();
        $type=$this->order_menu->where(array('id'=>$plan['location']))->field('select')->find();
        $list=explode(',', $type['select']);
        $src32=array();
        foreach ($list as $key => $value) {
            $xx=explode('-', $value);
            if($xx[0]=='6666'){
                $sjwz=explode('#', $plan[weizhi]);
                $this->assign('sjwz',$sjwz);
                $plan[weizhi]='6666';
            }
            $src32[$key]['id']=$xx[0];
            $src32[$key]['name']=$xx[1];
        }
        $this->assign('plan',$plan);
        $this->assign('src',$src);
        $this->assign('src2',$src2);
        $this->assign('src3',$src3);
        $this->assign('src32',$src32);
        $this->display();
    }
    public function editPlanPost(){
        $post=I('post');
        $post['type']=I('get.type');
        if(empty($post[plan_name])){
            $this->msg('请填写一个计划名');
        }
        // $name=$this->plan->where(array('plan_name'=>$post['plan_name'],'sort'=>$post['sort'],'stages'=>$post['stages']))->find();
        // if(!empty($name)&&($name['id']!=$post[id])){
        //     $this->msg('已存在此计划',U('addPlan'));
        // }
        if($post['weizhi']==6666){
            $sort=$this->order_menu->where(array('id'=>$post['sort']))->field('method')->find();
            if(count($post['rx'])<$sort['method']){
                $this->msg('任选位置不能少于'.$sort['method']);
            }
            $post['weizhi']=implode('#', $post['rx']);
        }
        $trr=$this->plan->where(array('id'=>$post[id]))->save($post);
        if($trr){
            $this->msg('添加成功');
        }else{
            $this->msg('添加失败');
        }
    }

   /*
     * 添加pk10计划
     */
    public function addPk10(){
        $src=$this->location->where(array('lottery_type_id' =>2))->order('id asc')->select();
        $this->assign('src',$src);
        $this->display();
    }
    
    
    public function addPk10Post(){
        $post=I('post');
        $post['type']=I('get.type');
        if(empty($post[plan_name])){
            $this->msg('请填写一个计划名',U('addPlan'));
        }
        if(empty($post[munber])){
           $post['munber']=mt_rand(00000,99999);
        }
        $name=$this->plan->where(array('plan_name'=>$post['plan_name'],'sort'=>$post['sort'],'stages'=>$post['stages']))->find();
        if(!empty($name)){
            $this->msg('已存在此计划',U('addPlan'));
        }
        $trr=$this->plan->add($post);
        if($trr){
            $this->msg('添加成功',U('addPlan'));
        }else{
            $this->msg('添加失败',U('addPlan'));
        }

        $this->display('addplan');
    }


    /*
     * 添加选项管理
     */

    public function menuOrder(){

        $result = $this->order_menu->order(array("listorder" => "ASC",'id' => 'ASC'))->select();

        // session('admin_menu_index','Menu/index');

        $tree = new \Tree();
        $tree->icon = array('&nbsp;&nbsp;&nbsp;│ ', '&nbsp;&nbsp;&nbsp;├─ ', '&nbsp;&nbsp;&nbsp;└─ ');
        $tree->nbsp = '&nbsp;&nbsp;&nbsp;';
        
        $newmenus=array();
        foreach ($result as $m){
            $newmenus[$m['id']]=$m;
        }
        $type[1]='<span style="color:red"><b>彩种</b></span>'; //类型
        $type[2]='<span style="color:green"><b>定位</b></span>';
        $type[3]='<span style="color:blue"><b>玩法</b></span>';

        foreach ($result as $n=> $r) {
            
            $result[$n]['parentid_node'] = ($r['parentid']) ? ' class="child-of-node-' . $r['parentid'] . '"' : '';
            $result[$n]['str_manage'] = '<a href="' . U("AdminOrder/addmenu", array("parentid" => $r['id'])) . '">添加子选项</a> | <a target="_blank" href="' . U("AdminOrder/editmenu", array("id" => $r['id'])) . '">编辑</a> | <a class="js-ajax-delete" href="' . U("AdminOrder/delmenu", array("id" => $r['id'], "menuid" => I("get.menuid")) ). '">删除</a> ';
            if($r['parentid']==0){
                $result[$n]['str_manage']=$result[$n]['str_manage'].'|<a href="' . U("AdminOrder/data_set", array("id" => $r['id'])) . '">开奖时间管理</a>|<a href="' . U("AdminOrder/cjlist", array("id" => $r['id'])) . '">采集管理</a>';
            }
            $result[$n]['type'] = $type[$r['type']];
            $result[$n]['appear'] = $r['appear'];
            $result[$n]['method'] = $r['method'];
            
        }
        
        $tree->init($result);
        $str = "<tr id='node-\$id' \$parentid_node>
                    <td style='padding-left:20px;'><input name='listorders[\$id]' type='text' size='3' value='\$listorder' class='input input-order'></td>
                    <td>\$id</td>
                    <td>\$spacer\$name</td>
                    <td>\$type</td>
                    <td>\$appear</td>
                    <td>\$method</td>
                    <td>\$str_manage</td>
                </tr>";
        $categorys = $tree->get_tree(0, $str);
        $this->assign("categorys", $categorys);



        $this->assign('result',$result);
        $this->display();
    }
    public function listorders() {
        $status = parent::_listorders($this->order_menu);
        if ($status) {
            $this->success("排序更新成功！");
        } else {
            $this->error("排序更新失败！");
        }
    }

    /*
     * 添加选项
     */

    public function addmenu(){
        if(IS_POST){
            $parentid=I("post.parentid");
            $parent=$this->order_menu->find($parentid);
            $post=I("post.");
            $post[type]=$parent[type]+1;
            $res=$this->order_menu->add($post);
            if($res){
                $this->success('添加成功',U('AdminOrder/addmenu'));
            }
        }
        $tree = new \Tree();
        $parentid = I("get.parentid",0,'intval');
        $result = $this->order_menu->order(array('listorder' => 'asc'))->select();
        foreach ($result as $r) {
            $r['selected'] = $r['id'] == $parentid ? 'selected' : '';
            $array[] = $r;
        }
        $str = "<option value='\$id' \$selected>\$spacer \$name</option>";
        $tree->init($array);
        $select_categorys = $tree->get_tree(0, $str);
        $this->assign("select_categorys", $select_categorys);
        $this->display();
    }
     /*
     * 修改选项
     */
    public function editmenu(){
        $tree = new \Tree();
        $id=I("get.id",0,'intval');
        $rs = $this->order_menu->where(array("id" => $id))->find();
        $parent=$this->order_menu->find($rs['parentid']);
        if(!$parent){
            $parent[name]='彩种';
        }
        $this->assign("parent", $parent);
        $this->assign("data", $rs);
        $this->display();
    }

    public function editmenu_post(){
        $id=I('post.id');
        $rs = $this->order_menu->where(array("id" => $id))->find();
        $parentid=$rs['parentid'];
        $post=$_POST;
         if (IS_POST) {
            if ($this->order_menu->create()!==false) {
                if ($this->order_menu->save() !== false) {
                    $this->success("更新成功！");
                } else {
                    $this->error("更新失败！");
                }
            } else {
                $this->error($this->order_menu->getError());
            }
        }
    }

    public function delmenu(){
        $id = I("get.id",0,'intval');
        $count = $this->order_menu->where(array("parentid" => $id))->count();
        if ($count > 0) {
            $this->error("该菜单下还有子菜单，无法删除！");
        }
        if ($this->order_menu->delete($id)!==false) {
            $this->success("删除菜单成功！");
        } else {
            $this->error("删除失败！");
        }
    }

    public function ajaxmenu(){
        $post=I('post.');
        $type=$this->order_menu->where(array('id'=>$post['parentid']))->find();
        $parent=$type[type];
        exit($parent);
    }

    public function data_set(){
        $id = intval(I("get.id"));
        $post = $this->order_menu->find($id);
        $this->assign('post', $post);
        $data=explode(',',$post['data']);
        $this->assign('data', $data);
        $this->display();
    }
    public function data_setpost(){
        $post=I('post.');
        $data['data']=implode(',',$post[data]);
        $this->order_menu->where('id='.$post['id'])->save($data);
        $this->msg('开奖配置成功');
    }



    public function cjlist(){
        $id = intval(I("get.id"));
        $post = $this->type->find($id);
        $map['typeid']=$id;
        $list=M('cjq')->where($map)->select();
        $this->assign('post',$post);
        $this->assign('list',$list);
        $this->display();
    }
    public function add_cj(){
        $id = intval(I("get.id"));
        $type = $this->order_menu->find($id);
        $this->assign('type',$type);
        $this->display();
    }
    public function edit_cj(){
        $id = intval(I("get.id"));
        $post=M('cjq')->find($id);
        $type = $this->order_menu->find($post[typeid]);
        $this->assign('type',$type);
        $this->assign('post',$post);
        $this->display();
    }
    public function add_cjpost(){
        $post=I('post.');
        $data=$post;
        $res = M('cjq')->add($data);
        if ($res) {
            $this->msg('添加成功',$url);
        } else {
            $this->msg('添加失败', $url);
        }
    }
    public function open_cj(){
        $id = I('get.id');
        $data['zt']='1';
        $data['token']=md5(time());
        M('cjq')->where(array('id' =>$id))->save($data);
        echo '<script>alert("运行成功");history.go(-1);</script>';
        //$this->cjq($id,$data['token']);
    }
    public function close_cjq(){
        $id = I('get.id');
        $data['zt']='1';
        $data['token']=md5(time());
        M('cjq')->where(array('id' =>$id))->save($data);
        echo '<script>alert("运行成功");history.go(-1);</script>';
        //$this->cjq($id,$data['token']);
    }
     public function edit_cjpost(){
        if (IS_POST) {
            $post = I('post.');
            $data=$post;           
            $res = M('cjq')->where(array('id' => I('post.id')))->save($data);
            if ($res) {
                $this->msg('修改成功');
            } else {
                $this->msg('没有修改');
            }
        }
    }
    public function del_cj(){
        $id = I('get.id');
        if ( M('cjq')->delete($id) !== false) {
            $this->success("删除成功！");
        } else {
            $this->error("删除失败！");
        }
    }

}
