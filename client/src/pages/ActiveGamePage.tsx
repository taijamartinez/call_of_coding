import React from "react";
import { useParams } from "react-router-dom";
import { gameData } from "../data/gameData"; // Imports game data
import DragDrop from "../components/DragDrop";
import StoryDescription from "../components/StoryDescription";
import Timer from "../components/Timer";
import PointTracker from "../components/PointTracker";
import { useGame } from "../contexts/gamecontext"


const ActiveGamePage: React.FC = () => {

const { gameId } = useParams<{ gameId: string }>();
const game = Object.values(gameData).find((g) => g.id === gameId);
const { score, time, currentQuestionIndex, handleCorrectAnswer } = useGame();

if (!game) {
  return <h2>Game not found</h2>;
}

    return (
        <div className="active-game-container">
          {/* game title */}
          <h1>{game.title}</h1>
          
          {/* story description */}
          <StoryDescription story={game.story} />

          {/* timer component */}
          <Timer time={time} />

          {/* Point Tracker Component */}
          <PointTracker score={score} />

          {/* Drag and Drop Component for Coding Challenges */}
          <DragDrop 
          question={game.questions[currentQuestionIndex]}
          onCorrectAnswer={handleCorrectAnswer}
          />

        </div>
      );
    };
export default ActiveGamePage;