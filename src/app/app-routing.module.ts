import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: DashboardComponent
  },
  {
    path: 'trainings',
    loadChildren: './trainings/trainings.module#TrainingsModule'
  },
  {
    path: 'statistics',
    loadChildren: './statistics/statistics.module#StatisticsModule'
  },
  {
    path: 'calculations',
    loadChildren: './calculations/calculations.module#CalculationsModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
