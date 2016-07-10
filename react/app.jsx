var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Login = require('Login');
var TodoApp = require('TodoApp');

var helloReact = React.createClass({
  render: function () {
    return (
      <div>Hello World</div>
    );
  }
});

ReactDOM.render(
  <Provider>
    <Router history={hashHistory}>
      <Route path="/">
        <Route path="todos" component={TodoApp}/>
        <IndexRoute component={Login}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
