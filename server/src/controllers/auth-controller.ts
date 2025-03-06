import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import { User } from '../models/user';
import validator from 'validator';

export const registerUser = async (req: Request, res: Response): Promise<void> => {
  const { username, password, email } = req.body;

  try {
    if (!username || !password || !email) {
      res.status(400).json({ status: 'error', message: 'Username, email, and password are required' });
      return;
    }

    if (!validator.isEmail(email)) {
      res.status(400).json({ status: 'error', message: 'Invalid email format' });
      return;
    }

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      res.status(409).json({ status: 'error', message: 'Email is already in use' });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      status: 'success',
      message: 'User registered successfully',
      user: {
        id: newUser.id,
        username: newUser.username,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', message: 'Internal Server Error' });
  }
};

export const loginUser = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      res.status(401).json({ status: 'error', message: 'Invalid email or password' });
      return;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      res.status(401).json({ status: 'error', message: 'Invalid email or password' });
      return;
    }

    res.status(200).json({
      status: 'success',
      message: 'Login successful',
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', message: 'Internal Server Error' });
  }
};
