var React = require('react');
var ReactDOM = require('react-dom');

var AddTodo = require('AddTodo');
var Todos = require('Todos');

var TodoApp = React.createClass({
  getInitialState () {
    return {
      todos: [
        {
          id: 1,
          task: 'Walk 30 min',
          completed: false
        },
        {
          id: 2,
          task: 'Workout',
          completed: true
        },
        {
          id: 3,
          task: 'Buy TV',
          completed: false
        }
      ]
    };
  },
  handleToggle (id) {
    var {todos} = this.state;
    var updatedTodos = todos.map((todo) => {
      if(todo.id ===id) {
        var newCompleted = !todo.completed;
        todo.completed = newCompleted;
      }
      return todo;
    });
    this.setState({
      todos: updatedTodos
    });
  },
  render: function () {
    var {todos} = this.state;
    return (
      <div>
        <AddTodo/>
        <Todos todos={todos} onToggle={this.handleToggle}/>
      </div>
    );
  }
});

module.exports = TodoApp;
