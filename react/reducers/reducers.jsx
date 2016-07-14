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
  }
};
