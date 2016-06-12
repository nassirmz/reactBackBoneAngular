var Sequelize = require('sequelize');

var sequelize = new Sequelize('todo-db', undefined, undefined, {
  'dialect': 'sqlite',
  'storage': __dirname + '/database.sqlite'
});

var db = {};

db.todo =sequelize.import(__dirname + '/models/todos');
db.user = sequelize.import(__dirname + '/models/user');
db.token = sequelize.import(__dirname + '/models/token');
db.sequelize =  sequelize;
db.Sequelize= Sequelize;

//define relationships
db.user.hasMany(db.todo);

module.exports = db;