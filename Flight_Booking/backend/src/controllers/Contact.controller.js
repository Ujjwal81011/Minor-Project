// controllers/contactController.js
import Contact from "../models/Contact.model.js";
import mongoose from "mongoose";

export const addMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate request body
    if (!name || !email || !message) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }

    // Check if contact exists
    let contact = await Contact.findOne({ email });

    if (contact) {
      // If contact exists, push the new message
      contact.message.push(message);
      await contact.save();
    } else {
      // If contact doesn't exist, create a new contact
      contact = new Contact({ name, email, message: [message] });
      await contact.save();
    }

    res.status(201).json({
      message: "Message added successfully",
      success: true,
      contact,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      message: "Server Error",
      success: false,
      error: error.message,
    });
  }
};

// controllers/contactController.js
export const getMessages = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json({
      message: "Messages fetched successfully",
      success: true,
      contacts,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      message: "Server Error",
      success: false,
      error: error.message,
    });
  }
};

// controllers/contactController.js
export const getMessageById = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate ID format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Invalid ID format",
        success: false,
      });
    }

    const contact = await Contact.findById(id);

    if (!contact) {
      return res.status(404).json({
        message: "Contact not found",
        success: false,
      });
    }

    res.json({
      message: "Contact fetched successfully",
      success: true,
      contact,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      message: "Server Error",
      success: false,
      error: error.message,
    });
  }
};
