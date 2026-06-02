import { Schema, model, Document } from "mongoose";

export interface ActivityDocument extends Document {
  title: string;
  type: string;
  durationMinutes: number;
  intensity: "low" | "medium" | "high";
  date: Date;
  notes?: string;
}

const activitySchema = new Schema<ActivityDocument>(
  {
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
  },
  {
    timestamps: true,
  }
);

export const Activity = model<ActivityDocument>("Activity", activitySchema);
