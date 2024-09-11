class ChartJSFactory {
  dataType = Object.freeze({
    CROSS_SECTIONAL: "cross_sectional",
    TIMELINE: "timeline",
    PANEL: "panel",
  });
  chartType = Object.freeze({
    BAR: "bar",
    LINE: "line",
    PIE: "pie",
    DOUGHNUT: "doughnut",
    POLAR_AREA: "polarArea",
    RADAR: "radar",
    SCATTER: "scatter",
    PARETO: "pareto",
  });

  createChartJS(containerID, DTO) {
    // check if the container is valid DOM element
    if (!document.getElementById(containerID)) {
      throw new Error("Invalid container ID");
    } else {
      const ctx = document.getElementById(containerID).getContext("2d");
      //check if the chartjs object was already created
      if (ctx.chart) {
        throw new Error("Chart already exists");
      } else {
        // check if the DTO is valid
        if (
          !DTO ||
          !DTO.type ||
          !DTO.dataType ||
          !DTO.data ||
          !DTO.dataLabels ||
          !DTO.title ||
          !DTO.backgroundcolors
        ) {
          throw new Error("Invalid DTO");
        } else {
          // depends on the type of chart call the appropriate function
          switch (DTO.type) {
            case this.chartType.BAR:
              const chart = this.createBarChart(ctx, DTO);
              console.log(this.getCrossSectionalDatasets(DTO));
              return chart;
            case this.chartType.LINE:
              return this.createLineChart(ctx, DTO);
            case this.chartType.PIE:
              return this.createPieChart(ctx, DTO);
            case this.chartType.DOUGHNUT:
              return this.createDoughnutChart(ctx, DTO);
            case this.chartType.POLAR_AREA:
              return this.createPolarAreaChart(ctx, DTO);
            case this.chartType.RADAR:
              return this.createRadarChart(ctx, DTO);
            case this.chartType.SCATTER:
              return this.createScatterChart(ctx, DTO);
            case this.chartType.PARETO:
              return this.createParetoChart(ctx, DTO);
            default:
              throw new Error("Invalid chart type");
          }
        }
      }
    }
  }

  createBarChart(ctx, DTO) {
    return new Chart(ctx, {
      type: "bar",
      data: {
        labels: DTO.labels,
        datasets: this.getDatasets(DTO),
      },
    });
  }

  getDatasets(DTO) {
    //check the datatype and return the appropriate datasets
    switch (DTO.dataType) {
      case this.dataType.CROSS_SECTIONAL:
        return this.getCrossSectionalDatasets(DTO);
      case this.dataType.TIMELINE:
        return this.getTimelineDatasets(DTO);
      case this.dataType.PANEL:
        return this.getPanelDatasets(DTO);
      default:
        throw new Error("Invalid data type");
    }
  }

  getCrossSectionalDatasets(DTO) {
    return [
      {
        label: DTO.dataLabels[0],
        data: DTO.data,
        backgroundColor: DTO.backgroundcolors,
      },
    ];
  }
}

window.ChartJSFactory = new ChartJSFactory();
