const { Router } = require("express");
const genreRouter = Router();

const { addGenre, getBooksByGenre } = require("./controllers");

genreRouter.post("/genres/addgenre", addGenre);

genreRouter.get("/genres/getbooksbygenre/:genre", getBooksByGenre);

module.exports = genreRouter;