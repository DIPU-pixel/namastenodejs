const mongoose = require("mongoose");
const connectDb = async () => {
  await mongoose.connect(
    "mongodb+srv://devdipankar:Astronmartin%401234@cluster0.1a1fe.mongodb.net/"
  );
};

module.exports=connectDb
