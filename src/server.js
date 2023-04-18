require("dotenv").config();

const express = require("express");

const app = express();

app.listen(5001, () => console.log("Listen server open on port 5001"));