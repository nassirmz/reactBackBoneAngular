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
    if(window.localStorage.getItem('token')) {
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
        // self.headerLogOutView.render();
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
    console.log('called login in app.js');
    this.beforeLoading();
    this.signinView.render();
    this.headerView.render();
  },
  beforeLoading: function () {
    $('.container').empty();
    $('.header').find('ul').empty();
  }
});

var todoApp = new TodoApp();
Backbone.history.start();
