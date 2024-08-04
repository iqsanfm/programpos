const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  items: [
    {
      item: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "item",
        required: true,
      },
      quantity: { type: Number, required: true },
    },
  ],
  name: { type: String, required: true },
  totalPrice: { type: Number, required: true },
  orderDate: { type: Date, default: Date.now },
  noTable: { type: String, required: true },
  statusPayment: { type: String, required: true },
});

module.exports = mongoose.model("Order", OrderSchema);
