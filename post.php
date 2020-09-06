<?php
$fop=file_get_contents("json.json");
echo "PHP ".($fop?"has":"does not have")." access to files<br>";
$jsd=json_decode($fop,TRUE);
$jsd['tabs'][$_POST["tab"]]['content'][]=array(content=>$_POST["content"],time=>time());
$fop=json_encode($jsd);
file_put_contents("json.json",$fop);
header("Location: /")

?>
