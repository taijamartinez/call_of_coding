
interface TimerProps {
    time: number;
  }
  
  const Timer: React.FC<TimerProps> = ({ time }) => {
    return <div>Time: {time}</div>;
  };

export default Timer;