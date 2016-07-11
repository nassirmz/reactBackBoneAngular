var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Login = require('Login');
var TodoApp = require('TodoApp');
var Main = require('Main');
var Register = require('Register');

require('styles');

ReactDOM.render(
  // <Provider>
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <Route path="todos" component={TodoApp}/>
        <IndexRoute component={Login}/>
        <Route path="signup" component={Register}/>
      </Route>
    </Router>,
  // </Provider>,
  document.getElementById('app')
);
