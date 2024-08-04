const express = require("express");
const router = express.Router();
const { getSalesReport } = require("../Controllers/reportController");
const auth = require("../Middleware/auth");

router.get("/sales", auth, getSalesReport);

module.exports = router;
