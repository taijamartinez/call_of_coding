import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import { User } from '../models/index.js';
import validator from 'validator';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

const secretKey = process.env.JWT_SECRET_KEY as string; // Ensure it's set

export const registerUser = async (req: Request, res: Response): Promise<void> => {
  const { username, password, email } = req.body;

  try {
    if (!username || !password || !email) {
      res.status(400).json({ status: 'error', message: 'Missing required fields' });
      return;
    }

    if (!validator.isEmail(email)) {
      res.status(400).json({ status: 'error', message: 'Invalid email format' });
      return;
    }

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      res.status(409).json({ status: 'error', message: 'Email already in use' });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign({ email: newUser.email, id: newUser.id }, secretKey, { expiresIn: '1h' });

    res.status(201).json({
      status: 'success',
      message: 'User registered successfully',
      user: {
        id: newUser.id,
        username: newUser.username,
        email: newUser.email,
      },
      token, // Return the token after successful user creation
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', message: 'Internal Server Error' });
  }
};

export const loginUser = async (req: Request, res: Response): Promise<void> => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username } });
    if (!user) {
      res.status(401).json({ status: 'error', message: 'Invalid username or password' });
      return;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      res.status(401).json({ status: 'error', message: 'Invalid username or password' });
      return;
    }

    const token = jwt.sign({ email: user.email, id: user.id }, secretKey, { expiresIn: '1h' });

    res.status(200).json({
      status: 'success',
      message: 'Login successful',
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
      token, // Return token on successful login
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', message: 'Internal Server Error' });
  }
};

//TAIJA- COMMENT TO GET MY FILES BACK TO MAIN
