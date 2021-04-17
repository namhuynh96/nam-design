const express = require("express");

const app = express();

app.use("/public", express.static("public"));

app.listen(10003, () => {
  console.log("App is running on port 3000");
});
