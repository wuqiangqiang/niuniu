<?php
act('timewcgx', time(), $connection);
list($msec, $sec) = explode(' ', microtime());
$msectime = (float)sprintf('%.0f', (floatval($msec) + floatval($sec)) * 1000);
act('timeyc', $msectime, $connection); 