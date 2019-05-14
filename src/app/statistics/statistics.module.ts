import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatisticsRoutingModule } from './statistics-routing.module';
import { StatisticsMonthComponent } from './statistics-month/statistics-month.component';

@NgModule({
  imports: [
    CommonModule,
    StatisticsRoutingModule
  ],
  declarations: [StatisticsMonthComponent]
})
export class StatisticsModule { }
