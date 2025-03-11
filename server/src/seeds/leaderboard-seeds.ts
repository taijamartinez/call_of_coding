import  { Leaderboard }  from '../models/index.js';

export const seedLeaderboard= async () => {
  await Leaderboard.bulkCreate([
    { username: 'SyntaxSlayer', score: 20565, gamesId: 1,  },
    { username: 'BooleanBoss', score: 42395 , gamesId: 2, },
    { username: 'SyntaxSlayer', score: 10890 , gamesId: 3, },
    { username: 'DebugDemon', score: 85000 , gamesId: 4, },
    { username: 'JavascriptJunkie', score: 15500 , gamesId: 5, },
  ]);
};


