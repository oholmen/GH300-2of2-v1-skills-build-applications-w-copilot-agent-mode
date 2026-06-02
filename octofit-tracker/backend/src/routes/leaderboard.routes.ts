import { Router } from "express";
import { Team } from "../models/team.model";
import { LeaderboardEntry } from "../models/leaderboard.model";

const router = Router();

router.get("/", async (_, res) => {
  try {
    const leaderboard = await LeaderboardEntry.find().sort({ rank: 1, score: -1 });
    if (leaderboard.length > 0) {
      return res.json({ data: leaderboard });
    }

    const teams = await Team.find().sort({ score: -1 }).limit(10);
    const computed = teams.map((team, index) => ({
      teamName: team.name,
      score: team.score,
      rank: index + 1,
    }));

    res.json({ data: computed });
  } catch (error) {
    console.error("Failed to fetch leaderboard:", error);
    res.status(500).json({ error: "Unable to fetch leaderboard." });
  }
});

export default router;
