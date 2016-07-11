var React = require('react');

var Register = React.createClass({
  render() {
    return (
        <form>
          <ul>
            <li><input id="username" placeholder="username" type="text" /></li>
            <li><input id="password" placeholder="password" type="password" /></li>
            <li><button id="signupButton">Create Free Account</button></li>
          </ul>
        </form>
    );
  }
});

module.exports = Register;
