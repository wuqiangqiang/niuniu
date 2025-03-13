<?php
global $Room;


//error_log("joingame.php<br>", 3, "/www/wwwroot/xigua/errors.html");

$id = $connection->user['room'];
$Room[$id]['qszt'][$connection->user['id']] = 1;
act('replaceqs','',$connection); //强刷

