const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const superAdminRouter = require("./router/super_admin.routes");
const adminRouter = require("./router/admin.routes");
const empRouter = require("./router/emp.routes");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/assets", express.static(path.join("assets")));

app.use("/api/super_admin", superAdminRouter);
app.use("/api/admin", adminRouter);
app.use("/api/emp", empRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("forntend/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve("forntend", "build", "index.html"));
  });
}

mongoose
  .connect(
    "mongodb+srv://reseller:reseller123@reselllerbazzar.zg4mo.mongodb.net/IIHtest?retryWrites=true&w=majority"
  )
  .then(() => console.log("connected"))
  .catch((e) => console.log(e.message));

app.listen(PORT, () => console.log(`Server Running at PORT: ${PORT}`));
