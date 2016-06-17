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
    this.headerLogInView = new HeaderLogInView({
      model: this.userModel
    });
    this.headerLogOutView = new HeaderLogOutView({
      model: this.userModel
    });
    this.signinView = new SigninView();
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
        self.headerLogOutView.render();
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
    this.headerLogInView.render();
  },
  login: function () {
    this.beforeLoading();
    this.signinView.render();
    this.headerLogInView.render();
  },
  beforeLoading: function () {
    $('.container').empty();
    $('.header').find('ul').empty();
  }
});

var todoApp = new TodoApp();
Backbone.history.start();
