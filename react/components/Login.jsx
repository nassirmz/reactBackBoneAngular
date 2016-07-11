var React = require('react');

var Login = React.createClass({
  render() {
    return (
      <div>
        <form>
          <ul>
            <li><input id="username" placeholder="username" type="text" /></li>
            <li><input id="password" placeholder="password" type="password" /></li>
            <li><button id="signinButton">Sign In</button></li>
          </ul>
        </form>
      </div>
    );
  }
});

module.exports = Login;
