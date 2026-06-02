"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Workout = void 0;
const mongoose_1 = require("mongoose");
const workoutSchema = new mongoose_1.Schema({
    name: { type: String, required: true, trim: true },
    exercises: { type: [String], default: [] },
    durationMinutes: { type: Number, required: true, min: 1 },
    scheduledFor: { type: Date, required: true },
    notes: { type: String, trim: true, default: "" },
}, { timestamps: true });
exports.Workout = (0, mongoose_1.model)("Workout", workoutSchema);
//# sourceMappingURL=workout.model.js.map