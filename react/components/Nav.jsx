var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
  return (
    <div className="header">
      <h1>TODO LIST</h1>
      <ul className="nav">
        <li><Link to="/signup">Create Account</Link></li>
        <li><IndexLink to="/" href="#signin">Sign In</IndexLink></li>
      </ul>
      <div className="clear"></div>
    </div>
  );
}

module.exports = Nav;
