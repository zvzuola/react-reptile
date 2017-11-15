const Sequelize = require('sequelize');
const allConfig = require("./../../config");
const config = allConfig.database;
const sequelize = new Sequelize(config.DATABASE, config.USERNAME, config.PASSWORD, {
    host: config.HOST,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    }
});
module.exports = sequelize;