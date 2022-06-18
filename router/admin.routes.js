const express = require("express");
const adminSchema = require("../models/admin.model");
const upload = require("../middleware/multer");

const router = express.Router();

router.get("/", (req, res) => {
  // adminSchema
  // .find()
  //.then((getAll) => res.status(200).json(getAll))
  //.catch((e) => console.log(e.message));
  adminSchema
    .aggregate([
      { $addFields: { super_admin_id: { $toObjectId: "$super_admin_id" } } },
      {
        $lookup: {
          from: "super_admins",
          localField: "super_admin_id",
          foreignField: "_id",
          as: "super_admin",
        },
      },
    ])
    .then((getAll) => res.status(200).json(getAll));
});

router.post("/", upload.single("admin_image"), (req, res) => {
  const image = `http://localhost:5000/${req.file.path}`;

  const adminData = new adminSchema({
    admin_image: image,
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    dateOfBirth: req.body.dateOfBirth,
    role: req.body.role,
    super_admin_id: req.body.super_admin_id,
  });

  adminData
    .save()
    .then((add) => res.status(201).json(add))
    .catch((e) => console.log(e));
});

router.delete("/:id", (req, res) => {
  adminSchema
    .findById(req.params.id)
    .then((product) => product.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
