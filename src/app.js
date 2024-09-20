const express = require("express");
const { userAuth, adminAuth } = require("./middlewares/Auth");
const app = express();


// app.get("/user",userAuth)
app.get("/", (req, res) => {
  res.send("<h1>This is main URL </h1>");
});

//admin
app.get("/admin", adminAuth, (req, res) => {
  res.send("<h1> this is admin page </h1>");
});

//user
app.get("/user",userAuth, (req, res) => {
  res.send("<h1> this is user page </h1>");
});
app.get("/user/addlogin",(req,res)=>{
  res.send("<h1> user login </h1>");

})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serve   ${PORT}`);
});
