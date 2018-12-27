import { TargetUnit } from './../model/target-unit.enum';
export interface TrainingTargetRaw {
  id: number;
  begin: Date;
  end: Date;
  unit: string;
  duration: string;
  distanceOrHour: number;
  isActive: boolean;
  progress: number;
  currentValue: number;
}
