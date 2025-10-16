const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    console.log(
      `Connecting to mongodb ${mongoose.connection.host}`.bgCyan.white
    );
  } catch (error) {
    console.log(`mongodb error ${error}`);
  }
};

module.exports = connectDB;
