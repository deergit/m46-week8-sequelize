const { Router } = require("express");
const bookRouter = Router();

bookRouter.post("/books/addbook", async (req, res) => {
  res.send("addbook route");
});

module.exports = bookRouter;