var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Login = require('Login');
var TodoApp = require('TodoApp');
var Main = require('Main');
var Register = require('Register');
var auth = require('auth');
var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
  console.log('New state', store.getState());
});

require('styles');

var requireLogin = (nextState, replace, next) => {
  if(!auth.isAuthenticated()) {
    replace('/');
  }
  next();
}

var redirectIfLoggedIn = (nextState, replace, next) => {
  if(auth.isAuthenticated()) {
    replace('/todos');
  }
  next();
}

ReactDOM.render(
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={Main}>
          <Route path="todos" component={TodoApp} onEnter={requireLogin}/>
          <IndexRoute component={Login} onEnter={redirectIfLoggedIn}/>
          <Route path="signup" component={Register}/>
        </Route>
      </Router>
    </Provider>,
  document.getElementById('app')
);
