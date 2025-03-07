import  { Leaderboard }  from '../models/index.js';

export const seedLeaderboard= async () => {
  await Leaderboard.bulkCreate([
    { username: 'SyntaxSlayer', score: 20565, gamesId: 1, userId: 1 },
    { username: 'DebugDemon', score: 42395 , gamesId: 2,userId: 2 },
    { username: 'RootReaper', score: 10890 , gamesId: 3,userId: 3 },
    { username: 'BooleanBoss', score: 85000 , gamesId: 1,userId: 4 },
    { username: 'JavascriptJunkie', score: 15500 , gamesId: 4, userId: 5 },
  ]);
};


