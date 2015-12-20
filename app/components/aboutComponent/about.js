var React = require('react');
var Radium = require('radium');
var aboutStyles = require('./about-styles.js');


var About = React.createClass({
  render: function() {
      console.log('\"about\" component is rendering');
      return (
            <div style={aboutStyles.base}>
            <p>About</p>
            <p>these styles are inline, set by <a href="https://github.com/FormidableLabs/radium" target="_blank">Radium</a></p>
            </div>
          );
    }
});

module.exports = Radium(About);


