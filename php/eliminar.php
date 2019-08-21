<?php
header("Content-Type: text/json");
header("Access-Control-Allow-Origin:*");

include 'conexion.php';

$id_persona=$_GET["phpid"];

//mysqli_set_charset('utf8');
$resultado = array();
$comandoSql = "delete from tb_persona where id_persona='".$id_persona."';";

if(mysqli_query($con,$comandoSql))
    $resultado["mensaje"]="elimnado";
else
    $resultado["mensaje"]="error";

mysqli_close($con);
$formatoJson = json_encode($resultado);
echo $_GET["jsoncallback"] . '('. $formatoJson . ');';

?>