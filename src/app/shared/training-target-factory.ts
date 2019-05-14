import { TrainingGoalunitFactory } from './training-goalunit-factory';
import { TrainingTarget } from './../model/training-target';
import { Training } from '../model/training';

export class TrainingTargetFactory {
  static fromObject(rawTarget: any): TrainingTarget {
    return new TrainingTarget(
      rawTarget.id,
      new Date(rawTarget.begin.year, rawTarget.begin.monthValue - 1, rawTarget.begin.dayOfMonth),
      // rawTarget.begin,
      new Date(rawTarget.end.year, rawTarget.end.monthValue - 1, rawTarget.end.dayOfMonth),
      // rawTarget.end,
      rawTarget.unit,
      rawTarget.duration,
      rawTarget.distanceOrHour,
      rawTarget.active,
      rawTarget.progress,
      rawTarget.currentValue,
      rawTarget.prediction
    );
  }

  static fromModal(begin: Date, selectedKind: string, selectedUnit: string, distanceOrHour: number): TrainingTarget {
    return new TrainingTarget(
      null,
      begin,
      null,
      selectedKind,
      selectedUnit,
      distanceOrHour,
      null,
      null,
      null,
      null
    );
  }
}
