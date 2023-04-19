const Author = require("./model");

const addAuthor = async (req, res) => {
  try {
    const newAuthor = await Author.create({
      authorName: req.body.authorName
    });

    res.status(201).json({
      message: "Success",
      author: newAuthor
    });
  } catch (error) {
    res.status(501).json({
      errorMessage: error.message,
      error: error
    });
  }
}

const getAuthorAndBooks = async (req, res) => {
  try {
    console.log("This is working!");

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

module.exports = {
  addAuthor,
  getAuthorAndBooks
}