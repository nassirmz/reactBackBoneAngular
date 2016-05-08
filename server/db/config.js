var Sequelize = require('sequelize');

var sequelize = new Sequelize('todo-db', undefined, undefined, {
  'dialect': 'sqlite',
  'storage': __dirname + '/database.sqlite'
});

sequelize.sync({force: true}).then(function () {
  console.log('Everything is synced');
});

module.exports = sequelize;