var React = require('react');
var ReactDOM = require('react-dom');
var render = ReactDOM.render;
var ReactRouter = require('react-router');
var DefaultRoute = ReactRouter.DefaultRoute;
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

// require routes module
var routes = require('./configs/routes');

// create app render point
const app = document.createElement('div');
document.body.appendChild(app);

// init browser history
var createBrowserHistory = require('history/lib/createBrowserHistory')
const history = createBrowserHistory()

// Start render with react-router
render(<Router routes={routes} history={history} />, app)
