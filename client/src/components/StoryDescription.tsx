import React from "react";

interface StoryDescriptionProps {
    story: string;
}

const StoryDescription: React.FC<StoryDescriptionProps> = ({ story }) => {
    return (
        <div className="story-description">
            <h2>Mission Briefing 📜</h2>
            <p>{story}</p>
        </div>
    );
};

export default StoryDescription;