import { Chart } from "chart.js/auto";
import ChartConfig from "./ChartConfig";
import ChartStrategy from "./ChartStrategy";
import BaseChart from "./BaseChart";
import { merge } from "lodash";

export default class BarChart extends BaseChart implements ChartStrategy {
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
      },
    };
    console.log(merge({}, options, this.getOptions()));
    return new Chart(this.chartContainer, {
      type: "bar",
      data: this.getData(),
      options: merge({}, options, this.getOptions()),
    });
  }
}
