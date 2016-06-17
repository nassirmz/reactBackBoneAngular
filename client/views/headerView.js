var HeaderLogInView = Backbone.View.extend({

  tagName: 'ul',
  className: 'nav',
  template: _.template($('#logInNav').html()),
  render: function () {
    this.$el.html(this.template());
    $('.header').prepend(this.$el);
  }
});

var HeaderLogOutView = Backbone.View.extend({
  tagName: 'ul',
  className: 'nav',
  template: _.template($('#loggedInNav').html()),
  render: function () {
    this.$el.html(this.template());
    $('.header').prepend(this.$el);
  }
});