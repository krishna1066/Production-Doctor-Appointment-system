const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true, // Retain this option
      // useUnifiedTopology is no longer necessary and has been removed
    });
    console.log(
      `MongoDB Connected: ${conn.connection.host}`.bgGreen.white
    );
  } catch (error) {
    console.error(
      `Error connecting to MongoDB: ${error.message}`.bgRed.white
    );
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
