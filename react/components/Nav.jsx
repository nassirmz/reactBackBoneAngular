var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
  return (
    <div className="header">
      <h1>TODO LIST</h1>
      <div class="clear"></div>
      <ul className="nav">
        <li><Link to="/signup">Create Account</Link></li>
        <li><IndexLink to="/" href="#signin">Sign In</Link></li>
      </ul>
    </div>
  );
}

module.exports = Nav;
