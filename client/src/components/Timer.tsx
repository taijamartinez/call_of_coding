import { useGame } from "../contexts/gamecontext"

const Timer: React.FC = () => {
    const { time } = useGame();
    return <p>Time: {time} seconds</p>
};

export default Timer;