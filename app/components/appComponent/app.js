var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var Header = require('../common/header.js');

require('./app.css');

var App = React.createClass({
    render: function() {
        return (
            <div className="app">
            <Header />
            {this.props.children}
            </div>
        );
    }
});

module.exports = App;

