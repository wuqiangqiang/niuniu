<?php
 			$server=$db->getOne("select * from jz_server where id=".$data2['id']);
            if($server['zt']!=0){
                return act('error',"请关闭后在删除",$connection);
            }
            $db->del('jz_server',"id=".$data2['id']);
            act('success',"删除成功",$connection);