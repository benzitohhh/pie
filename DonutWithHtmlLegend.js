var c3             = require('c3'),
    React          = require('react'),
    ReactDOM       = require('react-dom'),
    ChartComponent = require('./ChartComponent')
;

var DonutWithHtmlLegend = React.createClass({
  getInitialState: function() { return {}; },
  
  render: function() {
    var values            = this.props.values,
        dims              = this.props.dims,
        value_description = this.props.value_description,
        dims_descriptions = this.props.dims_descriptions,
        colour_scheme     = this.props.colour_scheme
    ;

    var items = dims[0];

    var c3_rows = [
      items.map(function(d, i) { return i; }), // array of idxs
      values                                   // array of values
    ];

    var legend_items = items.map(function(item, i) {
      var color = colour_scheme(i);
      return (
        <li key={i}>
          <div>
            <span className="circle-filled pull-left" style={{background: color }}/>
            <div>{item.short_name}</div>
          </div>
        </li>
      );
    });
    
    return (
      <div className="row">

        <div className="col-sm-7">
          add chart here
        </div>

        <div className="col-sm-5">
          <div>
            <ul className="list-group nav nav-pills nav-stacked">
              {legend_items}
            </ul>
          </div>
        </div>

      </div>
    );
  }
});

module.exports = DonutWithHtmlLegend;

