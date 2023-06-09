// // // JS - GENERAL
// // /* MENU DESPLEGABLE */ // abrir y cerrar
// // let menuHamburguesa = document.getElementById("menuHamburguesa");
// // let cerrarMenu = document.getElementById("cerrarMenu");
// // let menuDesplegable = document.getElementById("menuDesplegable");
// // menuHamburguesa.addEventListener("click", function () {
// //   menuDesplegable.classList.toggle("d-none");
// // });
// // cerrarMenu.addEventListener("click", function () {
// //   menuDesplegable.classList.add("d-none");
// // });

// // /* CARRITO DE COMPRAS */ // abrir y cerrar
// // let carrito = document.getElementById("carrito");
// // let cerrarCarrito = document.getElementById("cerrarCarrito");
// // let popup = document.getElementById("cursosEnCarrito");
// // popup.classList.add("d-none");
// // carrito.addEventListener("click", () => {
// //   popup.classList.toggle("d-none");
// // });
// // cerrarCarrito.addEventListener("click", () => {
// //   popup.classList.add("d-none");
// // });

// // /* CARRITO DE COMPRAS */
// // // SessionStorage de contador y precioFinal
// // let cantidad = Number(sessionStorage.getItem("contador")) || 0;
// // let precioFinal = Number(sessionStorage.getItem("precioFinal")) || 0;

// // let numeroCarrito = document.getElementById("numeroCarrito");
// // let total = document.getElementById("totalFinalCursos");
// // let agregarCursoACarrito = document.getElementById("agregarCurso");

// // // Actualización del carrito de compras en todas las páginas.
// // function actualizarCarrito() {
// //   // Contador del carrito
// //   let contadorStorage = sessionStorage.getItem("contador") || 0;
// //   numeroCarrito.innerHTML = contadorStorage;

// //   // Cursos agregados
// //   let cursos = sessionStorage.getItem("agregadosAlCarrito") || "";
// //   agregarCursoACarrito.innerHTML = cursos;

// //   // Precio total
// //   total.innerHTML = precioFinal;
// // }

// // // Aumentar la cantidad de cursos en el carrito
// // function aumentar(nombre, etiqueta) {
// //   cantidad++;
// //   numeroCarrito.innerHTML = cantidad;

// //   // Construir el HTML del nuevo elemento
// //   let nuevoCursoHTML = `
// //     <div class="curso" id="remove${etiqueta}">
// //       <p>${nombre}</p>
// //       <i class="fa-solid fa-xmark" id="eliminar${etiqueta}"></i>
// //     </div>
// //   `;

// //   // Agregar el nuevo elemento al carrito
// //   agregarCursoACarrito.insertAdjacentHTML("beforeend", nuevoCursoHTML);

// //   // Actualizar los datos en sessionStorage
// //   sessionStorage.setItem("contador", cantidad);
// //   sessionStorage.setItem("agregadosAlCarrito", agregarCursoACarrito.innerHTML);

// //   // Actualizar el precio final
// //   switch (nombre) {
// //     case "HTML & CSS":
// //       precioFinal += precioHtml;
// //       break;
// //     case "Javascript":
// //       precioFinal += precioJavascript;
// //       break;
// //     // Agregar los otros casos para cada curso
// //   }

// //   // Actualizar el precio final en sessionStorage
// //   sessionStorage.setItem("precioFinal", precioFinal);

// //   total.innerHTML = precioFinal;

// //   // Agregar el evento para eliminar al ícono de eliminar
// //   let eliminarCurso = document.getElementById(`eliminar${etiqueta}`);
// //   eliminarCurso.addEventListener("click", () => {
// //     eliminar(nombre, etiqueta);
// //   });
// // }

// // // Eliminar un curso del carrito
// // function eliminar(nombre, etiqueta) {
// //   // Eliminar el elemento del carrito
// //   let elementoEliminar = document.getElementById(`remove${etiqueta}`);
// //   elementoEliminar.parentNode.removeChild(elementoEliminar);

// //   // Actualizar la cantidad y el precio final
// //   cantidad--;
// //   numeroCarrito.innerHTML = cantidad;

// //   switch (nombre) {
// //     case "HTML & CSS":
// //       precioFinal -= precioHtml;
// //       break;
// //     case "Javascript":
// //       precioFinal -= precioJavascript;
// //       break;
// //     // Agregar los otros casos para cada curso
// //   }

