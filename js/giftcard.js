// JS - GIFTCARD
let formulario = document.getElementById("form-giftcard");
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    validar();
});

// nombre
let nombre = document.getElementById("nombreDestinatario");
let regexLetras = /^[a-zA-Z\s]+$/;
let errorDestinatario = false;
nombre.addEventListener("keyup", () => {
    let mensajeErrorDestinatario = "";
    let destinatarioObtenido = nombre.value;
    if (!regexLetras.test(destinatarioObtenido)) {
        mensajeErrorDestinatario = "Completá el campo correctamente.";
        errorDestinatario = true;
    } else {
        document.getElementById("destinatarioObtenido").innerHTML = destinatarioObtenido;
        mensajeErrorDestinatario = "";
        errorDestinatario = false;
    }
    document.getElementById("errorDestinatario").innerHTML = mensajeErrorDestinatario;
});

// color
const colores = document.getElementsByName("color");
const destinatario = document.querySelector(".destinatario");
let colorCheck = false;
colores.forEach((color) => {
    color.addEventListener("change", () => {
        destinatario.classList.remove("color1", "color2", "color3", "color4", "color5");
        if(color.checked){
            let valor = color.value;
            destinatario.classList.add(`color${valor}`);
            colorCheck = true;
        }
    })
})

// tamaño de fuente
const tamanios = document.getElementsByName("tamanio");
const nombrePrevia = document.querySelector(".nombre");
let tamanioCheck = false;
tamanios.forEach((tamanio) => {
    tamanio.addEventListener("change", () => {
        nombrePrevia.classList.remove("tamanio20", "tamanio28", "tamanio32", "tamanio48", "tamanio60");
        if(tamanio.checked){
            let valor = tamanio.value;
            nombrePrevia.classList.add(`tamanio${valor}`);
            tamanioCheck = true;
        }
    })
})

// monto
let monto = document.getElementById("monto");
let errorMonto = false;
monto.addEventListener("keyup", () => {
    let mensajeErrorMonto = "";
    let montoObtenido = monto.value;
    let montoMaximo = 100000;
    if (montoObtenido >= montoMaximo) {
        mensajeErrorMonto = "Monto máximo es de $100.000.";
        errorMonto = true;
    } else {
        document.getElementById("montoObtenido").innerHTML = montoObtenido;
        mensajeErrorMonto = "";
        errorMonto = false;
    }
    document.getElementById("errorMonto").innerHTML = mensajeErrorMonto;
});

// ubicación
const ubicaciones = document.getElementsByName("ubicacion");
const montoUbicacion = document.querySelector(".monto");
let ubicacionCheck = false;
ubicaciones.forEach((ubicacion) => {
    ubicacion.addEventListener("change", () => {
        montoUbicacion.classList.remove("ubicacion1", "ubicacion2", "ubicacion3");
        if(ubicacion.checked){
            let valor = ubicacion.value;
            montoUbicacion.classList.add(`ubicacion${valor}`)
            ubicacionCheck = true;
        }
    })
})


// fondo
const fondos = document.getElementsByName("fondo");
const vistaPrevia = document.querySelector(".giftcard-imagen");
let fondoCheck = false;
fondos.forEach((fondo) => {
    fondo.addEventListener("change", () => {
        vistaPrevia.classList.remove("fondo1", "fondo2", "fondo3", "fondo4", "fondo5");
        if(fondo.checked){
            let valor = fondo.value;
            vistaPrevia.classList.add(`fondo${valor}`);
            fondoCheck = true;
        }
    })
})

function validar() {
    if (errorDestinatario === false && errorMonto === false && ubicacionCheck == true && colorCheck == true && tamanioCheck == true && fondoCheck == true) {
        formulario.submit();
        document.getElementById("supererror").innerHTML = "";
    } else {
        document.getElementById("supererror").innerHTML = "¡Oops! Tenés que completar todos los campos.";
        let errorRadio = "Tenés que marcar una opción."
        if(ubicacionCheck == false){
            document.getElementById("errorUbicacion").innerHTML = errorRadio;
        }
        if(colorCheck == false){
            document.getElementById("errorColor").innerHTML = errorRadio;
        }
        if(tamanioCheck == false){
            document.getElementById("errorTamanio").innerHTML = errorRadio;
        }
        if(fondoCheck == false){
            document.getElementById("errorFondo").innerHTML = errorRadio;
        }
    }
}
