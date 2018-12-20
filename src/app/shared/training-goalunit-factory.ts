import { TrainingTargetKind } from './../model/training-target-kind';
export class TrainingGoalunitFactory {
  static fromObject(rawTarget: any): TrainingTargetKind {
    if (rawTarget === '') {
      return new TrainingTargetKind(rawTarget, 'Distanz');
    }
    if (rawTarget === 'DISTANCE') {
      return new TrainingTargetKind(rawTarget, 'Distanz');
    }
    if (rawTarget === 'HOURS') {
      return new TrainingTargetKind(rawTarget, 'Stunde');
    }
  }
}
