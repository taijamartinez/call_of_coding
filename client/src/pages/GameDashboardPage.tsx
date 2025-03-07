import { Link } from "react-router-dom";
import "./css/GameDashboardPage.css";

// Importing game images
import fixBrokenFunctionImg from "../assets/fix-broken-function.png";
import bugBusterImg from "../assets/bug-buster.png";
import codeQuestImg from "../assets/code-quest.png";
import codeRushImg from "../assets/code-rush.png";

const games = [
  {
    title: "Fix Broken Function",
    description: "Find and repair the missing function in the code before time runs out!",
    image: fixBrokenFunctionImg,
    link: "fix-broken-function"
    
  },
  {
    title: "Bug Buster",
    description: "Hunt down and squash all the bugs hiding in the program.",
    image: bugBusterImg,
    link: "bug-buster"
  },
  {
    title: "Code Quest",
    description: "Solve a series of coding challenges to advance through the quest.",
    image: codeQuestImg,
    link: "code-quest"
  },
  {
    title: "Code Rush",
    description: "Complete as many coding puzzles as possible before time expires!",
    image: codeRushImg,
    link: "code-rush"
  },
];

const GameDashboardPage = () => {
  return (
    <div className="game-dashboard">
      <h1 className="dashboard-title">Select a Game!</h1>
      <div className="game-list">
        {games.map((game, index) => (
          <div key={index} className="game-card">
            <img src={game.image} alt={game.title} className="game-image" />
            <div className="game-info">
              <h2 className="game-title">{game.title}</h2>
              <p className="game-description">{game.description}</p>
              </div>
              <div className="game-button-container">
              <Link to={`/game/${game.link}`} className="play-button">Play</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameDashboardPage;

