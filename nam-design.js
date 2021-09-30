const express = require("express");

const app = express();

app.use("/nguyentrung/", (req, res) => {
  res.redirect("/");
});

app.use("/", express.static("public"));

app.listen(10003, () => {
  console.log("App is running on port 10003");
});
