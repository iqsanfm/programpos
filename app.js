const express = require("express");
const Category = require("./Models/Categories");
const connectDB = require("./Config/db");
const authRoutes = require("./Routes/authRoutes");
const itemRoutes = require("./Routes/itemRoutes");
const reportRoutes = require("./Routes/reportRoutes");
const orderRoutes = require("./Routes/orderRoutes");
const reservationRoutes = require("./Routes/reservationRoutes");
const staffRoutes = require("./Routes/staffRoutes");
const categoriesRoutes = require("./Routes/categoriesRoutes");
const attedanceRoutes = require("./Routes/attedanceRoutes");

require("dotenv").config();

const app = express();

connectDB();

app.set("view engine", "ejs");

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/reports", reportRoutes);
app.use("/api/items", itemRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/reservations", reservationRoutes);
app.use("/api/staff", staffRoutes);
app.use("/api/categories", categoriesRoutes);
app.use("/api/attedance", attedanceRoutes);

app.get("/api/categories", async (req, res) => {
  try {
    const categories = await Category.find().populate("items");
    res.render("categories", { categories });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
