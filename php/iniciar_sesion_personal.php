<?php
header("Content-Type: text/json");
header("Access-Control-Allow-Origin: *");

include 'conexion.php';

$tipousuario =  $_GET["phpopcion"];
$usuario =  mysqli_real_escape_string($con, $_GET["phpuserPer"]);
$password = mysqli_real_escape_string($con, $_GET["phppassPer"]);


$sqlquery = "select * from tb_usuario where id_tipousuario = '$tipousuario' and username = '$usuario' and password = '$password'";
//$sqlquery = "select * from tb_usuario where id_tipousuario = 4";
$sql = mysqli_query($con,$sqlquery);

$answer = array();

$row = mysqli_fetch_array($sql);
echo "" . mysqli_error($con);


if($tipousuario == $row['id_tipousuario'] && $usuario == $row['username'] &&  $password == $row['password']){
      $answer["message"] = "right";

      session_start();

      $_SESSION['name'] = $usuario;
      $_SESSION['password'] = $password;

    }
    else{
        $answer["message"] = "error";

    }

$a_json = json_encode($answer);
echo $_GET["jsoncallback"].'('.$a_json.');';
?>
