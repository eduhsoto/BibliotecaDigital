
function iniciarSesionAdmin(){
  var user = document.getElementById("usuarioAdm").value;
  var pass = document.getElementById("passwordAdm").value;

  $.ajax({
      type:"post",
      url:"http://localhost/crudbiblioteca/iniciar_sesion_admin.php",
      data:{phpuser:user,phppass:pass},
      dataType:"jsonp",
      jsonp:"jsoncallback",
      crossDomain:true,
      success:function(resp){
          if(resp.message=="right")
              location.href ="../html/crudCatalogo.html";
          else
              alert("Usuario o contraseña incorrectos");
  }
  });
  document.getElementById("registroAdmin").reset();
  return false;
}
