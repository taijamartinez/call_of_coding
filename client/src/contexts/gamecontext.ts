import React, { createContext, useState, useEffect, useContext, ReactNode } from "react";

interface GameContextType {
    score: number;
    time: number;
    currentQuestionIndex: number;
    handleCorrectAnswer: () =>void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [score, setScore] = useState(0);
    const [time, setTime] = useState(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => setTime((prevTime) => prevTime + 1), 1000);
        return () => clearInterval(timer);
    }, []);

    const handleCorrectAnswer = () => {
        setScore((prev) => prev + 10);
        setCurrentQuestionIndex((prev) => prev + 1);
    };

    return (
        <GameContext.Provider value={{ score, time, currentQuestionIndex, handleCorrectAnswer }}>
        {children}
        </GameContext.Provider>
    );
};

export const useGame = () => {
const context = useContext(GameContext);

if (!context) {
    throw new Error("useGame must be used within a GameProvider");
}
return context;

};