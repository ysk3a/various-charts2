# testing Various Chart library #2 to use in Angular App. (WIP. sync readme with repo#1)

# todo: start from local then to codesandbox instead of current other way around so i can combine other repo into single one.

- zingchart
    - [x] grouping scale/multiple xaxis/hierarchy axis for none time series data.
        - bonus for more than 2 levels of xaxis.
        - https://www.zingchart.com/docs/tutorials/elements/scales#grouped-scales
    - [x] range slider with some sort of scaling of axes.
        - https://www.zingchart.com/docs/tutorials/features/zoom-scroll-preview#scrollbar
        - https://www.zingchart.com/docs/tutorials/features/zoom-scroll-preview#preview-chart
    - [x] mix chart types 
        - (see gallery for demos)
    - [?] performance with large data?
    - another e.g. but for a 'paginating(?)' like approach: https://www.zingchart.com/docs/chart-types/bar
    - but buggy(?) when combining multi xaxis & range slider:
        - the other xaxis does not move with scrollbar when scroll-x enabled
        - for this example, the year does not match with other high x-axis resulting in incorrect xaxis grouping. that is, when preview range slider is showing smallest range (i.e. 2 months), the quarter and year does not match between q3 and q1 and shows 2016 in q3 & q4 of 2015.
    - $5999/perpetual | $1999/yearly - $9999/perpetual | $3499/yearly

# todo:

- uplot (mit)
    - bugs:

- chartjs
    - https://stackoverflow.com/questions/46977049/chartjs-2-multi-level-hierarchical-category-axis-in-chartjs
        - use plugin for hierarchy: 
            - https://github.com/sgratzl/chartjs-plugin-hierarchical 
            - https://www.sgratzl.com/chartjs-plugin-hierarchical/examples/
            - but would need to double check if data would make sense here since it appears to require some aggr to show single B1 before expanding to B1.1 to B1.3
        - https://github.com/chartjs/Chart.js/issues/4946
        - ?works with large data set in combination of range slider, https://www.chartjs.org/docs/latest/axes/cartesian/category.html, hierarchy plugin?
    - range slider:
        - https://www.youtube.com/watch?v=-7tjXx0t2fU
        - https://github.com/chartjs/Chart.js/issues/5349 which should remain opened.
    - bugs:

- canvasjs 
    - $249 per seat | annual - $599 5 seats | annual - $999 unlimited seats | annual https://canvasjs.com/license/
    - $399 per seat | perpetual - $999 5 seats | perpetual - $1999 unlimited seats | perpetual
    - [ ] grouping scale/multiple xaxis/hierarchy axis for none time series data.
    - [ ] range slider with some sort of scaling of axes.
        - zoom, panning, scaling: https://canvasjs.com/angular-charts/chart-zoom-pan/
    - [ ] mix chart types
    - [?] performance with large data?
        - demo only shows single axis and line type https://canvasjs.com/javascript-charts/performance-demo-chart/
    - has mix chart type: https://canvasjs.com/angular-charts/combination-chart/
    - alternative approach depending on data: https://canvasjs.com/angular-charts/drilldown-chart/ or https://canvasjs.com/javascript-charts/sync-multiple-chart-tooltip/
    - has multi x-axis but seems barebones?
        - https://canvasjs.com/docs/charts/chart-options/axisx2/
        - https://canvasjs.com/docs/charts/chart-options/axisx/
        - possible to work around by supporting manipulated data to make it look like hierarchy axis?
    - main feature grouping axis not supported: 
        - https://canvasjs.com/forums/topic/grouping-x-axis-labels/
        - so less likely to use but have to check how it will perform with large data with zoom+pan when using the striplines workaround
    - bugs:

- lightingchart
    - No mix chart types?
        - potential work around is having multi chart with some syncing? 
            - https://lightningchart.com/js-charts/interactive-examples/examples/lcjs-example-0704-customCursorStackedY.html
            - if so, not ideal for small sized div/widget.
    - selling point is performance?
    - simple grouping axis but no multi grouping axis?

    - https://lightningchart.com/js-charts/interactive-examples/examples/lcjs-example-0302-groupedBars.html
    - https://lightningchart.com/js-charts/interactive-examples/examples/lcjs-example-0550-zoomBandChart.html
    - $2500 < For Startups with 1 developer and 1 project. Companies with less than 10 headcount or less than USD1M annual revenue
    - bugs:

and 1 project

- amcharts
    - appears to have large data set
    - appears to have range selector and axis category/multi axis.
    - need to test combining large data set + zoom&drag + categories
    - https://www.amcharts.com/demos/data-grouping-50k-points/
    - https://codepen.io/team/amcharts/pen/LYXzPvj
    - https://www.amcharts.com/docs/v5/tutorials/column-labels-as-categories/
    - https://www.amcharts.com/docs/v5/tutorials/range-selector-with-draggable-axis-range/
    - https://www.amcharts.com/docs/v5/tutorials/using-adapters-on-category-axis-labels/
    - https://github.com/amcharts/amcharts4/issues/1039
    - https://www.amcharts.com/docs/v4/concepts/axes/axis-ranges/
    - https://www.amcharts.com/docs/v4/tutorials/grouping-axis-labels-using-ranges/
    - $1200 - $2975
        - https://www.amcharts.com/amcharts-vs-fusioncharts-license-price-analysis/
        - go with amchart 5 or will 6 be a thing?
    - bugs:

- fusionchart
    - appears to have combined, scrolling but no axis scaling
        - https://www.fusioncharts.com/charts/combination-charts-single-y/same-axis-column-and-line-area-chart-with-scrolling?framework=angular4
        - https://www.fusioncharts.com/dev/chart-guide/standard-charts/scroll-charts
    - appears to have axis scaling in other examples, range slider, and group axis but not multi axis
        - https://www.fusioncharts.com/fusiontime/examples/grouped-column-chart?framework=angular4
        - appears to have some kind of grouping but shows only for yaxis and for line.
            - https://www.fusioncharts.com/dev/chart-guide/standard-charts/multi-axis-line-chart
    - large data but only for time series?
        - https://www.fusioncharts.com/fusiontime/examples/time-series-chart-with-a-million-data-points?framework=angular4
    - $439/Year - $1,899/Year - $3,399/Year
        - no option to for only charts
        - https://www.fusioncharts.com/blog/compare-fusioncharts-vs-highcharts-vs-amcharts-which-is-the-best-javascript-charting-library-2/
    - bugs:

- echarts ( https://github.com/apache/echarts Apache-2.0 license )
    - possible but not native support. similar to other paid libraries but require work around and work around is still buggy when adding range slider.
    - see other repo#1
    - bugs:

- d3 based billboardjs
    - https://naver.github.io/billboard.js/demo/#Axis.MultiAxes
    - https://naver.github.io/billboard.js/demo/#Interaction.SubChart
    - https://github.com/naver/billboard.js/issues/277
    - appears to have support for multi axis, and interaction but no axis scaling on zoom.
        - need to test combining multi axis with interaction.
        - see other repo#1
    - performance?

- dygraphs https://dygraphs.com/ (mit)
    - bugs:

- dvxcharts https://www.dvxcharts.com/Pricing
    - bugs:

- highchart
    - main feature not native support. uses third party plugin.
    - buggy in angular
    - https://stackoverflow.com/a/60605027
    - no range slider? only for stocks? https://www.highcharts.com/docs/stock/range-selector
    - maybe performant? lots of highchart forum pages but for stocks again.
    - need to push my angular prototype to remote to share.

- syncfusion? https://www.syncfusion.com/angular-components/angular-charts/chart-types