// //   // Actualizar los datos en sessionStorage
// //   sessionStorage.setItem("contador", cantidad);
// //   sessionStorage.setItem("precioFinal", precioFinal);

// //   total.innerHTML = precioFinal;

// //   if (cantidad === 0) {
// //     noCursos.classList.remove("d-none");
// //   }
// // }

// // // Precios de los cursos
// // let precioHtml = 9000;
// // let precioJavascript = 15000;
// // // Agregar los otros precios de los cursos aquí

// // // Agregar eventos a los botones de agregar cursos
// // let agregarHtml = document.getElementById("agregarHTML");
// // agregarHtml.addEventListener("click", function () {
// //   aumentar("HTML & CSS", "Html");
// // });

// // let agregarJavascript = document.getElementById("agregarJavascript");
// // agregarJavascript.addEventListener("click", function () {
// //   aumentar("Javascript", "Javascript");
// // });

// // // Agregar los eventos para los otros botones de agregar cursos aquí

// // // actualizacion de datos
// // actualizarCarrito();
// // window.addEventListener("load", actualizarCarrito);


// // // JS - GENERAL
// // /* MENU DESPLEGABLE */ // abrir y cerrar
// // let menuHamburguesa = document.getElementById("menuHamburguesa");
// // let cerrarMenu = document.getElementById("cerrarMenu");
// // let menuDesplegable = document.getElementById("menuDesplegable");
// // menuHamburguesa.addEventListener("click", function () {
// //     menuDesplegable.classList.toggle("d-none");
// // });
// // cerrarMenu.addEventListener("click", function () {
// //     menuDesplegable.classList.add("d-none");
// // });

// // /* CARRITO DE COMPRAS */ // abrir y cerrar
// // let carrito = document.getElementById("carrito");
// // let cerrarCarrito = document.getElementById("cerrarCarrito");
// // let popup = document.getElementById("cursosEnCarrito");
// // popup.classList.add("d-none");
// // carrito.addEventListener("click", () => {
// //     popup.classList.toggle("d-none")
// // });
// // cerrarCarrito.addEventListener("click", () => {
// //     popup.classList.add("d-none");
// // })



// // /* CARRITO DE COMPRAS */
// // // SessionStorage de contador y precioFinal
// // let cantidad = 0;
// // sessionStorage.setItem("contador", cantidad);
// // let contador = sessionStorage.getItem("contador")
// // let numeroCarrito = document.getElementById("numeroCarrito");
// // numeroCarrito.innerHTML = contador;

// // // let totalFinal = 0;
// // let total = document.getElementById("totalFinalCursos");
// // sessionStorage.setItem("precioFinal", Number(0));
// // let precioFinal = sessionStorage.getItem("precioFinal")
// // total.innerHTML = precioFinal;

// // // funcion aumentar y uso
// // // agregar p de curso al carrito
// // let agregarCursoACarrito = document.getElementById("agregarCurso");
// // let noCursos = document.getElementById("noCursos");
// // // SessionStorage de cursos agregados al carrito.
// // sessionStorage.setItem("agregadosAlCarrito", ``);
// // let sessionAgregados = sessionStorage.getItem("agregadosAlCarrito")
// // // let eliminarHTML;
// // // let divHtml;


// // function aumentar(nombre, etiqueta) {
// //     cantidad++;
// //     // sessionStorage.setItem("contador", cantidad);
// //     numeroCarrito.innerHTML = cantidad;
// //     agregarCursoACarrito.innerHTML += `<div class="curso" id="remove${etiqueta}"><p>${nombre}</p> <i class="fa-solid fa-xmark" id="eliminar${etiqueta}"></i></div>`;
// //     sessionAgregados = agregarCursoACarrito.innerHTML;

// //     // eliminarHTML = document.getElementById("eliminarHtml");
// //     // divHtml = document.getElementById("removeHtml");
// //     if (cantidad > 0) {
// //         noCursos.classList.add("d-none");
// //     }

// //     // sumatoria
// //     switch (nombre) {
// //         case 'HTML & CSS':
// //             precioFinal = Number(precioFinal) + Number(precioHtml);
// //             break;
// //         case 'Javascript':
// //             precioFinal = Number(precioFinal) + Number(precioJavascript);
// //             break;
// //         case 'Java':
// //             precioFinal = Number(precioFinal) + Number(precioJava);
// //             break;
// //         case 'Python':
// //             precioFinal = Number(precioFinal) + Number(precioPython);
// //             break;
// //         case 'Selenium':
// //             precioFinal = Number(precioFinal) + Number(precioSelenium);
// //             break;
// //         case 'Diseño UX/UI':
// //             precioFinal = Number(precioFinal) + Number(precioDisenio);
// //             break;
// //         default:
// //             break;
// //     }
// //     total.innerHTML = precioFinal;
// // }

