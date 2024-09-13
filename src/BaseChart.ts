import ChartConfig from "./ChartConfig";
import { merge, size } from "lodash";

export default class BaseChart {
  protected config: ChartConfig;
  protected chartContainer: CanvasRenderingContext2D;
  protected width: number;
  protected height: number;
  protected titleWidthRatio: number = 7;
  protected titleSize: number;
  protected tickWidthRatio: number = 11;

  protected tickFontSize: number;

  constructor(config: ChartConfig, chartContainer: CanvasRenderingContext2D) {
    this.config = config;
    this.chartContainer = chartContainer;

    const chartHeight = chartContainer.canvas.height;
    this.titleSize = Math.round(chartHeight / this.titleWidthRatio);
    this.tickFontSize = Math.round(chartHeight / this.tickWidthRatio);
  }

  protected getDatasets(): any {
    let datasets: any[] = [];
    this.config.data.datasets.forEach((element) => {
      datasets.push({
        label: element.label,
        data: element.data,
        backgroundColor: element.backgroundColor,
        borderWidth: 0,
        borderRadius: 5,
        borderSkipped: false,
      });
    });
    return datasets;
  }

  protected getData(): any {
    return {
      labels: this.config.data.labels,
      datasets: this.getDatasets(),
    };
  }

  protected getOptions(): any {
    const defaultOptions: any = {
      layout: {
        padding: {},
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            drawTicks: false,
          },
          ticks: {
            padding: 5,
            maxTicksLimit: 8,
            font: {
              size: this.tickFontSize,
            },
          },
          border: {
            display: false,
          },
        },
        x: {
          beginAtZero: true,
          grid: {
            drawTicks: false,
          },
          border: {
            display: false,
          },
          ticks: {
            padding: 5,
            maxTicksLimit: 8,
            font: {
              size: this.tickFontSize,
            },
          },
        },
      },
      plugins: {
        legend: {
          display: this.config.legendVisible,
        },
        title: {
          display: true,
          text: this.config.title,
          color: "#00406e",

          font: {
            size: this.titleSize,
            weight: "bold",
          },
          padding: {
            top: 10,
            bottom: 12,
          },
        },
      },
    };
    console.log(this.config);
    return merge({}, defaultOptions, this.config.options);
  }
}
