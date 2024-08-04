const express = require("express");
const router = express.Router();
const {
  addAttedance,
  getAttedance,
} = require("../Controllers/attedanceController");
const auth = require("../Middleware/auth");

router.post("/addAttedance", auth, addAttedance);
router.get("/getAttedance", auth, getAttedance);

module.exports = router;
