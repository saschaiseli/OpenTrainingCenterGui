import { TrainingTargetKind } from './training-target-kind';

export class TrainingTarget {

  constructor(public id: number,
    public begin: Date,
    public end: Date,
    public unit: string,
    public duration: string,
    public distanceOrHour: number,
    public active: boolean,
    public progress: number,
    public currentValue: number,
    public prediction: number
    ) {}

}
