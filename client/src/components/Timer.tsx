import "./css/Timer.css";

interface TimerProps {
    time: number;
  }
  
  const Timer: React.FC<TimerProps> = ({ time }) => {
    return <div className="timer">Time: {time}</div>;
  };

export default Timer;