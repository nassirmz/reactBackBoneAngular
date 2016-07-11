var React = require('react');


var AddTodo = React.createClass({
  render () {
    return (
        <p>
          <label for="new-task">Add Item</label>
          <input id="new-task" type="text"/>
          <button className="add">Add</button>
        </p>
    );
  }
});

module.exports = AddTodo;
