import { Router } from "express";
import { Activity } from "../models/activity.model";

const router = Router();

router.get("/", async (_, res) => {
  try {
    const activities = await Activity.find().sort({ date: -1 });
    res.json({ data: activities });
  } catch (error) {
    console.error("Failed to fetch activities:", error);
    res.status(500).json({ error: "Unable to fetch activities." });
  }
});

router.post("/", async (req, res) => {
  try {
    const { title, type, durationMinutes, intensity, date, notes } = req.body;
    const activity = new Activity({ title, type, durationMinutes, intensity, date, notes });
    const saved = await activity.save();
    res.status(201).json({ data: saved });
  } catch (error) {
    console.error("Failed to create activity:", error);
    res.status(400).json({ error: "Unable to create activity." });
  }
});

export default router;
