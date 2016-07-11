var React = require('react');
var Todo = require('Todo');

var Todos = React.createClass({
  render () {
    var {todos, onToggle} = this.props;
    var incompleteTodos = todos.filter((todo) => {
      return !todo.completed;
    });

    var completedTodos = todos.filter((todo) => {
      return todo.completed;
    });

    var renderIncompleteTodos = () => {
      return incompleteTodos.map((todo) => {
        return (
        <Todo {...todo} key={todo.id} onToggle={onToggle}/>
        );
      })
    };

    var renderCompletedTodos = () => {
      return completedTodos.map((todo) => {
        return (
        <Todo {...todo} key={todo.id} onToggle={onToggle}/>
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

module.exports = Todos;
