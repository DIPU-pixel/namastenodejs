const express = require("express");

const app = express();
app.use("/",(req, res) => {
  res.send(" welcome to nodee js");
});

app.listen(3000, (err) => {
  console.log("the port is running on 3000");
});
