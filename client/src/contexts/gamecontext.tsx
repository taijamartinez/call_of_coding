import React, { createContext, useState, useEffect, useContext, ReactNode } from "react";

import { useLocation } from "react-router-dom";

interface GameContextType {
    score: number;
    time: number;
    currentQuestionIndex: number;
    handleCorrectAnswer: () =>void;
    resetGame: () => void;
    pauseTimer: () => void;
    resumeTimer: () => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

const readLs = (key: string) => JSON.parse(localStorage.getItem(key) || "0");

const writeLs = (key: string, value: number) => localStorage.setItem (key, JSON.stringify(value));

export const GameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [score, setScore] = useState(readLs("score"));
    const [time, setTime] = useState(readLs("time"));
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(readLs("currentQuestionIndex"));
    const [isRunning, setIsRunning] = useState(true);

    const location = useLocation();

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isRunning) {
            timer = setInterval(() => setTime((prevTime: number) => prevTime + 1), 1000);
        }
        return () => clearInterval(timer);
    }, [isRunning]);

    useEffect(() => {
        writeLs("score", score);
    }, [score]);

    useEffect(() => {
        writeLs("time", time);
    }, [time]);

    useEffect(() => {
        writeLs("currentQuestionIndex", currentQuestionIndex);
    }, [currentQuestionIndex]);
    


    const handleCorrectAnswer = () => {
        setScore((prev: number) => prev + 10);
        setCurrentQuestionIndex((prev: number) => prev + 1);
    };

    const resetGame = () => {
        setScore(0);
        setTime(0);
        setCurrentQuestionIndex(0);
        setIsRunning(true);
        localStorage.removeItem("score");
        localStorage.removeItem("time");
        localStorage.removeItem("currentQuestionIndex");
    };

    const pauseTimer = () => setIsRunning(false);
    const resumeTimer = () => setIsRunning(true);

    useEffect(() => {
        const isOnGamePage = location.pathname.startsWith("/game"); // Adjust based on your route
        if (!isOnGamePage) {
            resetGame();
        }
    }, [location.pathname]);

    return (
        <GameContext.Provider value={{ score, time, currentQuestionIndex, handleCorrectAnswer, resetGame, pauseTimer, resumeTimer }}>
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