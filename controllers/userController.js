const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs")

console.log("✅ userRoutes file loaded");

const registerController = async (req, res) => {
  try {
    const { userName, email, password } = req.body;

    // Validation
    if (!userName || !email || !password) {
      return res.status(500).send({
        success: false,
        message: "Please Provide all fields",
      });
    }

    // Checking Existing User
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(500).send({
        success: false,
        message: "User already exist.",
      });
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)

    // Save a new USER in the database.
    const newUser = new userModel({ userName, email, password:hashedPassword });
    await newUser.save();
    res.status(201).send({
      success: true,
      message: "User register successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Register API",
      error,
    });
  }
};

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    // find User
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Invalid email and password.`",
      });
    }
    res.status(200).send({
      success: true,
      message: "Login Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Login API",
      error,
    });
  }
};

module.exports = { registerController, loginController };
