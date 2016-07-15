var React = require('react');

var {hashHistory} = require('react-router');
var {connect} = require('react-redux');
var actions = require('actions');

var styles = {
  error: {
    color: '#FF0000',
    marginTop: '15px'
  }
};

var Register = React.createClass({
  onSubmitRegister (e) {
    var {dispatch} = this.props;
    e.preventDefault();
    var username = this.refs.username.value;
    var password = this.refs.password.value;
    if(username.length > 0 && password.length > 0) {
      dispatch(actions.startRegisterUser(username, password));
    }
    else {
      this.refs.username.focus();
      dispatch(actions.authError('Username/Password required!'));
    }
  },
  render() {
    return (
        <form>
          <ul>
            <li><input id="username" placeholder="username" type="text" ref="username" /></li>
            <li><input id="password" placeholder="password" ref="password" type="password" /></li>
            <li><button id="signupButton" onClick={this.onSubmitRegister}>Create Free Account</button></li>
          </ul>
          {this.props.auth.errorMessage && (<p style={styles.error}>{this.props.auth.errorMessage}!<br/>Please try again!</p>)}
        </form>
    );
  }
});

module.exports = connect((state) => {
  return {  auth: state.auth };
})(Register);
