let formulario = document.getElementById("form-inscripcion");
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    validar();
    // personasInscriptas();
});

/* VALIDACIONES */
let regexLetras = /^[a-zA-Z\s]+$/;
let regexEmail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z._.-]+$/;
let regexNumeros = /^[0-9]+$/;

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
        if (errorNombreApellido) {
            document.getElementById(`errorNombreApellido${i}`).innerHTML =
                mensajeErrorNombreApellido;
        }

        let errorEmail = false;
        let mensajeEmail = "";
        let email = document.getElementById(`email${i}`).value;
        if (!regexEmail.test(email)) {
            errorEmail = true;
            mensajeEmail = "Correo electrónico no es válido.";
        }else{
            mensajeEmail = "";
        }
        if (errorEmail) {
            document.getElementById(`errorEmail${i}`).innerHTML = mensajeEmail;
        }

        let errorDni = false;
        let mensajeDni = "";
        let dni = document.getElementById(`dni${i}`).value;
        if (dni.length >= 9 || !regexNumeros.test(dni)) {
            errorDni = true;
            mensajeDni = "DNI no es válido.";
        } else {
            mensajeDni = "";
        }
        if (errorDni) {
            document.getElementById(`errorDni${i}`).innerHTML = mensajeDni;
        }

        if (!errorNombreApellido && !errorEmail && !errorDni) {
            inscripcion++;
            // personasInscriptas();
            // formulario.submit();
        }
    }
    // si se logra validar todo
    if (inscripcion === personasAgregadas.length) {
        let popup = document.getElementById("popup");
        popup.classList.remove("d-none");
        // formulario.submit();
        let cerrarPopup = document.getElementById("cerrarPopup");
        cerrarPopup.addEventListener("click", () => {
            popup.classList.add("d-none");
        });
        personasInscriptas();
    }
}

let totalAgregado = document.getElementById("totalAgregado");
let totalEnCarrito = Number(sessionStorage.getItem("precioFinal"));
totalAgregado.innerHTML = totalEnCarrito;

let contadorDePersonas = 1;
let agregarPersona = document.getElementById("suma");
let eliminarPersona = document.getElementById("resta");
let personas = document.getElementById("personasAgregadas");

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
    </div>`;

    totalAgregado.innerHTML = totalEnCarrito * contadorDePersonas;
});

eliminarPersona.addEventListener("click", () => {
    let personasAgregadas = document.querySelectorAll(".form-estudiante");

    if (personasAgregadas.length > 1) {
        let ultimaPersona = personasAgregadas[personasAgregadas.length - 1];
        ultimaPersona.remove();
        contadorDePersonas--;
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

// personasInscriptas();
// funciona a medias.
function personasInscriptas() {
    let personasAgregadas = document.querySelectorAll(".form-estudiante");
    let estudiantesPopup = document.getElementById("estudiantes-popup");
    // let acum = '';
    let nombreInscripto = "";
    for (let i = 1; i <= personasAgregadas.length; i++) {
        nombreInscripto = document.getElementById(`nombreyapellido${i}`).value;
        estudiantesPopup.innerHTML += `<li>${nombreInscripto}</li>`;
    }
}

// ESTE NO FUNCIONA
// function personasInscriptas() {
//     let personasAgregadas = document.querySelectorAll(".form-estudiante");
//     let estudiantesPopup = document.getElementById("estudiantes-popup");
//     estudiantesPopup.innerHTML = ""; // Limpiamos el contenido previo

//     for (let i = 1; i <= personasAgregadas.length; i++) {
//         let nombreInscripto = document.getElementById(`nombreyapellido${i}`);let liElement;
//         nombreInscripto.addEventListener("input", () => {
//             let inscripto = nombreInscripto.value;
//             liElement = document.createElement("li");
//             liElement.textContent = inscripto;
//             estudiantesPopup.appendChild(liElement);
//         })

//     }
// }

// este funciona pero no. este tampoco

// function personasInscriptas() {
//     let personasAgregadas = document.querySelectorAll(".form-estudiante");
//     let estudiantesPopup = document.getElementById("estudiantes-popup");
//     let inscriptosTotales = ``;
//     for (let i = 1; i <= personasAgregadas.length; i++) {
//         let nombreInscripto = document.getElementById(`nombreyapellido${i}`);
//         let inscripto = '';
//         nombreInscripto.addEventListener("input", () => {
//             inscripto = nombreInscripto.value;
//             // let valorActual = inscriptosTotales;
//             inscriptosTotales = `<li>${inscripto}</li>`;
//             estudiantesPopup.innerHTML += inscriptosTotales;
//         });
//     }
// }

// esto es lo que creo que esta bien pero no funciona NO FUNCIONA
// function personasInscriptas() {
//     let personasAgregadas = document.querySelectorAll(".form-estudiante");
//     let estudiantesPopup = document.getElementById("estudiantes-popup");
//     let inscriptosTotales = ``;
//     for (let i = 1; i <= personasAgregadas.length; i++) {
//         let nombreInscripto = document.getElementById(`nombreyapellido${i}`);
//         let inscripto = '';
//         nombreInscripto.addEventListener("input", () => {
//             inscripto = nombreInscripto.value;
//             // let valorActual = inscriptosTotales;
//         });
//         inscriptosTotales += `<li>${inscripto}</li>`;
//     }
//     estudiantesPopup.innerHTML = inscriptosTotales;
// }
