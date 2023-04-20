const Book = require("./model");

const addBook = async (req, res) => {
  try {
    const newBook = await Book.create({
      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre,
      AuthorId: req.body.AuthorId
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
    const updatedBook = await Book.update({ author: req.body.newAuthor }, { where: { title: req.body.title } });

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