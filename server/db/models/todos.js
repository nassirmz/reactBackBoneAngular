var Sequelize = require('sequelize');
var sequelize = require('./../config');

var Todo = sequelize.define('Todo', {
  task: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [1, 250]
    }
  },
  completed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    validate: {
      len: [7, 100]
    }
  }
});

module.exports = Todo;