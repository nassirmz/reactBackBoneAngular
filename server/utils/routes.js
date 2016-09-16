var helpers = require('./helper');

module.exports = function (app) {

  //routing for todos
  app.route('/todos')
    .get(helpers.requireAuthentication, helpers.getAllTodos)
    .post(helpers.requireAuthentication, helpers.createTodo);

  //routing for users
  app.route('/users')
    .post(helpers.createUser);

  //routing for todo
  app.route('/todos/:id')
    .put(helpers.requireAuthentication, helpers.updateTodo)
    .get(helpers.requireAuthentication, helpers.getTodo)
    .delete(helpers.requireAuthentication, helpers.deleteTodo);

  //routing for login a user
  app.route('/users/login')
    .post(helpers.loginUser);

  app.use(helpers.error);
};