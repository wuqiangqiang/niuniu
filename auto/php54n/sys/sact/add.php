<?php
 			 $map['dk']=$data2['dk'];
            $map['title']=$data2['title'];
            $map['type']=$data2['type'];
            $db->insert("jz_server",$map);
            act('success',"添加成功",$connection);