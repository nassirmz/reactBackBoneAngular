var React = require('react');


var AddTodo = React.createClass({
  addTodo (e) {
    e.preventDefault;
    var task = this.refs.newTask.value;
    if(task.length > 0) {
      this.refs.newTask.value = '';
      this.props.onAddTodo(task);
    }
  },
  render () {
    return (
        <div>
          <h3>ADD ITEM</h3>
          <input id="new-task" className="new-task" type="text" ref="newTask"/>
          <button className="add" onClick={this.addTodo}>Add</button>
        </div>
    );
  }
});

module.exports = AddTodo;
