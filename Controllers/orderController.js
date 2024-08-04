const Order = require("../Models/Order");
const Item = require("../Models/Items");

exports.addOrder = async (req, res) => {
  try {
    const { items } = req.body;
    let totalPrice = 0;
    let orderItems = [];

    for (let i = 0; i < items.length; i++) {
      const itemData = await Item.findById(items[i].itemId);
      if (!itemData) {
        return res.status(404).json({ msg: "Item not found" });
      }

      if (itemData.stock < items[i].quantity) {
        return res
          .status(400)
          .json({ msg: "Not enough stock for " + itemData.name });
      }

      itemData.stock -= items[i].quantity;
      await itemData.save();

      totalPrice += itemData.price * items[i].quantity;
      orderItems.push({
        item: itemData._id, // Pastikan menggunakan ID item dari database
        quantity: items[i].quantity,
      });
    }

    const order = new Order({
      items: orderItems,
      totalPrice,
      name: req.body.name,
      orderDate: req.body.orderDate,
      noTable: req.body.noTable,
      statusPayment: req.body.statusPayment,
    });

    await order.save();
    res.status(201).json({ msg: "Order added successfully", order });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
