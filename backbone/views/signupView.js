var SignupView = Backbone.View.extend({
  events: {
    'click #signupButton': 'createUser'
  },
  template: _.template($('#userInputForm').html()),
  render: function () {
    this.$el.html(this.template());
    this.$el.find('ul').append('<li><button id="signupButton">Create Free Account</button></li>');
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
        Backbone.history.navigate('todos', {
          trigger: true,
          replace: true
        });
      },
      error: function (model, response) {
        console.log('error');
      }
    });
  }
});
