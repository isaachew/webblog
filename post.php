<?php
$fop=file_get_contents("json.json");
echo "PHP ".($fop?"has":"does not have")." access to files<br>";
$jsd=json_decode($fop);
$jsd->tabs->_empty_->content[]=$_POST["content"];
$fop=json_encode($jsd);
file_put_contents("json.json",$fop)


?>
