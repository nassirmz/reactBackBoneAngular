var React = require('react');
var {connect} = require('react-redux');

var {Link, IndexLink, hashHistory} = require('react-router');
var actions = require('actions');

var Nav = React.createClass({
  onSubmitLogout (e) {
    var {dispatch} = this.props;
    e.preventDefault();
    dispatch(actions.startLogout());
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
    var {auth} = this.props;
    return (
      <div className="header">
        <h1>TODO LIST</h1>
        {localStorage.getItem('Auth') ? this.loggedIn() : this.notLoggedIn()}
        <div className="clear"></div>
      </div>
    );
  }
});

module.exports = connect((state) => {
  return {
    auth: state.auth
  };
})(Nav);
