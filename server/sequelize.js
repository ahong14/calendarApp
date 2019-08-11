const Sequelize = require('sequelize');

//create new instance of Sequeilze ORM for Postgres
var sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PW,
    {
        host: process.env.DB_HOST,
        dialect: 'postgres',
    }
);

//import models to be inserted into table
var models = {
    User: sequelize.import('./postgres/models/user')
};

//sync models to database
sequelize.sync().then( () => {
    console.log("Database synced");
})

module.exports = {models};
