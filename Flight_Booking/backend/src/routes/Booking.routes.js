import express from "express";
import {
  BookingAdded,
  deleteBooking,
  getBookings,
} from "../controllers/Booking.controller.js";

const router = express.Router();

router
  .post("/booking", BookingAdded)
  .get("/booking", getBookings)
  .get("/booking/:id", deleteBooking);

export default router;
