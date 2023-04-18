const { DataTypes } = require("sequelize");
const connecton = require("../db/connection");

const Book = connection.define();

module.exports = Book;