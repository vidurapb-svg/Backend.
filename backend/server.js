require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const itemRoutes = require("./routes/itemRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// ✅ check env first
if (!process.env.MONGO_URI) {
  console.log("❌ MONGO_URI is missing in environment variables");
}

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log("❌ MongoDB ERROR - failed to connect:");
    console.log(err.message);
  });

// Routes
app.use("/", itemRoutes);

// Health check route (VERY IMPORTANT for Railway)
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
