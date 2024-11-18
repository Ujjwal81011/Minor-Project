import express from "express";
import {
  deleteUser,
  getUsers,
  registerUser,
} from "../controllers/Signup.controller.js";

const routes = express.Router();

routes
  .post("/register", registerUser)
  .get("/users", getUsers)
  .get("/users/:id", deleteUser);

export default routes;
