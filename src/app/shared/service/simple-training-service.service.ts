import { Training } from './../../model/training';
import { Config } from './../config';

import { throwError as observableThrowError, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SimpleTraining } from '../../model/simple-training';
import { SimpleTrainingRaw } from '../../shared/simple-training-raw';
import { SimpleTrainingFactory } from '../../shared/simple-training-factory';
import { retry, map, catchError } from 'rxjs/operators';
import { TrainingFactory } from '../training-factory';

@Injectable({
  providedIn: 'root'
})
export class SimpleTrainingServiceService {

  constructor(private http: HttpClient) { }

  getAllByAthlete(): Observable<Array<SimpleTraining>> {
    return this.http
      .get<SimpleTrainingRaw[]>(`${Config.api}/trainings`)
      .pipe(
        retry(3),
        map(rawTrainings => rawTrainings
          .map(rawTraining => SimpleTrainingFactory.fromObject(rawTraining)),
        ),
        catchError(this.errorHandler)
      );
  }

  getTrainingById(trainingId: number): Observable<Training> {
    return this.http
      .get<Training>(`${Config.api}/trainings/all/${trainingId}`)
      .pipe(retry(3),
        map(rawFullTraining => TrainingFactory.fromObject(rawFullTraining)), catchError(this.errorHandler)
      );
  }

  existsFileNameByAthlete( fileName: string): Observable<any> {
    return this.http
      .get<any>(`${Config.api}/trainings/${fileName}`);
  }

  private errorHandler(error: Error | any): Observable<any> {
    return observableThrowError(error);
  }
}
