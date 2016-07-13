var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var Todo = React.createClass({
  updateTask (e) {
    e.preventDefault();
    var {onUpdateTask, id} = this.props;
    var listElem = ReactDOM.findDOMNode(this);
    var editButton = $(listElem).find('.edit');
    if(listElem.className === 'edit-mode') {
      var {task} = this.state;
      if(task.length > 0) {
        onUpdateTask(id, task);
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
    var {task, completed, id, onToggle, onDeleteTodo} = this.props;

    return (
      <li>
        <input type="checkbox" checked={completed} onClick={ () => {
            onToggle(id, completed);
          }}/>
        <label>{task}</label>
        <input type="text" className="edit-task" value={this.state.task} ref='editTask' onChange={this.editTask}/>
        <button className="edit" onClick={this.updateTask}>Edit</button>
        <button className="delete" onClick={ () => {
            onDeleteTodo(id)
          }}>Delete</button>
      </li>
    );
  }
});

module.exports = Todo;
