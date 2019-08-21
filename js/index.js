function check(e) {
    tecla = (document.all) ? e.keyCode : e.which;

    //Tecla de retroceso para borrar, siempre la permite
    if (tecla == 8) {
        return true;
    }

    // Patron de entrada, en este caso solo acepta numeros y letras
    patron = /[A-Za-z0-9]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}

function checkLetterNumber(e) {
    tecla = (document.all) ? e.keyCode : e.which;

    //Tecla de retroceso para borrar, siempre la permite
    if (tecla == 8) {
        return true;
    }

    // Patron de entrada, en este caso solo acepta numeros y letras
    patron = /[A-Za-z0-9]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}

function checkLetter(e) {
    tecla = (document.all) ? e.keyCode : e.which;

    //Tecla de retroceso para borrar, siempre la permite
    if (tecla == 8) {
        return true;
    }

    // Patron de entrada, en este caso solo acepta numeros y letras
    patron = /[A-Za-z áéíóúÁÉÍÓÚ]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}

function checkNumber(e) {
    tecla = (document.all) ? e.keyCode : e.which;

    //Tecla de retroceso para borrar, siempre la permite
    if (tecla == 8) {
        return true;
    }

    // Patron de entrada, en este caso solo acepta numeros y letras
    patron = /[0-9]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}

function iniciarSesionAdmin(){
  var user = document.getElementById("usuarioAdm").value;
  var pass = document.getElementById("passwordAdm").value;

  if (user.length == 0 || pass.length == 0) {
    alert("Llene todos los campos");
  }else{
    $.ajax({
      type:"post",
      url:"http://localhost/crudbiblioteca/iniciar_sesion_admin.php",
      data:{phpuser:user,phppass:pass},
      dataType:"jsonp",
      jsonp:"jsoncallback",
      crossDomain:true,
      success:function(resp){
        if( resp.message=="right"){
          location.href ="../html/crudCatalogo.html";
        }
        else {
          alert("Usuario o contraseña incorrectos");
        }
      }
    });
  }
  document.getElementById("registroAdmin").reset();
  return false;
}

function iniciarSesionPersonal(){
  //Obtener valores del select
  var select = document.getElementById("selecti");
  //obtener el texto de la opcisón
  //var opt = select.options[select.selectedIndex].text;
  //obtener el valor de la opción
  var opt = select.options[select.selectedIndex].value;

  var userPer = document.getElementById("nomUsuario").value;
  var passPer = document.getElementById("nompassword").value;

  if (userPer.length == 0 || passPer.length == 0) {
    alert("Llene todos los campos");
  }else{
    $.ajax({
      type:"post",
      url:"http://localhost/crudbiblioteca/iniciar_sesion_personal.php",
      data:{phpopcion:opt,phpuserPer:userPer,phppassPer:passPer},
      dataType:"jsonp",
      jsonp:"jsoncallback",
      crossDomain:true,
      success:function(resp){
        if(resp.message=="right"){
          location.href ="../html/Catalogo.html";
        }else{
          alert("Usuario o contraseña incorrectos");
        }
    }
    });
  }
  document.getElementById("registroPersonas").reset();
  return false;
}

function btnMostrar(){
    $.ajax({
        type:"get",
        url: "http://localhost/crudbiblioteca/mostrarUsuarios.php",
        dataType: "jsonp",
        jsonp: "jsoncallback",
        crossDomain: true,
        success: function(data){
          var options;
          options = '<option disabled selected>' + "Tipo de usuario" + '</option>'
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
          var options ;
          options = '<option disabled selected>' + "Tipo de personal" + '</option>'
          for (var i = 0; i < data.length; i++) {
              options += '<option value=' + data[i].id_tipousuario + '>'+ data[i].tipousuario + '</option>'
          }
          $('#tipopersonal').html(options);
        }
    });
     return false;
}

