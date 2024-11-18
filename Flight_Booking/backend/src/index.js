import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/database.js";
import bookingRoutes from "./routes/Booking.routes.js";
import userRoutes from "./routes/User.routes.js";
import contactRoutes from "./routes/Contact.routes.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
app.use(express.json());
connectDB();
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use("/api/v1/", bookingRoutes);
app.use("/api/v1/", userRoutes);
app.use("/api/v1/", contactRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    msg: "Api is running.....",
  });
});

app.listen(PORT, () => {
  console.log(`Serve is Running on http://localhost:${PORT}`);
});
