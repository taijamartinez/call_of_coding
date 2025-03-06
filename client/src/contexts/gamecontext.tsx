import React, { createContext, useState, useEffect, useContext, ReactNode } from "react";

// Defines the structure of the game context
interface GameContextType {
    score: number;
    time: number;
    currentQuestionIndex: number;
    handleCorrectAnswer: () =>void;
}

// Creates the GameContext with an initial undefined value
const GameContext = createContext<GameContextType | undefined>(undefined);


// GameProvider component that wraps around parts of the app that need access to game state
export const GameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    // State variables to manage game progress- sets score, timer and question index to 0
    const [score, setScore] = useState(0);
    const [time, setTime] = useState(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);


     // useEffect hook to start a timer when the game starts
    useEffect(() => {
        const timer = setInterval(() => setTime((prevTime) => prevTime + 1), 1000);
        return () => clearInterval(timer);
    }, []);


    // Function to handle correct answers
    const handleCorrectAnswer = () => {
        setScore((prev) => prev + 10);
        setCurrentQuestionIndex((prev) => prev + 1);
    };

    return (
         // Provides the game state and functions to all children components
        <GameContext.Provider value={{ score, time, currentQuestionIndex, handleCorrectAnswer }}>
            {children}
        </GameContext.Provider>
    );
};

// Custom hook to allow components to access the GameContext
export const useGame = (): GameContextType => {
const context = useContext(GameContext);

if (!context) {
    // Ensures the hook is used inside the provider
    throw new Error("useGame must be used within a GameProvider");
}

// Returns the game context state and functions
return context;

};