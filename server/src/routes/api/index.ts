import { Router } from 'express';
import { leaderboardRouter } from './leaderboard-routes.js';
import { userRouter } from './user-routes.js';
import { gameRouter } from './game-routes.js';
import authRoutes from '../auth-routes.js';
import { authenticateToken } from '../../middleware/auth.js';

const apiRouter = Router();

apiRouter.use('/auth', authRoutes); // Handles authentication-related API calls
apiRouter.use('/leaderboard', authenticateToken, leaderboardRouter); // Handles/protects leaderboard-related API calls
apiRouter.use('/users', authenticateToken, userRouter); // Handles/protects user-related API calls
apiRouter.use('/games', gameRouter); // Handles game-related API calls

export default apiRouter;


