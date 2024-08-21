const mongoose = require("mongoose");
require("dotenv").config(); // Tambahkan ini untuk memuat variabel lingkungan

const uri = process.env.MONGO_URL;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const connectDB = async () => {
  try {
    if (!uri) {
      throw new Error("MONGO_URL is not defined in environment variables");
    }
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected");
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
