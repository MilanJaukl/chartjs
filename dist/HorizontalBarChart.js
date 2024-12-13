import { Chart } from "chart.js/auto";
import BaseChart from "./BaseChart";
import { merge } from "lodash";
export default class HorizontalBarCHart extends BaseChart {
    createChart() {
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
                        color: (line) => (line.index === 0 ? "#cfcfcf" : "#E2E2E3"),
                    },
                },
            },
            plugins: {
                legend: {
                    position: "right",
                },
            },
        };
        return new Chart(this.chartContainer, {
            type: "bar",
            data: this.getData(),
            options: merge({}, options, this.getOptions()),
        });
    }
}
