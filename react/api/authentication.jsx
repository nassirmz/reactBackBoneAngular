var axios = require('axios');

//Authentication API Requests
module.exports = {
  register (username, password, cb) {
    cb = arguments[arguments.length - 1];

    var promise = axios.post('/users', {
       username: username,
       password: password
    });
    this.handleAuth(promise, cb);
  },

  login (username, password, cb) {
    var promise = axios.post('/users/login', {
      username: username,
      password: password
    });
    this.handleAuth(promise, cb);

  },

  logout (cb) {
    var token = localStorage.getItem('Auth');
    localStorage.removeItem('Auth');
  },

  handleAuth (promise, cb) {
    promise.then((resp) => {
      if (resp.headers.auth) {
        localStorage.setItem('Auth', resp.headers.auth);
        cb(true);
      }
    }, (e) => {
      console.log(e);
      cb(false);
    })
    .catch((e) => {
      cb(false);
      console.error(e);
    })
  },

  isAuthenticated () {
    var token = localStorage.getItem('Auth');
    return token ? true : false;
  }
}
