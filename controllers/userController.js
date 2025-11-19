const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs")
const JWT = require("jsonwebtoken")

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

// =========  Login Controller ==========

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    // find User
    const user = await userModel.findOne({email})

    // Validation
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Invalid email and password.`",
      });
    }

    // Match Password
    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch){
      return res.status(500).send({
        success:false,
        message:"Invalid Credientials"
      })
    }

    // Generate Token
    const token = await JWT.sign({id:user._id},process.env.JWT_TOKEN,{expiresIn:"1d"})

      res.status(200).send({
      success: true,
      message: "Login Successfully",
      token,
      user:{
        id:user._id,
        email:user.email,
        userName:user.userName
      },
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
