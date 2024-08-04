const Category = require("../Models/Categories");

exports.addCategory = async (req, res) => {
  const { name } = req.body;

  try {
    const newCategory = new Category({ name });
    const category = await newCategory.save();
    res.json(category);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find().populate("items");
    res.json(categories);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

exports.getCategoryItems = async (req, res) => {
  const { categoryId } = req.params;

  try {
    const category = await Category.findById(categoryId).populate("items");
    if (!category) {
      return res.status(404).json({ msg: "Category not found" });
    }

    res.json(category.items);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
