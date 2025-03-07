import { Link } from "react-router-dom";
import "./css/ExitGame.css"; 
const ExitGame = ({ onResume }: { onResume: () => void }) => {
    return (
      <div className="exit-game-overlay">
        <div className="exit-game-modal">
          <h2>Exit Game</h2>
          <p className="exit-warning">
            Wait! Your progress will not be saved if you exit before finishing your contract.
            <br />
            Sure you want to exit?
          </p>
          <div className="exit-buttons">
            <button className="exit-button resume-btn" onClick={onResume}>
              Resume Game
            </button>
            <Link to="/" className="exit-button exit-btn">Exit Game</Link>
          </div>
        </div>
      </div>
    );
  };
  
  export default ExitGame;
