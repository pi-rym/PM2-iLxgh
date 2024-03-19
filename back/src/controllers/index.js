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
};
