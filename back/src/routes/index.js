const { Router } = require("express");
const movieService = require("../controllers/index");
const { getMovies } = require("../services/movieService");

const router = Router();

router.get("/movies", movieService.getMovies);
router.post("/movies", movieService.createMovie);


module.exports = router;
