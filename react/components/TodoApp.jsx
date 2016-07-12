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
  handleAddTodo (task) {
    var todos = this.state.todos;
    var todo = {
      id: todos.length + 1,
      task,
      completed: false
    }
    this.setState ({
      todos: [...this.state.todos, todo]
    });
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
  handleUpdateTask (id, newTask) {
    var {todos} = this.state;
    var newTodos = todos.map((todo) => {
      if(todo.id === id) {
        todo.task = newTask;
      }
      return todo;
    })
    this.setState({
      todos: newTodos
    });
  },
  handleDeleteTodo (id) {
    var newTodos = this.state.todos.filter((todo) => {
      if(todo.id === id) {
        return false;
      }
      return true;
    });
    this.setState({
      todos: newTodos
    });
  },
  render: function () {
    var {todos} = this.state;
    return (
      <div>
        <AddTodo onAddTodo={this.handleAddTodo}/>
        <Todos todos={todos} onToggle={this.handleToggle} onDeleteTodo={this.handleDeleteTodo} onUpdateTask={this.handleUpdateTask}/>
      </div>
    );
  }
});

module.exports = TodoApp;
