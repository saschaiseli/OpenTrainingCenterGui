import { SimpleTrainingServiceService } from './../../shared/service/simple-training-service.service';
import { Component, OnInit } from '@angular/core';
import { TrainingTarget } from 'src/app/model/training-target';
import { Observable, Subscription } from 'rxjs';
import { TargetService } from 'src/app/shared/service/target.service';

@Component({
  selector: 'otc-target-list',
  templateUrl: './target-list.component.html',
  styles: []
})
export class TargetListComponent implements OnInit {

  targets$: Observable<TrainingTarget[]>;
  selectedTarget: TrainingTarget;
  private subscription: Subscription;

  constructor(private service: TargetService, private trainingService: SimpleTrainingServiceService) {  }

  ngOnInit() {
    this.update();
    this.subscription = this.trainingService.update().subscribe(message => {
      this.update();
      console.log('doooo update');
    });
  }

  update() {
    this.targets$ = this.service.getAll();
  }
}
