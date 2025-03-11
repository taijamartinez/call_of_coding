import React, { useState } from "react";
import "./css/DragDrop.css";

// DragDropProps interface
interface DragDropProps {
    question: {
        text: string;
        options: string[];
        correctAnswer: string; 
    };
    onCorrectAnswer: () => void;
}

const DragDrop: React.FC<DragDropProps> = ({ question, onCorrectAnswer }) => {
  // State to manage the notification
    const [notification, setNotification] = useState<{ message: string; type: "success" | "error" } | null>(null);

    // Function to handle the drop event
    const handleDrop = (answer: string) => {

      // if the dropped answer is correct display correct message and moves to the next question
        if(answer === question.correctAnswer) {
            setNotification({ message: "Correct! ✅", type: "success"});

            setTimeout(() => {
              setNotification(null);
              onCorrectAnswer(); 
            }, 1500); 

        } else {
            setNotification({ message: "Try Again! ✖", type: "error" });

            setTimeout(() => {
              setNotification(null);
            }, 1500);
        }
    };

    return(
    <div className="drag-drop-container">
      
      <h2>{question.text}</h2>
    
       {/* Notification Display */}
       {notification && (
        <div className={`notification ${notification.type}`}>
          {notification.message}
        </div>
      )}

      {/* Drop Zone */}

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

      {/* answer draggable options */}
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