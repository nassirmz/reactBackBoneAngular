var SignupView = Backbone.View.extend({
  events: {
    'click #signupButton': 'createUser'
  },
  tagName: 'form',
  id: 'signupForm',
  template: _.template('<ul><li><input id="username" placeholder="username" type="text"></li><li><input id="password" placeholder="password" type="password"></li><li><button id="signupButton">Create Free Account</button></li></ul>'),
  render: function () {
    this.$el.html(this.template());
    $('.container').append(this.$el);
  },
  createUser: function (e) {
    e.preventDefault();
    var newUser = new UserModel({
      username: this.$el.find('#username').val(),
      password: this.$el.find('#password').val()
    });
    newUser.save(null, {
      dataType: 'text',
      success: function (model, response, options) {
        window.localStorage.setItem('Auth', options.xhr.getResponseHeader('Auth'));
      },
      error: function (model, response) {
        console.log('error');
      }
    });
  }

});