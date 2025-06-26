import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "./../helpers/authHelper.js";
import JWT from "jsonwebtoken";

// Register Controller
// Backend: authController.js
export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, answer, role } = req.body;

    // Validate data
    if (!name || !email || !password || !phone || !answer) {
      return res.status(400).send({ message: "All fields are required." });
    }

    // Check if user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .send({ message: "User already exists, please login." });
    }

    // Hash password and create new user
    const hashedPassword = await hashPassword(password);

    const user = await new userModel({
      name,
      email,
      phone,
      password: hashedPassword,
      answer,
      role: role || "user", // Default role is 'user'
    }).save();

    res.status(201).send({
      success: true,
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error during registration",
      error,
    });
  }
};

// POST Login Controller
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send({
        success: false,
        message: "Invalid email or password",
      });
    }

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).send({
        success: false,
        message: "Email is not registered",
      });
    }

    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(400).send({
        success: false,
        message: "Invalid password",
      });
    }

    // Create JWT token
    const token = await JWT.sign(
      { _id: user._id, role: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "3330d",
      }
    );

    res.status(200).send({
      success: true,
      message: "Login successfully",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role, // Send role in the response
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in login",
      error,
    });
  }
};

// Forgot Password Controller
export const forgotPasswordController = async (req, res) => {
  try {
    const { email, answer, newPassword } = req.body;

    if (!email) return res.status(400).send({ message: "Email is required" });
    if (!answer) return res.status(400).send({ message: "Answer is required" });
    if (!newPassword)
      return res.status(400).send({ message: "New Password is required" });

    // Check if user exists with email and answer
    const user = await userModel.findOne({ email, answer });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Wrong Email Or Answer",
      });
    }

    const hashed = await hashPassword(newPassword);
    await userModel.findByIdAndUpdate(user._id, { password: hashed });
    res.status(200).send({
      success: true,
      message: "Password Reset Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
};

// Test Controller
export const testController = (req, res) => {
  try {
    res.send("Protected Routes");
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
};