// // let precioHtml = 9000;
// // let agregarHtml = document.getElementById("agregarHTML"); // tiene que ver con esto.
// // agregarHtml.addEventListener("click", function () {
// //     aumentar("HTML & CSS", "Html");
// // });

// // let precioJavascript = 15000;
// // let agregarJavascript = document.getElementById("agregarJavascript");
// // agregarJavascript.addEventListener("click", function () {
// //     aumentar("Javascript", "Javascript");
// // });

// // let precioJava = 15000;
// // let agregarJava = document.getElementById("agregarJava");
// // agregarJava.addEventListener("click", function () {
// //     aumentar("Java", "Java")
// // });

// // let precioPython = 15000;
// // let agregarPython = document.getElementById("agregarPython");
// // agregarPython.addEventListener("click", function () {
// //     aumentar("Python", "Python")
// // });

// // let precioSelenium = 15000;
// // let agregarSelenium = document.getElementById("agregarSelenium");
// // agregarSelenium.addEventListener("click", function () {
// //     aumentar(`Selenium`, `Selenium`)
// // });

// // let precioDisenio = 15000;
// // let agregarUxui = document.getElementById("agregarUxui");
// // agregarUxui.addEventListener("click", function () {
// //     aumentar(`Diseño UX/UI`, `Uxui`)
// // });


// // // funcion eliminar del carrito
// // function eliminar(nombre) {

// //     // resta
// //     switch (nombre) {
// //         case 'HTML & CSS':
// //             let divHtml = document.getElementById("removeHtml");
// //             divHtml.remove();
// //             precioFinal -= precioHtml;
// //             cantidad--;

// //             break;
// //         case 'Javascript':
// //             precioFinal -= precioJavascript;
// //             break;
// //         case 'Java':
// //             precioFinal -= precioJava;
// //             break;
// //         case 'Python':
// //             precioFinal -= precioPython;
// //             break;
// //         case 'Selenium':
// //             precioFinal -= precioSelenium;
// //             break;
// //         case 'Diseño UX/UI':
// //             precioFinal -= precioDisenio;
// //             break;
// //         default:
// //             break;
// //     }
// // }
// // let eliminarHTML = document.getElementById("eliminarHtml");
// // eliminarHTML.addEventListener("click", () => { // no lo escucha porque no existe al momento de cargarse la pagina
// //     eliminar("HTML & CSS")
// // });


// // // Actualización del carrito de compras en todas las páginas.
// // function actualizarCarrito(){
// //     // Contador del carrito
// //     let contadorStorage = sessionStorage.getItem("contador");
// //     document.getElementById("numeroCarrito").innerHTML = contadorStorage;

// //     // Cursos agregados
// //     let cursos = sessionStorage.getItem("sessionAgregados");
// //     document.getElementById("agregarCurso") = cursos;

// //     // Precio total
// //     let precio = sessionStorage.getItem("precioFinal");
// //     document.getElementById("totalFinalCursos").innerHTML = precio;


// // }
// // // actualizacion de datos
// // actualizarCarrito();
// // window.addEventListener("load", actualizarCarrito);






// // // // // carrito.js
// // // // let contador = sessionStorage.getItem("contador") || 0;

// // // // function actualizarCarrito() {
// // // //   sessionStorage.setItem("contador", contador);
// // // //   document.getElementById("numeroCarrito").innerHTML = contador;
// // // // }

// // // // function aumentar() {
// // // //   contador++;
// // // //   actualizarCarrito();
// // // // }

// // // // // Actualiza el carrito en todas las páginas al cargar
// // // // window.addEventListener("load", actualizarCarrito);

// // // // // Evento click para aumentar el carrito
// // // // let agregarHtml = document.getElementById("agregarHTML");
// // // // agregarHtml.addEventListener("click", aumentar);


