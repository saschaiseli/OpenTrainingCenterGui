import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'home',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'trainings',
    loadChildren: () => import('./trainings/trainings.module').then(m => m.TrainingsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'statistics',
    loadChildren: () => import('./statistics/statistics.module').then(m => m.StatisticsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'calculations',
    loadChildren: () => import('./calculations/calculations.module').then(m => m.CalculationsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'targets',
    loadChildren: () => import('./target/target.module').then(m => m.TargetModule),
    canActivate: [AuthGuard]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
