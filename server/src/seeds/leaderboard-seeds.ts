import  { Ticket }  from '../models/index.js';

export const seedTickets= async () => {
  await Ticket.bulkCreate([
    { username: 'SyntaxSlayer', score: 20565, userId: 1 },
    { username: 'DebugDemon', score: 42395 , userId: 2 },
    { username: 'RootReaper', score: 10890 , userId: 3 },
    { username: 'BooleanBoss', score: 85000 , userId: 4 },
    { username: 'JavascriptJunkie', score: 15500 , userId: 5 },
  ]);
};
