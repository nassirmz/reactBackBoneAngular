var axios = require('axios');

export var addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo
  };
};

export var addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos
  };
};

export var startAddTodos = () => {
  var headers = { headers: { 'Auth': localStorage.getItem('Auth')}}
  return (dispatch, getState) => {
    axios.get('/todos', headers)
    .then((resp) {
      var todos =  resp.data;
      dispatch(addTodos(todos));
    })
  };
};


export var startAddTodo = (task) => {
  var headers = { headers: { 'Auth': localStorage.getItem('Auth')}}
  return (dispatch, getState) => {
    axios.post('/todos', {task: task}, headers)
    .then((resp) {
      var todo =  resp.data;
      dispatch(addTodo(todo));
    })
  };
};
