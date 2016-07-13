var React = require('react');
var auth = require('auth');
var {hashHistory} = require('react-router');

var styles = {
  error: {
    color: '#FF0000',
    marginTop: '15px'
  }
};

var Login = React.createClass({
  getInitialState () {
    return {
      error: false
    };
  },
  onSubmitLogin(e) {
    e.preventDefault();
    var username = this.refs.username.value;
    var password = this.refs.password.value;
    if(username.length > 0 && password.length > 0) {
      auth.login(username, password, (loggedIn) => {
        if(loggedIn) {
          hashHistory.push('/todos');
        } else if(!loggedIn){
          this.refs.username.value = '';
          this.refs.password.value = '';
          this.refs.username.focus();
          return this.setState({error: true });
        }
      });
    }
  },
  render() {
    return (
        <form>
          <ul>
            <li><input id="username" placeholder="username" type="text" ref="username" /></li>
            <li><input id="password" placeholder="password" type="password" ref="password"/></li>
            <li><button id="signinButton" onClick={this.onSubmitLogin}>Sign In</button></li>
          </ul>
          {this.state.error && (<p style={styles.error}>Invalid Username or Password!<br/>Please try again!</p>)}
        </form>
    );
  }
});

module.exports = Login;
