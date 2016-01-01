var React = require('react');
require('./home.css');

var Home = React.createClass({
  render: function() {
      console.log('\"home\" component is rendering');
      return (
            <div className="home">Home, yo</div>
          );
    }
});

module.exports = Home;

