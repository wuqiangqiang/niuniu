<?php
 			$map['zt']=1;
            $db->update('jz_server',$map,"id=".$data2['id']);
            act('success',"重启成功",$connection);