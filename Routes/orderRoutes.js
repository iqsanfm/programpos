const express = require("express");
const router = express.Router();
const { addOrder } = require("../Controllers/orderController");
const auth = require("../Middleware/auth");

router.post("/addOrder", auth, addOrder);

module.exports = router;
