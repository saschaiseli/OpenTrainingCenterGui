import { TargetUnit } from './../model/target-unit.enum';
export interface TrainingTargetRaw {
  id: number;
  targetBegin: Date;
  duration: string;
  amount: number;
  distance: number;
}
