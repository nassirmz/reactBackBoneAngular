var TodoApp =  Backbone.Router.extend({
  routes: {
    '': 'home',
    'todos': 'index',
    'signin': 'login',
    'signup': 'signUp'
  },
  initialize: function () {
    this.todosCollection = new TodosCollection();
    this.userModel = new UserModel();
    this.addTodoView = new AddTodoView({
      collection: this.todosCollection
    });
    this.todosView = new TodosView({
      collection: this.todosCollection
    });
    this.signupView = new SignupView({
      model: this.userModel
    });
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
    this.todosCollection.fetch({
      success: function (model, response) {
        self.addTodoView.render();
        self.todosView.render();
      },
      error: function (model, response) {
        Backbone.history.navigate('/signup', {
          trigger: true,
          replace: true
        });
      }
    });
  },
  signUp: function () {
    this.beforeLoading();
    this.signupView.render();
  },
  login: function () {
    this.beforeLoading();
    var signinView = new SigninView();
    signinView.render();
  },
  beforeLoading: function () {
    $('.container').empty();
  }
});

var todoApp = new TodoApp();
Backbone.history.start();