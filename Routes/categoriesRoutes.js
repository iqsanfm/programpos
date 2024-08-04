const express = require("express");
const router = express.Router();
const {
  addCategory,
  getCategories,
  getCategoryItems,
} = require("../Controllers/categoriesController");
const auth = require("../Middleware/auth");

router.post("/addCategory", auth, addCategory);
router.get("/getCategories", auth, getCategories);
router.get("/:categoryId/items", auth, getCategoryItems); // Tambahkan route ini

module.exports = router;
