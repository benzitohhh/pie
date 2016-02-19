var d3             = require('d3'),
    c3             = require('c3'),
    React          = require('react'),
    ReactDOM       = require('react-dom'),
    ChartComponent = require('./ChartComponent')
;

var MAX_CHARS = 27;
var WIDTH     = 200;

var PieChartC3 = React.createClass({

  shouldComponentUpdate: function(nextProps) {
      // if(this.props.data.columns.length
      //     !== nextProps.data.columns.length) { // shallow check
      //     return true;
      // } else if(JSON.stringify(this.props.data.columns)
      //         !== JSON.stringify(nextProps.data.columns)) { // deeper check
      //     return  true;
      // }
    // return false;
    return true; // TODO: do we need this?
  },

  componentDidMount: function() {
    this._generateChart();
  },

  componentDidUpdate: function(prevProps) {
      // if(prevProps.data.columns !== this.props.data.columns) {
      //     this._generateChart();
      // }
    this._generateChart(); // TODO: do we need this?
  },

  componentWillUnmount: function() {
      this._destroyChart();
  },

  _generateChart: function() {
    var values            = this.props.values,
        dims              = this.props.dims,
        value_description = this.props.value_description,
        dims_descriptions = this.props.dims_descriptions,
        colour_scheme     = this.props.colour_scheme
    ;

    var container = this.refs.container;

    var items = dims[0];

    var name_items = dims[0];

    var total = d3.sum(values);

    var c3_rows = [
      values.map(function(d, i) { return i; }), // array of idxs
      values                                    // array of values
    ];
    
    function get_color_for_c3(_, name) {
      return colour_scheme(name); // assume name is the element idx
    }

    var options = {
      bindto: container,
      data: {
        color: get_color_for_c3,
        rows: c3_rows,
        type : 'donut'
      },
      legend: {
        position: 'right'
      },
      donut: {
        title: total + " families",
        label: {
          //// pie slice label: default is ratio, formatted as percentage
          // format: function(value, ratio, id) {
          //   return ratio;
          // }
        }
      },
      tooltip: {
        format: {
          name: function(name, ratio, id, index) {
            return name_items[index].name;
          },
          value: function (val, ratio, id) {
            // var pc = d3.format('.1%')(ratio); 
            // return val + " families (" + pc + ")"; // long strings look ugly
            return val;
          }
        }
      },
      onrendered: function() {
        // workaround to format legend items (can be removed when we have custom legends)
        d3.select(container)
          .selectAll('.c3-legend-item text')
          .text(function(d, i) {
            var name = name_items[i].short_name;
            if (name.length >= MAX_CHARS) {
              name = name.slice(0, MAX_CHARS - 3) + "...";
            }
            var value = values[i];
            return name + " (" + value + ")";
          })
        ;
        // workaround to make legend items wider and clickable (can be removed when we have custom legends)
        d3.select(container)
          .selectAll('.c3-legend-item-event')
          .attr('width', WIDTH)
        ;
      }
    };  

    this.chart = c3.generate(options);
  },

  _destroyChart: function() {
      this.chart.destroy();
  },

  
  render: function() {
    return (
        <div ref={'container'} /> 
    );
  }
});

module.exports = PieChartC3;

