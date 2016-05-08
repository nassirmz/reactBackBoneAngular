var Sequelize = require('sequelize');
var sequelize = require('./../config');

var User = sequelize.define('User', {
  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      len: [1, 255]
    }
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

