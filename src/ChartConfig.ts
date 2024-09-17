import { ChartType } from "./ChartType";
import { DataType } from "./DataType";

export default class ChartConfig {
  type: ChartType;
  dataType: DataType;
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string;
      borderColor: string;
      borderWidth: number;
    }[];
  };
  title: string;
  options: any;
  legendVisible: boolean;
  customConfig: any;

  constructor(
    type: ChartType,
    dataType: DataType,
    data: any,
    title: string,
    options: any,
    legendVisible: boolean,
    customConfig: any
  ) {
    this.type = type;
    this.dataType = dataType;
    this.data = data;
    this.title = title;
    this.options = options;
    this.legendVisible = legendVisible;
    this.customConfig = customConfig;
  }
}
