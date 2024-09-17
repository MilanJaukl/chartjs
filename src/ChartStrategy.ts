import ChartConfig from "./ChartConfig";
import { Chart } from "chart.js/auto";

export default interface ChartStrategy {
  createChart(): Chart;
}
