var express = require("express");
var router = express.Router();
var itemModel = require("../db/device");

const calculatePrice = (category, condition, year, storage, defects) => {
  let basePrice = 0;

  if (category === "smartphone") {
    basePrice = 50000;
  } else if (category === "tablet") {
    basePrice = 30000;
  } else if (category === "laptop") {
    basePrice = 80000;
  } else {
    basePrice = 20000;
  }

  let finalPrice = basePrice;

  if (condition === "new") {
    finalPrice += 0;
  } else if (condition === "used") {
    finalPrice *= 0.8;
  } else if (condition === "damaged") {
    finalPrice *= 0.5;
  }

  const currentYear = new Date().getFullYear();
  const age = currentYear - year;
  finalPrice *= 1 - 0.05 * age;

  if (storage.includes("128GB")) {
    finalPrice += 30;
  } else if (storage.includes("256GB")) {
    finalPrice += 60;
  }

  if (defects.length > 0) {
    finalPrice -= defects.length * 20;
  }

  return Math.max(finalPrice, 0);
};

router.post("/add-device", async (req, res) => {
  try {
    const {
      category,
      brand,
      model,
      year,
      condition,
      storage,
      defects,
      serial,
      images,
      description,
    } = req.body;

    // Calculate price using the mock pricing algorithm
    const price = calculatePrice(category, condition, year, storage, defects);

    const newDevice = new itemModel({
      category,
      brand,
      model,
      year,
      condition,
      storage,
      defects,
      serial,
      images,
      description,
      price, // Include calculated price in the database
    });

    await newDevice.save();

    // Return the device along with the calculated price
    res.status(200).json({
      message: "Device added successfully",
      device: { ...newDevice._doc, price }, // Include calculated price in response
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Failed to add device", error: error.message });
  }
});

router.get("/all", async (req, res) => {
  try {
    const devices = await itemModel.find({});

    res.status(200).json({
      success: true,
      devices,
    });
  } catch (error) {
    console.error("Error fetching devices:", error);
    res.status(500).json({
      success: false,
      message: "Failed to retrieve devices",
      error: error.message,
    });
  }
});

router.get("/get/:id", async (req, res) => {
  try {
    const deviceId = req.params.id;

    // Search for the device by its ID
    const device = await itemModel.findById(deviceId);

    if (!device) {
      return res
        .status(404)
        .json({ success: false, message: "Device not found" });
    }

    // Return the device data
    res.status(200).json({ success: true, device });
  } catch (error) {
    console.error("Error fetching device by ID:", error);
    res.status(500).json({ success: false, message: "Failed to fetch device" });
  }
});

router.put("/update-device/:id", async (req, res) => {
  try {
    const { id } = req.params; // Get device ID from the URL
    const {
      category,
      brand,
      model,
      year,
      condition,
      storage,
      defects,
      serial,
      images,
      description,
    } = req.body;

    // Find the device by ID
    const device = await itemModel.findById(id);

    if (!device) {
      return res.status(404).json({ message: "Device not found" });
    }

    // Update device details
    device.category = category || device.category;
    device.brand = brand || device.brand;
    device.model = model || device.model;
    device.year = year || device.year;
    device.condition = condition || device.condition;
    device.storage = storage || device.storage;
    device.defects = defects || device.defects;
    device.serial = serial || device.serial;
    device.images = images || device.images;
    device.description = description || device.description;

    // Recalculate the price after the update
    const updatedPrice = calculatePrice(
      device.category,
      device.condition,
      device.year,
      device.storage,
      device.defects
    );
    device.price = updatedPrice;

    // Save the updated device
    await device.save();

    res.status(200).json({
      message: "Device updated successfully",
      device,
    });
  } catch (error) {
    console.error("Error updating device:", error);
    res.status(500).json({
      message: "Failed to update device",
      error: error.message,
    });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const deviceId = req.params.id;

    // Delete the device by its ID
    const deletedDevice = await itemModel.findByIdAndDelete(deviceId);

    if (!deletedDevice) {
      return res
        .status(404)
        .json({ success: false, message: "Device not found" });
    }

    // Return success response
    res
      .status(200)
      .json({ success: true, message: "Device deleted successfully" });
  } catch (error) {
    console.error("Error deleting device:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to delete device" });
  }
});

module.exports = router;
