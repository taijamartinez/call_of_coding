import dotenv from 'dotenv';
dotenv.config();

import { Sequelize } from 'sequelize';
import { initUserModel } from './user.js';
import { initLeaderboardModel}  from './leaderboard.js';
import { initGameModel } from './games.js';



const sequelize = process.env.DB_URL
  ? new Sequelize(process.env.DB_URL)
  : new Sequelize(process.env.DB_NAME || '', process.env.DB_USER || '', process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'postgres',
    dialectOptions: {
      decimalNumbers: true,
    },
  });

const User = initUserModel(sequelize);
const Leaderboard = initLeaderboardModel(sequelize);
const Games = initGameModel(sequelize);

User.hasMany(Leaderboard, { foreignKey: 'username' });
Leaderboard.belongsTo(User, { foreignKey: 'username', as: 'User' });
Games.hasMany(Leaderboard, { foreignKey: 'gamesId' });
Leaderboard.belongsTo(Games, { foreignKey: 'gamesId', as: 'Game' });

export { sequelize, User, Leaderboard, Games };


