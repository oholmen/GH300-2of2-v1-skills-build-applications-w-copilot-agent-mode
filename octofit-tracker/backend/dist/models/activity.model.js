"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Activity = void 0;
const mongoose_1 = require("mongoose");
const activitySchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    type: {
        type: String,
        required: true,
        trim: true,
    },
    durationMinutes: {
        type: Number,
        required: true,
        min: 1,
    },
    intensity: {
        type: String,
        required: true,
        enum: ["low", "medium", "high"],
        default: "medium",
    },
    date: {
        type: Date,
        required: true,
        default: () => new Date(),
    },
    notes: {
        type: String,
        trim: true,
        default: "",
    },
}, {
    timestamps: true,
});
exports.Activity = (0, mongoose_1.model)("Activity", activitySchema);
//# sourceMappingURL=activity.model.js.map