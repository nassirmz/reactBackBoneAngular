var axios = require('axios');
var {hashHistory} = require('react-router');

//Action creator for adding Todo
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

//action creator for updating todo
export var updateTodo = (todo) => {
  return {
    type: 'UPDATE_TODO',
    todo
  };
};

//action creator for deleting todo
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

//Action creator for handling Authentication
export var handleAuth = (promise, cb) => {
  promise.then((resp) => {
    localStorage.setItem('Auth', resp.headers.auth);
    cb(true);
  });
};

//Action creator for  login/Register success
export var authSuccess = (username) => {
  return {
    type: 'AUTH_SUCCESS',
    auth: {
      isAuthenticated: true,
      username
    }
  };
};

//Action creator for login error
export var authLoginError = (errorLoginMessage) => {
  return {
    type: 'AUTH_LOGIN_ERROR',
    auth: {
      errorLoginMessage
    }
  }
}

//Action creator for Registration error
export var authRegisterError = (errorRegisterMessage) => {
  return {
    type: 'AUTH_REGISTER_ERROR',
    auth: {
      errorRegisterMessage
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
      dispatch(authRegisterError('Username is unavailable!'))
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
      dispatch(authLoginError('Invalid login information!'))
    });
  };
};

//Action creator for logging out
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
