var SignupView = Backbone.Model.extend({
  tagName: 'form',
  template: _.template('<input placeholder="username" type="text"><input placeholder="password" type="text"><button>Create Free Account</button>'),
  render: function () {
    this.$el.html(this.template());
    $('.container').append(this.$el);
  }

});