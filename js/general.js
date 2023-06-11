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
});

// Obtener valores de sessionStorage
let contador = Number(sessionStorage.getItem("contador") || 0);
let agregadosAlCarrito = sessionStorage.getItem("agregadosAlCarrito") || '';
let precioFinal = Number(sessionStorage.getItem("precioFinal") || 0);

// Actualizar elementos en la página con los valores almacenados en sessionStorage
let numeroCarrito = document.getElementById("numeroCarrito");
let agregarCurso = document.getElementById("agregarCurso");
let totalFinalCursos = document.getElementById("totalFinalCursos");
numeroCarrito.innerHTML = contador;
agregarCurso.innerHTML = agregadosAlCarrito;
totalFinalCursos.innerHTML = precioFinal;

// Función para actualizar los valores en sessionStorage
function actualizarSessionStorage() {
    sessionStorage.setItem("contador", contador);
    sessionStorage.setItem("agregadosAlCarrito", agregadosAlCarrito);
    sessionStorage.setItem("precioFinal", precioFinal);
}

// CARRITO DE COMPRAS
let noCursos = document.getElementById("noCursos");

function agregar(nombre, etiqueta) {
    contador++;
    numeroCarrito.innerHTML = contador;

    // Creación del elemento en html
    let nuevoCurso = document.createElement("div");
    nuevoCurso.classList.add("curso");
    nuevoCurso.id = `remove${etiqueta}${contador}`;

    let nombreCurso = document.createElement("p");
    nombreCurso.textContent = nombre;

    let eliminarIcono = document.createElement("i");
    eliminarIcono.classList.add("fa-solid", "fa-xmark");
    eliminarIcono.id = `eliminar${etiqueta}${contador}`;

    nuevoCurso.appendChild(nombreCurso);
    nuevoCurso.appendChild(eliminarIcono);

    agregarCurso.appendChild(nuevoCurso);
    agregadosAlCarrito = agregarCurso.innerHTML;

    // Sacar frase "Aún no agregaste cursos a tu carrito."
    if (contador !== 0 || precioFinal !== 0) {
        noCursos.classList.add("d-none");
    }

    switch (nombre) {
        case 'HTML & CSS':
            precioFinal += precioHtml;
            break;
        case 'Javascript':
            precioFinal += precioJavascript;
            break;
        case 'Java':
            precioFinal += precioJava;
            break;
        case 'Python':
            precioFinal += precioPython;
            break;
        case 'Selenium':
            precioFinal += precioSelenium;
            break;
        case 'Diseño UX/UI':
            precioFinal += precioDisenio;
            break;
        default:
            break;
    }

    totalFinalCursos.innerHTML = precioFinal;

    // Agregar el evento para eliminar al icono de eliminar
    let eliminarCurso = document.getElementById(`eliminar${etiqueta}${contador}`);
    eliminarCurso.addEventListener("click", () => {
        eliminar(nombre, etiqueta + contador);
    });

    actualizarSessionStorage();
}

// Función para eliminar un curso del carrito
function eliminar(nombre, etiqueta) {
    // Eliminar el elemento del carrito
    let elementoEliminar = document.getElementById(`remove${etiqueta}`);
    elementoEliminar.remove();

    // Actualizar el precio final y la cantidad
    switch (nombre) {
        case 'HTML & CSS':
            precioFinal -= precioHtml;
            break;
        case 'Javascript':
            precioFinal -= precioJavascript;
            break;
        case 'Java':
            precioFinal -= precioJava;
            break;
        case 'Python':
            precioFinal -= precioPython;
            break;
        case 'Selenium':
            precioFinal -= precioSelenium;
            break;
        case 'Diseño UX/UI':
            precioFinal -= precioDisenio;
            break;
        default:
            break;
    }

    contador--;
    numeroCarrito.innerHTML = contador;
    totalFinalCursos.innerHTML = precioFinal;
    agregadosAlCarrito = agregarCurso.innerHTML;

    // Poner frase "Aún no agregaste cursos a tu carrito."
    if (contador === 0) {
        noCursos.classList.remove("d-none");
    }

    actualizarSessionStorage();
}

// Precios de los cursos
let precioHtml = 9000;
let precioJavascript = 15000;
let precioJava = 15000;
let precioPython = 15000;
let precioSelenium = 15000;
let precioDisenio = 15000;

// Funcionalidad de agregar
let agregarHtml = document.getElementById("agregarHTML");
agregarHtml.addEventListener("click", function () {
    agregar("HTML & CSS", "Html");
});

let agregarJavascript = document.getElementById("agregarJavascript");
agregarJavascript.addEventListener("click", function () {
    agregar("Javascript", "Javascript");
});

let agregarJava = document.getElementById("agregarJava");
agregarJava.addEventListener("click", function () {
    agregar("Java", "Java");
});

let agregarPython = document.getElementById("agregarPython");
agregarPython.addEventListener("click", function () {
    agregar("Python", "Python");
});

let agregarSelenium = document.getElementById("agregarSelenium");
agregarSelenium.addEventListener("click", function () {
    agregar("Selenium", "Selenium");
});

let agregarUxui = document.getElementById("agregarUxui");
agregarUxui.addEventListener("click", function () {
    agregar("Diseño UX/UI", "Uxui");
});

// Buscador
let buscadorHeader = document.getElementById("buscadorHeader");

// Tomo el valor del input
buscadorHeader.addEventListener("input", () => {
  let buscadorStorage = buscadorHeader.value;
  sessionStorage.setItem("buscadorStorage", buscadorStorage);
});
// Si busca con tecla enter
buscadorHeader.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    let buscadorStorage = buscadorHeader.value;
    sessionStorage.setItem("buscadorStorage", buscadorStorage);
    window.location.href = "cursos.html"; 
  }
});
// Si busca haciendo click en la lupa
let lupaHeader = document.getElementById("lupaHeader");
lupaHeader.addEventListener("click", (e) => {
    e.preventDefault();
    let buscadorStorage = buscadorHeader.value;
    sessionStorage.setItem("buscadorStorage", buscadorStorage);
    window.location.href = "cursos.html";
})
// Traer el valor del storage
let buscadorStorage = sessionStorage.getItem("buscadorStorage") || "";