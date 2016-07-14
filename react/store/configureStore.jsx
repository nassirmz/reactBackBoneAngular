var redux = require('redux');
var thunk = require('redux-thunk').default;

var {todosReducer} = require('reducers');

export var configure = () => {
  var reducer = redux.combineReducers({
    todos: todosReducer
  });

  var store = redux.createStore(reducer, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
  return store;
};
