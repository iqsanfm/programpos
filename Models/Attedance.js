const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
  // id: { type: mongoose.Schema.Types.ObjectId, ref: "Staff", require: true },
  name: { type: String, require: true },
  date: { type: Date, default: Date.now },
  timings: { type: String, require: true },
  status: { type: String, require: true },
});

module.exports = mongoose.model("Attendance", attendanceSchema);
