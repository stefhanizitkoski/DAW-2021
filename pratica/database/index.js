const knex = require('knex')({
    client: 'mysql2',
    connection: {
      host : 'localhost',
      user : 'root',
      password : 'stefhani',
      database : 'dawdb'
    }
});
//Teste
module.exports = knex;