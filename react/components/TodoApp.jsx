var React = require('react');
var ReactDOM = require('react-dom');
var axios = require('axios');

var AddTodo = require('AddTodo');
var Todos = require('Todos');

var TodoApp = React.createClass({
  getInitialState () {
    return {
      todos: []
    };
  },
  componentDidMount () {
    axios.get('/todos', { headers: { 'Auth': localStorage.getItem('Auth')}})
    .then((resp) => {
      this.setState({
        todos: resp.data
      });
    });
  },
  handleAddTodo (task) {
    var {todos} = this.state;
    var todo = {
      task
    };
    axios.post('/todos', todo, { headers: {'Auth': localStorage.getItem('Auth')}})
    .then((resp) => {
      this.setState({
        todos: [
          ...todos,
          resp.data
        ]
      })
    })
    .catch((error) => {
      console.log(error);
    })
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
