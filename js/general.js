// JS - GENERAL
/* MENU DESPLEGABLE */ // abrir y cerrar
let menuHamburguesa = document.getElementById("menuHamburguesa");
let cerrarMenu = document.getElementById("cerrarMenu");
let menuDesplegable = document.getElementById("menuDesplegable");
menuHamburguesa.addEventListener("click", function () {
    menuDesplegable.classList.toggle("d-none");
});
cerrarMenu.addEventListener("click", function () {
    menuDesplegable.classList.add("d-none");
});

/* CARRITO DE COMPRAS */ // abrir y cerrar
let carrito = document.getElementById("carrito");
let cerrarCarrito = document.getElementById("cerrarCarrito");
let popup = document.getElementById("cursosEnCarrito");
carrito.addEventListener("click", () => {
    popup.classList.toggle("d-none")
});
cerrarCarrito.addEventListener("click", () => {
    popup.classList.add("d-none");
})
// Obtener valores de sessionStorage
let contador = sessionStorage.getItem("contador") || 0;
let agregadosAlCarrito = sessionStorage.getItem("agregadosAlCarrito") || '';
let precioFinal = sessionStorage.getItem("precioFinal") || 0;

// Actualizar elementos en la página con los valores almacenados en sessionStorage
let numeroCarrito = document.getElementById("numeroCarrito");
let agregarCurso = document.getElementById("agregarCurso");
let totalFinalCursos = document.getElementById("totalFinalCursos");
numeroCarrito.innerHTML = contador;
agregarCurso.innerHTML = agregadosAlCarrito; // bien 
totalFinalCursos.innerHTML = precioFinal;

// Función para actualizar los valores en sessionStorage
function actualizarSessionStorage() { //no seria get?
    sessionStorage.setItem("contador", contador);
    sessionStorage.setItem("agregadosAlCarrito", agregadosAlCarrito);
    sessionStorage.setItem("precioFinal", precioFinal);


    // totalFinalCursos.innerHTML = precioFinal;

    // agregadosAlCarrito = agregarCursoACarrito.innerHTML;


}

/* CARRITO DE COMPRAS */
// SessionStorage de contador y precioFinal
let cantidad = 0;
// sessionStorage.setItem("contador", cantidad);
// let contador = sessionStorage.getItem("contador")
// let numeroCarrito = document.getElementById("numeroCarrito");
numeroCarrito.innerHTML = contador;

sessionStorage.setItem("precioFinal", Number(0));
// let precioFinal = sessionStorage.getItem("precioFinal")
totalFinalCursos.innerHTML = precioFinal;

// funcion aumentar y uso
// agregar p de curso al carrito
let noCursos = document.getElementById("noCursos");

// SessionStorage de cursos agregados al carrito.
sessionStorage.setItem("agregadosAlCarrito", ``);
// let sessionAgregados = sessionStorage.getItem("agregadosAlCarrito")

function agregar(nombre, etiqueta) {
    cantidad++;
    contador = cantidad;
    numeroCarrito.innerHTML = contador;
    // Creación del elemento en html
    let nuevoCurso = document.createElement("div");
    nuevoCurso.classList.add("curso");
    nuevoCurso.id = `remove${etiqueta}${cantidad}`;

    let nombreCurso = document.createElement("p");
    nombreCurso.textContent = nombre;

    let eliminarIcono = document.createElement("i");
    eliminarIcono.classList.add("fa-solid", "fa-xmark");
    eliminarIcono.id = `eliminar${etiqueta}${cantidad}`;

    nuevoCurso.appendChild(nombreCurso);
    nuevoCurso.appendChild(eliminarIcono);

    agregarCurso.appendChild(nuevoCurso);
    agregadosAlCarrito = agregarCurso.innerHTML;
    // Fin de la creación

    if (contador !== 0) {
        noCursos.classList.add("d-none");
    }

    switch (nombre) {
        case 'HTML & CSS':
            precioFinal = Number(precioFinal) + Number(precioHtml);
            break;
        case 'Javascript':
            precioFinal = Number(precioFinal) + Number(precioJavascript);
            break;
        case 'Java':
            precioFinal = Number(precioFinal) + Number(precioJava);
            break;
        case 'Python':
            precioFinal = Number(precioFinal) + Number(precioPython);
            break;
        case 'Selenium':
            precioFinal = Number(precioFinal) + Number(precioSelenium);
            break;
        case 'Diseño UX/UI':
            precioFinal = Number(precioFinal) + Number(precioDisenio);
            break;
        default:
            break;
    }

    totalFinalCursos.innerHTML = precioFinal;

    // Agregar el evento para eliminar al icon de eliminar
    let eliminarCurso = document.getElementById(`eliminar${etiqueta}${cantidad}`);
    eliminarCurso.addEventListener("click", () => {
        eliminar(nombre, etiqueta + cantidad);
    });
    actualizarSessionStorage();
}
// aplicacion de aumentar
let precioHtml = 9000;
let agregarHtml = document.getElementById("agregarHTML");
agregarHtml.addEventListener("click", function () {
    agregar("HTML & CSS", "Html");
});
let precioJavascript = 15000;
let agregarJavascript = document.getElementById("agregarJavascript");
agregarJavascript.addEventListener("click", function () {
    agregar("Javascript", "Javascript");
});
let precioJava = 15000;
let agregarJava = document.getElementById("agregarJava");
agregarJava.addEventListener("click", function () {
    agregar("Java", "Java")
});
let precioPython = 15000;
let agregarPython = document.getElementById("agregarPython");
agregarPython.addEventListener("click", function () {
    agregar("Python", "Python")
});
let precioSelenium = 15000;
let agregarSelenium = document.getElementById("agregarSelenium");
agregarSelenium.addEventListener("click", function () {
    agregar(`Selenium`, `Selenium`)
});
let precioDisenio = 15000;
let agregarUxui = document.getElementById("agregarUxui");
agregarUxui.addEventListener("click", function () {
    agregar(`Diseño UX/UI`, `Uxui`)
});

// funcion eliminar del carrito
function eliminar(nombre, etiqueta) {
    // Eliminar el elemento del carrito
    let elementoEliminar = document.getElementById(`remove${etiqueta}`);
    elementoEliminar.remove(elementoEliminar);

    // Actualizar el precio final y la cantidad
    switch (nombre) {
        case 'HTML & CSS':
            precioFinal = Number(precioFinal) - Number(precioHtml);
            break;
        case 'Javascript':
            precioFinal = Number(precioFinal) - Number(precioJavascript);
            break;
        case 'Java':
            precioFinal = Number(precioFinal) - Number(precioJava);
            break;
        case 'Python':
            precioFinal = Number(precioFinal) - Number(precioPython);
            break;
        case 'Selenium':
            precioFinal = Number(precioFinal) - Number(precioSelenium);
            break;
        case 'Diseño UX/UI':
            precioFinal = Number(precioFinal) - Number(precioDisenio);
            break;
        default:
            break;
    }

    cantidad--;
    contador = cantidad;
    numeroCarrito.innerHTML = contador;
    totalFinalCursos.innerHTML = precioFinal;
    agregadosAlCarrito = agregarCurso.innerHTML;
    if (contador == 0) {
        noCursos.classList.toggle("d-none");
    }
    actualizarSessionStorage();
}
