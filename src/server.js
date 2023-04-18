require("dotenv").config();

const express = require("express");

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({ message: "App running correctly" });
});

app.listen(5001, () => console.log("Listen server open on port 5001"));