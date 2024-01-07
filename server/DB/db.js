const mongoose = require("mongoose");

const connectDB = async () => {
  const connectionCheck = await mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  if (connectionCheck) {
    console.log("Connection Successfully");
  } else {
    console.log("Connection Failed");
  }
};

module.exports = connectDB;
