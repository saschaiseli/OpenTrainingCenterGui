import { TargetUnit } from './../model/target-unit.enum';
export interface TrainingTargetRaw {
  id: number;
  begin: string;
  end: string;
  unit: string;
  duration: string;
  distanceOrHour: number;
  isActive: boolean;
  progress: number;
  currentValue: number;
  prediction: number;
}
