
import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import { User } from '../models/index.js';
//import validator from 'validator';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const secretKey = process.env.JWT_SECRET_KEY as string;

//  REGISTER USER
export const registerUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    // Validate input
    if (!username || !password) {
      return res.status(400).json({ status: 'error', message: 'Username and password are required' });
    }

    // Check if username already exists
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
      return res.status(409).json({ status: 'error', message: 'Username is already taken' });
    }

    // Hash password before storing
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = await User.create({
      username,
      password: hashedPassword, // Store hashed password
    });

    // Generate JWT token
    const token = jwt.sign({ username: newUser.username, id: newUser.id }, secretKey, { expiresIn: '1h' });

    return res.status(201).json({
      status: 'success',
      message: 'User registered successfully',
      user: {
        id: newUser.id,
        username: newUser.username,
      },
      token,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ status: 'error', message: 'Internal Server Error' });
  }
};

// LOGIN USER
export const loginUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    // Validate input
    if (!username || !password) {
      return res.status(400).json({ status: 'error', message: 'Username and password are required' });
    }

    // Check if user exists
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(401).json({ status: 'error', message: 'Invalid username or password' });
    }

    // Compare password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ status: 'error', message: 'Invalid username or password' });
    }

    // Generate JWT token
    const token = jwt.sign({ username: user.username, id: user.id }, secretKey, { expiresIn: '1h' });

    return res.status(200).json({
      status: 'success',
      message: 'Login successful',
      user: {
        id: user.id,
        username: user.username,
      },
      token,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ status: 'error', message: 'Internal Server Error' });
  }
};