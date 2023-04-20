require("dotenv").config();

const express = require("express");
const app = express();
const Book = require("./books/model");
const Author = require("./authors/model");
const Genre = require("./genres/model");
const bookRouter = require("./books/routes");
const authorRouter = require("./authors/routes");
const genreRouter = require("./genres/routes");

const port = process.env.PORT || 5001;

app.use(express.json());

const syncTables = () => {
  Author.hasMany(Book);
  Book.belongsTo(Author);

  Genre.hasMany(Book);
  Book.belongsTo(Genre);

  Author.sync();
  Genre.sync();
  Book.sync({ alter: true });
}

app.use(bookRouter);
app.use(authorRouter);
app.use(genreRouter);

app.get("/health", (req, res) => {
  res.status(200).json({ message: "App running correctly" });
});

app.listen(port, () => {
  syncTables();
  console.log(`Listen server open on port ${port}`)
});