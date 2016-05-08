var Sequelize = require('sequelize');

var sequelize = new Sequelize('todo-db', undefined, undefined, {
  'dialect': 'sqlite',
  'storage': __dirname + '/database.sqlite'
});

module.exports = {
  todo: sequelize.import(__dirname + '/models/todos'),
  user: sequelize.import(__dirname + '/models/user'),
  sequelize: sequelize,
  Sequelize: Sequelize
};