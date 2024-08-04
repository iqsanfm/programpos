const express = require("express");
const router = express.Router();
const {
  addStaff,
  getStaff,
  updateStaff,
  deleteStaff,
  getStaffByRole,
  getStaffByName,
  getStaffById,
} = require("../Controllers/staffController");
const auth = require("../Middleware/auth");

router.post("/addStaff", auth, addStaff);
router.get("/getStaff", auth, getStaff);
router.put("/updateStaff/:id", auth, updateStaff);
router.delete("/deleteStaff/:id", auth, deleteStaff);
router.get("/getStaffByRole/:role", auth, getStaffByRole);
router.get("/getStaffByName/:name", auth, getStaffByName);
router.get("/getStaffById/:id", auth, getStaffById);

module.exports = router;
