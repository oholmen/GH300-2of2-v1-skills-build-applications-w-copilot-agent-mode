import { Schema, model, Document } from "mongoose";

export interface UserDocument extends Document {
  username: string;
  email: string;
  role: "member" | "coach" | "admin";
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<UserDocument>(
  {
    username: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, unique: true },
    role: {
      type: String,
      enum: ["member", "coach", "admin"],
      default: "member",
    },
  },
  { timestamps: true }
);

export const User = model<UserDocument>("User", userSchema);
