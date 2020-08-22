// inportando o Knex 
const Knex = require('knex');

const path = require('path');

const DataBase= Knex({
    client: 'sqlite3',
    connection:{
      filename: path.resolve(__dirname,'database.sqlite3')
    },
    useNullAsDefault: true
});
// exportando conection
module.exports = DataBase;
