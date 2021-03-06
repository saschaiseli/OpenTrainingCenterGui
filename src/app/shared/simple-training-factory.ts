import { SimpleTraining } from '../model/simple-training';

export class SimpleTrainingFactory {

  static fromObject(rawTraining: any): SimpleTraining {
    return new SimpleTraining(
      rawTraining.id,
      rawTraining.start,
      rawTraining.timeInSeconds,
      rawTraining.formatedDuration,
      rawTraining.distanceInKm,
      rawTraining.avgHeartBeat,
      rawTraining.maxHeartBeat,
      rawTraining.pace,
      rawTraining.trainingEffect,
      rawTraining.anaerobTrainingEffect,
      rawTraining.athleteId
    );
  }
}
