const express = require("express");
const superAdminSchema = require("../models/super_admin.model");
const upload = require("../middleware/multer");

const router = express.Router();

router.get("/", (req, res) => {
  superAdminSchema
    .find()
    .then((getAll) => res.status(200).json(getAll))
    .catch((e) => console.log(e.message));
});

router.post("/", upload.single("super_admin_image"), (req, res) => {
  const image = `http://localhost:5000/${req.file.path}`;

  const super_admin_data = new superAdminSchema({
    super_admin_image: image,
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    dateOfBirth: req.body.dateOfBirth,
    role: req.body.role,
  });

  super_admin_data
    .save()
    .then((add) => res.status(201).json(add))
    .catch((e) => console.log(e));
});

module.exports = router;
