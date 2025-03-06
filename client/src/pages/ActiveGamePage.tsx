import React from "react";
import { useParams } from "react-router-dom";
import { gameData } from "../data/gameDatas.js"; 
import DragDrop from "../components/DragDrop.js";
import StoryDescription from "../components/StoryDescription";
import Timer from "../components/Timer";
import PointTracker from "../components/PointTracker";
import { useGame } from "../contexts/gamecontext"

const ActiveGamePage: React.FC = () => {

const { gameId } = useParams<{ gameId: string }>();
const game = gameData.find((g) => g.id === gameId);
const { score, time, currentQuestionIndex, handleCorrectAnswer } = useGame();

if(!game) return <h2>Game not found!</h2>;

    return (
        <div>
          <h1>{game.title}</h1>

          <StoryDescription story={game.story}/>

          <Timer time={time} />
          <PointTracker score={score}/>

          {game.questions && game.questions.length > 0 ? (
        <DragDrop
          question={game.questions[currentQuestionIndex]} // Fixed typo "questiions" to "questions"
          onCorrectAnswer={handleCorrectAnswer}
        />
      ) : (
        <p>No questions available for this game.</p>
      )}
        </div>
      );
    };
export default ActiveGamePage;