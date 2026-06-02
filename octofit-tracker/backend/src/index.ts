import express from "express";
import activityRouter from "./routes/activity.routes";
import usersRouter from "./routes/users.routes";
import teamsRouter from "./routes/teams.routes";
import workoutsRouter from "./routes/workouts.routes";
import leaderboardRouter from "./routes/leaderboard.routes";
import { connectDatabase, MONGO_URI } from "./config/database";
import { API_BASE_URL } from "./config/api";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use("/api/users", usersRouter);
app.use("/api/teams", teamsRouter);
app.use("/api/activities", activityRouter);
app.use("/api/workouts", workoutsRouter);
app.use("/api/leaderboard", leaderboardRouter);

app.get("/", (_, res) => {
  res.json({
    message: "OctoFit Tracker backend is running.",
    apiBaseUrl: API_BASE_URL,
  });
});

connectDatabase()
  .then(() => {
    console.log(`MongoDB connected at ${MONGO_URI}`);
    app.listen(PORT, () => {
      console.log(`Backend listening on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  });
