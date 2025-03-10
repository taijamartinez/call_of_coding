import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { gameData } from "../data/gameData"; // Imports game data
import DragDrop from "../components/DragDrop";
import StoryDescription from "../components/StoryDescription";
import Timer from "../components/Timer";
import PointTracker from "../components/PointTracker";
import { useGame } from "../contexts/gamecontext"

import ExitGame from "../components/ExitGame";

import "./css/ActiveGamePage.css";
import { addScore, Score } from "../api/scoreAPI";
import Auth from "../utils/auth";


const ActiveGamePage: React.FC = () => {

const { gameId } = useParams<{ gameId: string }>();
const navigate = useNavigate();
const game = Object.values(gameData).find((g) => g.id === gameId);
const { score, time, currentQuestionIndex, handleCorrectAnswer } = useGame();

// checks if the game user chose to play exists
if (!game) {
  return <h2>Game not found</h2>;
}


// Navigate to Game Completion when all questions are answered
useEffect(() => {
  if (currentQuestionIndex >= game.questions.length) {
    // get score info 
    const leaderboardEntry: Score = {
      score: score,
      // @ts-ignore
      userId: Auth.getProfile().id,
      gamesId: Number(game.id),
    };
    // send it to the backend
    addScore(leaderboardEntry);
    navigate(`/game-completion`, { 
      state: { score, time, gameTitle: game.title },
      replace: true,
     });
  }
}, [currentQuestionIndex, navigate,]);


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
          
          {/* story description  */}
          <StoryDescription story={game.story} />

        {/* Only show DragDrop if there are remaining questions */}
          {currentQuestionIndex < game.questions.length && (
            <DragDrop question={game.questions[currentQuestionIndex]} onCorrectAnswer={handleCorrectAnswer} />
       )}
       
       {/* Exit Game Component */} 
        <ExitGame/>

    </div>
  );
};

export default ActiveGamePage;