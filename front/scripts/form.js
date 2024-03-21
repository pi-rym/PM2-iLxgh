
const { circle } = require("../modules/mouse");
const { navBarFunction } = require("../modules/navbar");
const axios = require("axios")
navBarFunction();



  // Seleccionar los inputs de title, description e imgUrl
const titleInput = document.getElementById("title-movie");
const directorInput = document.getElementById("director");
const yearInput = document.getElementById("year");
const genreInput = document.getElementById("genre");
const rateInput = document.getElementById("rate");
const durationInput = document.getElementById("duration");
const posterInput = document.getElementById("poster");

function validateBtn() {
    // Tomar los valores ingresados en los inputs
    const title = titleInput.value;
    const director = directorInput.value;
    const year = yearInput.value;
    const genre = genreInput.value;
    const rate = rateInput.value;
    const duration = durationInput.value;
    const poster = posterInput.value;
  
    // Validar que los valores estén completos
    if (!title || !director || !year || !genre || !rate || !duration || !poster) {
      alert('Por favor completa todos los campos.');
      return; // Cortar el proceso
    }
  
    const formData = {
      title: title,
      director: director,
      year: year,
      genre: genre,
      rate: rate,
      duration: duration,
      poster: poster
    };
  
    const url = 'http://localhost:3000/movies';
  
    // Realizar la solicitud POST
    axios.post(url, formData)
      .then(response => {
        // Respuesta exitosa
        console.log('Película creada exitosamente!');
        // Redirigir a la página de inicio de películas
        window.location.href = "../index.html";
      })
      .catch(error => {
        // Respuesta con error
        console.error('Error al crear la película', error);
      });
  
    // Limpiar los inputs después de enviar el formulario
    clearInputs();
  }
  


function clearInputs() {
    titleInput.value = '';
    directorInput.value = '';
    yearInput.value = '';
    genreInput.value = '';
    rateInput.value = '';
    durationInput.value = '';
    posterInput.value = '';
}

const sendButton = document.getElementById('button-send');
sendButton.addEventListener('click', validateBtn);

const deleteButton = document.getElementById('button-delete')
deleteButton.addEventListener('click', clearInputs)