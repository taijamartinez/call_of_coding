import { Games } from '../models/index.js'; // Ensure the Game model is properly imported

export const seedGames = async () => {
  await Games.bulkCreate([
    { title: 'Hack the System', description: 'Solve coding challenges', image: '#', link: '#', id: 1 },
    { title: 'Code Quest', description: 'Complete coding missions', image: '#', link: '#', id: 2 },
    { title: 'Bug Bounty', description: 'Find and fix bugs', image: '#', link: '#', id: 3 },
    { title: 'Algorithm Arena', description: 'Compete in algorithm challenges', image: '#', link: '#', id: 4 },
  ]);
};