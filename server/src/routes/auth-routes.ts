import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import { User } from '../models/user'; // Ensure User model is imported
import validator from 'validator'; // If you choose to use validator for email validation

export const registerUser = async (req: Request, res: Response): Promise<void> => {
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
        email: newUser.email,
      },
    });
  } catch (error) {
    console.error(error); // log error for debugging purposes
    res.status(500).json({ status: 'error', message: 'Internal Server Error' });
  }
};
