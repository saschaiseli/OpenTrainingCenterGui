import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TargetRoutingModule } from './target-routing.module';
import { TargetListComponent } from './target-list/target-list.component';
import { TargetItemComponent } from './target-item/target-item.component';

@NgModule({
  imports: [
    CommonModule,
    TargetRoutingModule
  ],
  declarations: [TargetListComponent, TargetItemComponent]
})
export class TargetModule { }
