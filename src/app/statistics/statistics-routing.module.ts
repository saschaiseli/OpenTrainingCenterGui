import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatisticsMonthComponent } from './statistics-month/statistics-month.component';
const routes: Routes = [
  {
    path: '',
    component: StatisticsMonthComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatisticsRoutingModule { }
