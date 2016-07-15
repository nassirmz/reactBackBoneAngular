var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

var AddTodo = React.createClass({
  addTodo (e) {
    e.preventDefault;
    var elem = this.refs.newTask;
    var {dispatch} = this.props;
    if(elem.value.length > 0) {
      dispatch(actions.startAddTodo(elem.value));
      elem.value = '';
    }
    else {
      elem.focus();
    }
  },
  render () {
    return (
        <div>
          <h3>ADD TODO</h3>
          <input id="new-task" className="new-task" type="text" ref="newTask"/>
          <button className="add" onClick={this.addTodo}>Add</button>
        </div>
    );
  }
});

module.exports = connect()(AddTodo);
