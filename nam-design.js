const express = require("express");

const app = express();

app.use("/", express.static("public"));

app.listen(10003, () => {
  console.log("App is running on port 10003");
});
