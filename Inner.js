var React = require('react');

var Inner = React.createClass({

  componentDidMount: function() {
    var h1 = this.refs.h1;
    var p = this.refs.p;
    this.props.set_elements([h1, p]);
  },

  render: function() {
    return (
      <div>
        <h1 ref={'h1'}>Hello it's a h1</h1>
        <p ref={'p'}>Hello it's a paragraph</p>
      </div>
    );
  }
});

module.exports = Inner;
