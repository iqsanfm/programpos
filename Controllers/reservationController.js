// reservationController.js
const Reservation = require("../Models/Reservation");

exports.createReservation = async (req, res) => {
  const { name, phone, date, tableNumber } = req.body;

  try {
    const newReservation = new Reservation({
      name,
      phone,
      date,
      tableNumber,
    });

    const reservation = await newReservation.save();
    res.json(reservation);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
