import Booking from "../models/Booking.model.js";

export const BookingAdded = async (req, res) => {
  try {
    const { name, email, phone, aadhar, destination } = req.body;
    if (!name || !email || !phone || !aadhar || !destination) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }

    const booking = new Booking({ name, email, phone, aadhar, destination });

    await booking.save();
    // Send response
    res
      .status(201)
      .json({ message: "Booking added successfully", success: true, booking });
  } catch (error) {
    console.error(error.message);
    return res
      .status(500)
      .json({ message: "Server Error", success: false, error: error.message });
  }
};

export const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json({
      message: "Bookings fetched successfully",
      success: true,
      bookings,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      message: "Server Error",
      success: false,
      error: error.message,
    });
  }
};

export const deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);
    if (!booking) {
      return res.status(404).json({
        message: "Booking not found",
        success: false,
      });
    }
    res.json({
      message: "Booking deleted successfully",
      success: true,
      booking,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      message: "Server Error",
      success: false,
      error: error.message,
    });
  }
};
