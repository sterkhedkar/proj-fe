import React from "react";
import { Line } from "react-chartjs-2";
import "chartjs-plugin-datalabels";

export default class LineChart extends React.Component {
  getChartOptions() {
    return {
        responsive: true,
      plugins: {
        datalabels: {
          anchor: function (context) {
            var value = context.dataset.data[0];
            console.log(value.r);
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
          padding: 0
        }
      },
      scales: {
        xAxes: [
            // {display: false}
        ],
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
    return {
      labels: ["Apr", "May", "Jun", "Jul", "Aug"],
      datasets: [
        {
          label: "My First dataset",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [65, 59, 80, 81, 56, 55, 40]
        }
      ]
    };
  }

  render() {
    return (
        <Line height="20px" width="40px" options={this.getChartOptions()} data={this.getChartData()} />
    );
  }
}
