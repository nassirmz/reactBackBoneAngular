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

export var updateTodo = (todo) => {
  return {
    type: 'UPDATE_TODO',
    todo
  };
};

export var deleteTodo = (id) => {
  return {
    type: 'DELETE_TODO',
    id
  };
};

export var startAddTodos = () => {
  var headers = { headers: { 'Auth': localStorage.getItem('Auth')}}
  return (dispatch, getState) => {
    axios.get('/todos', headers)
    .then((resp) => {
      var todos =  resp.data;
      dispatch(addTodos(todos));
    })
  };
};


export var startAddTodo = (task) => {
  var headers = { headers: { 'Auth': localStorage.getItem('Auth')}}
  return (dispatch, getState) => {
    axios.post('/todos', {task: task}, headers)
    .then((resp) => {
      var todo =  resp.data;
      dispatch(addTodo(todo));
    })
  };
};

export var startUpdateTodo = (id, changedTodo) => {
  var headers = { headers: { 'Auth': localStorage.getItem('Auth')}};
  return (dispatch, getState) => {
    axios.put(`/todos/${id}`, changedTodo, headers)
    .then((resp) => {
      var updatedTodo = resp.data;
      dispatch(updateTodo(updatedTodo));
    });
  };
};


export var startDeleteTodo = (id, changedTodo) => {
  var headers = { headers: { 'Auth': localStorage.getItem('Auth')}};
  return (dispatch, getState) => {
    axios.delete(`/todos/${id}`, headers)
    .then((resp) => {
      dispatch(deleteTodo(id));
    });
  };
};

// export var login = (auth) => {
//   return {
//     type: 'LOGIN',
//     auth
//   };
// };
//
// export var logout = () => {
//   return {
//     type: 'LOGOUT'
//   };
// };
//
// export var startRegister = (username, password) {
//   var user = {username, password};
//   axios.post('/users', user)
//   .then((resp) {
//
//   })
// }
