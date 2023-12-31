/* JS - INSCRIPCIÓN */
let formulario = document.getElementById("form-inscripcion");
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    validar();
});


/* VALIDACIONES */
let regexLetras = /^[a-zA-Z\s]+$/;
let regexEmail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z._.-]+$/;
let regexNumeros = /^[0-9]+$/;
let regexTelefono = /^\d{4}-\d{4}$/;
function validar() {
    let personasAgregadas = document.querySelectorAll(".form-estudiante");
    let inscripcion = 0;
    for (let i = 1; i <= personasAgregadas.length; i++) {
        let errorNombreApellido = false;
        let mensajeErrorNombreApellido = "";
        let nombreApellido = document.getElementById(`nombreyapellido${i}`).value;
        if (!regexLetras.test(nombreApellido) ||
            nombreApellido.length == 0 ||
            nombreApellido.length > 50) {
            errorNombreApellido = true;
            mensajeErrorNombreApellido = "Nombre no es válido.";
        } else {
            mensajeErrorNombreApellido = "";
        }
        document.getElementById(`errorNombreApellido${i}`).innerHTML = mensajeErrorNombreApellido;

        let errorEmail = false;
        let mensajeEmail = "";
        let email = document.getElementById(`email${i}`).value;
        if (!regexEmail.test(email)) {
            errorEmail = true;
            mensajeEmail = "Correo electrónico no es válido.";
        } else {
            mensajeEmail = "";
        }
        document.getElementById(`errorEmail${i}`).innerHTML = mensajeEmail;

        let errorDni = false;
        let mensajeDni = "";
        let dni = document.getElementById(`dni${i}`).value;
        if (dni.length >= 9 || !regexNumeros.test(dni)) {
            errorDni = true;
            mensajeDni = "DNI no es válido.";
            document.getElementById(`errorDni${i}`).innerHTML = mensajeDni;
        } else {
            mensajeDni = "";
        }
        document.getElementById(`errorDni${i}`).innerHTML = mensajeDni;

        let errorTelefono = false;
        let mensajeTelefono = "";
        let telefono = document.getElementById(`telefono${i}`).value;
        if (!regexTelefono.test(telefono) || telefono.length !== 9) {
            mensajeTelefono = "Teléfono no válido.";
            errorTelefono = true;
        } else {
            mensajeTelefono = "";
        }
        document.getElementById(`errorTelefono${i}`).innerHTML = mensajeTelefono;

        if (!errorNombreApellido && !errorEmail && !errorDni && !errorTelefono) {
            inscripcion++;
            // formulario.submit();
        }
    }
    // si se logra validar todo
    if (inscripcion === personasAgregadas.length) {

        personasInscriptas();
        let popup = document.getElementById("popup");
        popup.classList.remove("d-none");

        let cerrarPopup = document.getElementById("cerrarPopup");
        cerrarPopup.addEventListener("click", () => {
            popup.classList.add("d-none");
        });

        setTimeout(() => {
            formulario.submit();
        }, 10000);

    }
}

// Agregar precio final del carrito en la inscripcion
let totalAgregado = document.getElementById("totalAgregado");
let totalEnCarrito = Number(sessionStorage.getItem("precioFinal"));
totalAgregado.innerHTML = totalEnCarrito;

let contadorDePersonas = 1;
let agregarPersona = document.getElementById("suma");
let eliminarPersona = document.getElementById("resta");
let personas = document.getElementById("personasAgregadas");
// Agregar persona
agregarPersona.addEventListener("click", () => {
    contadorDePersonas++;
    personas.innerHTML += `<div class="form-estudiante">
        <div class="datos">
            <label for="nombreyapellido${contadorDePersonas}">Nombre y apellido <span class="requerido">*</span></label>
            <input type="text" name="nombreyapellido${contadorDePersonas}" id="nombreyapellido${contadorDePersonas}" class="ingreso nombreapellido"
                placeholder="Clementina Mercury" required />
            <p id="errorNombreApellido${contadorDePersonas}" class="requerido"></p>
        </div>
        <div class="datos">
            <label for="email${contadorDePersonas}">Correo electrónico <span class="requerido">*</span></label>
            <input type="email" name="email${contadorDePersonas}" id="email${contadorDePersonas}" class="ingreso email"
                placeholder="ejemplo@ejemplo.com" required />
            <p id="errorEmail${contadorDePersonas}" class="requerido"></p>
        </div>
        <div class="datos">
            <label for="dni${contadorDePersonas}">DNI <span class="requerido">*</span></label>
            <input type="number" name="dni${contadorDePersonas}" id="dni${contadorDePersonas}" class="ingreso dni" placeholder="00000000"
                required />
            <p id="errorDni${contadorDePersonas}" class="requerido"></p>
        </div>
        <div class="datos">
            <label for="telefono${contadorDePersonas}">Teléfono <span class="requerido">*</span></label>
            <input type="text" name="telefono${contadorDePersonas}" id="telefono${contadorDePersonas}" class="ingreso telefono" placeholder="0000-0000" />
            <p id="errorTelefono${contadorDePersonas}" class="requerido"></p>
        </div>
        <!-- eliminar persona -->
            <!--<a class="resta">-</a>-->
    </div>`;

    // Aumentar precio final
    totalAgregado.innerHTML = totalEnCarrito * contadorDePersonas;
});


// function eliminar() {
//     let botonesDeEliminar = document.querySelectorAll(".resta");
//     for (let i = 0; i < botonesDeEliminar.length; i++) {
//       botonesDeEliminar[i].addEventListener("click", function () {
//         console.log(this.parentNode);
//         this.parentNode.remove();
//       });
//     }
//   }
// eliminar();
// let botonesDeEliminar = document.querySelectorAll(".resta");
// document.querySelectorAll(".resta").forEach((item) => {
//     item.addEventListener("click", function () {
//         console.log(item.parentNode);
//         // item.parentNode.remove();
//         this.parentNode.remove();
//     });
// });



// Eliminar persona
eliminarPersona.addEventListener("click", () => {
    let personasAgregadas = document.querySelectorAll(".form-estudiante");

    if (personasAgregadas.length > 1) {
        let ultimaPersona = personasAgregadas[personasAgregadas.length - 1];
        ultimaPersona.remove();
        contadorDePersonas--;
        // Disminuir el precio final
        totalAgregado.innerHTML = totalEnCarrito * contadorDePersonas;
    }

    if (personasAgregadas.length === 1) {
        let nombreApellido = document.getElementById("nombreyapellido1");
        nombreApellido.value = "";
        let email = document.getElementById("email1");
        email.value = "";
        let dni = document.getElementById("dni1");
        dni.value = "";
    }
});

// Ingresa valores al popup
function personasInscriptas() {
    let personasAgregadas = document.querySelectorAll(".form-estudiante");
    let estudiantesPopup = document.getElementById("estudiantes-popup");
    estudiantesPopup.innerHTML = "";
    let nombreInscripto = "";
    for (let i = 1; i <= personasAgregadas.length; i++) {
        nombreInscripto = document.getElementById(`nombreyapellido${i}`).value;
        estudiantesPopup.innerHTML += `<li>${nombreInscripto}</li>`;
    }
}

