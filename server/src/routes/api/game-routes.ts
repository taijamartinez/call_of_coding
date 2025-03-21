import express from 'express';
import { getAllGames, getGameById, createGame, updateGame } from '../../controllers/game-controller.js';

const router = express.Router();

 router.get('/games', getAllGames);
 router.get('/games/:id', getGameById);
 router.post('/games', createGame);
 router.put('/games/:id', updateGame);
//  router.delete('/games/:id', deleteGame);

export { router as gameRouter };


