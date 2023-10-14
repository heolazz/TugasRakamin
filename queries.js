var Pool = require('pg').Pool;
var pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'dvdrental',
  password: '1234',
  port: 5432,
});

module.exports = pool;