function mostrarSolicitud(){
    $.ajax({
        type:"get",
        url: "http://localhost/crudbiblioteca/mostrarSolicitud.php",
        dataType: "jsonp",
        jsonp: "jsoncallback",
        crossDomain: true,
        success: function(data){
          var options="" ;
          options = '<option disabled selected>' + "Tipo de solicitud" + '</option>'
          for (var i = 0; i < data.length; i++) {
              options += '<option value=' + data[i].id_solicitud + '>'+ data[i].solicitud + '</option>'
          }
          $('#tipoSolicitud').html(options);
        }
    });
     return false;
}

function mostrartipoCatalogo(){
    $.ajax({
        type:"get",
        url: "http://localhost/crudbiblioteca/mostrarCatalogo.php",
        dataType: "jsonp",
        jsonp: "jsoncallback",
        crossDomain: true,
        success: function(data){
          var options="" ;
          options = '<option disabled selected>' + "Tipo de catalogo" + '</option>'
          for (var i = 0; i < data.length; i++) {
              options += '<option value=' + data[i].id_tipo + '>'+ data[i].tipocatalogo + '</option>'
          }
          $('#tipoCatalogo').html(options);
        }
    });
     return false;
}

function mostrartipoLibro(){
    $.ajax({
        type:"get",
        url: "http://localhost/crudbiblioteca/mostrartipoLibro.php",
        dataType: "jsonp",
        jsonp: "jsoncallback",
        crossDomain: true,
        success: function(data){
          var options="" ;
          options = '<option disabled selected>' + "Tipo de libro" + '</option>'
          for (var i = 0; i < data.length; i++) {
              options += '<option value=' + data[i].id_tipolibro + '>'+ data[i].tipolibro + '</option>'
          }
          $('#tipoLibro').html(options);
        }
    });
     return false;
}

function mostrarCarreras(){
    $.ajax({
        type:"get",
        url: "http://localhost/crudbiblioteca/mostrarCarreras.php",
        dataType: "jsonp",
        jsonp: "jsoncallback",
        crossDomain: true,
        success: function(data){
          var options="" ;
          options = '<option disabled selected>' + "Carreras" + '</option>'
          for (var i = 0; i < data.length; i++) {
              options += '<option value=' + data[i].id_carrera + '>'+ data[i].carrera + '</option>'
          }
          $('#carreras').html(options);
        }
    });
     return false;
}

function mostrarCarreras(){
    $.ajax({
        type:"get",
        url: "http://localhost/crudbiblioteca/mostrarAreas.php",
        dataType: "jsonp",
        jsonp: "jsoncallback",
        crossDomain: true,
        success: function(data){
          var options="" ;
          options = '<option disabled selected>' + "Área" + '</option>'
          for (var i = 0; i < data.length; i++) {
              options += '<option value=' + data[i].id_area + '>'+ data[i].area + '</option>'
          }
          $('#tipoArea').html(options);
        }
    });
     return false;
}


function registrarAlumno(){
  var matricula = document.getElementById("matriculas").value;
  var nombreAlumno = document.getElementById("nombreAl").value;
  var apellidosAlumno = document.getElementById("apellidosAl").value;

  var select = document.getElementById("carreras");
  var tipoCarrera = select.options[select.selectedIndex].value;

  var cuatrimestre = document.getElementById("cuatrimestre").value;
  var usuarioAlumno = document.getElementById("usuarioAl").value;
  var passwordAlumno = document.getElementById("passwordAl").value;
  var emailAlumno = document.getElementById("emailAl").value;

  if (matricula.length == 0 || nombreAlumno.length == 0 || apellidosAlumno.length == 0 || tipoCarrera.length == 0 ||
    cuatrimestre.length == 0 || usuarioAlumno.length == 0 || passwordAlumno.length == 0 || emailAlumno.length == 0) {
      alert("Llene todos los campos");
  }else{
    $.ajax({
      type:"post",
      url:"http://localhost/crudbiblioteca/registrarAlumno.php",
      data:{phpMatricula:matricula,phppnombreAlumno:nombreAlumno,
        phpapellidoAlumno:apellidosAlumno,phpCarrera:tipoCarrera,phpCuatrimestre:cuatrimestre,
        phpusuarioAlumno:usuarioAlumno,phppasswordAlumno:passwordAlumno,phpemail:emailAlumno},
      dataType:"jsonp",
      jsonp:"jsoncallback",
      crossDomain:true,
      success:function(resp){
        if( resp.message=="right"){
          alert("Datos registrados");
        }else {
          alert("Fallo al registrar");
        }
      }
    });
  }
  document.getElementById("registroFormAl").reset();
  return false;
}

