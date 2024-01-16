import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello JavaScript!</h1>
`;

var myConfig = {
  graphset: [
    {
      globals: {
        fontFamily: "Lucida Sans Unicode",
      },
      type: "vbar",
      plotarea: {
        adjustLayout: true,
        margin: "dynamic",
        // marginBottomOffset: 100, // or '10px', '10%'
      },
      preview: {
        adjustLayout: true,
      },
      "scroll-x": {},
      "scroll-y": {},
      scaleX: {
        zooming: true,
        values: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        item: {
          offsetY: -5,
          angle: 270,
        },
        tick: {
          size: 10,
        },
      },
      scaleX2: {
        zooming: true,
        values: ["Q1", "Q2", "Q3", "Q4", "Q1", "Q2", "Q3", "Q4"],
        placement: "default",
        tick: {
          size: 58,
          placement: "cross",
        },
        itemsOverlap: true,
        item: {
          offsetY: -55,
        },
      },
      scaleX3: {
        zooming: true,

        values: ["2015", "2016"],
        placement: "default",
        tick: {
          size: 20,
        },
        item: {
          offsetY: -15,
        },
      },
      plot: {
        barsSpaceLeft: 0.15,
        barsSpaceRight: 0.15,
      },
      tooltip: {
        visible: true,
      },
      crosshairX: {
        lineWidth: "100%",
        alpha: 0.4,
      },
      series: [
        {
          values: [
            95, 95, 86, 71, 84, 96, 103, 95, 105, 75, 92, 84, 95, 95, 86, 71,
            84, 96, 103, 95, 105, 75, 92, 84,
          ],
          text: "Dell",
        },
        {
          values: [
            69, 68, 54, 48, 70, 74, 98, 70, 72, 68, 49, 69, 69, 68, 54, 48, 70,
            74, 98, 70, 72, 68, 49, 69,
          ],
          text: "Apple",
        },
        {
          values: [
            51, 53, 47, 60, 48, 52, 75, 52, 55, 47, 60, 48, 51, 53, 47, 60, 48,
            52, 75, 52, 55, 47, 60, 48,
          ],
          text: "Microsoft",
        },
        {
          values: [
            42, 43, 30, 40, 31, 48, 55, 46, 48, 32, 38, 38, 42, 43, 30, 40, 31,
            48, 55, 46, 48, 32, 38, 38,
          ],
          text: "Oracle",
        },
      ],
    },
  ],
};

zingchart.render({
  id: "myChart",
  data: myConfig,
  height: "100%",
  width: "100%",
});
// zingchart #2: testing out mixing chart types
var myConfig2 = {
  graphset: [
    {
      globals: {
        fontFamily: "Lucida Sans Unicode",
      },
      // type: "vbar",
      type: "mixed",
      plotarea: {
        adjustLayout: true,
        margin: "dynamic",
        // marginBottomOffset: 100, // or '10px', '10%'
      },
      preview: {
        adjustLayout: true,
      },
      "scroll-x": {},
      "scroll-y": {},
      scaleX: {
        zooming: true,
        values: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        item: {
          offsetY: -5,
          angle: 270,
        },
        tick: {
          size: 10,
        },
      },
      scaleX2: {
        zooming: true,
        values: ["Q1", "Q2", "Q3", "Q4", "Q1", "Q2", "Q3", "Q4"],
        placement: "default",
        tick: {
          size: 58,
          placement: "cross",
        },
        itemsOverlap: true,
        item: {
          offsetY: -55,
        },
      },
      scaleX3: {
        zooming: true,

        values: ["2015", "2016"],
        placement: "default",
        tick: {
          size: 20,
        },
        item: {
          offsetY: -15,
        },
      },
      scaleY: {
        // label: {
        //   text: 'Remaining effort (hours)',
        //   fontSize: '14px',
        // },
        // guide: {
        //   // dashed lines
        //   visible: false,
        // },
      },
      scaleY2: {
        minValue: 0,
        maxValue: 100,
        step: 25, // can define scale step values or default
        label: {
          text: "Remaing and completed tasks",
          fontSize: "14px",
        },
      },
      plot: {
        barsSpaceLeft: 0.15,
        barsSpaceRight: 0.15,
      },
      tooltip: {
        visible: true,
      },
      crosshairX: {
        lineWidth: "100%",
        alpha: 0.4,
      },
      // crosshairX: {
      //   lineColor: '#424242',
      //   lineGapSize: '4px',
      //   lineStyle: 'dotted',
      //   plotLabel: {
      //     backgroundColor: 'white',
      //     bold: true,
      //     borderColor: '#e3e3e3',
      //     borderRadius: '5px',
      //     fontColor: '#2f2f2f',
      //     fontFamily: 'Lato',
      //     fontSize: '12px',
      //     padding: '15px',
      //     shadow: true,
      //     shadowAlpha: 0.2,
      //     shadowBlur: 5,
      //     shadowColor: '#a1a1a1',
      //     shadowDistance: 4,
      //     textAlign: 'left',
      //   },
      //   scaleLabel: {
      //     backgroundColor: '#424242',
      //   },
      // },
      series: [
        {
          type: "bar",

          values: [
            95, 95, 86, 71, 84, 96, 103, 95, 105, 75, 92, 84, 95, 95, 86, 71,
            84, 96, 103, 95, 105, 75, 92, 84,
          ],
          text: "Dell",
        },
        {
          type: "bar",

          values: [
            69, 68, 54, 48, 70, 74, 98, 70, 72, 68, 49, 69, 69, 68, 54, 48, 70,
            74, 98, 70, 72, 68, 49, 69,
          ],
          text: "Apple",
        },
        {
          type: "bar",
          values: [
            51, 53, 47, 60, 48, 52, 75, 52, 55, 47, 60, 48, 51, 53, 47, 60, 48,
            52, 75, 52, 55, 47, 60, 48,
          ],
          text: "Microsoft",
        },
        {
          type: "bar",
          values: [
            42, 43, 30, 40, 31, 48, 55, 46, 48, 32, 38, 38, 42, 43, 30, 40, 31,
            48, 55, 46, 48, 32, 38, 38,
          ],
          text: "Oracle",
        },
        {
          type: "line",
          text: "Remaining Tasks",
          values: [35, 42, 67, 89, 25, 34, 67, 85].sort().reverse(),
          lineColor: "#42a5f5",
          marker: {
            visible: "false",
          },
          scales: "scale-x, scale-y",
        },
        {
          type: "line",
          text: "Remaining Effort",
          values: [25, 32, 57, 79, 15, 24, 57, 75].sort().reverse(),
          lineColor: "#5c6bc0",
          marker: {
            type: "square",
            backgroundColor: "#5c6bc0",
          },
          scales: "scale-x, scale-y",
        },
        {
          type: "line",
          text: "Completed Tasks",
          values: [90, 80, 70, 60, 50, 40, 30, 20],
          lineColor: "#66bb6a",
          marker: {
            visible: false,
          },
          scales: "scale-x, scale-y",
        },
      ],
    },
  ],
};

zingchart.render({
  id: "myChart2",
  data: myConfig2,
  height: "100%",
  width: "100%",
});
