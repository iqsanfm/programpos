const mongoose = require("mongoose");

const staffSchema = new mongoose.Schema({
  fullName: { type: String, require: true, unique: true },
  email: { type: String, require: true },
  role: { type: String, require: true, role: String },
  salary: { type: Number, require: true },
  dateOfBirth: { type: Date, require: true },
  phoneNumber: { type: String, require: true },
  shiftStart: { type: Date, require: true },
  shiftEnd: { type: Date, require: true },
  address: { type: String, require: true },
  additionalDetails: { type: String, require: false },
});

module.exports = mongoose.model("Staff", staffSchema);
