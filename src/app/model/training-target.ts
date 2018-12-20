import { TrainingTargetKind } from './training-target-kind';

export class TrainingTarget {

  constructor(public id: number,
    public targetBegin: Date,
    public goalUnit: string,
    public duration: string,
    public distanceOrHours: number) {}
}
