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

main();

function main() {
    exampleModule.fn('yo')
}

//var routes = (
  //<Route name="app" path="/" handler={App}>
    //<DefaultRoute name="home" handler={Home} />
  //</Route>
//);

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="about" handler={About} />
    <DefaultRoute name="home" handler={Home} />
  </Route>
);

//Router.run(routes, Router.HistoryLocation, function(Handler) {
  //React.render(<Handler/>, document.body);
//});

const app = document.createElement('div');
document.body.appendChild(app);

var createBrowserHistory = require('history/lib/createBrowserHistory')

const history = createBrowserHistory()


render((
  <Router history={history}>
    <Route path="/" component={App}>
    <Route path="about" component={About} />
    <Route path="/home" component={Home} />
    </Route>
  </Router>
), app)