function registrarPersonal(){
  //Obtener valores del select
  var select = document.getElementById("tipopersonal");
  //obtener el texto de la opcisón
  //var opt = select.options[select.selectedIndex].text;
  //obtener el valor de la opción
  var tipoPersonal = select.options[select.selectedIndex].value;

  var claveTrabajador = document.getElementById("claveTrabajador").value;
  var nombrePersonal = document.getElementById("nombrePer").value;
  var apellidoPersonal = document.getElementById("apellidoPer").value;
  var areaAdscripcion = document.getElementById("areaAdscripcion").value;
  var usuarioPersonal = document.getElementById("usuarioPer").value;
  var passwordPersonal = document.getElementById("passwordPer").value;
  var emailPersonal = document.getElementById("emailPer").value;

  if (claveTrabajador.length == 0 || nombrePersonal.length == 0 || apellidoPersonal.length == 0 || areaAdscripcion.length == 0
  || usuarioPersonal.length == 0 || passwordPersonal.length == 0 || emailPersonal.length == 0) {
    alert("Llene todos los campos");
  }else{
    $.ajax({
      type:"post",
      url:"http://localhost/crudbiblioteca/registrarPersonal.php",
      data:{phptipoPersonal:tipoPersonal,phpclaveTrabajador:claveTrabajador,phpnombrePersonal:nombrePersonal,
            phpapellidoPersonal:apellidoPersonal,phpareaAdscripcion:areaAdscripcion,phpusuarioPersonal:usuarioPersonal,
            phppasswordPersonal:passwordPersonal,phpemailPersonal:emailPersonal},
      dataType:"jsonp",
      jsonp:"jsoncallback",
      crossDomain:true,
      success:function(resp){
        if( resp.message=="right"){
          alert("Datos registrados");
        }
        else {
          alert("Fallo al registrar");
        }
      }
    });
  }
  document.getElementById("registroFormPersonal").reset();
  return false;
}

function registrarLibro(){
  var tituloLibro = document.getElementById("tituloLibro").value;
  var editorialLibro = document.getElementById("editorialLibro").value;
  var autorLibro = document.getElementById("autorLibro").value;
  var noEdicion = document.getElementById("noEdicionLibro").value;
  var noPaginas = document.getElementById("noPaginasLibro").value;
  var librosDisponibles = document.getElementById("librosDisponibles").value;


  if (tituloLibro.length == 0 || editorialLibro.length == 0 || autorLibro.length == 0 || noEdicion.length == 0 ||
    noPaginas.length == 0 || librosDisponibles.length == 0 || passwordAlumno.length == 0 || emailAlumno.length == 0) {
      alert("Llene todos los campos");
  }else{
    $.ajax({
      type:"post",
      url:"http://localhost/crudbiblioteca/registrarLibro.php",
      data:{phpMatricula:matricula,phppnombreAlumno:nombreAlumno,
        phpapellidoAlumno:apellidosAlumno,phpCarrera:carrera,phpCuatrimestre:cuatrimestre,
        phpusuarioAlumno:usuarioAlumno,phppasswordAlumno:passwordAlumno,phpemail:emailAlumno},
      dataType:"jsonp",
      jsonp:"jsoncallback",
      crossDomain:true,
      success:function(resp){
        if( resp.message=="right"){
          alert("Datos registrados");
        }else {
          alert("Fallo al registrar");
        }
      }
    });
  }
  document.getElementById("registrarLibrosp").reset();
  return false;
}

function seleccionarCarrera(){

  var select = document.getElementById("tipoCatalogo");
  console.log(select.value);

  //var select = document.getElementById("tipoCatalogo");
  var otherOption = document.getElementById("tipoArea");

  if (select.value == 1) {
    alert("hola");
    otherOption.style.display == 'block'
  }else{
    otherOption.style.display == 'none'
  }

}
