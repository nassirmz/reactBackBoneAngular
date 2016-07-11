function isAuthenticated () {
  return window.localStorage.getItem('Auth');
}

$.ajaxSetup({
  statusCode: {
    401: function () {
      console.log('ajax handler - 401 Error Recieved');
      Backbone.history.navigate('signin', {
        trigger: true,
        replace: true
      });
    }
  },
  beforeSend: function (xhr) {
    var token = window.localStorage.getItem('Auth');
    xhr.setRequestHeader('Auth', token);
  }
});
