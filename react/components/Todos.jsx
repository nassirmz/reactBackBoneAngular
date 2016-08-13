var React = require('react');
var Todo = require('Todo');
var {connect} = require('react-redux');

var Todos = React.createClass({
  render () {
    var {todos} = this.props;
    var incompleteTodos = todos.filter((todo) => {
      return !todo.completed;
    });

    var completedTodos = todos.filter((todo) => {
      return todo.completed;
    });

    var renderIncompleteTodos = () => {
      return incompleteTodos.map((todo) => {
        return (
        <Todo {...todo} key={todo.id}/>
        );
      })
    };

    var renderCompletedTodos = () => {
      return completedTodos.map((todo) => {
        return (
        <Todo {...todo} key={todo.id}/>
        );
      })
    };
    return (
      <div>
        <h3>Todo</h3>
        <ul id="incompleted-tasks">
          {renderIncompleteTodos()}
        </ul>
        <h3>Completed</h3>
        <ul id="completed-tasks">
          {renderCompletedTodos()}
        </ul>
      </div>
    );
  }
});

module.exports = connect((state) => {
  return {
    todos: state.todos
  };
})(Todos);
