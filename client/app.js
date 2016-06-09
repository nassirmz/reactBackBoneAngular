var TodoApp =  Backbone.Router.extend({
  routes: {
    'signup': 'signUp',
    '': 'index'
  },
  index: function () {
    var self = this;
    self.todosCollection = new TodosCollection();
    self.todosCollection.fetch({
      success: function () {
        self.todosView = new TodosView({
          collection: self.todosCollection
        });
        self.addTodoView = new AddTodoView({
          collection: self.todosCollection
        });
        self.addTodoView.render();
        self.todosView.render();
      }
    });
  },
  signUp: function () {
    this.userModel = new UserModel();
    this.signupView = new SignupView();
    this.signupView.render();
    console.log('render signup');
  },
});
var todoApp = new TodoApp();
Backbone.history.start({pushState: true });