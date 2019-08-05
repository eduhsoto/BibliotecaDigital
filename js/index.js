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

function btnMostrar(){
    $.ajax({
        type:"get",
        url: "http://localhost/crudbiblioteca/mostrarUsuarios.php",
        dataType: "jsonp",
        jsonp: "jsoncallback",
        crossDomain: true,
        success: function(data, status){
          var options = '';
          for (var i = 0; i < data.length; i++) {
              options += '<option value=' + data[i].id_tipousuario + '>' + data[i].tipousuario + '</option>'
          }
          $('#selecti').html(options);
            //document.getElementById("options").html(data);
            /*select = document.createElement('select');
            select.classList.add('form-control');
            select.id = 'opciones';
           $.each(data, function(i,item){
             select.innerHTML += "<option value="+item.id_tipousuario+">"+item.tipousuario+"</option>"

              });
               document.getElementById("options").appendChild(select);*/
                 }
    });
     return false;
}

function btnMostrarPersonal(){
    $.ajax({
        type:"get",
        url: "http://localhost/crudbiblioteca/mostrarPersonal.php",
        dataType: "jsonp",
        jsonp: "jsoncallback",
        crossDomain: true,
        success: function(data, status){
          var options = '';
          for (var i = 0; i < data.length; i++) {
              options += '<option value=' + data[i].id_tipousuario + '>'+ data[i].tipousuario + '</option>'
          }
          $('#tipopersonal').html(options);
        }
    });
     return false;
}
