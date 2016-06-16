var TodoApp =  Backbone.Router.extend({
  routes: {
    'todos': 'index',
    '': 'signUp'
  },
  index: function () {
    this.beforeLoading();
    console.log('todos called');
    var self = this;
    self.todosCollection = new TodosCollection();
    self.todosCollection.fetch({
      success: function (model, response) {
        console.log('success');
        self.todosView = new TodosView({
          collection: self.todosCollection
        });
        self.addTodoView = new AddTodoView({
          collection: self.todosCollection
        });
        self.addTodoView.render();
        self.todosView.render();
      },
      error: function (model, response) {
        console.log(response);
      }
    });
  },
  signUp: function () {
    this.beforeLoading();
    var userModel = new UserModel();
    this.signupView = new SignupView({
      model: userModel
    });
    this.signupView.render();
  },
  beforeLoading: function () {
    $('.container').empty();
  }
});
var todoApp = new TodoApp();
Backbone.history.start();