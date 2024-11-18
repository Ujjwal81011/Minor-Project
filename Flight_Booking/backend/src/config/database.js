import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error.message);
    console.log("Failed to connect with mongoDB");
    process.exit(1);
  }
};

export default connectDB;
