const forceDatabaseRefresh = false;

import dotenv from 'dotenv';
dotenv.config();
import path from 'path';



import express from 'express';
import routes from './routes/index.js';
import { sequelize } from './models/index.js';

const app = express();
const PORT = process.env.PORT || 3001;


// Serves static files in the entire client's dist folder
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '../client/dist')));


app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});

app.use(express.json());
app.use(routes);

sequelize.sync({force: forceDatabaseRefresh}).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});

