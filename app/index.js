var React = require('react');

var ReactDOM = require('react-dom');
var render = ReactDOM.render;
var ReactRouter = require('react-router');
var DefaultRoute = ReactRouter.DefaultRoute;
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var exampleModule = require('./modules/exampleModule');
var App = require('./components/appComponent/app');
var Home = require('./components/homeComponent/home');
var About = require('./components/aboutComponent/about');
import Es2015Component from './components/es2015Component/component';

main();

function main() {
    exampleModule.fn('yo')
}

// create app render point
const app = document.createElement('div');
document.body.appendChild(app);

// init browser history
var createBrowserHistory = require('history/lib/createBrowserHistory')
const history = createBrowserHistory()

// Routing
var routes = (
  <Router history={history}>
    <Route component={App}>
        <Route path="about" component={About} />
        <Route path="/home" component={Home} />
        <Route path="/es2015" component={Es2015Component} />
        <Route path="/" component={Home} />
    </Route>
  </Router>
);

render(routes, app)
