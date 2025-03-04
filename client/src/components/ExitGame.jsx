import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ExitGame = ({ onResume }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="exit-game">
      {showConfirm ? (
        <div>
          <p>Your progress will not be saved if you exit. Are you sure?</p>
          <button onClick={() => navigate("/")}>Exit</button>
          <button onClick={onResume}>Resume</button>
        </div>
      ) : (
        <div>
          <button onClick={() => setShowConfirm(true)}>Exit Game</button>
          <button onClick={onResume}>Resume Game</button>
        </div>
      )}
    </div>
  );
};

export default ExitGame;
