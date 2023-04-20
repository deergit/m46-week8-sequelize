const Book = require("./model");
const Author = require("../authors/model");
const Genre = require("../genres/model");

const addBook = async (req, res) => {
  try {
    const authorName = await Author.findOne({ where: { id: req.body.AuthorId } });
    const genreName = await Genre.findOne({ where: { id: req.body.GenreId } });

    const newBook = await Book.create({
      title: req.body.title,
      author: authorName.dataValues.authorName,
      genre: genreName.dataValues.genre,
      AuthorId: req.body.AuthorId,
      GenreId: req.body.GenreId
    });

    res.status(201).json({
      message: "Success",
      newBook: newBook
    });
  } catch (error) {
    res.status(501).json({
      errorMessage: error.message,
      error: error
    });
  }
}

const getAllBooks = async (req, res) => {
  try {
    const bookList = await Book.findAll();

    res.status(200).json({
      message: "Success",
      items: bookList
    });
  } catch (error) {
    res.status(501).json({
      errorMessage: error.message,
      error: error
    });
  }
}

const getSingleBookByTitle = async (req, res) => {
  try {
    const book = await Book.findOne({ where: { title: req.params.title } });

    res.status(200).json({
      message: "Success",
      book: book
    });
  } catch (error) {
    res.status(501).json({
      errorMessage: error.message,
      error: error
    });
  }
}

const updateBook = async (req, res) => {
  try {
    const newAuthorId = await Author.findOne({ where: { authorName: req.body.newAuthor } });
    const updatedBook = await Book.update({ AuthorID: newAuthorId.dataValues.AuthorID, author: req.body.newAuthor }, { where: { title: req.body.title } });

    res.status(201).json({
      message: "Success",
      updateResult: updatedBook
    });
  } catch (error) {
    res.status(501).json({
      errorMessage: error.message,
      error: error
    });
  }
}

const deleteBook = async (req, res) => {
  try {
    const deletedBook = await Book.destroy({ where: { title: req.body.title } });

    res.status(201).json({
      message: "Successfully deleted",
      result: deletedBook
    });
  } catch (error) {
    res.status(501).json({
      errorMessage: error.message,
      error: error
    });
  }
}

const deleteAllBooks = async (req, res) => {
  try {
    const deletedBooks = await Book.destroy({ truncate: true });

    res.status(202).json({
      message: "Successfully deleted all books",
      result: deletedBooks
    });
  } catch (error) {
    res.status(501).json({
      errorMessage: error.message,
      error: error
    });
  }
}

module.exports = {
  addBook,
  getAllBooks,
  getSingleBookByTitle,
  updateBook,
  deleteBook,
  deleteAllBooks
}