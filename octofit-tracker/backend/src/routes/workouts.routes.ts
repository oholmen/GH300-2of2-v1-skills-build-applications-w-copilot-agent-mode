import { Router } from "express";
import { Workout } from "../models/workout.model";

const router = Router();

router.get("/", async (_, res) => {
  try {
    const workouts = await Workout.find().sort({ scheduledFor: 1 });
    res.json({ data: workouts });
  } catch (error) {
    console.error("Failed to fetch workouts:", error);
    res.status(500).json({ error: "Unable to fetch workouts." });
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, exercises, durationMinutes, scheduledFor, notes } = req.body;
    const workout = new Workout({ name, exercises, durationMinutes, scheduledFor, notes });
    const saved = await workout.save();
    res.status(201).json({ data: saved });
  } catch (error) {
    console.error("Failed to create workout:", error);
    res.status(400).json({ error: "Unable to create workout." });
  }
});

export default router;
