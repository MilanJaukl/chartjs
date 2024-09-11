const indigoDye = "#00406eff";
const frenchBlue = "#0f72b5ff";
const frenchBlueSubtle = "#18b0d5";
const yellowGreen = "#98ce00ff";
const blush = "#fa5089";
const turquoise = "#16e0bdff";
const babyPowder = "#fffffaff";

// Chart.defaults.options.scales.x.grid.display = false;
Chart.defaults.plugins.legend.position = "bottom";
Chart.defaults.plugins.legend.labels.boxWidth = 20;
Chart.defaults.plugins.legend.labels.boxHeight = 20;
Chart.defaults.plugins.legend.labels.useBorderRadius = true;
Chart.defaults.plugins.legend.labels.borderRadius = 2;

Chart.defaults.font = {
  family: "Inter, sans-serif",
  size: 13,
  style: "normal",
  weight: "normal",
  lineHeight: 1.2,
};

function custom() {
  const ctxCustom = document.getElementById("custom").getContext("2d");
  const chartHeight = ctxCustom.canvas.height;
  const dynamicFontSize = Math.round(chartHeight / 7); // Adjust this formula as needed

  console.log(chartHeight);
  new Chart(ctxCustom, {
    type: "bar",
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 14, 15, 16, 3, 10],
          borderWidth: 0,
          borderRadius: 5,
          borderSkipped: false,
          backgroundColor: [frenchBlueSubtle],
        },
      ],
    },
    options: {
      layout: {
        padding: {},
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            display: true, // Show horizontal grid lines
            drawTicks: false,
          },
          ticks: {
            padding: 5,
            maxTicksLimit: 8,
          },
          border: {
            display: false,
          },
        },
        x: {
          beginAtZero: true,
          grid: {
            display: false, // Show horizontal grid lines
          },
          border: {
            display: false,
          },
        },
      },
      plugins: {
        title: {
          display: true,
          text: "Monthly Sales",
          color: "#00406e",

          font: {
            size: dynamicFontSize,
          },
          padding: {
            top: 10,
            bottom: 12,
          },
        },
      },
    },
  });
}

const dto = {
  type: "bar",
  dataType: "cross_sectional",
  data: [1, 2, 3, 4, 5, 6],
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  dataLabels: ["2022"],
  title: "test",
  backgroundcolors: [
    frenchBlueSubtle,
    yellowGreen,
    blush,
    turquoise,
    indigoDye,
    frenchBlue,
  ],
};

window.ChartJSFactory.createChartJS("generated", dto);
