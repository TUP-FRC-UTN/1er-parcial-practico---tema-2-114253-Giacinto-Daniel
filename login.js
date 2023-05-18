$.validator.addMethod("validarPassword", function(){
    var clave = document.getElementById('password').value.trim();
    var numeros = '123456';

    if (clave === numeros){
        return true; 
    } else {
        return false; 
    }
}, "La clave es incorrecta.");


$.validator.addMethod("validarEmail", function(){
    var correo = document.getElementById('email').value;
    var correoValido = 'tup2022@tup.com.ar';

    if (correo === correoValido){
        return true; 
    } else {
        return false;
    }
}, "El email es incorrecto.");


$("#validar").validate({
    rules: {
        email: {
            required: true,
            email: true,
            validarEmail: true
        },
        password: {
            required: true,
            validarPassword: true
        }
    },
    errorClass: "is-invalid",
    validClass: "is-valid",
    
    
    submitHandler: function() {
        Swal.fire({
            icon: 'success',
            title: 'Exito',
            text: 'Datos ingresados correctamente',
            timer: 3000
        })

        // Esperar 3 segundos antes de abrir la página
        setTimeout(function() {
            ingresarSistema();
        }, 2000);
    }
   });


function ingresarSistema(){
    window.open('altaVuelo.html')
}


// Para traducir las validaciones
jQuery.extend(jQuery.validator.messages, {
    required: "Este campo es obligatorio.",
    remote: "Por favor, rellena este campo.",
    email: "Por favor, escribe una dirección de correo válida",
    url: "Por favor, escribe una URL válida.",
});