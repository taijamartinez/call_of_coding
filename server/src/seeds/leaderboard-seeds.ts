import { Leaderboard, User } from '../models/index.js';
export const seedLeaderboard = async () => {
  // Fetch users by their usernames to get their IDs
  const users = await User.findAll({ attributes: ['id', 'username'] });
  // Create a map of usernames to their corresponding user IDs
  const userMap = users.reduce((acc, user) => {
    acc[user.username] = user.id;
    return acc;
  }, {} as Record<string, number>);
  // Seed leaderboard using userId instead of username
  await Leaderboard.bulkCreate([
    { userId: userMap['SyntaxSlayer'], score: 20565, gamesId: 1 },
    { userId: userMap['BooleanBoss'], score: 42395, gamesId: 2 },
    { userId: userMap['SyntaxSlayer'], score: 10890, gamesId: 3 },
    { userId: userMap['DebugDemon'], score: 85000, gamesId: 4 },
    { userId: userMap['JavascriptJunkie'], score: 15500, gamesId: 5 },
  ]);
};