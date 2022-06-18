const mongoose = require("mongoose");

const empSchema = new mongoose.Schema({
  admin_id: {
    type: String,
    // required: true,
  },
  name: {
    type: String,
    // required: true,
  },
  email: {
    type: String,
    // required: true,
  },
  emp_image: {
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
    default: "emp",
  },
});

const emp = mongoose.model("emp", empSchema);

module.exports = emp;
