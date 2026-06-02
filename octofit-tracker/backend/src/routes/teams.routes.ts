import { Router } from "express";
import { Team } from "../models/team.model";

const router = Router();

router.get("/", async (_, res) => {
  try {
    const teams = await Team.find().sort({ score: -1, createdAt: -1 });
    res.json({ data: teams });
  } catch (error) {
    console.error("Failed to fetch teams:", error);
    res.status(500).json({ error: "Unable to fetch teams." });
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, members, score } = req.body;
    const team = new Team({ name, members, score });
    const saved = await team.save();
    res.status(201).json({ data: saved });
  } catch (error) {
    console.error("Failed to create team:", error);
    res.status(400).json({ error: "Unable to create team." });
  }
});

export default router;
