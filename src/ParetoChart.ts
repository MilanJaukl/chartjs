import { Chart } from "chart.js/auto";
import ChartConfig from "./ChartConfig";
import ChartStrategy from "./ChartStrategy";
import BaseChart from "./BaseChart";
import { merge } from "lodash";

export default class ParetoChart extends BaseChart implements ChartStrategy {
  createChart(): Chart {
    const options = {
      scales: {
        x: {
          grid: {
            display: false,
          },
        },
        y: {
          grid: {
            color: (line: any) => (line.index === 0 ? "#cfcfcf" : "#E2E2E3"),
          },
        },
        yPercentage: {
          type: "linear",
          position: "right",
          beginAtZero: true,
          grid: {
            display: false,
          },
          ticks: {
            max: 100,
            min: 0,
            stepSize: 20,
          },
        },
      },
    };

    let dataset = this.getDatasets()[0];
    dataset.type = "bar";
    dataset.barPercentage = 1;
    dataset.categoryPercentage = 0.95;
    console.log(dataset);

    let lineDataset = this.getLineDataset();
    console.log(lineDataset);

    let data = this.getData();

    return new Chart(this.chartContainer, {
      type: "line",
      data: {
        labels: data.labels,
        datasets: [lineDataset, dataset],
      },
      options: merge({}, options, this.getOptions()),
    });
  }

  public getLineDataset(): {} {
    const data: number[] = this.config.data.datasets[0].data;
    const sum: number = data.reduce((a: number, b: number) => a + b, 0);
    const cumulativePercentage: number[] = [];

    let cumulativeSum = 0;
    for (let i = 0; i < data.length; i++) {
      cumulativeSum += (data[i] / sum) * 100;
      cumulativePercentage.push(cumulativeSum);
    }
    return {
      data: cumulativePercentage,
      label: "Pareto",
      yAxisID: "yPercentage",
      backgroundColor: this.config.customConfig.lineColor,
      borderColor: this.config.customConfig.lineColor,
    };
  }
}
