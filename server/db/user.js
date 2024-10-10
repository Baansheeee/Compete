const mongoose = require("mongoose");
require("dotenv").config();

const URI = process.env.MONGO_DB_URI;
mongoose
  .connect(URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

const userSchema = mongoose.Schema({
  email: String,
  username: String,
  password: String,
  role: {
    type: String,
    default: "user",
  },
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
