const { Router } = require("express");
const { controlador } = require("../controllers/index");



const router = Router();

router.get("/movie", controlador);

module.exports = router
