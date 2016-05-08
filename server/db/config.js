var Sequelize = require('sequelize');

var sequelize = new Sequelize('todo-db', undefined, undefined, {
  'dialect': 'sqlite',
  'storage': __dirname + '/database.sqlite'
});

// sequelize.sync({force: true}).then(function () {
//   console.log('Everything is synced');
// });

module.exports = {
  todo: sequelize.import(__dirname + '/models/todos'),
  user: sequelize.import(__dirname + '/models/user'),
  sequelize: sequelize,
  Sequelize: Sequelize
};