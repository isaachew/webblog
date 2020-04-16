<?php
if($_POST["new"]){
	$fop=file_get_contents("json.json");
	echo "PHP ".($fop?"has":"does not have")." access to files<br>";
	$jsd=json_decode($fop);
	$jsd->users->$_POST["user"]=hash("sha256",$_POST["user"]."(&ÞÊI/m¤À".$_POST["pass"]);
	echo "<pre>".str_replace("<","&lt;",json_encode($jsd))."</pre>";
	echo intval(file_put_contents("json.json",json_encode($jsd)))." byte(s) written<br>";
}

header("HTTP/1.1 302 Found");
header("Location: /");
header("Set-Cookie: user=".$ha);
?>
