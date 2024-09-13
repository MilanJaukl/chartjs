import BarChart from "./BarChart";
import { ChartType } from "./ChartType";
import ChartConfig from "./ChartConfig";
import { Chart } from "chart.js/auto";
class Charter {
    static createChart(chartConfig, chartContainerId) {
        // CHECK VALIDITY OF CHART CONFIG
        if (!chartConfig) {
            throw new Error("Invalid chart config");
        }
        let config;
        let data;
        if (typeof chartConfig == "object" && "type" in chartConfig) {
            data = chartConfig;
        }
        else {
            throw new Error("Invalid chart config");
        }
        config = new ChartConfig(data.type, data.dataType, data.data, data.title, data.options);
        // --------------------------------------------------
        // CHECK VALIDITY OF CHART CONTAINER
        let htmlElement = document.getElementById(chartContainerId);
        if (!htmlElement) {
            throw new Error("Invalid chart container id");
        }
        let content = htmlElement.getContext("2d");
        if (!content) {
            throw new Error("Invalid canvas context");
        }
        let container = content;
        // --------------------------------------------------
        let chart;
        switch (config.type) {
            case ChartType.Bar:
                chart = new BarChart(config, container);
                break;
            default:
                throw new Error("Invalid chart type");
        }
        chart.createChart();
    }
    static createChartWithAjax(chartContainerId, ajaxConfig) { }
}
Chart.defaults.plugins.legend.position = "bottom";
Chart.defaults.plugins.legend.labels.boxWidth = 20;
Chart.defaults.plugins.legend.labels.boxHeight = 20;
Chart.defaults.plugins.legend.labels.useBorderRadius = true;
Chart.defaults.plugins.legend.labels.borderRadius = 2;
window.Charter = Charter;
window.Chart = Chart;
export default Charter;
