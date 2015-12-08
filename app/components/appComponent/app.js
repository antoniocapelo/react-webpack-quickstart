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
                    </ul>
                </header>
                <Es2015Component />
            </div>
        );
    }
});

module.exports = App;
