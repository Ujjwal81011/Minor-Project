import express from "express";
import {
  addMessage,
  getMessages,
  getMessageById,
} from "../controllers/Contact.controller.js";

const router = express.Router();

router.post("/contacts", addMessage);
router.get("/contacts", getMessages);
router.get("/contacts/:id", getMessageById);

export default router;
