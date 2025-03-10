const { Pool } = require("pg");
require("dotenv").config(); // Load environment variables

export const pool = new Pool({
  user: process.env.DB_USER,     
  password: process.env.DB_PASS, 
  host: process.env.DB_HOST,     
  port: process.env.DB_PORT || 5432, 
  database: process.env.DB_NAME, 
});

module.exports = pool;