import { TargetUnit } from './target-unit.enum';
export class TrainingTarget {

  constructor(public id: number,
    public targetBegin: Date,
    public amount: number,
    public unit: TargetUnit,
    public distance: number) {}
}
