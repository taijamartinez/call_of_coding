import { Games } from '../models/index.js'; // Ensure the Game model is properly imported

export const seedGames = async () => {
  await Games.bulkCreate([
    { title: 'Hack The Matrix', description: 'Prove your hacking skills in this high-stakes cyber challenge! Crack encrypted codes, bypass firewalls, and decrypt hidden messages to uncover the truth behind the Matrix.', image: '#', link: '#1', id: 1 },
    { title: 'Glitch Wars', description: 'The system is unstable, and glitches are taking over! Battle rogue code, patch corrupted files, and restore order before the digital world collapses.', image: '#', link: '#2', id: 2 },
    { title: 'Bug Buster', description: 'Hunt down and eliminate pesky bugs lurking in the code. Debug, refactor, and optimize your way to a flawless program before time runs out!', image: '#', link: '#3', id: 3 },
    { title: 'Code Quest', description: 'Embark on an epic coding adventure! Level up your programming skills to complete the quest.', image: '#', link: '#4', id: 4 },
    { title: 'CTRL + ALT + Defeat', description: 'The ultimate coding showdown! Solve as many programming challenges as possible before your system crashes.', image: '#', link: '#5', id: 5 },
  ]);
};


