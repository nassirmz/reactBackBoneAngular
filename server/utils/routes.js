var helpers = require('./helper');

module.exports = function (app) {

  app.route('/todos')
    .get(helpers.requireAuthentication, helpers.getAllTodos)
    .post(helpers.requireAuthentication, helpers.createTodo);
  app.route('/users')
    .post(helpers.createUser);
  app.route('/todos/:id')
    .put(helpers.requireAuthentication, helpers.updateTodo)
    .get(helpers.requireAuthentication, helpers.getTodo)
    .delete(helpers.requireAuthentication, helpers.deleteTodo);
  app.route('/users/login')
    .post(helpers.loginUser)
    .delete(helpers.requireAuthentication, helpers.logoutUser);
};