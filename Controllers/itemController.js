const Item = require("../Models/Items");
const Category = require("../Models/Categories");

exports.addItem = async (req, res) => {
  const { name, price, stock, categoryId } = req.body;

  try {
    console.log("Category ID:", categoryId);
    const category = await Category.findById(categoryId);
    console.log("Category:", category);
    if (!category) {
      return res.status(404).json({ msg: "Category not found" });
    }

    const newItem = new Item({
      name,
      price,
      stock,
      category: categoryId,
    });

    const item = await newItem.save();

    category.items.push(item._id);
    await category.save();

    res.json(item);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

exports.updateItem = async (req, res) => {
  const { id } = req.params;
  const { name, price, stock, categoryId } = req.body;

  try {
    let item = await Item.findById(id);
    if (!item) {
      return res.status(404).json({ msg: "Item not found" });
    }

    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(404).json({ msg: "Category not found" });
    }

    item.name = name || item.name;
    item.price = price || item.price;
    item.stock = stock || item.stock;
    item.category = categoryId || item.category;

    await item.save();
    res.json(item);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

exports.lowInventoryAlert = async (req, res) => {
  try {
    const items = await Item.find({ stock: { $lte: 10 } });
    res.json(items);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
