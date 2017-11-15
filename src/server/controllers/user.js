const User = require('../models/user');
module.exports = {
  async create(user) {
    const newUser = await User.create(user);
    return newUser;
  },

  async findAll() {
    const users = await User.findAll();
    return users;
  }
}