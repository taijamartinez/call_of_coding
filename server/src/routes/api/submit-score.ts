import { Router } from "express";
import Leaderboard from "../../models/leaderboard.js";

const router = Router();

router.post("/submit", async (_req, _res) => {
  try {

    const { userId, gameId, score } = _req.body;

    if (!userId || !gameId || !score) {
      return _res.status(400).json({ error: "Missing required fields" });
    }

    const newEntry = await Leaderboard.create({ userId, gameId, score });
    return _res.status(201).json(newEntry);
  } catch (error) {
    return _res.status(500).json({ error: "Failed to submit score" });
  }
});