var React = require('react');
var {connect} = require('react-redux');

var auth = require('auth');
var {hashHistory} = require('react-router');
var actions = require('actions');

var styles = {
  error: {
    color: '#FF0000',
    marginTop: '15px'
  }
};

var Login = React.createClass({

  //handle login click events
  onSubmitLogin(e) {
    var {dispatch} = this.props;
    e.preventDefault();
    var username = this.refs.username.value;
    var password = this.refs.password.value;
    if(username.length > 0 && password.length > 0) {
      dispatch(actions.startLoginUser(username, password));
    }
    else {
      //focus on username input before sending a request if user doesn't type anyting
      this.refs.username.focus();
      dispatch(actions.authLoginError('Username/Password required!'));
    }
  },
  render() {
    
    //render the login component on the page
    return (
        <form>
          <ul>
            <li><input id="username" placeholder="username" type="text" ref="username" /></li>
            <li><input id="password" placeholder="password" type="password" ref="password"/></li>
            <li><button id="signinButton" onClick={this.onSubmitLogin}>Sign In</button></li>
          </ul>
          {this.props.auth.errorLoginMessage && (<p style={styles.error}>{this.props.auth.errorLoginMessage}!<br/>Please try again!</p>)}
        </form>
    );
  }
});

module.exports = connect((state) => {
  return {  auth: state.auth };
})(Login);
