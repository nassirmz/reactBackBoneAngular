var redux = require('redux');
var thunk = require('redux-thunk').default;

var {todosReducer, authReducer} = require('reducers');

//combine reducers and export
export var configure = () => {
  var reducer = redux.combineReducers({
    todos: todosReducer,
    auth: authReducer
  });

  var store = redux.createStore(reducer, redux.compose(
    //apply Thunk middleware
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
  return store;
};
