const express = require("express");
const router = express.Router();
const { addItem, updateItem } = require("../Controllers/itemController");
const auth = require("../Middleware/auth");

router.post("/addItem", auth, addItem);
router.put("/update/:id", auth, updateItem);

module.exports = router;
