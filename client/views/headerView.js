var HeaderView = Backbone.View.extend({
  events: {
    'click #logoutButton': 'logout'
  },
  tagName: 'ul',
  className: 'nav',
  template1: _.template($('#logInNav').html()),
  template2: _.template($('#loggedInNav').html()),
  render: function () {
    this.$el.empty();
    if(isAuthenticated()) {
      console.log('called log in');
      this.$el.html(this.template2());
    } else {
      console.log('called log out');
      this.$el.html(this.template1());
    }
    $('.header').prepend(this.$el);
  },
  logout: function (e) {
    e.preventDefault();
    $.ajax({
      url: '/users/login',
      type: 'DELETE',
      dataType: 'json',
      success: function () {
        console.log('success');
        window.localStorage.removeItem('Auth');
        window.location.replace('#signin');
      },
      error: function (response) {
        console.log('error');
      }
    });
  }
});
