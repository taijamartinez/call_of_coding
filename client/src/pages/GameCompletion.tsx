import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useGame } from "../contexts/gamecontext"
import "./css/GameCompletion.css";

const GameCompletion: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { resetGame } = useGame();
  const { score, time, gameTitle } = location.state || {};

  const handleReturnToDashboard = () => {
    resetGame(); 
    navigate("/dashboard");
  };

  return (
    <div className="game-completion-container">
      <h1>🎉 Mission Complete! 🎉</h1>
      <h2>{gameTitle}</h2>
      <p>Final Score: <strong>{score}</strong></p>
      <p>Time Taken: <strong>{time} seconds</strong></p>
      <p>Great job, agent! You've successfully completed the mission.</p>
      
      <button onClick={handleReturnToDashboard}>Return to Main Menu</button>
    </div>
  );
};

export default GameCompletion;