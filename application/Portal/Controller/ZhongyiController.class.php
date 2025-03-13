<?php
/**
 * User: yanhong.liu
 * Date: 2018/1/7
 * Time: 19:44
 */
namespace Portal\Controller;

use Common\Controller\HomebaseController;

class ZhongyiController extends HomebaseController
{
    public function __construct()
    {
        parent::__construct();
        $this->uid = session('uid');
    }

    public function index() {
        $this->display();
    }
}