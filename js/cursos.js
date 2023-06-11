let cursos = [
    {
        titulo: 'html & css',
        area: 'programacion',
        img: 'htmlcss'
    },
    {
        titulo: 'javascript',
        area: 'programacion',
        img: 'javascript'
    },
    {
        titulo: 'java',
        area: 'programacion',
        img: 'java'
    },
    {
        titulo: 'python',
        area: 'programacion',
        img: 'python'
    },
    {
        titulo: 'selenium',
        area: 'testing',
        img: 'selenium'
    },
    {
        titulo: 'diseño UX/UI',
        area: 'diseño',
        img: 'uxui'
    },
    {
        titulo: 'bases de datos',
        area: 'programacion',
        img: 'bbdd'
    },
    {
        titulo: 'postman',
        area: 'testing',
        img: 'postman',
        etiqueta: 'Postman'
    },
    {
        titulo: 'cypress',
        area: 'testing',
        img: 'cypress'
    },
    {
        titulo: 'react',
        area: 'programacion',
        img: 'react'
    }
]
let resultado = document.querySelector("#resultado");
cursos.forEach((item) => {
    resultado.innerHTML += `
    <div class="cursos">
        <div class="titular">
            <img src="img/curso-${item.img}.png" alt="HTML & CSS" class="borde">
            <h2>${item.titulo}</h2>
        </div>
        <a href="curso.html" class="a-card">Ver curso <i
            class="fa-solid fa-arrow-right fa-sm i-card"></i></a>
    </div>
    `;
});
let buscador = document.querySelector("#buscador");
buscador.addEventListener("keyup", () => {
    //1.- guardar el valor del buscador
    let valor = buscador.value;
    //2.- filtrar el array de cursos en funcion de ese valor
    let cursosFiltrados = cursos.filter(curso => curso.titulo.indexOf(valor) > -1 || curso.area.indexOf(valor) > -1);
    //3.- limpiar resultados
    resultado.innerHTML = "";
    //4.- volver a llenar resultados con los cursos filtrados
    cursosFiltrados.forEach((item) => {
        resultado.innerHTML += `
        <div class="cursos">
        <div class="titular">
            <img src="img/curso-${item.img}.png" alt="HTML & CSS" class="borde">
            <h2>${item.titulo}</h2>
        </div>
        <a href="curso.html" class="a-card">Ver curso <i
            class="fa-solid fa-arrow-right fa-sm i-card"></i></a>
    </div>
        `;
    });

});

// Traer valor del sessionStorage
let valorSession = sessionStorage.getItem("buscadorStorage")
buscador.value = valorSession;