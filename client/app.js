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
    this.headerView = new HeaderView({
      model: this.userModel
    });
    this.signinView = new SigninView();
  },
  home: function () {
    if(isAuthenticated()) {
      this.index();
    } else {
      this.login();
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
        Backbone.history.navigate('/signin', {
          trigger: true,
          replace: true
        });
      }
    });
    this.headerView.render();
  },
  signUp: function () {
    this.beforeLoading();
    this.signupView.render();
    this.headerView.render();
  },
  login: function () {
    this.beforeLoading();
    this.signinView.render();
    this.headerView.render();
  },
  beforeLoading: function () {
    $('.container').empty();
    $('.header').find('ul').empty();
  }
});
var router = new TodoApp();
Backbone.history.start();
