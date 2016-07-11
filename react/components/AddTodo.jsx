var React = require('react');


var AddTodo = React.createClass({
  render () {
    return (
        <div>
          <h3>ADD ITEM</h3>
          <input id="new-task" className="new-task" type="text"/>
          <button className="add">Add</button>
        </div>
    );
  }
});

module.exports = AddTodo;
