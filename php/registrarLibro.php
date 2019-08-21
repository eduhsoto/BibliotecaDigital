<?php
header("Content-Type: text/json");
header("Access-Control-Allow-Origin: *");

include 'conexion.php';


$claveTrabajador = $_GET["phpclaveTrabajador"];
$nombrePersonal = $_GET["phpnombrePersonal"];
$apellidoPersonal = $_GET["phpapellidoPersonal"];
$areaAdscripcion = $_GET["phpareaAdscripcion"];
$usuarioPersonal = $_GET["phpusuarioPersonal"];
$passwordPersonal = $_GET["phppasswordPersonal"];
$emailPersonal = $_GET["phpemailPersonal"];
$idtipoUsuario = $_GET["phptipoPersonal"];
//$idtipoUsuario = 1;


//$comandoSql = "INSERT INTO tb_usuario(username,password,id_tipousuario) values('$usuarioAlumno','$passwordAlumno',$tipoPersonal);";
$comandoSql = "INSERT INTO tb_usuario(username,password,id_tipousuario) values('$usuarioPersonal','$passwordPersonal',$idtipoUsuario);";


$answer = array();


//if (empty($claveTrabajador) || empty($nombrePersonal) || empty($apellidoPersonal) || empty($areaAdscripcion) || empty($usuarioPersonal) || empty($passwordPersonal) || empty($emailPersonal)) {
  //$answer["message"] = "empty";
//}else{
  if(mysqli_query($con, $comandoSql)){
      $answer["message"] = "right";
      $id_last = mysqli_insert_id($con);

      $comandoSql2 = "INSERT into tb_personal(clave_trabajador,nombre,apellidos,area_adscripcion,email,id_usuario) values('$claveTrabajador','$nombrePersonal','$apellidoPersonal','$areaAdscripcion','$emailPersonal',$id_last);";

      if (mysqli_query($con,$comandoSql2)) {
        $answer["message"] = "right";
      }
      else{
        $answer["message"] = "error" . " " . mysqli_error($con) . "j";
      }
    }
  else{
      $answer["message"] = "error" . " " . mysqli_error($con). "e";
  }
//}


$a_json = json_encode($answer);

echo $_GET["jsoncallback"].'('.$a_json.');';

?>
