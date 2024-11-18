import User from "../models/User.model.js";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please fill all fields",
      });
    }
    const userExists = await User.findOne({ email });
    if (userExists)
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.status(201).json({
      success: true,
      message: "User registered successfully",
      newUser,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      message: "Server Error",
      success: false,
    });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      message: "Server Error",
      success: false,
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user)
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    console.log("Error: " + error.message);
    return res.status(500).json({
      message: "Server Error",
      success: false,
      error: error.message,
    });
  }
};
