import { Component, Input } from '@angular/core';

@Component({
  selector: 'otc-training-chart',
  templateUrl: './training-chart.component.html',
  styles: []
})
export class TrainingChartComponent {
  @Input()
  data: any[];

  view: any[] = [1700, 400];
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  @Input()
  xAxisLabel: string;
  showYAxisLabel = true;
  @Input()
  yAxisLabel: string;
  timeline = true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = true;

  constructor() { }
}
