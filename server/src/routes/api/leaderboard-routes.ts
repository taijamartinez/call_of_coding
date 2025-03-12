import { Router, Request, Response } from "express";
import { Leaderboard } from "../../models/index.js";
import { createLeaderboardEntry, getLeaderboardEntryById } from "../../controllers/leaderboard-controller.js";
import { User } from "../../models/user.js";
import { Games } from "../../models/games.js";

const leaderboardRouter = Router();

// GET all leaderboards
leaderboardRouter.get('/', async (_req: Request, res: Response) => {
    try {
        const leaderboard = await Leaderboard.findAll({
            include: [
                { model: User, as: 'User', attributes: ['id', 'username'] },
                { model: Games, as: 'Game', attributes: ['id', 'title'] }
            ],
            attributes: ['id', 'score', 'gameTime', 'createdAt'], 
            order: [['score', 'DESC']] 
        });

        res.json(leaderboard);
    } catch (error: unknown) {
        console.error("Error fetching leaderboard:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
// GET a leaderboard by ID
leaderboardRouter.get('/:id',getLeaderboardEntryById );

// POST create a new leaderboard
leaderboardRouter.post('/', createLeaderboardEntry);


export { leaderboardRouter };




