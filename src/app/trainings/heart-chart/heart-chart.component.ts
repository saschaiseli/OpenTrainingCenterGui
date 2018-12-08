import { SimpleTraining } from 'src/app/model/simple-training';
import { Component, Input, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { TrainingChartService } from 'src/app/shared/service/training-chart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'otc-heart-chart',
  templateUrl: './heart-chart.component.html',
  styles: []
})
export class HeartChartComponent {
  @Input()
  heart: any[];

  view: any[] = [1700, 400];
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Distanz';
  showYAxisLabel = true;
  yAxisLabel = 'Herzfrequenz';
  timeline = true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = true;

  constructor() { }

  activate() {
    this.onSelect();
  }

  onSelect() {
    console.log('..........................');
    console.log(this.data);
  }
}
