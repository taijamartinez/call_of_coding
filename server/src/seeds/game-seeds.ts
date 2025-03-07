import { Games } from '../models/index.js'; // Ensure the Game model is properly imported

export const seedGames = async () => {
  await Games.bulkCreate([
    { title: 'Fix Broken Function', description: 'Crack an encrypted code', image: '#', link: '#', id: 1 },
    { title: 'Bug Buster', description: 'Debug the code', image: '#', link: '#', id: 2 },
    { title: 'Code Quest', description: 'Solve the mysterious coding challenges', image: '#', link: '#', id: 3 },
    { title: 'Cursed Codebase Escape', description: 'Find and fix the cursed infinite loop', image: '#', link: '#', id: 4 },
  ]);
};