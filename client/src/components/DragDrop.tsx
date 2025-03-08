import React, { useState } from "react";

import "./css/DragDrop.css";

interface DragDropProps {
    question: {
        text: string;
        options: string[];
        correctAnswer: string; 
    };
    onCorrectAnswer: () => void;
}

const DragDrop: React.FC<DragDropProps> = ({ question, onCorrectAnswer }) => {
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

    const handleDrop = (answer: string) => {
        setSelectedAnswer(answer);

        if(answer === question.correctAnswer) {
            setTimeout(() => {
                alert("Correct! ✅");
                onCorrectAnswer();
            }, 500);
        } else {
            alert("Try again! ❌")
        }
    };

    return(
        <div className="drag-drop-container">
      <h2>{question.text}</h2>
      

      <div
        className="drop-zone"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          const droppedAnswer = e.dataTransfer.getData("text/plain");
          handleDrop(droppedAnswer);
        }}
      >
        <p>Drop your answer here</p>
        
      </div>

      <div className="options-container">
        {question.options.map((option, index) => (
          <div
            key={index}
            className="draggable-option"
            draggable
            onDragStart={(e) => e.dataTransfer.setData("text/plain", option)}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};
    
export default DragDrop;