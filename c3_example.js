var d3              = require('d3'),
    c3              = require('c3'),
    React           = require('react'),
    ReactDOM        = require('react-dom'),
    ChartComponent  = require('./ChartComponent'),
    DonutWithLegend = require('./DonutWithHtmlLegend'),
    PieChartC3      = require('./PieChartC3')
;

var values = [475, 48, 37, 19, 9, 6, 4, 2, 2, 4, 2, 2, 70];
var dims = [[{"id":"k1","description":"sound, noise reduction, vehicle, audio system","members":[159977,193016,227624,242736,244835,263002,270856,340798,348184,353900,391042,449560,450845,572993,572994,585859,778541,821995,823318,846238,846239,864052,875295,901207,906138,1003518,1107157,1186468,1220161,1270235,1281221,1317642,1325702,1449144,1491672,1494440,1641500,1679383,1699385,1702632,1940745,1944178,1948761,1968201,1977892,1980143,2043237,2049829,2107851,2110495,2199096,2202772,2253950,2407372,2563860,2733661,2750137,2792818,2863034,2899282,2959615,3005461,3028165,3094204,3157063,3159123,3192536,3200956,3237827,3277382,3284449,3357238,3390048,3477745,3690527,3735591,3818883,3863392,3872308,4013745,4035691,4040026,4107586,4124281,4306412,4349069,4375452,4429788,4449376,4506797,4539507,4650735,4678501,4696972,4735925,4766888,4775226,4792204,4792207,4831920,4856984,5023913,5085952,5155109,5199636,5212178,5225818,5241634,5326011,5350083,5361280,5443626,5491986,5511540,5534951,5561403,5672017,5705450,5741636,5763497,5778410,5803982,5806871,5876047,5876048,6056223,6204132,6210510,6343946,6355424,6472248,6526089,6593887,6653728,6767031,6835811,6888616,6935716,7206353,7256334,7375085,7541978,7732337,7848074,7900571,7916006,8006981,8168423,8249757,8288324,8410654,8458516,8464432,8478125,8513920,8532748,8569147,8594795,8655739,8689277,8716400,8831868,8920324,9016839,9055305,9087481,9180801,9191084,9235921,9311952,9326342,9327304,9342176,9383484,9403981,9429905,9432284,9491770,9495906,9582816,9623468,9646196,9667258,9763889,9801091,9884742,10021868,10061623,10173314,10287883,10305995,10351071,10390840,10395015,10404416,10483339,10502146,10542566,10606616,10609684,10653465,10698842,10704604,10766783,10774726,10780321,10851514,10856200,10903436,10915682,10926380,10976201,10977094,11005636,11016020,11080992,11098382,11153154,11158141,11172530,11172972,11214310,11293727,11309795,11309797,11323276,11356146,11361519,11388322,11439655,11460940,11465887,11466865,11488735,11499410,11569370,11588516,11621470,11632964,11643384,11666844,11686842,11713740,11719155,11772810,11884547,11900200,11930831,11998827,12026252,12031586,12089235,12147276,12219289,12293869,12304244,12306150,12310390,12351509,12392880,12401727,12410941,12468795,12468801,12567995,12574497,12606684,12617963,12696233,12697979,12752927,12754235,12815263,12827390,12833765,12845498,12845904,12908618,13110626,13159484,13162983,13234323,13252244,13499253,13535517,13546290,13624392,13624394,13645021,13645023,13652010,13688942,14027241,14282480,14310707,14322984,14495377,14522760,14533520,14744813,14784705,14814669,14961196,14977906,15161974,15213503,15224306,15306082,15392385,15466849,15496437,15504255,15566339,15582052,15662558,15663961,15755425,15886486,15892541,15896461,16027491,16039531,16046251,16057223,16077559,16099099,16141817,16156449,16379757,16552849,16599453,16621231,16640447,16653357,16706648,16736614,16744224,16760129,16795173,16826582,16872605,16889445,17144353,17152080,17165308,17202483,17266406,17282083,17312768,17392274,17422804,17541181,17616370,17635546,17790263,17840672,17853938,17876666,17983128,18174675,18227971,18228722,18361108,18381843,18382751,18619958,18622479,18657401,18714866,18787405,18825873,18861867,18880233,18902267,18920521,19029294,19184567,19206695,19313320,19337407,19363719,19387258,19400302,19415243,19442996,19536725,19586848,19600471,19657291,19663844,19709302,19716696,19725663,19737424,19798821,19820456,19823209,19831664,19861521,19884575,19907390,19915785,19932367,19970932,19999774,20036220,20056141,20063826,20066381,20081871,20083713,20109092,20136321,20148184,20148698,20199865,20255422,20294891,20301980,20332236,20336361,20459163,20470922,20470926,20470927,20470928,20637248,20670392,20691816,20717514,20805974,20937058,20979319,20990890,21118332,21150310,21164691,21220599,21232291,21236289,21236290,21250786,21258417,21274510,21276064,21320534,21331382,21376358,21513192,21868040,21999246,22018798,22118118,22177743,22214763,22279100,22385133,22412888,22431055,22513742,22785167,22936586,22936591,22947286,22955598,23012872,23017316,23017318,23023434,23043308,23080105,23099835,23167076,23178355,23185374,23194817,23273846,23326618,23340974,23372928,23387431,23394255,23403481,23416810,23448173,23496926,23497300,23529871,23631255,23642740,23643455,23700672,23714064,23726753,23738539,23795359,23837646,23863032,23873061,23887629,23979163,23979451,24086883,24122553,24124228,24127398,24145616,24148316,24184006,24243084,24249268,24335873,24350507,24420604,24433168,24433898,24433903,24438322,24445039,24445943,24447501,24478506,24491812,24505273,24571899,24601802,24601805,24619176,24639116,24688075,24784499,24788677,24905496,24948564,25076712,25145041,25145061,25145204,25174002,25209161,25209164,25214509,25229430,25240391,25262074,25278457,25278462,25318781,25345772,25363722,25371444,25396544,25479832,25487764,25487765,25487767,25579140,25663278,25666615,25710712,25752537,25805941,25806237,25806238,25831988,25958706,25978245,26020365,26020425,26043651,26093370,26231229,26346847,26386334,26387962,26441864,26618877,26618880,26649971,26699695,26732730,26751117,26815267,26815272,29393273,29394556,29394557,29454369,29467290,29500710,29502734,29502735,29505071,29538670,29538678,29539120,29575199,29576918,29577577,29580436,29599569,29600384,29600398,29607327,29647179,29674789,29674791,29691823,29731976,29731980,29853181],"titles":[],"idx":0,"name":"sound, noise reduction, vehicle, audio system","short_name":"sound, noise reduction"},{"id":"k2","description":"actuator, seat, wheel, vehicle, suspension system","members":[174690,290450,552029,633326,671166,969326,1596896,2092356,2951811,4261364,7541033,8737022,9610825,9691574,10135155,10389093,10530072,10871344,11269251,11499074,11713385,11941646,12659428,12699672,15068491,15280618,15613401,15620383,15795393,16013906,16013907,16016896,16101252,16229380,16692957,16948126,17126231,17536062,17898139,18178272,18456099,18744426,18935986,18993252,19162222,20292366,21592487,22005656,22295558,22425283,22895816,22951941,22990706,23499070,23573783,23720342,24144924,24148604,24357134,24463781,24587739,24828583,24954571,25919288,26127140,29498952],"titles":[],"idx":1,"name":"actuator, seat, wheel, vehicle, suspension system","short_name":"actuator, seat, wheel"},{"id":"k3","description":"amplifier, amplification, control, voltage, power supply","members":[874022,1643561,1892727,3170312,3275947,3704766,3841525,3841527,4041959,4705508,7177640,7406379,7823115,8102600,8201873,9281656,10745858,11522082,11666767,12442820,12628427,12715960,15604868,17048774,18845453,19160937,19845212,20075081,20077985,20742348,20990888,21363232,22794202,23663743,23821034,23867002,23875956,24455699,24491626,24873791,25072949,25143747,25226806,25693165],"titles":[],"idx":2,"name":"amplifier, amplification, control, voltage, power supply","short_name":"amplifier, amplification, control"},{"id":"k4","description":"light, display, image, screen, projection system","members":[1726103,3089534,5869068,7211189,8360869,8562500,9019541,9442143,9541614,9914042,10029624,12226016,12365470,12806171,14377844,15056310,15376094,15609013,15794947,15845176,15978193,16405623,16640113,16755665,18981510,20447949,22580043,22613244,22779798,26039052],"titles":[],"idx":3,"name":"light, display, image, screen, projection system","short_name":"light, display, image"},{"id":"k5","description":"induction, cookware, outer wall, cooking system","members":[362649,1344471,3843397,3843399,4359117,5098129,5248351,5514403,11003383,19644301,19856677,23258527,25626485,25778493,26092511],"titles":[],"idx":4,"name":"induction, cookware, outer wall, cooking system","short_name":"induction, cookware, outer wall"},{"id":"k6","description":"fuel cell, cathode side, membrane electrode assembly","members":[838992,7841515,15526005,17470263,19939570,21390534,22809443],"titles":[],"idx":5,"name":"fuel cell, cathode side, membrane electrode assembly","short_name":"fuel cell, cathode side"},{"id":"k7","description":"linear motor, transverse ribs, longitudinal beam","members":[2968264,3621909,5684918,11024326,20733747,22801372,24444093],"titles":[],"idx":6,"name":"linear motor, transverse ribs, longitudinal beam","short_name":"linear motor, transverse ribs"},{"id":"k8","description":"antenna, ferrite bar, deliver tuning signal","members":[4414088,13956293,14086995,15288418,17202317],"titles":[],"idx":7,"name":"antenna, ferrite bar, deliver tuning signal","short_name":"antenna, ferrite bar"},{"id":"k9","description":"command code, programming method, home entertainment system","members":[11484669,17679431,17867801,20035902,21329447],"titles":[],"idx":8,"name":"command code, programming method, home entertainment system","short_name":"command code, programming method"},{"id":"k10","description":"internal combustion engine, longitudinal axis, coil conductor assembly","members":[8284166,8742324,15481812,15985483],"titles":[],"idx":9,"name":"internal combustion engine, longitudinal axis, coil conductor assembly","short_name":"internal combustion engine"},{"id":"k11","description":"air-adsorbing structure, material particles, loudspeaker system","members":[24121976,24445820,25579644],"titles":[],"idx":10,"name":"air-adsorbing structure, material particles, loudspeaker system","short_name":"air-adsorbing structure, material particles"},{"id":"k12","description":"fibrillated acrylic fibers, loudspeaker component","members":[1814490,11806784],"titles":[],"idx":11,"name":"fibrillated acrylic fibers, loudspeaker component","short_name":"fibrillated acrylic fibers"},{"id":"k13","idx":12,"name":"Other","short_name":"Other","is_other":true,"title":"\"Other\" refers to technologies not patented by Bose, but patented by Bose's comparables"}]];
var value_description = "Granted patent families";
var dims_descriptions = [
  {
    "id": "byCluster",
    "key": "cluster_id",
    "name": "Technology",
    "short_name": "Technology",
    "icon_class": "donut-icon"
  }
];

