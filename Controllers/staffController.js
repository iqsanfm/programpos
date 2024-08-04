const staff = require("../Models/staff");
const Staff = require("../Models/staff");

exports.addStaff = async (req, res) => {
  const {
    fullName,
    email,
    role,
    salry,
    dateOfBirth,
    phoneNumber,
    shiftStart,
    shiftEnd,
    address,
    additionalDetails,
  } = req.body;

  try {
    const newStaff = new Staff({
      fullName,
      email,
      role,
      salry,
      dateOfBirth,
      phoneNumber,
      shiftStart,
      shiftEnd,
      address,
      additionalDetails,
    });

    const staff = await newStaff.save();
    res.json(staff);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

exports.getStaff = async (req, res) => {
  try {
    const staff = await Staff.find();
    res.json(staff);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

exports.updateStaff = async (req, res) => {
  const { id } = req.params;
  const {
    fullName,
    email,
    role,
    salry,
    dateOfBirth,
    phoneNumber,
    shiftStart,
    shiftEnd,
    address,
    additionalDetails,
  } = req.body;
};

exports.deleteStaff = async (req, res) => {
  try {
    const staff = await Staff.findByIdAndDelete(req.params.id);
    if (!staff) {
      return res.status(404).json({ message: "Staff not found" });
    }
    res.status(200).json(staff);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getStaffById = async (req, res) => {
  try {
    const staff = await Staff.findById(req.params.id);
    if (!staff) {
      return res.status(404).json({ message: "Staff not found" });
    }
    res.status(200).json(staff);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getStaffByRole = async (req, res) => {
  try {
    const staff = await Staff.find({ role: req.params.role });
    if (staff.length === 0) {
      return res.status(404).json({ message: "Staff not found" });
    }
    res.status(200).json(staff);
  } catch (error) {
    res.status(500).json({ error: error.massage });
  }
};

exports.getStaffByName = async (req, res) => {
  try {
    const staff = await Staff.find({ fullName: req.params.name });
    if (staff.length === 0) {
      return res.status(404).json({ message: "Staff not found" });
    }
    res.status(200).json(staff);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
