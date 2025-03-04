import React from "react";
import { Link } from "react-router-dom";
import "./GameCard.css"; 

const GameCard = ({ game }) => {
  return (
    <div className="game-card">
      {/* Difficulty Banner */}
      <span className={`difficulty ${game.difficulty.toLowerCase()}`}>
        {game.difficulty}
      </span>

      {/* Game Image */}
      <img src={game.image} alt={game.title} className="game-image" />

      {/* Game Information */}
      <div className="game-info">
        <h3>{game.title}</h3>
        <p>{game.description}</p>

        {/* Button to Accept Contract or Play Game */}
        <Link to={`/game/${game.id}`}>
          <button className="accept-btn">Accept Contract</button>
        </Link>
      </div>
    </div>
  );
};

export default GameCard;
