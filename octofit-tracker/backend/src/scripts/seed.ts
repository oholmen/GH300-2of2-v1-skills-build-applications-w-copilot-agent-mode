import mongoose from "mongoose";
import { connectDatabase, MONGO_URI } from "../config/database";
import { User } from "../models/user.model";
import { Team } from "../models/team.model";
import { Activity } from "../models/activity.model";
import { Workout } from "../models/workout.model";
import { LeaderboardEntry } from "../models/leaderboard.model";

async function seed() {
  await connectDatabase();
  console.log(`Connected to MongoDB at ${MONGO_URI}`);

  await Promise.all([
    User.deleteMany({}),
    Team.deleteMany({}),
    Activity.deleteMany({}),
    Workout.deleteMany({}),
    LeaderboardEntry.deleteMany({}),
  ]);

  const users = await User.create([
    { username: "paul", email: "paul@octofit.app", role: "coach" },
    { username: "jessica", email: "jessica@octofit.app", role: "member" },
    { username: "alex", email: "alex@octofit.app", role: "member" },
  ]);

  const teams = await Team.create([
    { name: "OctoSquad", members: ["paul", "jessica"], score: 980 },
    { name: "FitForce", members: ["alex"], score: 820 },
  ]);

  const activities = await Activity.create([
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

  const workouts = await Workout.create([
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

  const leaderboard = await LeaderboardEntry.create([
    { teamName: teams[0].name, score: teams[0].score, rank: 1 },
    { teamName: teams[1].name, score: teams[1].score, rank: 2 },
  ]);

  console.log(`Seeded ${users.length} users, ${teams.length} teams, ${activities.length} activities, ${workouts.length} workouts, and ${leaderboard.length} leaderboard entries.`);

  await mongoose.disconnect();
  console.log("Seed complete. MongoDB connection closed.");
}

seed().catch((error) => {
  console.error("Seed failed:", error);
  process.exit(1);
});
