import Auth from "../utils/auth.js";

export interface Score {

    userId: number;
    score: number;
    gamesId: string;
    gameTime: number;
}


export async function addScore(score: Score) {
    try{

      const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";
      const response = await fetch(`${API_URL}/api/leaderboard`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${Auth.getToken()}`,
        },
        body: JSON.stringify(score)
      });
    
      if (!response.ok) {
        throw new Error("Failed to add score.");
      }
  
      // expecting a token in the response
      return await response.json();
  
    } catch (error) {
      console.error(error);
      alert ("Failed to add score.");
    }
  }
  