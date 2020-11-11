const Sequelize = require('sequelize');

const connection = new Sequelize('market', 'root', 'senhadb',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;