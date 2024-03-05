const tempData = [
  {
    title: "Guardians of the Galaxy Vol. 2",
    year: 2017,
    director: "James Gunn",
    duration: "2h 16min",
    genre: ["Action", "Adventure", "Comedy"],
    rate: 7.7,
    poster:
      "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
  },
  {
    title: "Star Wars: Episode IV - A New Hope",
    year: 1977,
    director: "George Lucas",
    duration: "2h 1min",
    genre: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
    rate: 8.7,
    poster:
      "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg",
  },
  {
    title: "Your name",
    year: 2017,
    director: "Makoto Shinakai",
    duration: "1h 46min",
    genre: ["Animation","Drama", "Romance"],
    rate: 8.8,
    poster:
      "https://i.pinimg.com/564x/0a/57/f7/0a57f7fb9bf22d8b357affec4fc3ad03.jpg",
  },
  {
    title: "Your name",
    year: 2017,
    director: "Makoto Shinakai",
    duration: "1h 46min",
    genre: ["Animation","Drama", "Romance"],
    rate: 8.8,
    poster:
      "https://i.pinimg.com/564x/0a/57/f7/0a57f7fb9bf22d8b357affec4fc3ad03.jpg",
  },
  {
    title: "Your name",
    year: 2017,
    director: "Makoto Shinakai",
    duration: "1h 46min",
    genre: ["Animation","Drama", "Romance"],
    rate: 8.8,
    poster:
      "https://i.pinimg.com/564x/0a/57/f7/0a57f7fb9bf22d8b357affec4fc3ad03.jpg",
  },
  {
    title: "Your name",
    year: 2017,
    director: "Makoto Shinakai",
    duration: "1h 46min",
    genre: ["Animation","Drama", "Romance"],
    rate: 8.8,
    poster:
      "https://i.pinimg.com/564x/0a/57/f7/0a57f7fb9bf22d8b357affec4fc3ad03.jpg",
  },
];


const containerMovie = document.getElementById("flex")

const cardMovie = tempData.map(movie => `
  
  <div class="project-card-sm" id = "cards"> 
  <div class="card-border-gradient"></div>
  <div class="card-container">
  <img src = "${movie.poster}">
  <div class="wrapper">
  <h2 class = "title">${movie.title}</h2>
  <p class = "textCard"><strong>Año:</strong> ${movie.year}</p>
  <p class = "textCard"><strong>Director:</strong> ${movie.director}</p>
  <p class = "textCard"><strong>Duración:</strong> ${movie.duration}</p>
  <p class = "textCard"><strong>Genero:</strong> ${movie.genre}</p>
  <p class = "textCard"><strong>Calificación:</strong> ${movie.rate}</p>
  </div>
  </div>
  </div>

`).join("");

containerMovie.innerHTML = cardMovie;