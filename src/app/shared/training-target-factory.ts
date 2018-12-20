import { TrainingGoalunitFactory } from './training-goalunit-factory';
import { TrainingTarget } from './../model/training-target';
import { Training } from '../model/training';

export class TrainingTargetFactory {
  static fromObject(rawTarget: any): TrainingTarget {
    return new TrainingTarget(
      rawTarget.id,
      new Date(rawTarget.targetBegin.year, rawTarget.targetBegin.monthValue - 1, rawTarget.targetBegin.dayOfMonth),
      rawTarget.goalUnit,
      rawTarget.duration,
      rawTarget.distanceOrHours
    );
  }
}
