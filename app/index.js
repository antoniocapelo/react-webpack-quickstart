var React = require('react');
var Router = require('react-router');
var {DefaultRoute, Route, Routes} = Router;
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

Router.run(routes, Router.HistoryLocation, function(Handler) {
  React.render(<Handler/>, document.body);
});
