var React = require('react');
var ReactDOM = require('react-dom');

var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
  render: function () {
    return (
      <AddTodo/>
    );
  }
});

module.exports = TodoApp;
