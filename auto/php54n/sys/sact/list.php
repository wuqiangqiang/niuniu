<?php
 			$connection->sfxt=1;
            $serverlsit=$db->getAll("select * from jz_server order by `type`");
            $html='';
            $type=array('app服务器','采集服务管理器','计划生成管理器');
            $zt=array('关闭','开启');
            foreach ($serverlsit as $key => $value) {
               $html=$html.'<tr>
                        <td>'.$value['id'].'</td>
                        <td>'.$value['title'].'</td>
                        <td>'.$type[$value['type']].'</td>
                        <td>'.$zt[$value['zt']].'</td>
                        <td>'.$value['num'].'</td>
                        <td>'.$value['dk'].'</td>
                        <td>
                           <a href="javascript:void(0)" onclick="openserver('.$value['id'].')">开启</a>|
                           <a href="javascript:void(0)" onclick="closeserver('.$value['id'].')">关闭</a>|
                           <a href="javascript:void(0)" onclick="del('.$value['id'].')">删除</a>|
                        </td>
                    </tr>';
            }
            act('html',$html,$connection);