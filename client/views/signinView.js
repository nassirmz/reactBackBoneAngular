var SigninView = Backbone.View.extend({
  events: {
    'click #signinButton': 'login'
  },
  template: _.template($('#userInputForm').html()),
  render: function () {
    this.$el.html(this.template());
    this.$el.find('ul').append('<li><button id="signinButton">Sign In</button></li>');
    $('.container').append(this.$el);
  },
  login: function (e) {
    e.preventDefault();
    var url = '/users/login';
    var inputValues = {
      username: this.$el.find('#username').val(),
      password: this.$el.find('#password').val()
    };
    $.ajax({
      url: url,
      type: 'POST',
      dataType: 'json',
      data: inputValues,
      success: function (data, textStatus, jqXHR) {
        window.localStorage.setItem('Auth', jqXHR.getResponseHeader('Auth'));
        Backbone.history.navigate('/todos', {
          trigger: true,
          replace: true
        });
      },
      error: function (err) {
        Backbone.history.navigate('signin', {
          trigger: true,
          replace: true
        });
      }
    });
  }

});