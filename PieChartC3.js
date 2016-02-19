var d3             = require('d3'),
    c3             = require('c3'),
    React          = require('react'),
    ReactDOM       = require('react-dom'),
    ChartComponent = require('./ChartComponent')
;

var MAX_CHARS = 27;
var WIDTH     = 200;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

var PieChartC3 = React.createClass({
  
  render: function() {
    var values            = this.props.values,
        dims              = this.props.dims,
        value_description = this.props.value_description,
        dims_descriptions = this.props.dims_descriptions,
        colour_scheme     = this.props.colour_scheme
    ;

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

    var temp_id = 'temp' + getRandomInt(100000000); // temporary hack to get a unique id...

    var options = {
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
        d3.select('#' + temp_id)
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
        d3.select('#' + temp_id)
          .selectAll('.c3-legend-item-event')
          .attr('width', WIDTH)
        ;
      }
    };    

    return (
        // TODO: remove data and type from ChartComponent (we'll pass in everything via options)
        <ChartComponent data={{}} type={'donut'} element={temp_id} options={options} />
    );
  }
});

module.exports = PieChartC3;

