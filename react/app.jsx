var React = require('react');
var ReactDOM = require('react-dom');

var helloReact = React.createClass({
  render: function () {
    return (
      <div>Hello World</div>
    );
  }
});

ReactDOM.render(
  <helloReact/>,
  document.getElementById('app')
);
