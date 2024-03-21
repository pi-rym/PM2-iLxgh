const Movie = require("../models/Movie");

module.exports = {
  getMovies: async () => {
    const movies = await Movie.find();
    return movies;
  },

  createMovie: async (moviesData) => {
    const newMovie = await Movie.create(moviesData);
    return newMovie;
  }
};













// class Movie {
//   constructor(title, year, director, duration, genre, rate, poster) {
//     if (!title ||!director || !poster) {
//       throw new Error('Falta por recibir algun campo')
//     }

//     this.title = title;
//     this.year = year;
//     this.director = director;
//     this.duration = duration;
//     this.genre = genre;
//     this.rate = rate;
//     this.poster = poster;
//   }
// }

