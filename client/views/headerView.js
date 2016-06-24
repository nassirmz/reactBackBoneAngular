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
      url: '/users/logout',
      type: 'DELETE',
      dataType: 'json',
      success: function () {
        window.localStorage.removeItem('Auth');
        Backbone.history.navigate('signin', {
          trigger: true,
          replace: true
        });
      },
      error: function (response) {
        console.log('error');
      }
    });
  }
});
