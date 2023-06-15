// JS - CURSO
// slider slick
$(document).ready(function () {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        dots: false,
        responsive: [
            {
                breakpoint: 1450,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1
                }
              },
            {
              breakpoint: 1050,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 675,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });
});

const btnInscribirse = document.getElementById('btnInscribirse');
const popupCurso = document.getElementById('popup');

btnInscribirse.addEventListener('click', () => {
    popupCurso.classList.remove('d-none');
});

let elementosAcordeon = document.getElementsByClassName("acordeon");

for (let i = 0; i < elementosAcordeon.length; i++) {
    elementosAcordeon[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.display == "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

// Funcionalidad de agregar
let agregarHtml = document.getElementById("btnInscribirse");
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