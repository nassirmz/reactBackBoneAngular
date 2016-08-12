var authStateDefault = {
  isAuthenticated: false,
  errorLoginMessage: '',
  errorRegisterMessage: '',
  username: ''
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
    case 'UPDATE_TODO':
      return state.map((todo) => {
        console.log(state);
        if(todo.id === action.todo.id)
          return action.todo;
        return todo;
      });
    case 'DELETE_TODO':
      return state.filter((todo) => {
        todo.id !== action.id;
      });
    default:
      return state;
  }
};

export var authReducer = (state = authStateDefault, action) => {
  switch (action.type) {
    case 'AUTH_SUCCESS':
      return {
        ...state,
        ...action.auth
      };
    case 'AUTH_LOGIN_ERROR':
      return {
        ...state,
        ...action.auth
      };
    case 'AUTH_REGISTER_ERROR':
      return {
        ...state,
        ...action.auth
      }
    case 'LOGOUT':
      return {
        ...state,
        ...action.auth
      }
    default:
      return state;
  }
};
