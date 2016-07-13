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
    })
  },
  handleToggle (id, completed) {
    var {todos} = this.state;
    axios.put(`/todos/${id}`, {completed: !completed}, { headers: {'Auth': localStorage.getItem('Auth')}})
    .then((resp) => {
      var newTodos = todos.map((todo) => {
        if (todo.id === id) {
          return resp.data;
        }
        return todo;
      });
      this.setState({ todos: newTodos});
    })
    .catch((error) => {
    })
  },
  handleUpdateTask (id, newTask) {
    var {todos} = this.state;
    axios.put(`/todos/${id}`, {task: newTask}, { headers: {'Auth': localStorage.getItem('Auth')}})
    .then((resp) => {
      var newTodos = todos.map((todo) => {
        if (todo.id === id) {
          return resp.data;
        }
        return todo;
      });
      this.setState({ todos: newTodos});
    })
    .catch((error) => {
    })
  },
  handleDeleteTodo (id) {
    var {todos} = this.state;
    axios.delete(`/todos/${id}`, { headers: {'Auth': localStorage.getItem('Auth')}})
    .then((resp) => {
      var newTodos = todos.filter((todo) => {
        return todo.id !== id;
      });
      this.setState({ todos: newTodos});
    })
    .catch((error) => {
    })
  },
  render: function () {
    var {todos} = this.state;
    var renderWhenTodos = () => {
      return (
        <Todos todos={todos} onToggle={this.handleToggle} onDeleteTodo={this.handleDeleteTodo} onUpdateTask={this.handleUpdateTask}/>
      )
    }
    return (
      <div>
        <AddTodo onAddTodo={this.handleAddTodo}/>
          {!todos.length ? (<p>No todos yet!<br/>Please add your todos!</p>) : renderWhenTodos()}
      </div>
    );
  }
});

module.exports = TodoApp;
