import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculationsRoutingModule } from './calculations-routing.module';
import { CalculationsDashboardComponent } from './calculations-dashboard/calculations-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    CalculationsRoutingModule
  ],
  declarations: [CalculationsDashboardComponent]
})
export class CalculationsModule { }
