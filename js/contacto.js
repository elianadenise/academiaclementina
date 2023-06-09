/* JS - CONTACTO */
let formularioContacto = document.getElementById("form-contacto");
formularioContacto.addEventListener("submit", (e) => {
    e.preventDefault();
    validar();
    // mostrarPopup();
    // formularioContacto.submit();
});
let mensaje = document.getElementById("mensaje");
let mensajeContador = document.getElementById("respuesta");
let contadorCaracteres = 0;
let caracteresMaximo = 1000;
let mensajeErrorCaracteres = document.getElementById("errorCaracteres");
let errorContador = false;
mensaje.addEventListener("keyup", () => {
    contadorCaracteres = mensaje.value.length;
    if (contadorCaracteres <= caracteresMaximo) {
        mensajeContador.innerHTML = `${contadorCaracteres}/${caracteresMaximo}`;
        mensajeErrorCaracteres.innerHTML = "";
    } else if (contadorCaracteres > caracteresMaximo) {
        mensajeContador.innerHTML = `${contadorCaracteres}/${caracteresMaximo}`;
        mensajeErrorCaracteres.innerHTML = "Tienes solo 1000 caracteres.";
        errorContador = true;
    }
});

function mostrarPopup() {
    document.getElementById("popup").classList.remove("d-none");
}

function validar() {
    // nombre y apellido
    let nombre = document.getElementById("nombreyapellido2");
    let regexLetras = /^[a-zA-Z\s]+$/;
    let errorNombreApellido = false;
    let mensajeErrorNombreApellido = "";
    let nombreObtenido = nombre.value;
    if (!regexLetras.test(nombreObtenido) || (nombreObtenido.length === 0 || nombreObtenido.length > 50)) {
        mensajeErrorNombreApellido = "Completá el campo correctamente.";
        errorNombreApellido = true;
    }
    document.getElementById("errorNombreApellido").innerHTML = mensajeErrorNombreApellido;

    // email
    let regexEmail = /^[0-9a-zA-Z._.-]+@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z._.-]+$/;
    let errorEmail = false;
    let mensajeEmail = "";
    let email = document.getElementById("email2").value;
    if (!regexEmail.test(email)) {
        mensajeEmail = "Correo electrónico no es válido";
        errorEmail = true;
    }
    document.getElementById("errorEmail").innerHTML = mensajeEmail;

    // telefono
    let regexTelefono = /^\d{4}-\d{4}$/;
    let errorTelefono = false;
    let mensajeTelefono = "";
    let telefono = document.getElementById("telefono").value;
    if (!regexTelefono.test(telefono) || telefono.length !== 9) {
        mensajeTelefono = "Teléfono no válido";
        errorTelefono = true;
    }
    document.getElementById("errorTelefono").innerHTML = mensajeTelefono;

    // Mostrar popup y enviar formulario si no hay errores
    if (!errorNombreApellido && !errorEmail && !errorTelefono && !errorContador) {
        // mostrarPopup;
        mostrarPopup();
    }

}