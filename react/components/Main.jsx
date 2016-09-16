var React = require('react');
var ReactDOM = require('react-redux');
var Nav = require('Nav');
var Login = require('Login');


var Main = React.createClass({
  render () {
    //render main component
    return (
      <div className="main">
        <Nav/>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = Main;
