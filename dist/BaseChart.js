import { merge } from "lodash";
export default class BaseChart {
    config;
    chartContainer;
    width;
    height;
    titleWidthRatio = 7;
    titleSize;
    tickWidthRatio = 11;
    tickFontSize;
    constructor(config, chartContainer) {
        this.config = config;
        this.chartContainer = chartContainer;
        const chartHeight = chartContainer.height;
        this.titleSize = Math.round(chartHeight / this.titleWidthRatio);
        this.tickFontSize = Math.round(chartHeight / this.tickWidthRatio);
    }
    getDatasets() {
        let datasets = [];
        this.config.data.datasets.forEach((element) => {
            datasets.push({
                label: element.label,
                data: element.data,
                backgroundColor: element.backgroundColor,
                borderColor: element.borderColor,
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
            onResize: (chart, size) => {
                chart.resize();
                console.log("resize");
            },
            responsive: true,
            maintainAspectRatio: false,
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
