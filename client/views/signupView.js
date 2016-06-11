var SignupView = Backbone.View.extend({
  events: {
    'click #signupButton': 'login'
  },
  tagName: 'form',
  id: 'signupForm',
  template: _.template('<ul><li><input id="username" placeholder="username" type="text"></li><li><input id="password" placeholder="password" type="text"></li><li><button id="signupButton">Create Free Account</button></li></ul>'),
  render: function () {
    this.$el.html(this.template());
    $('.container').append(this.$el);
  },
  login: function () {
    this.model.set({username: this.$el.find('#username').val()});
    this.model.set({password: this.$el.find('#password')});
    this.saveUser();
  }

});