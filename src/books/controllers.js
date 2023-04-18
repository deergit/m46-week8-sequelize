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
    console.log(error);
  }
}

module.exports = {
  addBook,
}