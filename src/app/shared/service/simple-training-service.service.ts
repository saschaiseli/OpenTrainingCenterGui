
import {throwError as observableThrowError,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SimpleTraining } from '../../model/simple-training';
import { SimpleTrainingRaw } from '../../shared/simple-training-raw';
import { SimpleTrainingFactory } from '../../shared/simple-training-factory';
import { retry, map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SimpleTrainingServiceService {

  private api = 'http://127.0.0.1:8282/trainingservice/api';

  constructor(private http: HttpClient) { }

  getAllByAthlete(athleteId: string): Observable<Array<SimpleTraining>> {
    return this.http
      .get<SimpleTrainingRaw[]>(`${this.api}/trainings/${athleteId}`)
      .pipe(
        retry(3),
        map(rawTrainings => rawTrainings
          .map(rawTraining => SimpleTrainingFactory.fromObject(rawTraining)),
        ),
        catchError(this.errorHandler)
      );
  }

  private errorHandler(error: Error | any): Observable<any> {
    return observableThrowError(error);
  }
}
