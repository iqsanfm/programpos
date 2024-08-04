const Attendance = require("../Models/Attedance");

exports.addAttedance = async (req, res) => {
  const { name, date, timings, status } = req.body;
  try {
    const newAttendance = new Attendance({
      name,
      date,
      timings,
      status,
    });
    await newAttendance.save();
    res.json({ message: "Attedance added successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAttedance = async (req, res) => {
  try {
    const attedance = await Attendance.find();
    res.json(attedance);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.editAttedance = async (req, res) => {
  try {
    const attedance = await Attendance.findById(req.params.id);
    if (!attedance) {
      return res.status(404).json({ message: "Attedance not found" });
    }
    res.status(200).json(attedance);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
