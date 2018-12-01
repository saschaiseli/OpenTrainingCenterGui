import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingsRoutingModule } from './trainings-routing.module';
import { TrainingsComponent } from './trainings-list/trainings.component';
import { TrainingItemComponent } from './training-item/training-item.component';
import { TrainingsListItemComponent } from './trainings-list-item/trainings-list-item.component';

@NgModule({
  imports: [
    CommonModule,
    TrainingsRoutingModule
  ],
  declarations: [TrainingsComponent, TrainingItemComponent, TrainingsListItemComponent]
})
export class TrainingsModule { }
