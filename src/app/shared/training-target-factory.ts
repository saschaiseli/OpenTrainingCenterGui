import { TrainingTarget } from './../model/training-target';
import { Training } from '../model/training';

export class TrainingTargetFactory {
  static fromObject(rawTarget: any): TrainingTarget {
    return new TrainingTarget(
      rawTarget.id,
      rawTarget.targetBegin,
      rawTarget.amount,
      rawTarget.duration,
      rawTarget.distance
    );
  }
}
