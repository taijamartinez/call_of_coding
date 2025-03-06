import { Router } from 'express';
import authRoutes from './auth-routes.js';
import apiRoutes from './api/index.js';
import { authenticateToken } from '../middleware/auth.js';

const router = Router();

router.use('/auth', authRoutes);
<<<<<<< HEAD
// TODO: Add authentication to the API routes
router.use('/api', apiRoutes);
=======
router.use('/api', authenticateToken, apiRoutes);
>>>>>>> main

export default router;
