function isAuthenticated () {
  console.log(window.localStorage.getItem('Auth'));
  return window.localStorage.getItem('Auth');
}

$.ajaxSetup({
       beforeSend: function (xhr) {
        var token = window.localStorage.getItem('Auth');
        xhr.setRequestHeader('Auth', token);
    }
});