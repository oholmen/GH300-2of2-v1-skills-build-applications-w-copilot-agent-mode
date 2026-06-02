"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeaderboardEntry = void 0;
const mongoose_1 = require("mongoose");
const leaderboardEntrySchema = new mongoose_1.Schema({
    teamName: { type: String, required: true, trim: true },
    score: { type: Number, required: true, min: 0 },
    rank: { type: Number, required: true, min: 1 },
}, { timestamps: true });
exports.LeaderboardEntry = (0, mongoose_1.model)("LeaderboardEntry", leaderboardEntrySchema);
//# sourceMappingURL=leaderboard.model.js.map