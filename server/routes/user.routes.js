import express from "express";
import User from "../models/user.models.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const users = await User.find();
  console.log(users);
  res.json({ users });
});

export default router;
