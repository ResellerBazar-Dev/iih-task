const multer = require("multer");
const fs = require("fs");

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    fs.mkdirSync("assets/image", { recursive: true });
    cb(null, "assets/image");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: fileStorageEngine });
module.exports = upload;
