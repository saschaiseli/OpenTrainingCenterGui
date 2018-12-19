import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TargetListComponent } from './target-list/target-list.component';

const routes: Routes = [
  {
    path: '',
    component: TargetListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TargetRoutingModule { }
