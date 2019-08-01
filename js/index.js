
//Para mostrar el formulario de registro de libro
function ocultarVisualizar(){
    var form1 = document.getElementById("verInformacion");
    if(form1.style.display =="block"){
        form1.style.display = "none"
    }
    else
        if(form1.style.display=="none"){
            form1.style.display = "block"
        }
}
