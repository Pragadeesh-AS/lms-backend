const mongoose = require("mongoose");

exports.connect = async () => {
  try {
    await mongoose.connect(
      "mongodb://127.0.0.1:27017/Backend_lms"
    );
  
  // try {
  //   const mongoURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/LMS-Backend';
  //   const conn = await mongoose.connect(mongoURI);
  //   console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (e) {
    console.log("Error in connecting to the db");
    console.error(e.message);
  }
};
