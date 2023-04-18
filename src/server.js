require("dotenv").config();

const express = require("express");
const app = express();

const port = process.env.PORT || 5001;

app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({ message: "App running correctly" });
});

app.listen(port, () => console.log(`Listen server open on port ${port}`));