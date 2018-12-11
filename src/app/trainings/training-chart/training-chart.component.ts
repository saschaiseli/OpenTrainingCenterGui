import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'otc-training-chart',
  templateUrl: './training-chart.component.html',
  styles: []
})
export class TrainingChartComponent implements OnInit{
  @Input()
  data: any[];

  view: any[] = [1700, 400];
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  @Input()
  xAxisLabel: string;
  showYAxisLabel = true;
  @Input()
  yAxisLabel: string;

  @Input()
  chartColor: string;
  timeline = true;

  colorScheme = {
    domain: [ '#5AA454' ]
  };

  // line, area
  autoScale = true;

  constructor() { }

  ngOnInit() {
    this.colorScheme = {
      domain: [ this.chartColor ]
    };
  }
}
