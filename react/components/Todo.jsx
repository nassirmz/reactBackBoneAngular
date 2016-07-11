var React = require('react');

var Todo = React.createClass({
  render () {
    return (
      <li>
        <input type="checkbox" />
        <label></label>
        <input type="text"/>
        <button class="edit">Edit</button>
        <button class="Delete">Delete</button>
      </li>
    );
  }
});

module.exports = Todo;
