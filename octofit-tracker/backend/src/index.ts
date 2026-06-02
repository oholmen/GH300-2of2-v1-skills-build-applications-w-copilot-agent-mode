import express from "express";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 8000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/octofit";

app.use(express.json());

app.get("/", (_, res) => {
  res.json({ message: "OctoFit Tracker backend is running." });
});

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log(`MongoDB connected at ${MONGO_URI}`);
    app.listen(PORT, () => {
      console.log(`Backend listening on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  });
