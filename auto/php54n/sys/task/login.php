<?php
		global $worker;
    	foreach($worker->connections as $connection2)
      {

      		if($connection2->userxx[$data2['uid']] && $connection2->sfxt!=1){
      			$msg=array();
      			$msg['uid']=$data2['uid'];
      			$msg['tip']='你已经在其他地方登陆了';
      			act('loginout',$msg,$connection2);
      			unset($connection2->userxx[$data2['uid']]);
      		}
      		$connection2->userxx[$data2['uid']]=1;
      }   