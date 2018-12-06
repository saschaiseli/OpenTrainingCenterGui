import { map } from 'rxjs/operators';
import { Training } from './../model/training';
import { TrackpointFactory } from './trackpoint-factory';
export class TrainingFactory {
  static fromObject(rawTraining: any): Training {
    return new Training(
      rawTraining.id,
      rawTraining.timeInSeconds,
      rawTraining.distanceInKm,
      rawTraining.avgHeartBeat,
      rawTraining.maxHeartBeat,
      rawTraining.pace,
      rawTraining.trainingEffect,
      rawTraining.anaerobTrainingEffect,
      rawTraining.geoJson,
      TrackpointFactory.fromObjects(rawTraining.trackPoints),
      rawTraining.laps,
      rawTraining.athleteId
    );
  }
}
