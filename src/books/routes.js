const { Router } = require("express");
const bookRouter = Router();

const { addBook, getAllBooks, getBook, updateBook, deleteBook, deleteAllBooks } = require("./controllers");

bookRouter.post("/books/addbook", addBook);

bookRouter.get("/books/getallbooks", getAllBooks);

bookRouter.get("/books/getbook/:title", getBook);

bookRouter.put("/books/updatebook", updateBook);

bookRouter.delete("/books/deletebook", deleteBook);

bookRouter.delete("/books/deleteallbooks", deleteAllBooks);

module.exports = bookRouter;