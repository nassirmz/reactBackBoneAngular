var React = require('react');


var AddTodo = React.createClass({
  addTodo (e) {
    e.preventDefault;
    var elem = this.refs.newTask;
    if(elem.value.length > 0) {
      this.props.onAddTodo(elem.value);
      elem.value = '';
    }
    else {
      elem.focus();
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
