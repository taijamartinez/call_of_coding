import "./css/PointTracker.css";

interface PointTrackerProps {
    score: number;
  }

const PointTracker: React.FC<PointTrackerProps> = ({ score }) => {
  
  return <p className="point-tracker">Score: {score}</p>;
};

export default PointTracker;