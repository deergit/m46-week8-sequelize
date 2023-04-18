const Book = require("./model");

const addBook = async (req, res) => {
  try {
    const newBook = await Book.create({
      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre
    });

    res.status(201).json({
      message: "Success",
      newBook: newBook
    });
  } catch (error) {
    res.status(501).json({
      message: error.message
    });
  }
}

const getAllBooks = async (req, res) => {
  try {
    const bookList = await Book.findAll();

    res.status(200).json({
      message: "Success",
      books: bookList
    });
  } catch (error) {
    res.status(501).json({
      message: error.message
    });
  }
}

const getBook = async (req, res) => {
  try {
    const book = await Book.findOne({ where: { title: req.params.title } });

    res.status(200).json({
      message: "Success",
      book: book
    });
  } catch (error) {
    res.status(501).json({
      message: error.message
    });
  }
}

const updateBook = async (req, res) => {
  try {
    const updatedBook = await Book.update({ author: req.body.newAuthor }, { where: { title: req.body.title } });

    res.status(201).json({
      message: "Success",
      book: updatedBook
    });
  } catch (error) {
    res.status(501).json({
      message: error.message
    });
  }
}

const deleteBook = async (req, res) => {
  try {
    const deletedBook = await Book.destroy({ where: { title: req.body.title } });

    res.status(201).json({
      message: "Success",
      book: deletedBook
    });
  } catch (error) {
    res.status(501).json({
      message: error.message
    });
  }
}

const deleteAllBooks = async (req, res) => {
  try {
    const deletedBooks = await Book.destroy({ truncate: true });

    res.status(201).json({
      message: "Successfully deleted all books",
      deletedBooks: deletedBooks
    });
  } catch (error) {
    res.status(501).json({
      message: error.message
    });
  }
}

module.exports = {
  addBook,
  getAllBooks,
  getBook,
  updateBook,
  deleteBook,
  deleteAllBooks
}