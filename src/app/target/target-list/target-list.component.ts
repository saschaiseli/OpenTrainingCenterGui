import { Component, OnInit } from '@angular/core';
import { TrainingTarget } from 'src/app/model/training-target';
import { Observable } from 'rxjs';
import { TargetService } from 'src/app/shared/service/target.service';

@Component({
  selector: 'otc-target-list',
  templateUrl: './target-list.component.html',
  styles: []
})
export class TargetListComponent implements OnInit {

  targets$: Observable<TrainingTarget[]>;
  selectedTarget: TrainingTarget;

  constructor(private service: TargetService) { }

  ngOnInit() {
    this.targets$ = this.service.getAll();
  }
}