// // JS - GENERAL
// /* MENU DESPLEGABLE */ // abrir y cerrar
// let menuHamburguesa = document.getElementById("menuHamburguesa");
// let cerrarMenu = document.getElementById("cerrarMenu");
// let menuDesplegable = document.getElementById("menuDesplegable");
// menuHamburguesa.addEventListener("click", function () {
//     menuDesplegable.classList.toggle("d-none");
// });
// cerrarMenu.addEventListener("click", function () {
//     menuDesplegable.classList.add("d-none");
// });

// /* CARRITO DE COMPRAS */ // abrir y cerrar
// let carrito = document.getElementById("carrito");
// let cerrarCarrito = document.getElementById("cerrarCarrito");
// let popup = document.getElementById("cursosEnCarrito");
// popup.classList.add("d-none");
// carrito.addEventListener("click", () => {
//     popup.classList.toggle("d-none")
// });
// cerrarCarrito.addEventListener("click", () => {
//     popup.classList.add("d-none");
// })

// /* CARRITO DE COMPRAS */
// // SessionStorage de contador y precioFinal
// let cantidad = 0;
// sessionStorage.setItem("contador", cantidad);
// let contador = sessionStorage.getItem("contador")
// let numeroCarrito = document.getElementById("numeroCarrito");
// numeroCarrito.innerHTML = contador;

// let total = document.getElementById("totalFinalCursos");
// sessionStorage.setItem("precioFinal", Number(0));
// let precioFinal = sessionStorage.getItem("precioFinal")
// total.innerHTML = precioFinal;

// // funcion aumentar y uso
// // agregar p de curso al carrito
// let agregarCursoACarrito = document.getElementById("agregarCurso");
// let noCursos = document.getElementById("noCursos");

// // SessionStorage de cursos agregados al carrito.
// sessionStorage.setItem("agregadosAlCarrito", ``);
// let sessionAgregados = sessionStorage.getItem("agregadosAlCarrito")

// function aumentar(nombre, etiqueta) {
//     cantidad++;
//     numeroCarrito.innerHTML = cantidad;

//     // Construir el HTML del nuevo elemento
//     let nuevoCursoHTML = `
//       <div class="curso" id="remove${etiqueta}">
//         <p>${nombre}</p>
//         <i class="fa-solid fa-xmark" id="eliminar${etiqueta}"></i>
//       </div>
//     `;

//     // Agregar el curso al carrito
//     agregarCursoACarrito.insertAdjacentHTML('beforeend', nuevoCursoHTML);
//     // agregarCursoACarrito.innerHTML += nuevoCursoHTML;
//     sessionStorage.setItem("agregadosAlCarrito", agregarCursoACarrito.innerHTML)
//     // sessionAgregados = agregarCursoACarrito.innerHTML;

//     if (cantidad > 0) {
//         noCursos.classList.add("d-none");
//     }


//     // Actualizar el precio final
//     switch (nombre) {
//         case 'HTML & CSS':
//             precioFinal = Number(precioFinal) + Number(precioHtml);
//             break;
//         case 'Javascript':
//             precioFinal = Number(precioFinal) + Number(precioJavascript);
//             break;
//         case 'Java':
//             precioFinal = Number(precioFinal) + Number(precioJava);
//             break;
//         case 'Python':
//             precioFinal = Number(precioFinal) + Number(precioPython);
//             break;
//         case 'Selenium':
//             precioFinal = Number(precioFinal) + Number(precioSelenium);
//             break;
//         case 'Diseño UX/UI':
//             precioFinal = Number(precioFinal) + Number(precioDisenio);
//             break;
//         default:
//             break;
//     }

//     total.innerHTML = precioFinal;

//     // Agregar el evento para eliminar al ícono de eliminar
//     let eliminarCurso = document.getElementById(`eliminar${etiqueta}`);
//     eliminarCurso.addEventListener("click", () => {
//         eliminar(nombre, etiqueta);
//     });
// }


// // eliminarHtml.addEventListener("click", () => {
// //     eliminar('HTML & CSS');
// // });
// // eliminarJavascript.addEventListener("click", () => {
// //     eliminar('Javascript');
// // });
// // eliminarJava.addEventListener("click", () => {
// //     eliminar('Java');
// // });
// // eliminarPython.addEventListener("click", () => {
// //     eliminar('Python');
// // });
// // eliminarSelenium.addEventListener("click", () => {
// //     eliminar('Selenium');
// // });
// // eliminarUxui.addEventListener("click", () => {
// //     eliminar('Diseño UX/UI');
// // });

