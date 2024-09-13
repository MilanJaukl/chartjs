import { merge } from "lodash";
export default class BaseChart {
    config;
    chartContainer;
    width;
    height;
    widthRatio = 7;
    titleSize;
    constructor(config, chartContainer) {
        this.config = config;
        this.chartContainer = chartContainer;
        const chartHeight = chartContainer.canvas.height;
        this.titleSize = Math.round(chartHeight / this.widthRatio);
    }
    getDatasets() {
        let datasets = [];
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
    getData() {
        return {
            labels: this.config.data.labels,
            datasets: this.getDatasets(),
        };
    }
    getOptions() {
        const defaultOptions = {
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
                        display: false,
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
        return merge(defaultOptions, this.config.options);
    }
}
