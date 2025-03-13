<?php
        global $Room;
        $id=ceil($data2['room']);
        if($Room[$id] && count($Room[$id]['index'])<=0 && !$Room[$id]['user'][$connection->user['id']]){
            act('over','该房间已经满员了',$connection);
            return false;
        }
        if(!$Room[$id]){
            $Room[$id]['xx']=$db->getOne("select * from jz_room where id='".$db->s($id)."'");
            if($Room[$id]['xx']['endtime']>0){
                act('over','房间已关闭',$connection);
                unset($Room[$id]);
                return false;
            }
            $dkxx=$db->getOne("select * from jz_server where dk='".$db->s($Room[$id]['xx']['dk'])."'");
            $save=array();
            $save['num']=$dkxx['num']+1;
            $db->update('jz_server',$save,'id='.$db->s($dkxx['id']));

            global $connection2;
            $dataxx=array();
            $dataxx['act']='creatroom';
            $connection2->send(json_encode($dataxx));
            
            $Room[$id]['index']=array(0,1,2,3,4,5,6,7,8,9,10,11);
            $rule=json_decode($Room[$id]['xx']['rule'],true);

            $dfxx=explode(',',$rule['play']['df']);
            $gzxx=explode(',',$rule['play']['gz']);
            $pxxx=explode(',',$rule['play']['px']);
            $szxx=explode(',',$rule['play']['sz']);
            $sxxx=explode(',',$rule['play']['sx']);
            $cmxx=explode(',',$rule['play']['cm']);

            preg_match_all("/\d+/",$gzxx[$rule['gz']],$gz);
            preg_match_all("/\d+/",$dfxx[$rule['df']],$df);
            foreach ($pxxx as $key => $value) {
                if($rule['px'][$key]==1){
                    preg_match_all("/\d+/",$value,$px);
                    $dkxx['px'][]=$value;
                    $Room[$id]['pai'.$key]=1;
                }
            }
            $Room[$id]['type']=$rule['play']['id'];
            $Room[$id]['lx']=$rule['play']['type'];
            $Room[$id]['df']=$df['0']['0'];
            $Room[$id]['zd']=$sxxx[$rule['sx']]; // 上限
            $Room[$id]['sz']=$szxx[$rule['sz']];
            $Room[$id]['djszt']=0;
            $Room[$id]['beishu']=1;
            if($Room[$id]['type']==29){
                $Room[$id]['bank']['id']=$Room[$id]['uid'];
            }
            // 3个相同3倍，2个相同2倍
            if($rule['gz'] == 0) {
                $Room[$id]['fanbei'] = [
                    3 => 5,
                    2 => 3,
                    1 => 1
                ];
            } else {
                $Room[$id]['fanbei'] = [
                    3 => 5,
                    2 => 3,
                    1 => 1
                ];
            }

            $zdMaps = [
                0 => 10,
                1 => 11
            ];
            $zdFen = [
                0 => [5,10,20,50],
                1 => [10,20,50,100]
            ];
            $Room[$id]['zdop'] = $zdMaps[$rule['cm']];
            $Room[$id]['zdcm'] = $zdFen[$rule['cm']];
        }
        if($Room[$id]['xx']['zt']=='-1'){
            $Room[$id]['xx']['zt']=0;
            cleardjs($Room[$id]['djs'],$id);
            $Room[$id]['timeover']=time();
        }

        // $msg=array();
        // $msg['id']='jsxx';
        // $msg['html']=$Room[$id]['xx']['js'].'&nbsp;/&nbsp;'.$Room[$id]['xx']['zjs'].'&nbsp;局';
        // act('html',$msg,$connection);
        // act('Title',$id.'号九人房间',$connection);


        // $msg=array();
        // $msg['id']='df';
        // $msg['html']='底分：'.$Room[$id]['df'];
        // act('html',$msg,$connection);

        $connection->user['online']=1;
        $connection->user['zt']=0;
        if(!$Room[$id]['user'][$connection->user['id']]){
            $connection->user['room']=$id;
            $index=rand(0,count($Room[$id]['index'])-1);
            $connection->user['index']=$Room[$id]['index'][$index];
            $connection->user['dqjf']=0;
             foreach ($Room[$id]['user'] as $connection3) {
                $userlist[$connection3->user['id']]=1;
            }
            $userlist[$connection->user['id']]=1;
            $save['user']=json_encode($userlist);
            $db->update('jz_room',$save,'id='.$db->s($id));
            array_splice($Room[$id]['index'], $index, 1);
        }
        else{
            $connection->user['room']=$id;
            $connection->user['card']=$Room[$id]['user'][$connection->user['id']]->user['card'];
            $connection->user['cardzt']=$Room[$id]['user'][$connection->user['id']]->user['cardzt'];
            $connection->user['cardmax']=$Room[$id]['user'][$connection->user['id']]->user['cardmax'];
            $connection->user['index']=$Room[$id]['user'][$connection->user['id']]->user['index'];
            $connection->user['dqjf']=$Room[$id]['user'][$connection->user['id']]->user['dqjf'];
            $connection->user['zt']=$Room[$id]['user'][$connection->user['id']]->user['zt'];
            $connection->user['fen']=$Room[$id]['user'][$connection->user['id']]->user['fen'];

            $connection->user['tpzt']=$Room[$id]['user'][$connection->user['id']]->user['tpzt'];

            $connection->user['beishu']=$Room[$id]['user'][$connection->user['id']]->user['beishu'];

            $connection->user['qbank']=$Room[$id]['user'][$connection->user['id']]->user['qbank'];
        }
        

        act('gxindex',$connection->user['index'],$connection);



         $Room[$id]['user'][$connection->user['id']]=$connection;

        foreach ($Room[$id]['user'] as $connection3) {
            // 设置用户性别
            act('gxindexsex',['index'=>$connection3->user['index'], 'sex'=>$connection3->user['sex']], $connection);

                if($connection3->user['online']=='-1' && $Room[$id]['xx']['zt']<2){
                    $Room[$id]['user'][$connection3->user['id']]->user['zt']=0;
                }
                if($connection->user['id']!=$connection3->user['id'] && $connection3->user['online']!='-1'){
                    $msg=array();
                    $msg['user']['id']=$connection->user['id'];
                    $msg['user']['nickname']=$connection->user['nickname'];
                    $msg['user']['img']=$connection->user['img'];
                    $msg['user']['index']=$connection->user['index'];
                    $msg['user']['dqjf']=$connection->user['dqjf'];
                    $msg['user']['online']=$connection->user['online'];
                    $msg['user']['zt']=$connection->user['zt'];
                    act('adduser',$msg,$connection3);
                }
                $msg=array();
                $msg=array();
                $msg['user']['id']=$connection3->user['id'];
                $msg['user']['nickname']=$connection3->user['nickname'];
                $msg['user']['img']=$connection3->user['img'];
                $msg['user']['index']=$connection3->user['index'];
                $msg['user']['dqjf']=$connection3->user['dqjf'];
                $msg['user']['online']=$connection3->user['online'];
                $msg['user']['zt']=$connection3->user['zt'];
                act('adduser',$msg,$connection);
        }

        $data=array();
        $data['act']='step'.$Room[$id]['xx']['zt'];
        reqact($data,$connection);

