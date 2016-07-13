var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Login = require('Login');
var TodoApp = require('TodoApp');
var Main = require('Main');
var Register = require('Register');
var auth = require('auth');

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
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <Route path="todos" component={TodoApp} onEnter={requireLogin}/>
        <IndexRoute component={Login} onEnter={redirectIfLoggedIn}/>
        <Route path="signup" component={Register}/>
      </Route>
    </Router>,
  document.getElementById('app')
);
