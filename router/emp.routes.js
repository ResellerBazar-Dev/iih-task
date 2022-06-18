const express = require("express");
const empSchema = require("../models/emp.model");
const upload = require("../middleware/multer");

const router = express.Router();

router.get("/", (req, res) => {
  // empSchema
  //   .find()
  //   .then((getAll) => res.status(200).json(getAll))
  //   .catch((e) => console.log(e.message));

  empSchema
    .aggregate([
      { $addFields: { admin_id: { $toObjectId: "$admin_id" } } },
      {
        $lookup: {
          from: "admins",
          localField: "admin_id",
          foreignField: "_id",
          as: "admin",
        },
      },
    ])
    .then((getAll) => res.status(200).json(getAll));
});

router.post("/", upload.single("emp_image"), (req, res) => {
  const image = `http://localhost:5000/${req.file.path}`;

  const empData = new empSchema({
    emp_image: image,
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    dateOfBirth: req.body.dateOfBirth,
    role: req.body.role,
    admin_id: req.body.admin_id,
  });

  empData
    .save()
    .then((add) => res.status(201).json(add))
    .catch((e) => console.log(e));
});

router.delete("/:id", (req, res) => {
  empSchema
    .findById(req.params.id)
    .then((product) => product.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
