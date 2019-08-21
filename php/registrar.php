<?php
header("Content-Type: text/json");
header("Access-Control-Allow-Origin: *");

include 'conexion.php';

$nombre = $_GET["phpnombre"];
$apellidos = $_GET["phpapellido"];
$estatura = $_GET["phpestatura"];
$sexo = $_GET["phpsexo"];
$domicilio = $_GET["phpdomicilio"];
$correo = $_GET["phpcorreo"];
$codigopostal = $_GET["phpcodigopost"];
$telefono = $_GET["phptelefono"];

$comandoSql = "INSERT INTO tb_libro(titulo,editorial,autor,noEdicion,noPaginas,librosDisponibles,codigo_postal,telefono) values('$nombre','$apellidos','$estatura','$sexo','$domicilio','$correo','$codigopostal','$telefono');";

$respuesta = array();

if(mysqli_query($con, $comandoSql))
    $respuesta["mensaje"] = "registrado";
else
    $respuesta["mensaje"] = "error" . " " . mysqli_error($con);

$a_json = json_encode($respuesta);

echo $_GET["jsoncallback"].'('.$a_json.');';

?>
