"use strict";
class Helper {
    static getAgregatedDatasets(datasets) {
        let aggregatedDatasets = [];
        datasets.forEach((dataset) => {
            if (dataset.data.length > 0) {
                aggregatedDatasets.push(dataset);
            }
        });
        return aggregatedDatasets;
    }
}
