// reservationRoutes.js
const express = require("express");
const router = express.Router();
const { createReservation } = require("../Controllers/reservationController");
const auth = require("../Middleware/auth");

router.post("/create", auth, createReservation);

module.exports = router;
