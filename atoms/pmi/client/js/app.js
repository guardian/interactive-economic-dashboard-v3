// if you want to import a module from shared/js then you can
// just do e.g. import Scatter from "shared/js/scatter.js"
import * as d3request from "d3-request";
import drawlinechart from 'shared/js/drawlinechart'

import config from "./../../../../config.json";

var dataurl = config.docDataUrl;

d3request.json(dataurl, function(d) {
    console.log(d)
    var alldata = d.sheets;

    //MEMO re arguments
    //data, selector, ticks, zeroy, interval, destination, chartType, numberOfDataSeries
    // ie: 'sheet', target div, number of ticks, set Y axis to zero?, timescale, target div again without the dot, type of chart, number of values, name of columns)

    drawlinechart(alldata.pmiRics, ".pmi", 5, false, "month", "pmi", "line", 4, [
        "China",
        "US",
        "Eurozone",
        "UK"
    ]);
    // drawlinechart(
    //   alldata.transport,
    //   ".transport",
    //   2,
    //   true,
    //   "day",
    //   "transport",
    //   "line",
    //   2,
    //   ["driving", "transit"]
    // );
    // drawlinechart(
    //   alldata.gdp,
    //   ".gdp",
    //   2,
    //   false,
    //   "month",
    //   "gdp",
    //   "line",
    //   1,
    //   ["value"]
    // );
});