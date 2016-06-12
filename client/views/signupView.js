var SignupView = Backbone.View.extend({
  events: {
    'click #signupButton': 'createUser'
  },
  tagName: 'form',
  id: 'signupForm',
  template: _.template('<ul><li><input id="username" placeholder="username" type="text"></li><li><input id="password" placeholder="password" type="text"></li><li><button id="signupButton">Create Free Account</button></li></ul>'),
  render: function () {
    this.$el.html(this.template());
    $('.container').append(this.$el);
  },
  createUser: function () {
    var newUser = new UserModel({
      username: this.$el.find('#username').val(),
      password: this.$el.find('#password').val()
    });
    newUser.save();
  }

});