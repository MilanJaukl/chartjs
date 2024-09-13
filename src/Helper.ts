class Helper {
  static getAgregatedDatasets(datasets: any[]) {
    let aggregatedDatasets: any[] = [];
    datasets.forEach((dataset: any) => {
      if (dataset.data.length > 0) {
        aggregatedDatasets.push(dataset);
      }
    });
    return aggregatedDatasets;
  }
}
