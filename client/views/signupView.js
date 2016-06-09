var SignupView = Backbone.View.extend({
  tagName: 'form',
  template: _.template('<ul><li><input placeholder="username" type="text"></li><li><input placeholder="password" type="text"></li><li><button>Create Free Account</button></li></ul>'),
  render: function () {
    this.$el.html(this.template());
    $('.container').append(this.$el);
  }

});