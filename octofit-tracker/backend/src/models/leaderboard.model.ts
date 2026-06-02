import { Schema, model, Document } from "mongoose";

export interface LeaderboardEntryDocument extends Document {
  teamName: string;
  score: number;
  rank: number;
  updatedAt: Date;
}

const leaderboardEntrySchema = new Schema<LeaderboardEntryDocument>(
  {
    teamName: { type: String, required: true, trim: true },
    score: { type: Number, required: true, min: 0 },
    rank: { type: Number, required: true, min: 1 },
  },
  { timestamps: true }
);

export const LeaderboardEntry = model<LeaderboardEntryDocument>("LeaderboardEntry", leaderboardEntrySchema);
