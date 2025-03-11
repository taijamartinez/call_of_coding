import { Request, Response } from 'express';
import { Leaderboard, User, Games } from '../models/index.js';

interface Score {
  userId: number;
  score: number;
  gamesId: string;
}

// GET /leaderboard - Get all leaderboard scores
export const getAllScores = async (_unusedReq: Request, res: Response) => {
  try {
    const scores = await Leaderboard.findAll({
      include: [
        { model: User, as: 'User', attributes: ['username'] },
        { model: Games, as: 'Game', attributes: ['title'] },
      ],
    });
    return res.json(scores);
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

// GET /leaderboard/:id - Get a specific leaderboard entry by ID
export const getLeaderboardEntryById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const entry = await Leaderboard.findByPk(id, {
      include: [
        { model: User, as: 'User', attributes: ['username'] },
        { model: Games, as: 'Game', attributes: ['title'] },
      ],
    });

    if (!entry) {
      return res.status(404).json({ message: 'Leaderboard entry not found' });
    }

    return res.json(entry);
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

// POST /leaderboard - Create a new leaderboard entry
export const createLeaderboardEntry = async (req: Request, res: Response) => {

  const { score, userId, gamesId } = (req.body as Score);

  try {
    // Validate user existence
    const userExists = await User.findByPk(userId);
    if (!userExists) {
      return res.status(400).json({ message: 'Invalid username. User does not exist.' });
    }

    // Validate game existence
    // const gameExists = await Games.findOne({where:{gamesId}});
    // if (!gameExists) {
    //   return res.status(400).json({ message: 'Invalid gamesId. Game does not exist.' });
    // }
//fix this! make username & gamesId properties have consistant names and data types througout application 
    const newEntry = await Leaderboard.create({ score, username:userId, gamesId: gamesId });

    return res.status(201).json({
      message: 'Leaderboard entry created successfully',
      entry: newEntry,
    });
  } catch (error: any) {
    console.error(error);
    return res.status(400).json({ message: error.message });
  }
};

// PUT /leaderboard/:id - Update a leaderboard entry
export const updateLeaderboardEntry = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { score, username, gamesId } = req.body;

  try {
    const entry = await Leaderboard.findByPk(id);
    if (!entry) {
      return res.status(404).json({ message: 'Leaderboard entry not found' });
    }

    if (username) {
      const userExists = await User.findByPk(username);
      if (!userExists) {
        return res.status(400).json({ message: 'Invalid username. User does not exist.' });
      }
    }

    if (gamesId) {
      const gameExists = await Games.findByPk(gamesId);
      if (!gameExists) {
        return res.status(400).json({ message: 'Invalid gamesId. Game does not exist.' });
      }
    }

    entry.score = score || entry.score;
    entry.username = username || entry.username;
    entry.gamesId = gamesId || entry.gamesId;

    await entry.save();

    return res.json({
      message: 'Leaderboard entry updated successfully',
      entry,
    });
  } catch (error: any) {
    console.error(error);
    return res.status(400).json({ message: error.message });
  }
};

// DELETE /leaderboard/:id - Delete a leaderboard entry
export const deleteLeaderboardEntry = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const entry = await Leaderboard.findByPk(id);
    if (!entry) {
      return res.status(404).json({ message: 'Leaderboard entry not found' });
    }

    await entry.destroy();
    return res.json({ message: 'Leaderboard entry deleted successfully' });
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};


