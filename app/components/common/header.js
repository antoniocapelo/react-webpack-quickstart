var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var IndexLink = Router.IndexLink;

var Header = React.createClass({
  render: function() {
    return (
        <header>
            <ul>
                <li><IndexLink to="" activeClassName="active">Home</IndexLink></li>
                <li><Link to={`/about`} activeClassName="active">About</Link></li>
                <li><Link to={`/es2015`} activeClassName="active">ES2015 Module</Link></li>
            </ul>
        </header>
    );
  }

});

module.exports = Header;