// let precioHtml = 9000;
// let agregarHtml = document.getElementById("agregarHTML");
// agregarHtml.addEventListener("click", function () {
//     aumentar("HTML & CSS", "Html");
// });

// let precioJavascript = 15000;
// let agregarJavascript = document.getElementById("agregarJavascript");
// agregarJavascript.addEventListener("click", function () {
//     aumentar("Javascript", "Javascript");
// });

// let precioJava = 15000;
// let agregarJava = document.getElementById("agregarJava");
// agregarJava.addEventListener("click", function () {
//     aumentar("Java", "Java")
// });

// let precioPython = 15000;
// let agregarPython = document.getElementById("agregarPython");
// agregarPython.addEventListener("click", function () {
//     aumentar("Python", "Python")
// });

// let precioSelenium = 15000;
// let agregarSelenium = document.getElementById("agregarSelenium");
// agregarSelenium.addEventListener("click", function () {
//     aumentar(`Selenium`, `Selenium`)
// });

// let precioDisenio = 15000;
// let agregarUxui = document.getElementById("agregarUxui");
// agregarUxui.addEventListener("click", function () {
//     aumentar(`Diseño UX/UI`, `Uxui`)
// });

// // funcion eliminar del carrito
// function eliminar(nombre, etiqueta) {
//     // Eliminar el elemento del carrito
//     let elementoEliminar = document.getElementById(`remove${etiqueta}`);
//     elementoEliminar.remove(elementoEliminar);

//     // Actualizar el precio final y la cantidad
//     switch (nombre) {
//         case 'HTML & CSS':
//             precioFinal = Number(precioFinal) - Number(precioHtml);
//             break;
//         case 'Javascript':
//             precioFinal = Number(precioFinal) - Number(precioJavascript);
//             break;
//         case 'Java':
//             precioFinal = Number(precioFinal) - Number(precioJava);
//             break;
//         case 'Python':
//             precioFinal = Number(precioFinal) - Number(precioPython);
//             break;
//         case 'Selenium':
//             precioFinal = Number(precioFinal) - Number(precioSelenium);
//             break;
//         case 'Diseño UX/UI':
//             precioFinal = Number(precioFinal) - Number(precioDisenio);
//             break;
//         default:
//             break;
//     }

//     cantidad--;
//     numeroCarrito.innerHTML = cantidad;
//     total.innerHTML = precioFinal;
//     if (cantidad == 0) {
//         noCursos.classList.remove("d-none");
//     }
// }

// // let eliminarHTML = document.getElementById("eliminarHtml");
// // eliminarHTML.addEventListener("click", () => {
// //     eliminar("HTML & CSS")
// // });

// // Actualización del carrito de compras en todas las páginas.
// function actualizarCarrito() {
//     // Contador del carrito
//     let contadorStorage = sessionStorage.getItem("contador");
//     document.getElementById("numeroCarrito").innerHTML = contadorStorage;

//     // Cursos agregados
//     let cursos = sessionStorage.getItem("agregadosAlCarrito");
//     agregarCursoACarrito.innerHTML = cursos;

//     // Precio total
//     let precio = sessionStorage.getItem("precioFinal");
//     document.getElementById("totalFinalCursos").innerHTML = precio;
// }

// // actualizacion de datos
// actualizarCarrito();
// window.addEventListener("load", actualizarCarrito);



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
let totalFinalCursos = document.getElementById("totalFinalCursos")
numeroCarrito.innerHTML = contador;
agregarCurso.innerHTML = agregadosAlCarrito; // bien 
totalFinalCursos.innerHTML = precioFinal;

// Función para actualizar los valores en sessionStorage
function actualizarSessionStorage() { //no seria get?
    sessionStorage.setItem("contador", contador);
    sessionStorage.setItem("agregadosAlCarrito", agregadosAlCarrito);
    sessionStorage.setItem("precioFinal", precioFinal);

    // numeroCarrito.innerHTML = contador;
    // agregarCursoACarrito.innerHTML = agregadosAlCarrito;
    // totalFinalCursos.innerHTML = precioFinal;



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
let agregarCursoACarrito = document.getElementById("agregarCurso");
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

    agregarCursoACarrito.appendChild(nuevoCurso);
    agregadosAlCarrito = agregarCursoACarrito.innerHTML;
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
    agregadosAlCarrito = agregarCursoACarrito.innerHTML;
    if (contador == 0) {
        noCursos.classList.toggle("d-none");
    }
    actualizarSessionStorage();
}