var name_items = dims[0];

var total = d3.sum(values);

var c3_rows = [
  values.map(function(d, i) { return i; }), // array of idxs
  values                                    // array of values
];

var DEFAULT_COLOURS = [
  "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf", "#1f77b4", "#ff7f0e", "#2ca02c", "#98df8a", "#ff9896", "#c5b0d5", "#c49c94", "#f7b6d2", "#c7c7c7", "#dbdb8d", "#9edae5", "#aec7e8", "#ffbb78"
];

function colour_scheme(idx) {
  return DEFAULT_COLOURS[idx % DEFAULT_COLOURS.length];
}

function get_color_for_c3(_, name) {
  return colour_scheme(name); // assume name is the element idx
}

var rows = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8],                    // ids (must be unique - so we use idx here)
  [120, 233, 367, 900, 632, 343, 442, 334, 556]   // values
];

var c3_donut = c3.generate({
  bindto: '#c3-chart-1',
  data: {
    rows: c3_rows,
    type : 'donut',
    color: get_color_for_c3
    // onmouseover: function(d) {
    //   //debugger; // exposes id, value, index etc...
    // }
  },
  legend: {
    position: 'right'
  },
  // legend: {
  //   position: 'inset'
  // },

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

    var MAX_CHARS = 27;
    var WIDTH = 200;
    
    // workaround to format legend items
    d3.select('#c3-chart-1')
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

    // workaround to make legend items wider and clickable
    d3.select('#c3-chart-1')
      .selectAll('.c3-legend-item-event')
      .attr('width', WIDTH)
    ;

  }
});


// How to edit legend content

// Approach 1: onrendered, edit the svg directly

// Approach 2: set legend content in data; set custom content for tooltip



var options = {
  legend: {
    position: 'right'
  },
  donut: {
    title: "1203 families"
  }
  // onrendered: function() {
  //   d3.select('#someId')
  //     .selectAll('.c3-legend-item text')
  //     .text(function(d, i) {
  //       return chartData.columns[i][0] + " (12)";
  //     })
  //   ;
  // }
};

ReactDOM.render(

  // <DonutWithLegend
  //   values={values}
  //   dims={dims}
  //   value_description={value_description}
  //   dims_descriptions={dims_descriptions}
  //   colour_scheme={colour_scheme}
  // />,

  <PieChartC3
    values={values}
    dims={dims}
    value_description={value_description}
    dims_descriptions={dims_descriptions}
    colour_scheme={colour_scheme}
  />,
  
  document.getElementById('react-container')
);
