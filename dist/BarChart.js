import { Chart } from "chart.js/auto";
import BaseChart from "./BaseChart";
export default class BarChart extends BaseChart {
    createChart() {
        new Chart(this.chartContainer, {
            type: "bar",
            data: this.getData(),
            options: this.getOptions(),
        });
    }
}
