import { Schema, model, Document } from "mongoose";

export interface WorkoutDocument extends Document {
  name: string;
  exercises: string[];
  durationMinutes: number;
  scheduledFor: Date;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

const workoutSchema = new Schema<WorkoutDocument>(
  {
    name: { type: String, required: true, trim: true },
    exercises: { type: [String], default: [] },
    durationMinutes: { type: Number, required: true, min: 1 },
    scheduledFor: { type: Date, required: true },
    notes: { type: String, trim: true, default: "" },
  },
  { timestamps: true }
);

export const Workout = model<WorkoutDocument>("Workout", workoutSchema);
