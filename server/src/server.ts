const forceDatabaseRefresh = false;

import dotenv from 'dotenv';
dotenv.config();
import path from 'path';
import express from 'express';
import routes from './routes/index.js';
import { sequelize } from './models/index.js';
import { leaderboardRouter } from './routes/api/leaderboard-routes.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use('/api/leaderboard', leaderboardRouter);
app.use(routes);


// Serves static files in the entire client's dist folder
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '../client/dist')));


app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});

sequelize.sync({force: forceDatabaseRefresh}).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});