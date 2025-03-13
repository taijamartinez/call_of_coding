import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';
import { initUserModel } from './user.js';
import { initLeaderboardModel } from './leaderboard.js';
import { initGameModel } from './games.js';

dotenv.config();

// Ensure DB_URL is correctly set
if (!process.env.DB_URL) {
  throw new Error("Missing environment variable: DB_URL");
}

// Initialize Sequelize with SSL support
const sequelize = new Sequelize(process.env.DB_URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,  // Require SSL connection
      rejectUnauthorized: false, // Render requires this setting
    },
  },
  logging: false, // Disable SQL logs in console (optional)
});

const User = initUserModel(sequelize);
const Leaderboard = initLeaderboardModel(sequelize);
const Games = initGameModel(sequelize);

// Define relationships
User.hasMany(Leaderboard, { foreignKey: 'userId' });
Leaderboard.belongsTo(User, { foreignKey: 'userId', as: 'User' });

Games.hasMany(Leaderboard, { foreignKey: 'gamesId' });
Leaderboard.belongsTo(Games, { foreignKey: 'gamesId', as: 'Game' });

export { sequelize, User, Leaderboard, Games };

