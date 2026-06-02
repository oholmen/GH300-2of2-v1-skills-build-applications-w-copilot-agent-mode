"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const workout_model_1 = require("../models/workout.model");
const router = (0, express_1.Router)();
router.get("/", async (_, res) => {
    try {
        const workouts = await workout_model_1.Workout.find().sort({ scheduledFor: 1 });
        res.json({ data: workouts });
    }
    catch (error) {
        console.error("Failed to fetch workouts:", error);
        res.status(500).json({ error: "Unable to fetch workouts." });
    }
});
router.post("/", async (req, res) => {
    try {
        const { name, exercises, durationMinutes, scheduledFor, notes } = req.body;
        const workout = new workout_model_1.Workout({ name, exercises, durationMinutes, scheduledFor, notes });
        const saved = await workout.save();
        res.status(201).json({ data: saved });
    }
    catch (error) {
        console.error("Failed to create workout:", error);
        res.status(400).json({ error: "Unable to create workout." });
    }
});
exports.default = router;
//# sourceMappingURL=workouts.routes.js.map