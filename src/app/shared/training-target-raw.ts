import { TargetUnit } from './../model/target-unit.enum';
export interface TrainingTargetRaw {
  id: number;
  targetBegin: string;
  goalUnit: string;
  duration: string;
  distanceOrHours: number;
}
