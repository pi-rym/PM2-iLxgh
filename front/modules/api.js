const renderMovies = () => {
    const containerMovie = document.getElementById("flex");
  
    $.get("", (data, status) => {
      const cardMovie = data
        .map((movie) => {
          // Verificar la longitud del título y agregar <br> si es necesario
          let formattedTitle = movie.title;
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
        })
        .join("");
  
      containerMovie.innerHTML = cardMovie;
    });
  };


  module.exports = {renderMovies};