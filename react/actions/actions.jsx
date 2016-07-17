var axios = require('axios');
var {hashHistory} = require('react-router');

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


export var startDeleteTodo = (id) => {
  var headers = { headers: { 'Auth': localStorage.getItem('Auth')}};
  return (dispatch, getState) => {
    axios.delete(`/todos/${id}`, headers)
    .then((resp) => {
      dispatch(deleteTodo(id));
    });
  };
};

export var handleAuth = (promise, cb) => {
  promise.then((resp) => {
    localStorage.setItem('Auth', resp.headers.auth);
    cb(true);
  });
};

export var authSuccess = (username) => {
  return {
    type: 'AUTH_SUCCESS',
    auth: {
      isAuthenticated: true,
      username
    }
  };
};

export var authError = (errorMessage) => {
  return {
    type: 'AUTH_ERROR',
    auth: {
      errorMessage
    }
  }
}

export var startRegisterUser = (username, password) => {
  return (dispatch, getState) => {
    axios.post('/users', {
      username: username,
      password: password
    })
    .then((resp)=> {
      console.log(resp.data);
      localStorage.setItem('Auth', resp.headers.auth);
      dispatch(authSuccess(resp.data.username));
      hashHistory.push('/todos');
    })
    .catch((e) => {
      console.log(e);
      dispatch(authError('Username is unavailable!'))
    });
  };
};

export var startLoginUser = (username, password) => {
  return (dispatch, getState) => {
    axios.post('/users/login', {
      username: username,
      password: password
    })
    .then((resp)=> {
      localStorage.setItem('Auth', resp.headers.auth);
      dispatch(authSuccess(resp.data.username));
      hashHistory.push('/todos');
    })
    .catch((e) => {
      console.log(e);
      dispatch(authError('Invalid login information!'))
    });
  };
};

export var logout = () => {
  return {
    type: 'LOGOUT',
    auth: { isAuthenticated: false }
  };
};

export var startLogout = () => {
  var headers = { headers: { Auth: localStorage.getItem('Auth')}};
  return (dispatch, getState) => {
    axios.delete('/users/logout', headers)
    .then((resp) => {
      localStorage.removeItem('Auth');
      dispatch(logout());
      hashHistory.push('/');
    })
  }
}
