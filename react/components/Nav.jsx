var React = require('react');
var {Link, IndexLink, hashHistory} = require('react-router');
var auth = require('./../api/authentication.jsx');

var Nav = React.createClass({
  onSubmitLogout (e) {
    e.preventDefault();
    auth.logout();
    hashHistory.push('/');
  },
  notLoggedIn () {
    return (
      <ul className="nav">
        <li><Link to="/signup">Create Account</Link></li>
        <li><IndexLink to="/" href="#signin">Sign In</IndexLink></li>
      </ul>
    );
  },
  loggedIn () {
    return (
      <ul className="nav">
        <li><button id="logoutButton" onClick={this.onSubmitLogout}>Sign Out</button></li>
      </ul>
    );
  },
  render () {
    return (
      <div className="header">
        <h1>TODO LIST</h1>
        {auth.isAuthenticated() ? this.loggedIn() : this.notLoggedIn()}
        <div className="clear"></div>
      </div>
    );
  }
});

module.exports = Nav;
