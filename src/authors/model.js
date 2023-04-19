const { DataTypes } = require("sequelize");
const connection = require("../db/connection");

const Author = connection.define("Author", {
  authorName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
}, { timestamps: false });

module.exports = Author;