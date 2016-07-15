var authStateDefault = {
  isAuthenticated: false,
  errorMessage: ''
};

export var todosReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        action.todo
      ];
    case 'ADD_TODOS':
      return action.todos;
    default:
      return state;
    case 'UPDATE_TODO':
      return state.map((todo) => {
        if(todo.id === action.todo.id)
          return action.todo;
        return todo;
      });
    case 'DELETE_TODO':
      return state.filter((todo) => { todo.id !== action.id });
  }
};

export var authReducer = (state = authStateDefault, action) => {
  switch (action.type) {
    case 'AUTH_SUCCESS':
      return action.auth;
    case 'AUTH_ERROR':
      return action.auth;
    case 'LOGOUT':
      return action.auth;
    default:
      return state;
  };
};
