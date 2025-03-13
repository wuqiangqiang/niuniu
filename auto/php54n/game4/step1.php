<?php
    //step1 游戏开始倒计数阶段
        global $Room;
        $id=$connection->user['room'];
        act('initroom',$msg,$connection);
        act('djs',$Room[$id]['time'],$connection);
        act('divRobBankerText',1,$connection);