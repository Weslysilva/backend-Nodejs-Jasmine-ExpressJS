const { Sequelize, Model, DataTypes } = require('sequelize');
require('dotenv').config();

// // Option 1: Passing a connection URI
// const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres

// // Option 2: Passing parameters separately (sqlite)
// const sequelize = new Sequelize({
//   dialect: 'sqlite',
//   storage: 'path/to/database.sqlite'
// });

// Option 3: Passing parameters separately (other dialects)

const sequelize = new Sequelize(process.env.DB, process.env.ROOT_USER, process.env.SECRET_KEY_MARIADB, {
  host: 'localhost',
  dialect: 'mariadb', /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  logging: false,
  dialectOptions: {
    options: {
      requestTimeout: 10000
    }
  },

});


sequelize.authenticate().then((result) => {
    
  console.log('Connection has been established successfully.');
    
}).catch((error) => {
    
  console.error('Unable to connect to the database:', error);
    
});


module.exports = {
  sequelize,
  Model, 
  DataTypes
}