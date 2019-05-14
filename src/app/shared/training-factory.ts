import { LapFactory } from './lap-factory';
import { map } from 'rxjs/operators';
import { Training } from './../model/training';
import { TrackpointFactory } from './trackpoint-factory';
export class TrainingFactory {
  static fromObject(rawTraining: any): Training {
    return new Training(
      rawTraining.id,
      rawTraining.dateOfImport,
      rawTraining.fileName,
      rawTraining.geoQuality,
      rawTraining.note,
      rawTraining.upMeter,
      rawTraining.downMeter,
      rawTraining.geoJson,
      TrackpointFactory.fromObjects(rawTraining.trackPoints),
      LapFactory.fromObjects(rawTraining.laps)
    );
  }
}
