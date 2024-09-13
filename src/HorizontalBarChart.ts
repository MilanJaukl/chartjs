import { Chart } from "chart.js/auto";
import ChartConfig from "./ChartConfig";
import ChartStrategy from "./ChartStrategy";
import BaseChart from "./BaseChart";
import { merge } from "lodash";

export default class HorizontalBarCHart
  extends BaseChart
  implements ChartStrategy
{
  createChart(): void {
    const options = {
      indexAxis: "y",
      scales: {
        y: {
          grid: {
            display: false,
          },
        },
        x: {
          grid: {
            color: (line: any) => (line.index === 0 ? "#cfcfcf" : "#E2E2E3"),
          },
        },
      },
      plugins: {
        legend: {
          position: "right",
        },
      },
    };

    new Chart(this.chartContainer, {
      type: "bar",
      data: this.getData(),
      options: merge({}, options, this.getOptions()),
    });
  }
}
