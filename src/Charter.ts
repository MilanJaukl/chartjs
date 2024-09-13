import BarChart from "./BarChart";
import HorizontalBarCHart from "./HorizontalBarChart";
import { ChartType } from "./ChartType";
import { DataType } from "./DataType";
import ChartConfig from "./ChartConfig";
import { Chart } from "chart.js/auto";
import AjaxConfig from "./AjaxConfig";

const colors = {
  indigoDye: "#00406eff",
  frenchBlue: "#0f72b5ff",
  frenchBlueSubtle: "#18b0d5",
  yellowGreen: "#98ce00ff",
  blush: "#fa5089",
  turquoise: "#16e0bdff",
  babyPowder: "#fffffaff",
  pink: "#FF5376",
};

(window as any).charter = { colors: colors };

class Charter {
  static createChart(chartConfig: unknown, chartContainerId: string): void {
    // CHECK VALIDITY OF CHART CONFIG

    if (!chartConfig) {
      throw new Error("Invalid chart config");
    }

    let config: ChartConfig;
    let data: any;

    if (
      typeof chartConfig == "object" &&
      "type" in chartConfig &&
      "data" in chartConfig &&
      "title" in chartConfig
    ) {
      data = chartConfig as {
        type: ChartType;
        dataType: DataType;
        data: [];
        title: string;
        options: any;
        legendVisible: boolean;
      };
    } else {
      throw new Error("Invalid chart config");
    }
    console.log(data);
    config = new ChartConfig(
      data.type,
      data.dataType,
      data.data,
      data.title,
      data.options,
      data.legendVisible
    );
    // --------------------------------------------------

    // CHECK VALIDITY OF CHART CONTAINER
    let htmlElement = document.getElementById(
      chartContainerId
    ) as HTMLCanvasElement;
    if (!htmlElement) {
      throw new Error("Invalid chart container id");
    }
    let content = htmlElement.getContext("2d");

    if (!content) {
      throw new Error("Invalid canvas context");
    }
    let container: CanvasRenderingContext2D = content;

    // --------------------------------------------------

    let chart;
    switch (config.type) {
      case ChartType.Bar:
        chart = new BarChart(config, container);
        break;
      case ChartType.HorizontalBar:
        chart = new HorizontalBarCHart(config, container);
        break;
      default:
        throw new Error("Invalid chart type");
    }
    chart.createChart();
  }

  static createChartWithAjax(
    chartContainerId: string,
    ajaxConfig: AjaxConfig
  ) {}
}

Chart.defaults.plugins.legend.position = "bottom";
Chart.defaults.plugins.legend.labels.boxWidth = 20;
Chart.defaults.plugins.legend.labels.boxHeight = 20;
Chart.defaults.plugins.legend.labels.useBorderRadius = true;
Chart.defaults.plugins.legend.labels.borderRadius = 2;

(window as any).Charter = Charter;
(window as any).Chart = Chart;

export default Charter;
