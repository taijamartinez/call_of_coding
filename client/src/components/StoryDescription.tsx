import React from "react";


type StoryDescriptionProps = {
  story: string;
};

const StoryDescription: React.FC<StoryDescriptionProps> = ({ story }) => {
  return (
    <div className="story-container">
      <h2>Mission Briefing</h2>
      <p className="story-text">{story}</p>
    </div>
  );
};

export default StoryDescription;