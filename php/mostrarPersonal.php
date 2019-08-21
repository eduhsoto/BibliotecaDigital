<?php
header("Content-Type: text/json");
header("Access-Control-Allow-Origin:*");

include 'conexion.php';

$sqlquery = " select * from tb_tipousuario where not id_tipousuario = 4 and not id_tipousuario = 1";
$sql = mysqli_query($con,$sqlquery);

$datos = array();


  //echo "<select name=\"tipousuario\">";
  //echo "<option size =30 ></option>";
    while($row = mysqli_fetch_array($sql)){
    $datos[]=$row;
       //echo "<option value='" . $row['id_tipousuario'] . "'>" . $row['tipousuario'] . "</option>";
    }

  //echo "</select>";

$ajson = json_encode($datos);
echo $_GET["jsoncallback"].'('.$ajson.');';
?>
