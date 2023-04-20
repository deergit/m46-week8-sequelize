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

const getAllBooksByGenre = async (req, res) => {
  try {
    const bookList = await Genre.findOne({ where: { genre: req.params.genre }, include: Book })

    res.status(200).json({
      message: "Success",
      booksByGenre: bookList.Books
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
  getAllBooksByGenre
}