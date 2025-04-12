import React, { useEffect, useState } from "react";

export default function Charts() {
  useEffect(() => {
    return () => {
      // Fetch gender data from the API
      fetch("http://localhost:3000/api/gender")
        .then((response) => response.json())
        .then((data) => {
          // Extract gender labels and totals
          const genderLabels = data.map((item) => item._id);
          const genderTotals = data.map((item) => item.total);

          // Create the PieChart
          const pie = {
            series: genderTotals, // Use the array directly
            chart: {
              width: 380,
              type: "pie",
              height: 280,
            },
            labels: genderLabels, // Use the gender labels
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

          const PieChart = new ApexCharts(
            document.querySelector("#piechart"),
            pie
          );
          PieChart.render();
        })
        .catch((error) => console.error("Error fetching data:", error));
    };
  }, []);

  useEffect(() => {
    return () => {
      fetch("http://localhost:3000/api/business_type")
        .then((response) => response.json())
        .then((data) => {
          // Extract income labels (e.g., city names) and totals
          const btypeLabels = data.map((item) => item._id); // Cities
          const btypeTotals = data.map((item) => item.total); // Total income

          var doughnut = {
            series: btypeTotals,
            chart: {
              type: "donut",
              height: 280,
            },
            labels: btypeLabels,
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

          // Render the Line Chart
          const doughnutchart = new ApexCharts(
            document.querySelector("#doughnut"),
            doughnut
          );
          doughnutchart.render();
        })
        .catch((error) => console.error("Error fetching data:", error));
    };
  }, []);

  useEffect(() => {
    return () => {
      // Fetch income data from the API
      fetch("http://localhost:3000/api/income")
        .then((response) => response.json())
        .then((data) => {
          // Extract income labels (e.g., city names) and totals
          const incomeLabels = data.map((item) => item._id); // Cities
          const incomeTotals = data.map((item) => item.totalIncome); // Total income
          // Configure the Line Chart
          const lChart = {
            chart: {
              height: 280,
              type: "area",
            },
            dataLabels: {
              enabled: false,
            },
            series: [
              {
                name: "Total Income",
                data: incomeTotals, // Use the income totals
              },
            ],
            xaxis: {
              categories: incomeLabels, // Use the income labels (e.g., city names)
            },
          };

          // Render the Line Chart
          const LineChart = new ApexCharts(
            document.querySelector("#chart"),
            lChart
          );
          LineChart.render();
        })
        .catch((error) => console.error("Error fetching data:", error));
    };
  }, []);

  useEffect(() => {
    return () => {
      fetch("http://localhost:3000/api/investment")
        .then((response) => response.json())
        .then((data) => {
          // Extract income labels (e.g., city names) and totals
          const investmentLabels = data.map((item) => item._id); // Cities
          const investmentTotals = data.map((item) => item.totalInvestment); // Total income
          var bChart = {
            series: [
              {
                name: "Total Investment",
                data: investmentTotals,
              },
            ],
            chart: {
              type: "bar",
              height: 280,
            },

            plotOptions: {
              bar: {
                // borderRadius: 0,
                // dataLabels: {
                //   enabled: false,
                // },
              },
            },
            dataLabels: {
              enabled: false,
            },
            xaxis: {
              categories: investmentLabels,
              position: "bottom",
            },
            grid: {
              xaxis: {
                lines: {
                  show: true,
                },
              },
            },
            yaxis: {
              axisBorder: {
                show: false,
              },
              axisTicks: {
                show: false,
              },
              labels: {
                show: false,
              },
            },
          };
          // Render the Line Chart
          const BarChart = new ApexCharts(
            document.querySelector("#chart2"),
            bChart
          );
          BarChart.render();
        })
        .catch((error) => console.error("Error fetching data:", error));
    };
  }, []);
}
