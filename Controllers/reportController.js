const Order = require("../Models/Order");

exports.getSalesReport = async (req, res) => {
  try {
    const orders = await Order.find().populate("items.item");
    res.json(orders);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
