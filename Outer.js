var React = require('react'),
    Inner = require('./Inner')
;

var Outer = React.createClass({

  set_elements: function(elements) {
    this.elements = elements;
  },

  // Then when doing downloadPng...
  // We can get relative offsets of each element
  // to the container (i.e. just get offsetLeft/offsetTop for each and also for the container)

  render: function() {
    return (
        <div>
          <Inner set_elements={this.set_elements} />
        </div>
    );
  }
});

module.exports = Outer;
