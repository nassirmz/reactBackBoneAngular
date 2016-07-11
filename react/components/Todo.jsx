var React = require('react');

var Todo = React.createClass({
  render () {
    var {task, completed, id, onToggle} = this.props;
    return (
      <li>
        <input type="checkbox" checked={completed} onClick={ () => {
            onToggle(id);
          }}/>
        <label>{task}</label>
        <input type="text"/>
        <button className="edit">Edit</button>
        <button className="Delete">Delete</button>
      </li>
    );
  }
});

module.exports = Todo;
