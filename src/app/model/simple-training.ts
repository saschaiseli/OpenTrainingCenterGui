export class SimpleTraining {

  constructor(public id: number,
    public timeInSeconds: number,
    public distanceInMeter: number,
    public avgHeartBeat: number,
    public maxHeartBeat: number,
    public pace: string,
    public trainingEffect: string,
    public anaerobTrainingEffect: string,
    public athleteId: number) {}
}
