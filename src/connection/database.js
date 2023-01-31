const knex = require('knex');

const database = () => {
  return knex({
    client: 'mysql2',
    connection: {
      host : '127.0.0.1',
      port : '3306',
      user : 'root',
      password : 'viotrhugo21',
      database : 'users'
    }
  });
}
  
module.exports = database;
