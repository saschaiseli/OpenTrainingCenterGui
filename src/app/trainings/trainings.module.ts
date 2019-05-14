
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingsRoutingModule } from './trainings-routing.module';
import { TrainingsComponent } from './trainings-list/trainings.component';
import { TrainingsListItemComponent } from './trainings-list-item/trainings-list-item.component';
import { TrainingChartComponent } from './training-chart/training-chart.component';

@NgModule({
  imports: [
    CommonModule,
    NgxChartsModule,
    TrainingsRoutingModule
  ],
  declarations: [TrainingsComponent, TrainingsListItemComponent, TrainingChartComponent]
})
export class TrainingsModule { }
