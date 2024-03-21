const movieService = require("../services/movieService");

module.exports = {
  getMovies: async (req, res) => {
    try {
      const movies = await movieService.getMovies();

      res.status(200).json(movies);
    } catch (error) {
      console.error("Error al obtener las películas:", error);
      res.status(500).json({ message: "Error al obtener las películas" });
    }
  },

  createMovie: async (req, res) => {
    try {
      const { title, director, rate, duration, genre, poster, year } = req.body;
      const newMovie = await movieService.createMovie({
        title,
        director,
        rate,
        duration,
        genre,
        poster,
        year,
      });
      res.status(201).json({
        movie: newMovie,
        message: "Se creó correctamente la película",
      });
    } catch (error) {
      console.error("Error al crear la película:", error);
      res.status(500).json({ message: "Error al crear la película" });
    }
  },
};
