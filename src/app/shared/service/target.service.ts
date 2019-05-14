import { TrainingTargetRaw } from './../training-target-raw';
import { Injectable } from '@angular/core';
import { Config } from './../config';
import { HttpClient } from '@angular/common/http';
import { retry, map, catchError } from 'rxjs/operators';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { TrainingTarget } from 'src/app/model/training-target';
import { TrainingTargetFactory } from '../training-target-factory';
@Injectable({
  providedIn: 'root'
})
export class TargetService {

  constructor(private http: HttpClient) { }


  getAll(): Observable<Array<TrainingTarget>> {
    return this.http
    .get<TrainingTargetRaw[]>(`${Config.api}/targets`)
    .pipe(
      retry(3),
      map(rawTargets => rawTargets
        .map(rawTarget => TrainingTargetFactory.fromObject(rawTarget)),
      ),
      catchError(this.errorHandler)
    );
  }

  addTarget(trainingTarget: TrainingTarget) {
    return this.http.post(`${Config.api}/targets`, trainingTarget);
}

  private errorHandler(error: Error | any): Observable<any> {
    return observableThrowError(error);
  }
}
