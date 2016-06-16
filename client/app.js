var TodoApp =  Backbone.Router.extend({
  routes: {
    '': 'home',
    'todos': 'index',
    'login': 'login',
    'signup': 'signUp'
  },
  home: function () {
    if(window.localStorage.getItem('token')) {
      this.index();
    } else {
      this.signUp();
    }
  },
  index: function () {
    this.beforeLoading();
    var self = this;
    self.todosCollection = new TodosCollection();
    self.todosCollection.fetch({
      success: function (model, response) {
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
        Backbone.history.navigate('/signup', {
          trigger: true,
          replace: true
        });
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