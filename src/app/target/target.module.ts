import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TargetRoutingModule } from './target-routing.module';
import { TargetListComponent } from './target-list/target-list.component';

@NgModule({
  imports: [
    CommonModule,
    TargetRoutingModule
  ],
  declarations: [TargetListComponent]
})
export class TargetModule { }
