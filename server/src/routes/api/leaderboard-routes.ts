import { Router, Request, Response } from "express";
import { Leaderboard } from "../../models/leaderboard.js";
import { createTicket, getTicketById } from "../../controllers/leaderboard-controller";


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
leaderboardRouter.get('/:id', getTicketById);

// POST create a new leaderboard
leaderboardRouter.post('/', createTicket);

export { leaderboardRouter };
