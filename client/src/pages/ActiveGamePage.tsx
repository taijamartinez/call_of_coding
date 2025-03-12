import React, { useEffect, useState  } from "react";
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
const [loading, setLoading] = useState(true); // Loading state for the game
const [gameStarted, setGameStarted] = useState(false); // Track if the game has started
const game = Object.values(gameData).find((g) => g.id === gameId); // Finds the game based on the game ID
const gameIdNumber = gameId ? Number(gameId) : null; // Converts the game ID to a number
const { score, time, currentQuestionIndex, handleCorrectAnswer } = useGame(); // Gets the game state from the game context
const userProfile = Auth.getProfile(); //Gets the user profile
const userId = userProfile ? (userProfile as any).id : 0;



// checks if the game user chose to play exists
if (!game) {
  console.error("Game not found!");
  return <h2>Game not found</h2>;
}

// gets the background image for the game
const gameBackground = gameBackgrounds[game.id];
 // Simulate loading game data
 useEffect(() => {
  setTimeout(() => {
    setLoading(false); // Set loading to false after 1.5 seconds (or when your game data is ready)
    setGameStarted(true); // Set gameStarted to true to start timer
  }, 1500); // Simulate loading time
}, []);


// Navigate to Game Completion when all questions are answered
useEffect(() => {
  if (currentQuestionIndex >= game.questions.length) {
    console.log("🆔 User ID (before sending to API):", userId);
    console.log("🎮 Game ID:", gameIdNumber);

    if (!userId || !gameIdNumber) {
      console.error("Missing userId or gameId. Aborting API request.");
      return;
    }

    const leaderboardEntry: Score = { 
      score, 
      userId, 
      gamesId: gameIdNumber?.toString() || "", 
      gameTime: number,
    };

    addScore(leaderboardEntry).then((response) => {
      if (response) {
        navigate(`/game-completion`, { 
          state: { score, time, userId, gameId: gameIdNumber, gameTitle: game.title },
          replace: true,
        });
      } else {
        console.error("Failed to submit score.");
      }
    });
  }
}, [currentQuestionIndex, navigate, game, score, time, userId]);



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

        {/* Loading Screen */}
      {loading ? (
        <div className="loading-screen">
          <h1 className="loading-text">Loading Game...</h1>
          {/* Optionally, you can add a spinner or animation here */}
        </div>
      ) : (
        <>


          <div className="active-game-header">
          <div className="active-game-timer">
          {/* timer component */}
          <Timer time={gameStarted ? time : 0} />
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

        </>
      )}
    </div>
  );
};

export default ActiveGamePage;