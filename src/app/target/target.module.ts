import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TargetRoutingModule } from './target-routing.module';
import { TargetListComponent } from './target-list/target-list.component';
import { TargetItemComponent } from './target-item/target-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TargetItemModalComponent } from './target-item-modal/target-item-modal.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    TargetRoutingModule
  ],
  declarations: [TargetListComponent, TargetItemComponent, TargetItemModalComponent]
})
export class TargetModule { }
