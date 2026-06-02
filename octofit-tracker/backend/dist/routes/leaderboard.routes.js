"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const team_model_1 = require("../models/team.model");
const leaderboard_model_1 = require("../models/leaderboard.model");
const router = (0, express_1.Router)();
router.get("/", async (_, res) => {
    try {
        const leaderboard = await leaderboard_model_1.LeaderboardEntry.find().sort({ rank: 1, score: -1 });
        if (leaderboard.length > 0) {
            return res.json({ data: leaderboard });
        }
        const teams = await team_model_1.Team.find().sort({ score: -1 }).limit(10);
        const computed = teams.map((team, index) => ({
            teamName: team.name,
            score: team.score,
            rank: index + 1,
        }));
        res.json({ data: computed });
    }
    catch (error) {
        console.error("Failed to fetch leaderboard:", error);
        res.status(500).json({ error: "Unable to fetch leaderboard." });
    }
});
exports.default = router;
//# sourceMappingURL=leaderboard.routes.js.map