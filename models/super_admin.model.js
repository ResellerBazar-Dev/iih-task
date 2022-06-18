const mongoose = require("mongoose");

const superAdminSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
  },
  email: {
    type: String,
    // required: true,
  },
  super_admin_image: {
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
    default: "super_admin",
  },
});

const super_admin = mongoose.model("super_admin", superAdminSchema);

module.exports = super_admin;
