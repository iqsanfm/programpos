const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  produceName: { type: String, required: true },
  stock: { type: Number, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
});

module.exports = mongoose.model("Menu", menuSchema);
