import { Request, Response } from 'express';
import { Leaderboard, User, Games } from '../models/index.js';

// GET /leaderboard - Get all leaderboard scores
export const getAllScores = async (_unusedReq: Request, res: Response) => {
  try {
    const scores = await Leaderboard.findAll({
      include: [

        { model: User, as: 'User', attributes: ['id', 'username'] }, 
        { model: Games, as: 'Game', attributes: ['id', 'title'] },

      ],
      order: [['score', 'DESC'], ['gameTime', 'ASC']],
    });
    return res.json(scores);
  } catch (error: any) {
    console.error("❌ Error fetching leaderboard:", error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

// GET /leaderboard/:id - Get a specific leaderboard entry by ID
export const getLeaderboardEntryById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const entry = await Leaderboard.findByPk(id, {
      include: [
        { model: User, as: 'User', attributes: ['id', 'username'] }, 
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

// POST /leaderboard - Create or update a leaderboard entry
export const createLeaderboardEntry = async (req: Request, res: Response) => {
  const { score, userId, gamesId, gameTime } = req.body;

  try {
    const userExists = await User.findByPk(userId);
    if (!userExists) {
      return res.status(400).json({ message: 'Invalid userId. User does not exist.' });
    }

    const gameExists = await Games.findByPk(gamesId);
    if (!gameExists) {
      return res.status(400).json({ message: 'Invalid gamesId. Game does not exist.' });
    }

    let entry = await Leaderboard.findOne({ where: { userId, gamesId } });

    if (entry) {
      console.log(`Existing entry found for user ${userId} in game ${gamesId}:`, entry);

      if (score > entry.score) {
        entry.score = score;
        entry.gameTime = gameTime; 
        await entry.save();

        return res.status(200).json({
          message: 'Leaderboard entry updated successfully',
          entry,
        });
      }

      console.log(`⚠️ Score ${score} is not higher than ${entry.score}. Keeping existing values.`);
      return res.status(200).json({
        message: '⚠️ Score was not higher. No updates made.',
        entry,
      });
    }

    entry = await Leaderboard.create({ score, userId, gamesId, gameTime });

    return res.status(201).json({
      message: 'Leaderboard entry created successfully',
      entry,
    });

  } catch (error: any) {
    console.error("❌ Error updating leaderboard:", error);
    return res.status(400).json({ message: error.message });
  }
};

// PUT /leaderboard/:id - Update a leaderboard entry
export const updateLeaderboardEntry = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { score, userId, gamesId } = req.body;

  try {
    const entry = await Leaderboard.findByPk(id);
    if (!entry) {
      return res.status(404).json({ message: 'Leaderboard entry not found' });
    }

    if (userId !== entry.userId) {
      return res.status(403).json({ message: 'You can only update your own leaderboard entry.' });
    }

    if (gamesId) {
      const gameExists = await Games.findByPk(gamesId);
      if (!gameExists) {
        return res.status(400).json({ message: 'Invalid gamesId. Game does not exist.' });
      }
    }

    entry.score = score ?? entry.score;
    entry.gamesId = gamesId ?? entry.gamesId;

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


