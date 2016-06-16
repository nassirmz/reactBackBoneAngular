
$.ajaxSetup({
       beforeSend: function (xhr) {
        var token = window.localStorage.getItem('Auth');
        xhr.setRequestHeader('Auth', token);
    }
});