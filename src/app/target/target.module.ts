import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TargetRoutingModule } from './target-routing.module';
import { TargetListComponent } from './target-list/target-list.component';
import { TargetItemComponent } from './target-item/target-item.component';
import { TargetItemEditModalComponent } from './target-item-edit-modal/target-item-edit-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    TargetRoutingModule
  ],
  declarations: [TargetListComponent, TargetItemComponent, TargetItemEditModalComponent]
})
export class TargetModule { }
