import React from "react";
import { Link } from "react-router-dom";
type Game = {
  id: string;
  title: string;
  description: string;
};

const games: Game[] = [
  {
    id: "bug-buster",
    title: "Bug Buster",
    description: "Hunt down and squash all the bugs hiding in the program.",
  },
  {
    id: "code-quest",
    title: "Code Quest",
    description: "Solve a series of coding challenges to advance through the quest.",
  },
  {
    id: "cursed-code",
    title: "Cursed Code",
    description: "Complete as many coding puzzles as possible before time expires!",
  },
  {
    id: "hacker-heist",
    title: "Hacker Heist",
    description: "Find and repair the missing function in the code before time runs out!",
  }
  
];

const GameDashboardPage: React.FC = () => {
  return (
    <div className="game-dashboard">
      <h2>Select a Game!</h2>
      <div className="game-list">
        {games.map((game) => (
          <div key={game.id} className="game-card">
            <h3>{game.title}</h3>
            <p>{game.description}</p>
            <Link to={`/game/${game.id}`}>
              <button className="play-button">Play {game.title}</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameDashboardPage;

