const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  title: String,
  description: String,
  listId: String,
});

module.exports = mongoose.model("Card", cardSchema);