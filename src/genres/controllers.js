const Book = require("../books/model");
const Genre = require("./model");

const addGenre = async (req, res) => {
  try {
    const newGenre = await Genre.create({
      genre: req.body.genre
    });

    res.status(201).json({
      message: "Success",
      author: newGenre
    });
  } catch (error) {
    res.status(501).json({
      errorMessage: error.message,
      error: error
    });
  }
}

const getBooksByGenre = async (req, res) => {
  try {
    const bookList = await Genre.findAll({ where: { genre: req.params.genre }, include: Book })

    res.status(200).json({
      message: "Success",
      books: bookList
    });
  } catch (error) {
    res.status(501).json({
      errorMessage: error.message,
      error: error
    });
  }
}

module.exports = {
  addGenre,
  getBooksByGenre
}