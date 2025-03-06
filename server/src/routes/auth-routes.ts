<<<<<<< HEAD
import { Router, Request, Response } from 'express';
import { User } from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const login = async (req: Request, res: Response) => {
  // TODO: If the user exists and the password is correct, return a JWT token
=======
import { Router, type Request, type Response } from 'express';
import { User } from '../models/index.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import validator from 'validator'; // If you choose to use validator for email validation

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const user = await User.findOne({
    where: { username },
  });
  if (!user) {
    return res.status(401).json({ message: 'Authentication failed' });
  }

  const passwordIsValid = await bcrypt.compare(password, user.password);
  if (!passwordIsValid) {
    return res.status(401).json({ message: 'Authentication failed' });
  }

  const secretKey = process.env.JWT_SECRET_KEY || '';

  const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
  return res.json({ token });
};


const registerUser = async (req: Request, res: Response): Promise<void> => {
  const { username, password, email } = req.body;

  try {
    // Check if all required fields are provided
    if (!username || !password || !email) {
      res.status(400).json({ status: 'error', message: 'Username, email, and password are required' });
      return;
    }

    // Validate email format
    if (!validator.isEmail(email)) {
      res.status(400).json({ status: 'error', message: 'Invalid email format' });
      return;
    }

    // Check if the user with the same email already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      res.status(409).json({ status: 'error', message: 'Email is already in use' });
      return;
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = await User.create({
      username,
      email, // Ensure email is saved
      password: hashedPassword,
    });

    // Send a response with necessary user data (exclude sensitive data like password)
    res.status(201).json({
      status: 'success',
      message: 'User registered successfully',
      user: {
        id: newUser.id,
        username: newUser.username,
        // email: newUser.email,
      },
    });
  } catch (error) {
    console.error(error); // log error for debugging purposes
    res.status(500).json({ status: 'error', message: 'Internal Server Error' });
  }
>>>>>>> main
};

const router = Router();

// POST /login - Login a user
router.post('/login', login);

<<<<<<< HEAD
=======
// POST /login - Login a user
router.post('/register', registerUser);

>>>>>>> main
export default router;
