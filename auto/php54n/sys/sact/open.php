<?php
 			//$map['zt']=1;
            //$map['num']=0;
            $server=$db->getOne("select * from jz_server where id=".$data2['id']);
            if($server['zt']==1){
                return act('error',"服务器已经启动",$connection);
            }
            $id=mb_convert_encoding($server[id], "GB2312","UTF-8");
            $title=mb_convert_encoding($server[title].'-'.$server[id], "GB2312","UTF-8");
            if($server['type']!='0'){
                $zmm=popen('run.bat '.$id.' '.$title.' game'.$server['type'].'.php '.$server['dk'],"r");
            }
            else{
                $zmm=popen('run.bat '.$id.' '.$title.' test.php '.$server['dk'],"r");
            }
            //$db->update('jz_server',$map,"id=".$data2['id']);
            act('success',"等待服务器打开",$connection);