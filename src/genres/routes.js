const { Router } = require("express");
const genreRouter = Router();

const { addGenre } = require("./controllers");

genreRouter.post("/genres/addgenre", addGenre);

module.exports = genreRouter;