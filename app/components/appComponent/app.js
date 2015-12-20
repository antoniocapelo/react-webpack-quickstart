var React = require('react');
var {Link, RouteHandler} = require('react-router');
import Es2015Component from '../es2015Component/component';

require('./app.css');

var App = React.createClass({
    render: function() {
        return (
            <div className="app">
                <header>
                    <ul>
                        <li><Link to={`/home`}>Home</Link></li>
                        <li><Link to={`/about`}>About</Link></li>
                        <li><Link to={`/es2015`}>ES2015 Module</Link></li>
                    </ul>
                </header>
                {/* rendering child compontents for the current route */}
                {this.props.children}
            </div>
        );
    }
});

module.exports = App;
