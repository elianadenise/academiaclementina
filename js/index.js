// JS - INDEX 
// Slider de Slick
$(document).ready(function () {
    // $('.slider').slick();
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000        
    });
});

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