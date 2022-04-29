
$(document).ready(function() {

$("#error").hide();
//Validacion de datos del formulario
$("#formulario").submit(function(){
    event.preventDefault(); //evita el envio de datos
     var mensaje =""; // almacenara el texto de las validaciones

     if($("#nombre").val().trim().length == 0){

        mensaje = "El campo nombre esta vacio";
     }

     if($("#apellido").val().trim().length == 0){

        mensaje = "El campo apellido esta vacio";
     }

     if($("#email").val().indexOf('@', 0) == -1 || $("#email").val().indexOf('.', 0) == -1) {
        alert('El correo electrónico introducido no es correcto.');
        return false;
    }

     if(mensaje != ""){

        $("#error").html(mensaje);
        $("#error").show(); //permite mostrar el div
        
     }

    });

})