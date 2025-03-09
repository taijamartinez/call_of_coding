import { Router } from 'express';
import authRoutes from './auth-routes.js';
import apiRouter from './api/index.js';
import { authenticateToken } from '../middleware/auth.js';

const router = Router();

router.use('/auth', authRoutes);
router.use('/api', authenticateToken, apiRouter);

export default router;

