import React from "react";
import { useParams } from "react-router-dom";
import { gameData } from "../contexts/gamecontext"; // Imports game data
import DragDrop from "../components/DragDrop";
import StoryDescription from "../components/StoryDescription";
import Timer from "../components/Timer";
import PointTracker from "../components/PointTracker";


const ActiveGamePage: React.FC = () => {

const { gameId } = useParams<{ gameId: string }>();
const game = gameData.find((g) => g.id === gameId);

    return (
        <div>
          <h1>Active Game Page</h1>
          <p></p>
        </div>
      );
    };
export default ActiveGamePage;