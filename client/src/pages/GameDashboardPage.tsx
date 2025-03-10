import { Link } from "react-router-dom";
import "./css/GameDashboardPage.css";
import backgroundImage from "../assets/game-dashboard-bg.png";

// Importing game images
import fixBrokenFunctionImg from "../assets/fix-broken-function.png";
import bugBusterImg from "../assets/bug-buster.png";
import codeQuestImg from "../assets/code-quest.png";
import codeRushImg from "../assets/code-rush.png";

const games = [
  {
    title: "Hack the Matrix",
    description: "Prove your hacking skills in this high-stakes cyber challenge! Crack encrypted codes, bypass firewalls, and decrypt hidden messages to uncover the truth behind the Matrix.",
    image: fixBrokenFunctionImg,
    link: "hack-the-matrix"
    
  },
  {
    title: "Glitch Wars",
    description: "The system is unstable, and glitches are taking over! Battle rogue code, patch corrupted files, and restore order before the digital world collapses.",
    image: fixBrokenFunctionImg,
    link: "glitch-wars"
    
  },
  {
    title: "Bug Buster",
    description: "Hunt down and eliminate pesky bugs lurking in the code. Debug, refactor, and optimize your way to a flawless program before time runs out!",
    image: bugBusterImg,
    link: "bug-buster"
  },
  {
    title: "Code Quest",
    description: "Embark on an epic coding adventure! Level up your programming skills to complete the quest.",
    image: codeQuestImg,
    link: "code-quest"
  },
  {
    title: "Ctrl+Alt+Defeat",
    description: "The ultimate coding showdown! Solve as many programming challenges as possible before your system crashes.",
    image: codeRushImg,
<<<<<<< HEAD
    link: "code-rush"
=======
    link: "ctrl-alt-defeat"
>>>>>>> f1e4dabcb93d5bb85d498972f5a22864e450a679
  },
];

const GameDashboardPage = () => {
  return (
    <div className="game-dashboard"
      style={{ backgroundImage: `url(${backgroundImage})` }}>
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

