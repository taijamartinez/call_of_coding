import  { Leaderboard }  from '../models/index.js';

export const seedLeaderboard= async () => {
  await Leaderboard.bulkCreate([
    { username: 'Hack The Matrix', score: 20565, gamesId: 1, userId: 1 },
    { username: 'Glitch Wars', score: 42395 , gamesId: 2,userId: 2 },
    { username: 'Bug Buster', score: 10890 , gamesId: 3,userId: 3 },
    { username: 'Code Quest', score: 85000 , gamesId: 4,userId: 4 },
    { username: 'CTRL + ALT + Defeat', score: 15500 , gamesId: 5, userId: 5 },
  ]);
};


