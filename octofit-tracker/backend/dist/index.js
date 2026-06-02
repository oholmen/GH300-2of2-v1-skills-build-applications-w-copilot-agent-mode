"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const activity_routes_1 = __importDefault(require("./routes/activity.routes"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/octofit";
app.use(express_1.default.json());
app.use("/api/activities", activity_routes_1.default);
app.get("/", (_, res) => {
    res.json({ message: "OctoFit Tracker backend is running." });
});
mongoose_1.default
    .connect(MONGO_URI)
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
//# sourceMappingURL=index.js.map