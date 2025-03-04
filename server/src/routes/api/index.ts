import { Router } from 'express';
import authRoutes from './api/auth-routes';
import leaderboardRoutes from './api/leaderboard-routes';
import userRoutes from './api/user-routes';

const router = Router();

router.use('/auth', authRoutes); // Handles authentication (login/register)
router.use('/leaderboard', leaderboardRoutes); // Handles leaderboard-related API calls
router.use('/users', userRoutes); // Handles user-related API calls

export default router;
