require("dotenv").config();

const express = require("express");
const app = express();
const bookRouter = require("./books/routes");

const port = process.env.PORT || 5001;

app.use(express.json());
app.use(bookRouter);

app.get("/health", (req, res) => {
  res.status(200).json({ message: "App running correctly" });
});

app.listen(port, () => console.log(`Listen server open on port ${port}`));