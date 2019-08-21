<?php
header("Content-Type: text/json");
header("Access-Control-Allow-Origin: *");

include 'conexion.php';

$matricula = $_GET["phpMatricula"];
$nombreAlumno = $_GET["phppnombreAlumno"];
$apellidoAlumno = $_GET["phpapellidoAlumno"];
$carrera = $_GET["phpCarrera"];
$cuatrimestre = $_GET["phpCuatrimestre"];
$usuarioAlumno = $_GET["phpusuarioAlumno"];
$passwordAlumno = $_GET["phppasswordAlumno"];
$email = $_GET["phpemail"];

$idtipoUsuario = 1;

$comandoSql = "INSERT INTO tb_usuario(username,password,id_tipousuario) values('$usuarioAlumno','$passwordAlumno',$idtipoUsuario);";

$answer = array();

//if (empty($matricula) || empty($nombreAlumno) || empty($apellidoAlumno) || empty($carrera) || empty($cuatrimestre) || empty($usuarioAlumno) || empty($passwordAlumno) || empty($email)) {
  //$answer["message"] = "empty";
//}else{
  if(mysqli_query($con, $comandoSql)){
      $answer["message"] = "right";
      $id_last = mysqli_insert_id($con);

      $comandoSql2 = "INSERT into tb_alumnos(matricula,nombre,apellidos,cuatrimestre,id_carrera,email,id_usuario) values('$matricula','$nombreAlumno','$apellidoAlumno','$cuatrimestre',$carrera,'$email',$id_last);";

      if (mysqli_query($con,$comandoSql2)) {
        $answer["message"] = "right";
      }
      else{
        $answer["message"] = "error" . " " . mysqli_error($con);
      }
    }
 else{
      $answer["message"] = "error" . " " . mysqli_error($con);
  }
//}

$a_json = json_encode($answer);

echo $_GET["jsoncallback"].'('.$a_json.');';

?>
