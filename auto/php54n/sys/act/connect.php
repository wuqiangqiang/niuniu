<?php
 			if($data2['task']){
 				$server=$db->getOne("select * from jz_server where id='".$data2['task']."'");
 				ouput($server['title'].'-'.$server['id'].'链接到服务器');
 				$map['zt']=1;
            	$map['num']=0;
            	$db->update('jz_server',$map,"id=".$data2['task']);
            	$connection->type=$server['type'];
            	$connection->task=$server['id'];
                httz($server['title'].'-'.$server['id']."打开成功");
       			tzsql($connection);
 			}
