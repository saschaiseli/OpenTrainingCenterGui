import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculationsDashboardComponent } from './calculations-dashboard/calculations-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: CalculationsDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalculationsRoutingModule { }
