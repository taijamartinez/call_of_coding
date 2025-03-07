import { Request, Response } from "express";
import { Games, User } from "../models/index.js";
//import { error } from "console";


    //app.delete("/games/:id", deleteGame);
// // Get all active games
export const getAllGames = async (_req: Request, res: Response) => {
  try {
    const games = await Games.findAll();
    res.status(200).json(games);
  } catch (error) {
    res.status(500).json({ message: "Error fetching games", error });
  }
};

// // Get a single game by ID
export const getGameById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const game = await Games.findByPk(id, {
        include: [
          { model: User, as: "User", attributes: ["username"] },
          { model: Games, as: "Game", attributes: ["title"] },
        ],
      }
      ); 
      if (game) {
        return res.status(200).json(game);
      } else {
        return res.status(404).json({ error: "Game not found" });
      }
    } catch (error) {
      console.error(error); // Log error for debugging
      return res.status(500).json({ error: "Error fetching game" });
    }
  };
  

// // Create a new game
export const createGame = async (req: Request, res: Response) => {
    const { title, link, description, image } = req.body;
  
    if (!title || !link || !description || !image) {
      return res.status(400).json({ error: "All fields (title, link, description, image) are required" });
    }
  
    try {
      const newGame = await Games.create({
          title,
          link,
          description,
          image,
          id: 0
      });
  
      return res.status(201).json(newGame);
    } catch (error) {
      console.error("Error creating game:", error);
      return res.status(500).json({ error: "Error creating game" });
    }
  };
  
  

// // Update game
export const updateGame = async (req: Request, res: Response) => {
  try {
    const [updatedRowsCount, updatedGames] = await Games.update(req.body, {
      where: { id: req.params.id },
      returning: true,
    });
    if (updatedRowsCount === 0) return res.status(404).json({ message: "Game not found" });
    return res.status(200).json(updatedGames[0]);
  } catch (error) {
    return res.status(500).json({ message: "Error updating game", error });
  }
};

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

//TAIJA- COMMENT TO GET MY FILES BACK TO MAIN
