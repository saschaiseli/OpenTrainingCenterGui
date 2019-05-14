import { ChartFactory } from './../chart-factory';
import { ChartData } from './../../model/chart-data';
import { Config } from './../config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry, map, catchError } from 'rxjs/operators';
import { throwError as observableThrowError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainingChartService {

  constructor(private http: HttpClient) { }

/**
  getHeartChart(trainingId: number): Observable<ChartData> {
    console.log('voila, get the training chart');
    return this.http
      .get<ChartData>(`${Config.api}/charts/heart/${trainingId}`)
      .pipe(
        retry(3),
        map(rawData => ChartFactory.fromObject(rawData),
        ),
        catchError(this.errorHandler)
      );
  }
   */
  getHeartChart(trainingId: number): Observable<any[]> {
    return this.http
      .get<any[]>(`${Config.api}/charts/heart/${trainingId}`);
  }

  getAltitudeChart(trainingId: number): Observable<any[]> {
    return this.http
      .get<any[]>(`${Config.api}/charts/altitude/${trainingId}`);
  }

  private errorHandler(error: Error | any): Observable<any> {
    console.log('its haben wir den salat');
    return observableThrowError(error);
  }
}
