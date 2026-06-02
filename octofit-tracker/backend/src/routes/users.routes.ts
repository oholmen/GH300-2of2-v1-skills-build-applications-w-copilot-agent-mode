import { Router } from "express";
import { User } from "../models/user.model";

const router = Router();

router.get("/", async (_, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    res.json({ data: users });
  } catch (error) {
    console.error("Failed to fetch users:", error);
    res.status(500).json({ error: "Unable to fetch users." });
  }
});

router.post("/", async (req, res) => {
  try {
    const { username, email, role } = req.body;
    const user = new User({ username, email, role });
    const saved = await user.save();
    res.status(201).json({ data: saved });
  } catch (error) {
    console.error("Failed to create user:", error);
    res.status(400).json({ error: "Unable to create user." });
  }
});

export default router;
