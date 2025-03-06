import { useGame } from "../contexts/gamecontext";

const PointTracker: React.FC = () => {
    const { score } = useGame();
    return <p>Score: {score}</p>
};

export default PointTracker;