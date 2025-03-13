<?php
		global $Room;
    	
    	$userxx['zt']=0;

    	$Room['user'][$data2['id']][$data2['uid']]=$userxx;

    	$msg=array();
    	$msg['id']=$id;
    	$msg['xx']=$Room['xx'][$id];
    	$msg['user']=$Room['user'][$id];
    	$msg['card']=$Room['card'][$id];
    	act('joinroom',$msg,$connection);