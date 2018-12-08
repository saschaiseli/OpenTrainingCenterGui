import { Component, Input } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { TrainingChartService } from 'src/app/shared/service/training-chart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'otc-altitude-chart',
  templateUrl: './altitude-chart.component.html',
  styles: []
})
export class AltitudeChartComponent {
  @Input()
  altitude: any[];
  constructor() { }

  view: any[] = [1700, 400];
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Distanz';
  showYAxisLabel = true;
  yAxisLabel = 'Höhe';
  timeline = true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = true;

}
