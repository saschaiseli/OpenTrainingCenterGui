import { SimpleTrainingServiceService } from './../../shared/service/simple-training-service.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SimpleTraining } from 'src/app/model/simple-training';

@Component({
  selector: 'otc-trainings',
  templateUrl: './trainings.component.html',
  styles: []
})
export class TrainingsComponent implements OnInit {

  trainings$: Observable<SimpleTraining[]>;
  constructor(private service: SimpleTrainingServiceService) { }

  ngOnInit() {
    this.trainings$ = this.service.getAllByAthlete('49952');
  }

}
