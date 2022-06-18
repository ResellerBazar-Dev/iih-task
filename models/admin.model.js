const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  super_admin_id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    // required: true,
  },
  email: {
    type: String,
    // required: true,
  },
  admin_image: {
    type: Object,
    // required: true,
  },
  gender: {
    type: String,
    // required: true,
  },
  dateOfBirth: {
    type: Date,
    // required: true,
    default: Date.now(),
  },
  role: {
    type: String,
    default: "admin",
  },
});

const admin = mongoose.model("admin", adminSchema);

module.exports = admin;
