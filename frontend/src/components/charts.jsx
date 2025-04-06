import React, { useEffect } from "react";

export default function Charts() {
  useEffect(() => {
    return () => {
      var lChart = {
        chart: {
          height: 280,
          type: "area",
        },
        dataLabels: {
          enabled: false,
        },
        series: [
          {
            name: "Series 1",
            data: [45, 52, 38, 45, 19, 23, 2],
          },
        ],
        xaxis: {
          categories: [
            "01 Jan",
            "02 Jan",
            "03 Jan",
            "04 Jan",
            "05 Jan",
            "06 Jan",
            "07 Jan",
          ],
        },
      };

      var LineChart = new ApexCharts(document.querySelector("#chart"), lChart);

      LineChart.render();

      var bChart = {
        series: [
          {
            data: [400, 430, 448, 470, 540, 580, 690],
          },
        ],
        chart: {
          type: "bar",
          height: 280,
        },

        plotOptions: {
          bar: {
            horizontal: true,
          },
        },
        dataLabels: {
          enabled: true,
        },
        xaxis: {
          categories: [
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
        },
        grid: {
          xaxis: {
            lines: {
              show: true,
            },
          },
        },
        yaxis: {
          reversed: true,
          axisTicks: {
            show: true,
          },
        },
      };

      var BarChart = new ApexCharts(document.querySelector("#chart2"), bChart);
      BarChart.render();

      var pie = {
        series: [44, 55, 13, 43, 22],
        chart: {
          width: 380,
          type: "pie",
          height: 280,
        },
        labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
        responsive: [
          {
            breakpoint: 480, //Breakpoints are customizable widths that determine how your responsive layout behaves
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      };

      var PieChart = new ApexCharts(document.querySelector("#piechart"), pie);
      PieChart.render();

      var doughnut = {
        series: [44, 55, 41, 17, 15],
        chart: {
          type: "donut",
          height: 280,
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      };

      var doughnutchart = new ApexCharts(
        document.querySelector("#doughnut"),
        doughnut
      );
      doughnutchart.render();
    };
  }, []);
}
