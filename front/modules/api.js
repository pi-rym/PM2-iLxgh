const axios = require("axios");

const renderMovies = async () => {
  try {
    const response = await axios.get("https://students-api.up.railway.app/movies");
    const data = response.data;
    const containerMovie = document.getElementById("flex");

    const cardMovie = data
      .map((movie) => {

       const {title, year, director, duration, genre, rate, poster} = movie; 

        // Verificar la longitud del título y agregar <br> si es necesario
        let formattedTitle = title;
        if (formattedTitle.length > 20) {
          const index = formattedTitle.lastIndexOf(" ", 20);
          formattedTitle = `${formattedTitle.slice(
            0,
            index
          )}<br>${formattedTitle.slice(index + 1)}`;
        }

        return `
              <div class="project-card-sm" id="cards"> 
                  <div class="card-border-gradient"></div>
                  <div class="card-container">
                      <img src="${poster}">
                      <div class="wrapper">
                          <h2 class="title pt-3 pb-1">${formattedTitle}</h2>
                          <p class="textCard"><strong>Año:</strong> ${year}</p>
                          <p class="textCard"><strong>Director:</strong> ${director}</p>
                          <p class="textCard"><strong>Duración:</strong> ${duration}</p>
                          <p class="textCard"><strong>Género:</strong> ${genre}</p>
                          <p class="textCard"><strong>Calificación:</strong> ${rate}</p>
                      </div>
                  </div>
              </div>
          `;
      })
      .join("");

    containerMovie.innerHTML = cardMovie;
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = { renderMovies };
