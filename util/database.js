const Sequelize = require('sequelize');

// new Sequelize('schema name', 'user name', 'password', {...

const sequelize = new Sequelize('node-complete', 'edudinizo', '12021990', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;
