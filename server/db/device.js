const mongoose = require("mongoose");

// Define the schema for a device
const deviceSchema = new mongoose.Schema({
  category: {
    type: String,
    default: "other",
  },
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  condition: {
    type: String,
    required: true,
    enum: ["new", "used", "damaged"], // Specify the allowed conditions
  },
  storage: {
    type: String,
    required: function () {
      return this.category !== "Other"; // Required only if not 'Other'
    },
  },
  defects: {
    type: [String], // Array of defects (e.g., ['screen crack', 'battery issue'])
    default: [],
  },
  serial: {
    type: String,
    required: function () {
      return this.category === "Smartphone"; // Required only for smartphones
    },
  },
  images: {
    type: [String], // Array of image URLs or paths
    default: [],
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    default: "Free",
  },
  state: {
    type: String,
    default: "pending",
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically set the created date
  },
});

// Create the Device model
const Device = mongoose.model("Device", deviceSchema);

module.exports = Device;
