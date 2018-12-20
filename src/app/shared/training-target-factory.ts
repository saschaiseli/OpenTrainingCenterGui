import { TrainingGoalunitFactory } from './training-goalunit-factory';
import { TrainingTarget } from './../model/training-target';
import { Training } from '../model/training';

export class TrainingTargetFactory {
  static fromObject(rawTarget: any): TrainingTarget {
    return new TrainingTarget(
      rawTarget.id,
      typeof (rawTarget.targetBegin) === 'string' ?
        new Date(rawTarget.targetBegin) : rawTarget.targetBegin,
      rawTarget.goalUnit,
      rawTarget.duration,
      rawTarget.distanceOrHours
    );
  }
}
