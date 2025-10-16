const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const cors = require("cors");
const connectDB = require("./config/db");

// env Config
dotenv.config();

// DB Connection
connectDB();

// Rest Object
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Routes
app.use("/api/v1/test", require("./routes/testRoutes"));

// Port
const PORT = process.env.PORT || 8000;

// Listen
app.listen(PORT, () => {
  console.log(
    `Node server is running on ${process.env.DEV_MODE} mode on port number ${PORT}`
      .bgGreen
  );
});
