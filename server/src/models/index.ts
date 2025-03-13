import dotenv from 'dotenv';
dotenv.config();
import { Sequelize } from 'sequelize';
import { initUserModel } from './user.js';
import { initLeaderboardModel } from './leaderboard.js';
import { initGameModel } from './games.js';

dotenv.config();

const sequelize = process.env.DB_URL
  ? new Sequelize(process.env.DB_URL)
  : new Sequelize(process.env.DB_NAME || '', process.env.DB_USER || '', process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'postgres',
      dialectOptions: {
        decimalNumbers: true,
      },
    });
// Ensure DB_URL is correctly set
if (!process.env.DB_URL) {
  throw new Error("Missing environment variable: DB_URL");
}

const User = initUserModel(sequelize);
const Leaderboard = initLeaderboardModel(sequelize);
const Games = initGameModel(sequelize);

// Define relationships
User.hasMany(Leaderboard, { foreignKey: 'userId' });
Leaderboard.belongsTo(User, { foreignKey: 'userId', as: 'User' });

Games.hasMany(Leaderboard, { foreignKey: 'gamesId' });
Leaderboard.belongsTo(Games, { foreignKey: 'gamesId', as: 'Game' });

export { sequelize, User, Leaderboard, Games };

