const mongoose = require("mongoose");

const ReservationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  date: { type: Date, required: true },
  tableNumber: { type: Number, required: true },
});

module.exports = mongoose.model("Reservation", ReservationSchema);
