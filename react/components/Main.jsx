var React = require('react');
var ReactDOM = require('react-redux');
var Nav = require('Nav');
var Login = require('Login');
var Register = require('Register');

var Main = React.createClass({
  render () {
    return (
      <div className="main">
        <Nav/>
        <div className="container">
          <Login/>
        </div>
      </div>
    );
  }
});

module.exports = Main;
