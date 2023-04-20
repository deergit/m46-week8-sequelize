const { Router } = require("express");
const genreRouter = Router();

const { addGenre, getAllBooksByGenre } = require("./controllers");

genreRouter.post("/genres/addgenre", addGenre);

genreRouter.get("/genres/getbooksbygenre/:genre", getAllBooksByGenre);

module.exports = genreRouter;