import { Leaderboard, User } from '../models/index.js';
import { Op } from 'sequelize'; 

export const seedLeaderboard = async () => {
  const users = await User.findAll({
    where: {
      username: {
        [Op.in]: ['SyntaxSlayer', 'BooleanBoss', 'DebugDemon', 'JavascriptJunkie'],
      },
    },
  });

  const userMap = users.reduce((acc, user) => {
    acc[user.username] = user.id;
    return acc;
  }, {} as Record<string, number>);

  const requiredUsers = ['SyntaxSlayer', 'BooleanBoss', 'DebugDemon', 'JavascriptJunkie'];
  const missingUsers = requiredUsers.filter(username => !userMap[username]);

  if (missingUsers.length > 0) {
    console.error(`❌ Error: Missing users in database: ${missingUsers.join(', ')}`);
    return;
  }

  await Leaderboard.bulkCreate([
    { userId: userMap['SyntaxSlayer'], score: 10, gamesId: 1, gameTime: 120 },
    { userId: userMap['BooleanBoss'], score: 15, gamesId: 2, gameTime: 180 },
    { userId: userMap['DebugDemon'], score: 30, gamesId: 4, gameTime: 240 },
    { userId: userMap['JavascriptJunkie'], score: 12, gamesId: 5, gameTime: 150 },
  ]);

  console.log("Leaderboard seeded successfully.");
};
