var React = require('react');
var auth = require('auth');
var {hashHistory} = require('react-router');

var styles = {
  error: {
    color: '#FF0000',
    marginTop: '15px'
  }
};

var Register = React.createClass({
  getInitialState () {
    return {
      error: false,
      errorMsg: ''
    };
  },
  onSubmitRegister (e) {
    e.preventDefault();
    var username = this.refs.username.value;
    var password = this.refs.password.value;
    if(username.length > 0 && password.length > 0) {
      auth.register(username, password, (loggedIn) => {
        if (loggedIn) {
          hashHistory.push('/todos');
        } else if (!loggedIn){
          this.refs.username.value = '';
          this.refs.password.value = '';
          this.refs.username.focus();
          return this.setState({error: true, errorMsg: 'Username is unavailabel'});
        }
      })
    }
    else {
      this.refs.username.focus();
      return this.setState({error: true, errorMsg: 'username/password is required'});
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
          {this.state.error && (<p style={styles.error}>{this.state.errorMsg}!<br/>Please try again!</p>)}
        </form>
    );
  }
});

module.exports = Register;
