import { Router } from "express";
import { API_BASE_URL } from "../config/api";

const router = Router();

router.get("/", (_, res) => {
  res.json({
    apiBaseUrl: API_BASE_URL,
  });
});

export default router;
