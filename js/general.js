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


/* SESSION STORAGE */
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

/* CARRITO DE COMPRAS */ // Agregar cursos al carrito
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

    let sessionagregados = sessionStorage.getItem("agregadosAlCarrito");
    // Sacar frase "Aún no agregaste cursos a tu carrito."
    if (contador !== 0 || precioFinal !== 0 || sessionagregados !== '') {
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

    // Agrego funcion eliminar para que se genere el listener
    let eliminarCurso = document.getElementById(`eliminar${etiqueta}${contador}`);
    eliminarCurso.addEventListener("click", (evento) => {
        eliminar(nombre, evento.currentTarget.parentNode.id);
    });

    actualizarSessionStorage();
}

// Función para eliminar un curso del carrito
function eliminar(nombre, etiqueta) {
    // Funcionamiento de eliminar
    let cursoEliminar = document.getElementById(etiqueta);
    cursoEliminar.remove();

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

// Buscador
let buscadorHeader = document.getElementById("buscadorHeader");
let buscadorHeader2 = document.getElementById("buscadorHeader2");
// Tomo el valor del input
buscadorHeader.addEventListener("input", () => {
  let buscadorStorage = buscadorHeader.value;
  sessionStorage.setItem("buscadorStorage", buscadorStorage);
});
buscadorHeader2.addEventListener("input", () => {
    let buscadorStorage = buscadorHeader2.value;
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
buscadorHeader2.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      let buscadorStorage = buscadorHeader2.value;
      sessionStorage.setItem("buscadorStorage", buscadorStorage);
      window.location.href = "cursos.html"; 
    }
  });
// Si busca haciendo click en la lupa (no funciona si pongo a en button)
let lupaHeader = document.getElementById("lupaHeader");
let lupaHeader2 = document.getElementById("lupaHeader2");
lupaHeader.addEventListener("click", (e) => {
    e.preventDefault();
    let buscadorStorage = buscadorHeader.value;
    sessionStorage.setItem("buscadorStorage", buscadorStorage);
    window.location.href = "cursos.html";
})
lupaHeader2.addEventListener("click", (e) => {
    e.preventDefault();
    let buscadorStorage = buscadorHeader2.value;
    sessionStorage.setItem("buscadorStorage", buscadorStorage);
    window.location.href = "cursos.html";
})
// Traer el valor del storage
let buscadorStorage = sessionStorage.getItem("buscadorStorage") || "";