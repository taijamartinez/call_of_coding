
import { Router } from 'express';
import { loginUser, registerUser } from '../controllers/auth-controller.js';

const router = Router();

// POST /login - Login a user
router.post('/login', loginUser);

// POST /login - Login a user
router.post('/register', registerUser);

export default router;

