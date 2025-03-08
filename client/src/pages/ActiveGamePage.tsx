import React from "react";
import { useParams } from "react-router-dom";
import { gameData } from "../data/gameData"; // Imports game data
import DragDrop from "../components/DragDrop";
import StoryDescription from "../components/StoryDescription";
import Timer from "../components/Timer";
import PointTracker from "../components/PointTracker";
import { useGame } from "../contexts/gamecontext"

import "./css/ActiveGamePage.css";


const ActiveGamePage: React.FC = () => {

const { gameId } = useParams<{ gameId: string }>();
const game = Object.values(gameData).find((g) => g.id === gameId);
const { score, time, currentQuestionIndex, handleCorrectAnswer } = useGame();

if (!game) {
  return <h2>Game not found</h2>;
}

    return (
        <div className="active-game-container">

          <div className="active-game-header">

          <div className="active-game-timer">
          {/* timer component */}
          <Timer time={time} />
          </div>

          {/* game title */}
          <h1 className="active-game-title">{game.title}</h1>


          <div className="active-game-points">
          {/* Point Tracker Component */}
          <PointTracker score={score} />
          </div>

          </div>
          
          {/* story description */}
          <StoryDescription story={game.story} />

          {/* Drag and Drop Component for Coding Challenges */}
          <DragDrop 
          question={game.questions[currentQuestionIndex]}
          onCorrectAnswer={handleCorrectAnswer}
          />

        </div>
      );
    };

export default ActiveGamePage;