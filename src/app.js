const express = require("express");
const connectDb = require("./config/db");
const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});
const PORT = process.env.PORT || 3000;

connectDb()
  .then(() => {
    console.log("databased connected");
    app.listen(PORT, () => {
      console.log(`Serve   ${PORT}`);
    });
  })
  .catch((e) => {
    console.log("databased connected failed", e.errorResponse.errmsg);
  });
