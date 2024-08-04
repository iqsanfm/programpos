const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true, min: 0 },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" }, // Tambahkan referensi kategori
});

module.exports = mongoose.model("Item", ItemSchema);
