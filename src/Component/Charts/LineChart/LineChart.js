import React from "react";
import { Line } from "react-chartjs-2";
import "chartjs-plugin-datalabels";

export default class LineChart extends React.Component {
  getChartOptions() {
    return {
      plugins: {
        datalabels: {
          padding:10,
          align:"end",
          anchor:"end",
          color: function (context) {
            var value = context.dataset.data[0];
            return value.r < 10 ? context.dataset.backgroundColor : "grey";
          },
          font: {},
          padding: 0
        }
      },
      tooltips:{
        enabled:false
      },
      scales: {
        xAxes: [
          {
           
            gridLines:{
              display:false,
              tickMarkLength: 20,
            }
          }
        ],
        yAxes: [
          {
            display: false,
            gridLines:{
              tickMarkLength: 0,

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
          right: 0,
          bottom: 10,
          left: 0
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
          pointBackgroundColor: "rgba(75,192,192,1)",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 3,
          pointHitRadius: 10,
          data: [38.5,38,39,39.500,40]
        }
      ]
    };
  }

  render() {
    return (
      <div class="chart-container" style={{ position: "relative"}}>
        <Line height="22px" width="40px" options={this.getChartOptions()} data={this.getChartData()} />
      </div>

    );
  }
}
