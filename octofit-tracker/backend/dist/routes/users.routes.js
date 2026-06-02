"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_model_1 = require("../models/user.model");
const router = (0, express_1.Router)();
router.get("/", async (_, res) => {
    try {
        const users = await user_model_1.User.find().sort({ createdAt: -1 });
        res.json({ data: users });
    }
    catch (error) {
        console.error("Failed to fetch users:", error);
        res.status(500).json({ error: "Unable to fetch users." });
    }
});
router.post("/", async (req, res) => {
    try {
        const { username, email, role } = req.body;
        const user = new user_model_1.User({ username, email, role });
        const saved = await user.save();
        res.status(201).json({ data: saved });
    }
    catch (error) {
        console.error("Failed to create user:", error);
        res.status(400).json({ error: "Unable to create user." });
    }
});
exports.default = router;
//# sourceMappingURL=users.routes.js.map