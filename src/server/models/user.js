const sequelize = require('./../utils/sequelize');
const Sequelize = require('sequelize');

const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: Sequelize.STRING(100),
  nick: Sequelize.STRING(100),
  password: Sequelize.STRING(100),
  gender: Sequelize.BOOLEAN,
  createdAt: Sequelize.BIGINT,
  updatedAt: Sequelize.BIGINT
}, {
    timestamps: false,
  }
);
module.exports = User;