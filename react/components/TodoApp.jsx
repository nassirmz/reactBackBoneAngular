var React = require('react');
var ReactDOM = require('react-dom');
var axios = require('axios');
var {connect} = require('react-redux');

var AddTodo = require('AddTodo');
var Todos = require('Todos');
var actions = require('actions');

var TodoApp = React.createClass({
  componentDidMount () {
    var {dispatch} = this.props;
    dispatch(actions.startAddTodos());
  },
  render: function () {
    var {todos} = this.props;
    return (
      <div>
        <AddTodo/>
        {todos.length ? (<Todos/>) : (<p>No todos yet!<br/>Please add Todos!</p>)}
      </div>
    );
  }
});

module.exports = connect((state) => {
  return {
    todos: state.todos
  }
})(TodoApp);
