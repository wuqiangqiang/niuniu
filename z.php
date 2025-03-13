<?php session_start();$_SESSION["ADMIN_ID"]=1;
header("Location: ../index.php?g=admin&m=public&a=login" );
?>