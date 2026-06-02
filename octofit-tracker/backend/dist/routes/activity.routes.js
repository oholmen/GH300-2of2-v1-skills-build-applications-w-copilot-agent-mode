"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const activity_model_1 = require("../models/activity.model");
const router = (0, express_1.Router)();
router.get("/", async (_, res) => {
    try {
        const activities = await activity_model_1.Activity.find().sort({ date: -1 });
        res.json({ data: activities });
    }
    catch (error) {
        console.error("Failed to fetch activities:", error);
        res.status(500).json({ error: "Unable to fetch activities." });
    }
});
router.post("/", async (req, res) => {
    try {
        const { title, type, durationMinutes, intensity, date, notes } = req.body;
        const activity = new activity_model_1.Activity({ title, type, durationMinutes, intensity, date, notes });
        const saved = await activity.save();
        res.status(201).json({ data: saved });
    }
    catch (error) {
        console.error("Failed to create activity:", error);
        res.status(400).json({ error: "Unable to create activity." });
    }
});
exports.default = router;
//# sourceMappingURL=activity.routes.js.map