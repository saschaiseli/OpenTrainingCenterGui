
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingsRoutingModule } from './trainings-routing.module';
import { TrainingsComponent } from './trainings-list/trainings.component';
import { TrainingsListItemComponent } from './trainings-list-item/trainings-list-item.component';
import { TrainingChartComponent } from './training-chart/training-chart.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";
import { MatRadioModule } from "@angular/material/radio";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    NgxChartsModule,
    TrainingsRoutingModule,
    FormsModule,
    MatRadioModule,
    MatButtonModule
  ],
  declarations: [TrainingsComponent, TrainingsListItemComponent, TrainingChartComponent],
  bootstrap: [TrainingsComponent]
})
export class TrainingsModule { }
