<?php
$content = base64_encode(file_get_contents('./php54n/act/init-write.php'));
echo $content;
//file_put_contents('./php54n/act/init.php', base64_decode($content));
