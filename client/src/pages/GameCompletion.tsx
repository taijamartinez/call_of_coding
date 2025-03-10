import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useGame } from "../contexts/gamecontext"
import "./css/GameCompletion.css";

const GameCompletion: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { resetGame } = useGame();



// Local state for persisting score and time
const [finalScore, setFinalScore] = useState<number | null>(null);
const [finalTime, setFinalTime] = useState<number | null>(null);
const { gameTitle } = location.state || {};


useEffect(() => {

    console.log("Location State on Load:", location.state);

    // Get values from location first, then fallback to localStorage
    const storedScore = location.state?.score ?? JSON.parse(localStorage.getItem("finalScore") || "0");
    const storedTime = location.state?.time ?? JSON.parse(localStorage.getItem("finalTime") || "0");

    console.log("Retrieved Score:", storedScore);
    console.log("Retrieved Time:", storedTime);

    setFinalScore(storedScore);
    setFinalTime(storedTime);

    // Save to localStorage so it persists
    localStorage.setItem("finalScore", JSON.stringify(storedScore));
    localStorage.setItem("finalTime", JSON.stringify(storedTime));

    console.log("Saved to localStorage - Score:", localStorage.getItem("finalScore"));
    console.log("Saved to localStorage - Time:", localStorage.getItem("finalTime"));
  }, [location.state]);


  const handleReturnToDashboard = () => {
    console.log("🔴 Reset Game Triggered - Clearing localStorage");
    resetGame(); 
    localStorage.removeItem("finalScore"); 
    localStorage.removeItem("finalTime");
    navigate("/dashboard");
  };

  return (
    <div className="game-completion-container">
      <h1>🎉 Mission Complete! 🎉</h1>
      <div className="game-stat-container">
      <h2>{gameTitle}</h2>
      <p>Final Score: <strong>{finalScore}</strong></p>
      <p>Time Taken: <strong>{finalTime} seconds</strong></p>
      </div>
      <p>Great job, agent! You've successfully completed the mission.</p>
      
      <button onClick={handleReturnToDashboard}>Return to Main Menu</button>
    </div>
  );
};

export default GameCompletion;