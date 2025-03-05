import { Request, Response } from 'express';
import { Leaderboard, User } from '../models/index.js';


// GET /tickets
export const getAllTickets = async (_req: Request, res: Response) => {
  try {
    const tickets = await Leaderboard.findAll({
      include: [
        {
          model: User,
          as: 'User', // This should match the alias defined in the association. //taija- changed from AssignedUser to User to match the names in my files. UserId and User was used.
          attributes: ['username'], // Include only the username attribute
        },
      ],
    });
    res.json(tickets);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// GET /tickets/:id
export const getTicketById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const ticket = await Leaderboard.findByPk(id, {
      include: [
        {
          model: User,
          as: 'User', // This should match the alias defined in the association
          attributes: ['username'], // Include only the username attribute
        },
      ],
    });
    if (ticket) {
      res.json(ticket);
    } else {
      res.status(404).json({ message: 'Ticket not found' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// POST /tickets
export const createTicket = async (req: Request, res: Response) => {
  const { name, status, description, userId } = req.body;
  try {
    const newTicket = await Leaderboard.create({ name, status, description, userId });
    res.status(201).json(newTicket);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// PUT /tickets/:id
export const updateTicket = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { username, score, userId } = req.body;
  try {
    const ticket = await Leaderboard.findByPk(id);
    if (ticket) {
      ticket.username = username;
      ticket.score = score;
      ticket.userId = userId;
      await ticket.save();
      res.json(ticket);
    } else {
      res.status(404).json({ message: 'Ticket not found' });
    }
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE /tickets/:id
export const deleteTicket = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const ticket = await Leaderboard.findByPk(id);
    if (ticket) {
      await ticket.destroy();
      res.json({ message: 'Ticket deleted' });
    } else {
      res.status(404).json({ message: 'Ticket not found' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
