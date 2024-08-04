// const bcrypt = require("bcrypt");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
require("dotenv").config();
const mongoURI = process.env.MONGO_URL;

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: String,
});

const User = mongoose.model("User", userSchema);

async function addAdmin(username, password) {
  const hashedPassword = await bcrypt.hash(password, 10);
  const admin = new User({ username, password: hashedPassword, role: "admin" });
  await admin.save();
  console.log("Admin added successfully");
}

addAdmin("iniAdmin", "iniAdmin")
  .then(() => mongoose.disconnect())
  .catch((err) => console.error(err));
