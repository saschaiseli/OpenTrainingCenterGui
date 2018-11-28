import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingsRoutingModule } from './trainings-routing.module';
import { TrainingsComponent } from './trainings-list/trainings.component';

@NgModule({
  imports: [
    CommonModule,
    TrainingsRoutingModule
  ],
  declarations: [TrainingsComponent]
})
export class TrainingsModule { }
