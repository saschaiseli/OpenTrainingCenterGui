import { SimpleTrainingServiceService } from './../../shared/service/simple-training-service.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SimpleTraining } from 'src/app/model/simple-training';
import { Training } from 'src/app/model/training';

@Component({
  selector: 'otc-trainings',
  templateUrl: './trainings.component.html',
  styles: []
})
export class TrainingsComponent implements OnInit {

  trainings$: Observable<SimpleTraining[]>;
  fullTraining$: Observable<Training>;
  selectedTraining: SimpleTraining;
  constructor(private service: SimpleTrainingServiceService) { }

  ngOnInit() {
    this.trainings$ = this.service.getAllByAthlete('1');
  }

  getTotalDistance(trainings: SimpleTraining[]): string {
    let total = 0;
    if (trainings != null && trainings.length > 0) {
      trainings.forEach(x => total += x.distanceInKm);
    }
    return '' + total;
  }

  onSelection(simpleTraining: SimpleTraining) {
    if (simpleTraining === this.selectedTraining) {
      this.selectedTraining = null;
      this.fullTraining$ = null;
    } else {
      this.selectedTraining = simpleTraining;
      console.log('call getTrainingById');
      this.fullTraining$ = this.service.getTrainingById(this.selectedTraining.id);
    }
  }

}
