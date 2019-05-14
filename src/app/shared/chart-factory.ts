import { ChartData } from './../model/chart-data';
export class ChartFactory {
  static fromObject(rawChart: any): ChartData {
    return new ChartData(
      rawChart.heartJson,
      rawChart.paceJson,
      rawChart.altitudeJson
    );
  }
}
