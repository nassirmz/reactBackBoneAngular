var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var {connect} = require('react-redux');

var actions = require('actions');

var Todo = React.createClass({
  updateTask (e) {
    e.preventDefault();
    var {dispatch, id} = this.props;
    var listElem = ReactDOM.findDOMNode(this);
    var editButton = $(listElem).find('.edit');
    if(listElem.className === 'edit-mode') {
      var {task} = this.state;
      if(task.length > 0) {
        dispatch(actions.startUpdateTodo(id, {task: task}));
      }
      editButton.text('Edit');
      listElem.className = '';
    } else {
      editButton.text('Save');
      listElem.className = 'edit-mode';
    }
  },
  getInitialState () {
    return {
      task: this.props.task
    };
  },
  editTask () {
    this.setState({
      task: this.refs.editTask.value
    });
  },
  render () {
    var {task, completed, id, dispatch} = this.props;

    return (
      <li>
        <input type="checkbox" checked={completed} onClick={ () => {
            dispatch(actions.startUpdateTodo(id, {completed: !completed}));
          }}/>
        <label>{task}</label>
        <input type="text" className="edit-task" value={this.state.task} ref='editTask' onChange={this.editTask}/>
        <button className="edit" onClick={this.updateTask}>Edit</button>
        <button className="delete" onClick={ () => {
            dispatch(actions.startDeleteTodo(id));
          }}>Delete</button>
      </li>
    );
  }
});

module.exports = connect()(Todo);
