// import { Request, Response } from "express";
// import { Games } from "../models/index.js";

// // Get all active games
// export const getAllGames = async (_req: Request, res: Response) => {
//   try {
//     const games = await Games.find({ isActive: true });
//     res.status(200).json(games);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching games", error });
//   }
// };

// // Get a single game by ID
// export const getGameById = async (req: Request, res: Response) => {
//   try {
//     const game = await Games.findById(req.params.id);
//     if (!game) return res.status(404).json({ message: "Game not found" });
//     res.status(200).json(game);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching game", error });
//   }
// };

// // Create a new game
// export const createGame = async (req: Request, res: Response) => {
//   try {
//     const { title, maxPlayers } = req.body;
//     const newGame = new Game({ title, maxPlayers, isActive: true });
//     await newGames.save();
//     res.status(201).json(newGame);
//   } catch (error) {
//     res.status(500).json({ message: "Error creating game", error });
//   }
// };

// // Update game
// export const updateGame = async (req: Request, res: Response) => {
//   try {
//     const updatedGame = await Games.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!updatedGame) return res.status(404).json({ message: "Game not found" });
//     res.status(200).json(updatedGame);
//   } catch (error) {
//     res.status(500).json({ message: "Error updating game", error });
//   }
// };

// // Delete a game
// export const deleteGame = async (req: Request, res: Response) => {
//   try {
//     const deletedGame = await Games.findByIdAndDelete(req.params.id);
//     if (!deletedGame) return res.status(404).json({ message: "Game not found" });
//     res.status(200).json({ message: "Game deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Error deleting game", error });
//   }
// };
