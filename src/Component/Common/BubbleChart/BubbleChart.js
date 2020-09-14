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

  getChartOptions() {
    return {
      plugins: {
        datalabels: {
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
          font: {
            weight: "bold"
          },
          formatter: function (value) {
            return Math.round(value.r * 3);
          },
          offset: 2,
          padding: 0
        }
      },
      scales: {
        xAxes: [{ display: false }],
        yAxes: [
          {
            display: false,
            ticks: {
              callback: function (value, index, values) {
                return ` ${value}%   `;
              }
            }
          }
        ]
      },
      legend: {
        display: false
      },
      layout: {
        padding: {
          top: 20,
          right: 20,
          bottom: 20,
          left: 20
        }
      }
    };
  }

  getChartData() {
    // TODO : get maxvalue from api data
    var maxValue = 120;
    console.log(this.getColor(10));
    return {
      datasets: [
        {
          pointBorderWidth: 2,
          pointHoverRadius: 5,
          maintainAspectRation: false,
          backgroundColor: this.getColor(90),
          data: [{ x: 0, r: 0 }]
        },

        {
          pointBorderWidth: 2,
          pointHoverRadius: 5,
          maintainAspectRation: false,
          backgroundColor: this.getColor(90),
          data: [{ y: maxValue + 20, r: 0 }]
        },
        {
          label: "DATA POINT - LABEL",
          pointBorderWidth: 2,
          pointHoverRadius: 5,
          maintainAspectRation: false,
          backgroundColor: this.getColor(90),
          data: [{ x: 30, y: 90, r: 90 / 3 }]
        },
        {
          label: "DATA POINT - LABEL",
          pointBorderWidth: 2,
          pointHoverRadius: 5,
          maintainAspectRation: false,
          backgroundColor: this.getColor(60),
          data: [{ x: 60, y: 60, r: 60 / 3 }]
        },
        {
          label: "DATA POINT - LABEL",
          pointBorderWidth: 2,
          pointHoverRadius: 5,
          maintainAspectRation: false,
          backgroundColor: this.getColor(100),
          data: [{ x: 90, y: 70, r: 70 / 3 }]
        },
        {
          label: "DATA POINT - LABEL",
          maintainAspectRation: false,
          backgroundColor: this.getColor(20),
          data: [{ x: 120, y: 20, r: 20 / 3 }]
        }
      ]
    };
  }

  render() {
      console.log("this.props.size : ",this.props.size);
    let w, h;
    if(this.props.size === 'small'){
        w = '2rem'; h = '5rem';
    } else if(this.props.size === 'medium'){
        w = '23rem'; h = '21rem';
    } else if(this.props.size === 'superlarge'){
        w = '23rem'; h = '21rem';
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
