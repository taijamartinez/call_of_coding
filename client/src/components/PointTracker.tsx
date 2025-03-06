interface PointTrackerProps {
    score: number;
  }

const PointTracker: React.FC<PointTrackerProps> = ({ score }) => {
  
  return <p>Score: {score}</p>;
};

export default PointTracker;