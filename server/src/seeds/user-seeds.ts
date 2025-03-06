import { User } from '../models/user.js';

export const seedUsers = async () => {
  await User.bulkCreate([
    { username: 'SyntaxSlayer', password: 'password'},
    { username: 'DebugDemon', password: 'password' },
    { username: 'RootReaper', password: 'password' },
    { username: 'BooleanBoss', password: 'password' },
    { username: 'JavascriptJunkie', password: 'password' },

  ], { individualHooks: true });
};


