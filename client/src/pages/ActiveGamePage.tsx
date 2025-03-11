import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { gameData } from "../data/gameData"; // Imports game data- handles game questions, story, and title
import { gameBackgrounds } from "../data/gameBGs";  // Imports game backgrounds
import DragDrop from "../components/DragDrop";
import StoryDescription from "../components/StoryDescription";
import Timer from "../components/Timer";
import PointTracker from "../components/PointTracker";
import ExitGame from "../components/ExitGame";
import { useGame } from "../contexts/gamecontext" // Imports game context- handles game state
import { addScore, Score } from "../api/scoreAPI";
import Auth from "../utils/auth";

import "./css/ActiveGamePage.css";


const ActiveGamePage: React.FC = () => {

const { gameId } = useParams<{ gameId: string }>(); // Gets the game ID from the URL
const navigate = useNavigate();  // Navigates to different pages
const game = Object.values(gameData).find((g) => g.id === gameId); // Finds the game based on the game ID
const { score, time, currentQuestionIndex, handleCorrectAnswer } = useGame(); // Gets the game state from the game context
const userProfile = Auth.getProfile(); // Gets the user profile
const username = userProfile ? (userProfile as any).id : "Guest"; // Gets the username from the user profile


// checks if the game user chose to play exists
if (!game) {
  return <h2>Game not found</h2>;
}

// gets the background image for the game
const gameBackground = gameBackgrounds[game.id];


// Navigate to Game Completion when all questions are answered
useEffect(() => {
  if (currentQuestionIndex >= game.questions.length) {
    // get score info 
    const leaderboardEntry: Score = {
      score: score,

      // @ts-ignore
      username: Auth.getProfile().id,

      gamesId: Number(game.id),
    };
    // send it to the backend
    addScore(leaderboardEntry);
    navigate(`/game-completion`, { 
      state: { score, time, username, gameTitle: game.title },
      replace: true,
     });
  }
}, [currentQuestionIndex, navigate, game, score, time, userProfile]);


    return (
        <div className="active-game-container">

        {/* Conditionally render video background if game has a video */}
        {gameBackground?.type === "video" && (
        <div className="video-background">
          <iframe
            src={`${gameBackground.url}&autoplay=1&loop=1&background=1`}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            title={`${game.title} Background`}
          ></iframe>
         </div>
        )} 


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