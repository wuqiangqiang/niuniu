<?php
global $Room;
$id = $connection->user['room'];
$Room[$id]['qszt'][$connection->user['id']] = 2;
act('replaceqs','',$connection); //强刷
