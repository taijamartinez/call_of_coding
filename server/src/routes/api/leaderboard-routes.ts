import { Router, Request, Response } from "express";
import { Leaderboard } from "../../models/index.js";
import { createLeaderboardEntry, getLeaderboardEntryById } from "../../controllers/leaderboard-controller.js";


const leaderboardRouter = Router();

// GET all leaderboards
leaderboardRouter.get('/', async (_req: Request, res: Response) => {
    try {
        const leaderboard = await Leaderboard.findAll();
        res.json(leaderboard);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: "An unknown error occurred." });
        }
    }
});

// GET a leaderboard by ID
leaderboardRouter.get('/:id',getLeaderboardEntryById );

// POST create a new leaderboard
leaderboardRouter.post('/', createLeaderboardEntry);


export { leaderboardRouter };



