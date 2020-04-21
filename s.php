<?php
$fop=file_get_contents("json.json");
echo "PHP ".($fop?"has":"does not have")." access to files<br>";
$jsd=json_decode($fop);
header("HTTP/1.1 302 Found");
if($_POST["new"]){
	$jsd->users->$_POST["user"]=hash("sha256",$_POST["user"]."(&ÞÊI/m¤À".$_POST["pass"]);
	echo "<pre>".str_replace("<","&lt;",json_encode($jsd))."</pre>";
	echo intval(file_put_contents("json.json",json_encode($jsd)))." byte(s) written<br>";
	header("Location: /");
}else{
	if(hash("sha256",$_POST["user"]."(&ÞÊI/m¤À".$_POST["pass"])==$jsd->users->$_POST["user"]){
		header("Location: /");
		
	}else{
		header("Location: /signin.html?");
	
	}
}
//header("Location: /");
?>
