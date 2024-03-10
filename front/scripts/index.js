

//navbar
const menuBtn = document.getElementById("menu-btn");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
menu.classList.toggle("active");
});


//mouse

const circle = document.querySelector('.circle');
document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    const circleSize = 925; // Tamaño del círculo

    circle.style.left = `${x - circleSize / 2}px`;
    circle.style.top = `${y - circleSize / 2}px`;
});

//api

const containerMovie = document.getElementById("flex");

$.get('https://students-api.2.us-1.fl0.io/movies', (data, status) => {

    const cardMovie = data.map(movie => {
        // Verificar la longitud del título y agregar <br> si es necesario
        let formattedTitle = movie.title;
        if (formattedTitle.length > 20) { 

            const index = formattedTitle.lastIndexOf(' ', 20);
            formattedTitle = `${formattedTitle.slice(0, index)}<br>${formattedTitle.slice(index + 1)}`;
        }

        return `
            <div class="project-card-sm" id="cards"> 
                <div class="card-border-gradient"></div>
                <div class="card-container">
                    <img src="${movie.poster}">
                    <div class="wrapper">
                        <h2 class="title pt-3 pb-1">${formattedTitle}</h2>
                        <p class="textCard"><strong>Año:</strong> ${movie.year}</p>
                        <p class="textCard"><strong>Director:</strong> ${movie.director}</p>
                        <p class="textCard"><strong>Duración:</strong> ${movie.duration}</p>
                        <p class="textCard"><strong>Género:</strong> ${movie.genre}</p>
                        <p class="textCard"><strong>Calificación:</strong> ${movie.rate}</p>
                    </div>
                </div>
            </div>
        `;
    }).join("");

    containerMovie.innerHTML = cardMovie;
});


