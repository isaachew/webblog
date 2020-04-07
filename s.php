<?php
$ha=hash("sha256",$_POST["hello"]);
if($_GET["new"]){


}
header("HTTP/1.1 302 Found");
header("Location: /");
header("Set-Cookie: user=".$ha);
?>
