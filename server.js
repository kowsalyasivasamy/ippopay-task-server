const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(3001, () => {
  console.log("Node API is running on the port 3001");
});
