import { Schema, model, Document } from "mongoose";

export interface TeamDocument extends Document {
  name: string;
  members: string[];
  score: number;
  createdAt: Date;
  updatedAt: Date;
}

const teamSchema = new Schema<TeamDocument>(
  {
    name: { type: String, required: true, trim: true, unique: true },
    members: { type: [String], default: [] },
    score: { type: Number, default: 0, min: 0 },
  },
  { timestamps: true }
);

export const Team = model<TeamDocument>("Team", teamSchema);
