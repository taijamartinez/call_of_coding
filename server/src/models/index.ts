import dotenv from 'dotenv';
dotenv.config();

import { Sequelize } from 'sequelize';
import { initUserModel } from './user.js';
import { initLeaderboardModel}  from './leaderboard.js';

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

User.hasMany(Leaderboard, { foreignKey: 'userId' });
Leaderboard.belongsTo(User, { foreignKey: 'userId', as: 'User' });

export { sequelize, User, Leaderboard };
