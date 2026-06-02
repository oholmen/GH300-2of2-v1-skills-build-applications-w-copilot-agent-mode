"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const activity_routes_1 = __importDefault(require("./routes/activity.routes"));
const users_routes_1 = __importDefault(require("./routes/users.routes"));
const teams_routes_1 = __importDefault(require("./routes/teams.routes"));
const workouts_routes_1 = __importDefault(require("./routes/workouts.routes"));
const leaderboard_routes_1 = __importDefault(require("./routes/leaderboard.routes"));
const database_1 = require("./config/database");
const api_1 = require("./config/api");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8000;
app.use(express_1.default.json());
app.use("/api/users", users_routes_1.default);
app.use("/api/teams", teams_routes_1.default);
app.use("/api/activities", activity_routes_1.default);
app.use("/api/workouts", workouts_routes_1.default);
app.use("/api/leaderboard", leaderboard_routes_1.default);
app.get("/", (_, res) => {
    res.json({
        message: "OctoFit Tracker backend is running.",
        apiBaseUrl: api_1.API_BASE_URL,
    });
});
(0, database_1.connectDatabase)()
    .then(() => {
    console.log(`MongoDB connected at ${database_1.MONGO_URI}`);
    app.listen(PORT, () => {
        console.log(`Backend listening on http://localhost:${PORT}`);
    });
})
    .catch((error) => {
    console.error("MongoDB connection error:", error);
    process.exit(1);
});
//# sourceMappingURL=index.js.map