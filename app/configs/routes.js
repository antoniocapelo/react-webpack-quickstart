'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var DefaultRoute = ReactRouter.DefaultRoute;
var Route = ReactRouter.Route;
var NotFoundRoute = ReactRouter.NotFoundRoute;
var Redirect = ReactRouter.Redirect;
var Router = ReactRouter.Router;
var IndexRoute = ReactRouter.IndexRoute;

var App = require('../components/appComponent/app.js');
var Home = require('../components/homeComponent/home.js');
var About = require('../components/aboutComponent/about.js');
var NotFound = require('../components/notFoundComponent/notFound.js');
// es2015 component needs to be imported instead of required (not a commonJS module but a ES6 class)
import ES2015 from '../components/es2015Component/component.js';

var routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="about" component={About} />
        <Route path="es2015" component={ES2015} />
        <Redirect from="about-alias" to="about"/>
        <Route path="*" component={NotFound}/>
    </Route>
);

module.exports = routes;
