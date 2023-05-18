$.validator.addMethod("tipoVuelo", function(value, element){
    console.log(value);
    if(value == 0){
      return false;
    } else {
      return true;
    }
  }, "Seleccione una opcion...")

$.validator.addMethod("tipoClase", function(value, element){
    console.log(value);
    if(value == 0){
      return false;
    } else {
      return true;
    }
  }, "Seleccione una opcion...")


$("#validar").validate({
    rules: {
        costo: {
            required: true,
            minlength: 4
        },
        fecha: {
            required: true,
        },
        hora: {
            required: true
        },
        origen: {
            required: true
        },
        tipoVuelo: {
            required: true,
            tipoVuelo: true
        },
        clase: {
            required: true,
            tipoClase: true
        }
    },
    errorClass: "is-invalid",
    validClass: "is-valid",
    
    
    submitHandler: function() {
        Swal.fire({
            icon: 'success',
            title: 'Gracias por su Compra',
            text: 'El vuelo se registro con Exito !!',
            timer: 3000
        })

    }
   });

// Para traducir las validaciones
jQuery.extend(jQuery.validator.messages, {
    required: "Este campo es obligatorio.",
    remote: "Por favor, rellena este campo.",
    email: "Por favor, escribe una dirección de correo válida",
    url: "Por favor, escribe una URL válida.",
    date: "Por favor, escribe una fecha válida.",
    dateISO: "Por favor, escribe una fecha (ISO) válida.",
    number: "Por favor, escribe un número entero válido.",
    digits: "Por favor, escribe sólo dígitos.",
    creditcard: "Por favor, escribe un número de tarjeta válido.",
    equalTo: "Por favor, escribe el mismo valor de nuevo.",
    accept: "Por favor, escribe un valor con una extensión aceptada.",
    maxlength: jQuery.validator.format("Por favor, no escribas más de {0} caracteres."),
    minlength: jQuery.validator.format("Por favor, no escribas menos de {0} caracteres."),
    rangelength: jQuery.validator.format("Por favor, escribe un valor entre {0} y {1} caracteres."),
    range: jQuery.validator.format("Por favor, escribe un valor entre {0} y {1}."),
    max: jQuery.validator.format("Por favor, escribe un valor menor o igual a {0}."),
    min: jQuery.validator.format("Por favor, escribe un valor mayor o igual a {0}.")
  });