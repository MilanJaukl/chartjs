export default class ChartConfig {
    type;
    dataType;
    data;
    title;
    options;
    legendVisible;
    customConfig;
    constructor(type, dataType, data, title, options, legendVisible, customConfig) {
        this.type = type;
        this.dataType = dataType;
        this.data = data;
        this.title = title;
        this.options = options;
        this.legendVisible = legendVisible;
        this.customConfig = customConfig;
    }
}
