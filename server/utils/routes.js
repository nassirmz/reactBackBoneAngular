var helpers = require('./helper');

module.exports = function (app) {

  app.route('/todos')
    .get(helpers.getAllTodos)
    .post(helpers.createTodo);
  app.route('/users')
    .post(helpers.createUser);

  app.route('/users/:id')
    .get(helpers.getUser);

  app.route('/todos/:id')
    .put(helpers.updateTodo)
    .get(helpers.getTodo)
    .delete(helpers.deleteTodo);
};