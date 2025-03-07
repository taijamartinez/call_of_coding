import { User } from '../models/user.js';

export const seedUsers = async () => {
  await User.bulkCreate([
    { username: 'SyntaxSlayer', email: 'syntax@example.com', password: 'password' },
    { username: 'DebugDemon', email: 'debug@example.com', password: 'password' },
    { username: 'RootReaper', email: 'root@example.com', password: 'password' },
    { username: 'BooleanBoss', email: 'boolean@example.com', password: 'password' },
    { username: 'JavascriptJunkie', email: 'js@example.com', password: 'password' },
  ], { individualHooks: true });
};


