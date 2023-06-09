// JS - INSCRIPCION
let formulario = document.getElementById("form-inscripcion");
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    validar();
    // aca escribir lo del submit
});

/* VALIDACIONES */
// regEx
let regexLetras = /^[a-zA-Z\s]+$/;
let regexEmail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z._.-]+$/;
let regexNumeros = /^[0-9]$/;

function validar() {
    for (let i = 1; i <= personasAgregadas.length; i++) {
        // nombre y apellido
        let errorNombreApellido = false;
        let mensajeErrorNombreApellido = "";
        let nombreApellido = document.getElementById(`nombreyapellido${i}`).value;
        if (!regexLetras.test(nombreApellido) || (nombreApellido.length == 0 || nombreApellido.length > 50)) {
            errorNombreApellido = true;
            mensajeErrorNombreApellido = "Nombre no es válido";
        }
        if (errorNombreApellido) {
            document.getElementById(`errorNombreApellido${i}`).innerHTML = mensajeErrorNombreApellido;
        }

        // email
        let errorEmail = false;
        let mensajeEmail = "";
        let email = document.getElementById(`email${i}`).value;
        if (!regexEmail.test(email)) {
            errorEmail = true;
            mensajeEmail = "Correo electrónico no es válido";
        }
        if (errorEmail) {
            document.getElementById(`errorEmail${i}`).innerHTML = mensajeEmail;
        }

        // dni
        let errorDni = false;
        let mensajeDni = "";
        let dni = document.getElementById(`dni${i}`).value;
        if (dni.length >= 9) {
            errorDni = true;
            mensajeDni = "DNI no es válido";
        }
        if (errorDni) {
            document.getElementById(`errorDni${i}`).innerHTML = mensajeDni;
        }

        if (errorNombreApellido === false && errorEmail === false && errorDni === false) {
            // aparece popup
            let popup = document.getElementById("popup");
            popup.classList.remove("d-none");
            let cerrarPopup = document.getElementById("cerrarPopup");
            cerrarPopup.addEventListener("click", () => {
                popup.classList.add("d-none");
                // si lo pongo aca, puede funcionar peeeero
                // formulario.submit();
            })
            // submit??
            // formulario.submit();
            formulario.submit();
        }
    }
}



/* INSCRIPCION GENERAL */
let totalAgregado = document.getElementById("totalAgregado");
// let totalFinal = document.getElementById("totalFinalCursos").innerHTML;
totalAgregado.innerHTML = Number(sessionStorage.getItem("precioFinal"));

let contadorDePersonas = 1;
let agregarPersona = document.getElementById("suma");
let eliminarPersona = document.getElementById("resta");
let personas = document.getElementById("personasAgregadas");

// agregar persona
agregarPersona.addEventListener("click", () => {
    contadorDePersonas++;
    personas.innerHTML += `<div class="form-estudiante">
                                <div class="datos">
                                    <label for="nombreyapellido${contadorDePersonas}">Nombre y apellido <span class="requerido">*</span></label>
                                    <input type="text" name="nombreyapellido${contadorDePersonas}" id="nombreyapellido${contadorDePersonas}" class="ingreso nombreapellido"
                                    placeholder="Clementina Mercury" required />

                                </div>
                                <div class="datos">
                                    <label for="email${contadorDePersonas}">Correo electrónico <span class="requerido">*</span></label>
                                    <input type="email" name="email${contadorDePersonas}" id="email${contadorDePersonas}" class="ingreso email"
                                    placeholder="ejemplo@ejemplo.com" required />
                                </div>
                                <div class="datos">
                                    <label for="dni${contadorDePersonas}">DNI <span class="requerido">*</span></label>
                                    <input type="number" name="dni${contadorDePersonas}" id="dni${contadorDePersonas}" class="ingreso dni" placeholder="00000000"
                                    required />
                                </div>
                                <!-- eliminar persona -->
                                <!--<a class="resta" id="resta${contadorDePersonas}">-</a>-->
                            </div>`

    // Sumar al importe total
    let importeActual = Number(totalAgregado.innerHTML);
    let nuevoImporte = importeActual + Number(sessionStorage.getItem("precioFinal"));
    totalAgregado.innerHTML = nuevoImporte;
})

// eliminar persona
eliminarPersona.addEventListener("click", () => {
    let personasAgregadas = document.querySelectorAll(".form-estudiante");

    if (personasAgregadas.length > 1) {
        // Obtener el último elemento de las personas agregadas
        let ultimaPersona = personasAgregadas[personasAgregadas.length - 1];

        // Eliminar la última persona
        ultimaPersona.remove();

        // Reducir el contador de personas
        contadorDePersonas--;

        // Restar del importe total
        let importeActual = Number(totalAgregado.innerHTML);
        let nuevoImporte = importeActual - Number(sessionStorage.getItem("precioFinal"));
        totalAgregado.innerHTML = nuevoImporte;
    }
    // En caso de que sea el primero
    if (personasAgregadas.length === 1) {
        let nombreApellido = document.getElementById("nombreyapellido1");
        nombreApellido.value = "";
        let email = document.getElementById("email1");
        email.value = "";
        let dni = document.getElementById("dni1");
        dni.value = "";
    }
});

// lo del <li> hacerlo con el array a medida que va contando, sumar nombreyapellido${contadorDePersonas}
personasInscriptas();
function personasInscriptas() {
    let personasAgregadas = document.querySelectorAll(".form-estudiante");

    for (let i = 1; i <= personasAgregadas.length; i++) {
        let nombreInscripto = document.getElementById(`nombreyapellido${i}`);
        let inscripto = ``;
        nombreInscripto.addEventListener("input", () => {
            inscripto = `<li>${nombreInscripto.value}</li>`
            // document.getElementById("estudiantes-popup").innerHTML += `<li>${nombreInscripto.value}</li>`; 
            // con un += lo hace letra por letra
            // con = lo hace en una sola linea pero solo funciona cuando es 1.
            // si agrego mas personas no funciona ni siquiera el 1.
        });
        document.getElementById("estudiantes-popup").innerHTML += inscripto;
    }
}