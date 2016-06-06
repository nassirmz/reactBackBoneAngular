var HeaderView = Backbone.View.extend({
  tagName: 'ul',
  className: 'nav',
  template: _.template('<li><a href="/signup">Create Account</a></li>' +
    '<li><a href="signin">Sign In</a></li>' +
    '<li><a href="signout">Sign Out</a></li>'),
  render: function () {
    this.$el.html(this.template());
    $('.header').prepend(this.$el);
  }
});
var headerView = new HeaderView();
headerView.render();