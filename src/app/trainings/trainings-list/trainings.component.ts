import { ChartData } from './../../model/chart-data';
import { TrainingChartService } from 'src/app/shared/service/training-chart.service';
import { SimpleTrainingServiceService } from './../../shared/service/simple-training-service.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SimpleTraining } from 'src/app/model/simple-training';
import { Training } from 'src/app/model/training';
import { WeekOrMonth } from "../../model/WeekOrMonth";
import * as moment from 'moment';



@Component({
  selector: 'otc-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css']
})
export class TrainingsComponent implements OnInit {
  chartdata$: Observable<any[]>;
  altdata$: Observable<any[]>;
  trainings$: Observable<SimpleTraining[]>;
  fullTraining$: Observable<Training>;
  selectedTraining: SimpleTraining;
  model=new WeekOrMonth();
  trainingIndex=0;
  weekly='true';
  start:Date;
  end:Date;
  constructor(private service: SimpleTrainingServiceService, private chartService: TrainingChartService) { }

  ngOnInit() {
    this.calculateDateRange(this.weekly,this.trainingIndex);
    this.trainings$ = this.service.getAllByAthleteInRange(moment(this.start).format('DD-MM-YYYY'),moment(this.end).format('DD-MM-YYYY'));
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
      this.chartdata$ = null;
      this.altdata$ = null;
    } else {
      this.selectedTraining = simpleTraining;
      this.fullTraining$ = this.service.getTrainingById(this.selectedTraining.id);
      this.chartdata$ = this.chartService.getHeartChart(this.selectedTraining.id);
      this.altdata$ = this.chartService.getAltitudeChart(this.selectedTraining.id);
    }
  }

  back(){
    this.trainingIndex--;
    this.update();
  }

  now(){
    this.trainingIndex=0;
    this.update();
  }

  foreward(){
    this.trainingIndex++;
    this.update();
  }

  update(){
    this.calculateDateRange(this.weekly,this.trainingIndex)
   this.trainings$ = this.service.getAllByAthleteInRange(moment(this.start).format('DD-MM-YYYY'),moment(this.end).format('DD-MM-YYYY'));
  }

  calculateDateRange(weekly: String, trainingIndex: number) {
    if(weekly=="true"){
      this.start = moment().locale('de').add(trainingIndex,'w').startOf('week').toDate();
      this.end = moment().locale('de').add(trainingIndex,'w').endOf('week').toDate();
    }else{
      this.start = moment().locale('de').add(trainingIndex,'M').startOf('month').toDate();
      this.end = moment().locale('de').add(trainingIndex,'M').endOf('month').toDate();
    }
      }
}

