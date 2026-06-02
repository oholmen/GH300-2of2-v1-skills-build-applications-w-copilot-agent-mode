"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const database_1 = require("../config/database");
const user_model_1 = require("../models/user.model");
const team_model_1 = require("../models/team.model");
const activity_model_1 = require("../models/activity.model");
const workout_model_1 = require("../models/workout.model");
const leaderboard_model_1 = require("../models/leaderboard.model");
// Seed the octofit_db database with test data.
async function seed() {
    console.log("Seed the octofit_db database with test data");
    await (0, database_1.connectDatabase)();
    console.log(`Connected to MongoDB at ${database_1.MONGO_URI}`);
    await Promise.all([
        user_model_1.User.deleteMany({}),
        team_model_1.Team.deleteMany({}),
        activity_model_1.Activity.deleteMany({}),
        workout_model_1.Workout.deleteMany({}),
        leaderboard_model_1.LeaderboardEntry.deleteMany({}),
    ]);
    const users = await user_model_1.User.create([
        { username: "paul", email: "paul@octofit.app", role: "coach" },
        { username: "jessica", email: "jessica@octofit.app", role: "member" },
        { username: "alex", email: "alex@octofit.app", role: "member" },
    ]);
    const teams = await team_model_1.Team.create([
        { name: "OctoSquad", members: ["paul", "jessica"], score: 980 },
        { name: "FitForce", members: ["alex"], score: 820 },
    ]);
    const activities = await activity_model_1.Activity.create([
        {
            title: "Morning Run",
            type: "cardio",
            durationMinutes: 35,
            intensity: "medium",
            date: new Date(),
            notes: "Easy steady pace to start the day.",
        },
        {
            title: "Strength Circuit",
            type: "strength",
            durationMinutes: 50,
            intensity: "high",
            date: new Date(Date.now() - 1000 * 60 * 60 * 24),
            notes: "Upper-body focus with core finishers.",
        },
    ]);
    const workouts = await workout_model_1.Workout.create([
        {
            name: "Full Body Blast",
            exercises: ["push-ups", "squats", "plank", "burpees"],
            durationMinutes: 45,
            scheduledFor: new Date(Date.now() + 1000 * 60 * 60 * 2),
            notes: "Hypertrophy and mobility mix.",
        },
        {
            name: "Recovery Ride",
            exercises: ["easy cycling"],
            durationMinutes: 30,
            scheduledFor: new Date(Date.now() + 1000 * 60 * 60 * 24),
            notes: "Low intensity to recover after the circuit.",
        },
    ]);
    const leaderboard = await leaderboard_model_1.LeaderboardEntry.create([
        { teamName: teams[0].name, score: teams[0].score, rank: 1 },
        { teamName: teams[1].name, score: teams[1].score, rank: 2 },
    ]);
    console.log(`Seeded ${users.length} users, ${teams.length} teams, ${activities.length} activities, ${workouts.length} workouts, and ${leaderboard.length} leaderboard entries.`);
    await mongoose_1.default.disconnect();
    console.log("Seed complete. MongoDB connection closed.");
}
seed().catch((error) => {
    console.error("Seed failed:", error);
    process.exit(1);
});
//# sourceMappingURL=seed.js.map