
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingsRoutingModule } from './trainings-routing.module';
import { TrainingsComponent } from './trainings-list/trainings.component';
import { TrainingsListItemComponent } from './trainings-list-item/trainings-list-item.component';
import { HeartChartComponent } from './heart-chart/heart-chart.component';
import { AltitudeChartComponent } from './altitude-chart/altitude-chart.component';

@NgModule({
  imports: [
    CommonModule,
    NgxChartsModule,
    TrainingsRoutingModule
  ],
  declarations: [TrainingsComponent, TrainingsListItemComponent, HeartChartComponent, AltitudeChartComponent]
})
export class TrainingsModule { }
