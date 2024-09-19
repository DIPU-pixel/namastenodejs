const express = require("express");
const app = express();

app.get(
  "/user",
  (req, res,next) => {
    console.log("complete first handler ");
    next()
    res.send("<h1>first controller</h1>");
  },
  (req, res) => {
    console.log("2nd handler");
    res.send("<h1>2nd handler</h1>");
  }
);
const multiplerouteone=(req,res)=>{
  res.send("need one ")
}
app.get("/need",multiplerouteone)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serve   ${PORT}`);
});
