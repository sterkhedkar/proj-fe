import React from "react";
import './BubbleChart.css'
import { Bubble } from "react-chartjs-2"
import "chartjs-plugin-datalabels";

export default class BubbleChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    getColor(value) {
      return `rgb(${(200 * (100 - value)) / 100}, ${(200 * value) / 100},${50})`;
    }
  
    getBubbleLabelConf() {
      return {
        align: "start",
        anchor: "start",
        color: function (ctx) {
          return "grey";
        },
        font: { size: 12 },
        formatter: function (value, ctx) {
          return ctx.dataset.bubbleLable;
        }
      };
    }
  
    getBubbleValueConf() {
      return {
        font: {
          size: 12,
          weight: "bold"
        },
        anchor: function (context) {
          var value = context.dataset.data[0];
          console.log(value.r);
          return value.r < 10 ? "end" : "center";
        },
        align: function (context) {
          var value = context.dataset.data[0];
          return value.r < 10 ? "end" : "center";
        },
        color: function (context) {
          var value = context.dataset.data[0];
          return value.r < 10 ? context.dataset.backgroundColor : "white";
        },
        formatter: function (value) {
          return Math.round(value.r * 3);
        },
        offset: 2,
        padding: 0
      };
    }
  
    getDataLabelConfiguration() {
      return {
        labels: {
          bubbleLabel: this.getBubbleLabelConf(),
          bubbleValue: this.getBubbleValueConf()
        }
      };
    }
  
    getChartOptions() {
      return {
        responsive: true,
        plugins: {
          datalabels: this.getDataLabelConfiguration()
        },
        scales: {
          xAxes: [{ display: false }],
          yAxes: [
            {
              ticks: {
                padding: 10,
                callback: function (value, index, values) {
                  return ` ${value}%`;
                }
              }
            }
          ]
        },
        legend: {
          display: false
        },
        pointBorderWidth: 2,
        pointHoverRadius: 5,
        maintainAspectRation: false,
        layout: {
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }
      };
    }
  
    getChartData() {
      console.log(this.getColor(10));
      return {
        datasets: [
          {
            data: [
              {
                y: 40, // min of data - 10
                r: 0
              }
            ]
          }, // dummy element for adding the padding - hackish
          {
            backgroundColor: this.getColor(73),
            bubbleLable: "Inspiration",
            data: [{ x: 20, y: 73, r: 73 / 3 }]
          },
          {
            backgroundColor: this.getColor(77),
            bubbleLable: "Planning &\n Booking",
            data: [{ x: 80, y: 77, r: 77 / 3 }]
          },
          {
            backgroundColor: this.getColor(63),
            bubbleLable: "Reaching\nDestination",
            data: [{ x: 140, y: 63, r: 63 / 3 }]
          },
          {
            backgroundColor: this.getColor(59),
            bubbleLable: "Accomodation",
            data: [{ x: 200, y: 59, r: 59 / 3 }]
          },
          {
            backgroundColor: this.getColor(65),
            bubbleLable: "Tourist\nAttraction",
            data: [{ x: 260, y: 65, r: 65 / 3 }]
          },
          {
            backgroundColor: this.getColor(61),
            bubbleLable: "Leisure\nActivities",
            data: [{ x: 320, y: 61, r: 61 / 3 }]
          },
          {
            backgroundColor: this.getColor(55),
            bubbleLable: "Entertainment\nActivities",
            data: [{ x: 380, y: 55, r: 55 / 3 }]
          },
          {
            backgroundColor: this.getColor(56),
            bubbleLable: "F & B",
            data: [{ x: 440, y: 56, r: 56 / 3 }]
          },
          {
            backgroundColor: this.getColor(56),
            bubbleLable: "Retail",
            data: [{ x: 500, y: 56, r: 56 / 3 }]
          },
          {
            backgroundColor: this.getColor(59),
            bubbleLable: "Mobility",
            data: [{ x: 560, y: 59, r: 59 / 3 }]
          },
          {
            backgroundColor: this.getColor(50),
            bubbleLable: "Tourist Support\nServices",
            data: [{ x: 620, y: 50, r: 50 / 3 }]
          },
          {
            backgroundColor: this.getColor(80),
            bubbleLable: "Leaving\nDestination",
            data: [{ x: 680, y: 80, r: 80 / 3 }]
          },
          {
            data: [
              {
                y: 90, // max of data + 10
                r: 0
              }
            ]
          }
        ]
      };
    }

  render() {
      // console.log("this.props.size : ",this.props.size);
    let w, h;
    if(this.props.size === 'small'){
        w = '2rem'; h = '5rem';
    } else if(this.props.size === 'medium'){
        w = '23rem'; h = '21rem';
    } else if(this.props.size === 'superlarge'){
        w = '20rem'; h = '5rem';
    }
    return (
        <>
            <Bubble width={w} height={h}
              options={this.getChartOptions()}
              data={this.getChartData()}
            />

            <p className="note">
                Note: Bubble size represents the derived importance of the variable for the overall satisfaction
            </p>
        </>
    );
  }
}